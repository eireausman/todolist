 
import { id } from 'date-fns/locale';
import storage from './localStorage.js';

export default function dataEvents() {
    
    const addListItemToDB = (listItem) => {
        
        console.log(`ID: ${listItem.ID} and title: ${listItem.title}`);
        localStorage.setItem(listItem.ID, JSON.stringify(listItem));
        
        

        
    }   

    
    const getListItemDetails = (requestType, itemID) => {
        let storageItemsArray = [];
        for (let i = 0; i <= localStorage.length; i++) {
            if ( localStorage.getItem(i) != null ) {
                storageItemsArray.push(JSON.parse(localStorage.getItem(i)))
            }
            // let listItemToDisplay = JSON.parse(Object.values(storedListItems).at(i));
        }
        

        if ( requestType == "getAll" ) {
            return storageItemsArray;
        } else if ( requestType == "get1Item" && itemID > 0 ) {
            let get1Item = storageItemsArray.filter(
                function(storageItemsArray){return storageItemsArray.ID == itemID}
            );
            if ( get1Item.length > 1 ) {
                return false;
            } else {
                return get1Item[0];
            }
           
        } else if ( requestType == "getListItemChildren") {
            let childList = storageItemsArray.filter(
                function(storageItemsArray){return storageItemsArray.parentList == itemID}
            );
            return childList;
        }
        
    }



    const createListObjectFromStorage = (storageID) => {
    // will be used to recreate object to work with after storage retrieval so that JS functions are available for object.
        const thisOne = JSON.parse(Object.values(localStorage).at(storageID));
        console.log(thisOne);
    }

    const findNextListID = () => {    
        const idArray = Object.keys(localStorage);
        let highestID = 1;
        if (idArray.length > 0) {
            highestID = idArray.reduce(function(a, b) {
                return Math.max(a, b);
            }, -Infinity) + 1;
        } else {
            // leaving this hear although already set.  It just helps understand the logic when coming back to it at a later date.
            highestID = 1;
        }
        console.log("HighestID=" + highestID);
        return highestID;
    }

    
    
    
    return { findNextListID, addListItemToDB, getListItemDetails, createListObjectFromStorage };
    
    }