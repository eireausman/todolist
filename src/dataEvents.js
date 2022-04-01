 
import { differenceInCalendarDays, formatDistanceToNow, intervalToDuration, parseISO } from 'date-fns';
import ListItemObj from './ListItemObj.js';

export default function dataEvents() {
    const listItemObject = ListItemObj();

    const addListItemToDB = (listItem) => {
        localStorage.setItem(listItem.ID, JSON.stringify(listItem));
    }   

    const deleteThisObjectFromDB = (listItem) => {
        localStorage.removeItem(listItem.ID);
    }

    const addStateSelected = (listItem) => {
        listItem.selected = true;
        addListItemToDB(listItem);
    }
    const removeStateSelected = (listItem) => {
        listItem.selected = false;
        addListItemToDB(listItem);
    }
    
    
    const getListItemDetails = (requestType, itemID) => {
        let storageItemsArray = [];
        const storageKeys = Object.keys(localStorage);
         for (let item in storageKeys ) {
            const itemToAdd = JSON.parse(localStorage.getItem(storageKeys[item]));
            if ( itemToAdd != null ) {
                storageItemsArray.push(itemToAdd);
            }
        }


        if ( requestType == "isParent" ) {
            const parentItems = storageItemsArray.filter(
                function(storageItemsArray){
                    return storageItemsArray.parentList == "parent";
                });
                return parentItems;
        } else if ( requestType == "get1Item" && itemID > -1 ) {
            const get1Item = storageItemsArray.find(storageItemsArray => storageItemsArray.ID == itemID);
                return get1Item;
        } else if ( requestType == "getListItemChildren" ) {
            const childList = storageItemsArray.filter(
                function(storageItemsArray){return storageItemsArray.parentList == itemID}
            );
            const childListSorted = childList.sort(function compareFn(a, b){
                let sortValue = 0;
                const today = new Date();
                let daysA = differenceInCalendarDays(parseISO(a.dueDate), today);
                let daysB = differenceInCalendarDays(parseISO(b.dueDate), today);


                if (isNaN(daysA)) {
                    sortValue += -100;
                }
                if (daysA > daysB) {
                    sortValue += -1;
                }
                if (daysA <  daysB) {
                    sortValue += 1;
                }
                return sortValue;
                
            }); 
            return childList;
        } else if ( requestType == "uncommitted") {
            const uncommitted = storageItemsArray.filter(
                function(storageItemsArray){return storageItemsArray.committed == false}
            );
            return uncommitted;
        }
    }

    

    const createListObjectFromStorage = (storedItem) => {
        const thisItem = listItemObject.newListItem(storedItem.ID, storedItem.title, storedItem.dueDate, 
            storedItem.importance, storedItem.pinned, storedItem.parentList, storedItem.selected, storedItem.committed, storedItem.completed);
        return thisItem;
    }

    const findNextListID = () => {    
        const idArray = Object.keys(localStorage);
        let nextID = 0;
        if (idArray.length > 0) {
            nextID = idArray.reduce(function(a, b) {
                return Math.max(a, b);
            }, -Infinity) + 1;
        }
        return nextID;
    }

    const daysUntilDue = (listItem) => {
        const dueDate = parseISO(listItem.dueDate);
        let days = {};
        if (listItem.dueDate == "" ) {
            days.daysUntilDue = '0';
            days.daysUntilDueWords = `Set a due date...`;
        }
        if (listItem.dueDate != "" ) {
            const difference = differenceInCalendarDays(dueDate, new Date())
                if ( difference < 0 ) {
                    days.daysUntilDue = '-1';
                    days.daysUntilDueWords = `Due ${formatDistanceToNow(dueDate, { addSuffix: true })}`;
                    
                } else {
                    days.daysUntilDue = difference;
                    days.daysUntilDueWords = `Due ${formatDistanceToNow(dueDate, { addSuffix: true })}`;
                }
        }
        return days;
         
    }

       
    

    
    return { findNextListID, addListItemToDB, getListItemDetails, createListObjectFromStorage, addStateSelected, removeStateSelected, daysUntilDue, deleteThisObjectFromDB };
    
    }