import ListItemObj from './ListItemObj.js';
import dataEvents from "./dataEvents.js";
import formModal from "./formModal.js";

import ListImg from './z_img/list-48.png';


export default function DomEvents() {  

    const dataEventsObj = dataEvents();
    const listItemObject = ListItemObj();
    const formModalObject = formModal();

const initialSetUp = () => {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content")
    const theBody = document.querySelector("body");
    theBody.appendChild(contentDiv);
    
    
    
    const mainContainerDiv = document.createElement("section");
    mainContainerDiv.classList.add("mainContainerDiv");
    contentDiv.appendChild(mainContainerDiv);

    const leftMenuNav = document.createElement("nav");
    leftMenuNav.classList.add("leftMenu");
    mainContainerDiv.appendChild(leftMenuNav);

    const navAddNewItem = document.createElement("button");
    navAddNewItem.textContent = "Add New ++";
    navAddNewItem.classList.add("navAddNewItem");
    leftMenuNav.appendChild(navAddNewItem);
    
    const burgerFlyOutImgEle = new Image();
    burgerFlyOutImgEle.classList.add("burgerFlyOut");
    burgerFlyOutImgEle.alt = "Show Menu";
    burgerFlyOutImgEle.src = ListImg;
    leftMenuNav.appendChild(burgerFlyOutImgEle);
    
    const leftMenuProjectItemList = document.createElement("nav");
    leftMenuProjectItemList.classList.add("leftMenuProjectItemList");
    leftMenuNav.appendChild(leftMenuProjectItemList);

    
    
    const mainPageListContainer = document.createElement("div");
    mainPageListContainer.classList.add("mainPageListContainer");
    mainContainerDiv.appendChild(mainPageListContainer);

    const mainPageListContentNavBar = document.createElement("div");
    mainPageListContentNavBar.classList.add("mainPageListContentNavBar");
    mainPageListContainer.appendChild(mainPageListContentNavBar);

    const updateHasSavedMessage = document.createElement("div");
    updateHasSavedMessage.classList.add("updateHasSavedMessage");
    updateHasSavedMessage.textContent = "Saved";
    mainPageListContentNavBar.appendChild(updateHasSavedMessage);

    const mainPageListContent = document.createElement("div");
    mainPageListContent.classList.add("mainPageListContent");
    mainPageListContainer.appendChild(mainPageListContent);

    // check here to populate list with initial values
    const LeftMenuListItems = dataEventsObj.getListItemDetails("isParent", null);
    for (let i = 0; i < LeftMenuListItems.length; i++) {
        const thisItem = dataEventsObj.createListObjectFromStorage(LeftMenuListItems[i]);
        const leftMenuProjectItem = addListItemToMenu(thisItem, true);
        showLeftMenuSelected(leftMenuProjectItem, thisItem, true);
        if (thisItem.selected == true) {
            thisItem.displayChildList();
        }
    }

    formModalObject.createForm();
}

const displayListItemChildren = (listItem) => {
    const listMenuChildren = dataEventsObj.getListItemDetails("getListItemChildren", listItem.ID);
    const mainPageListContent = document.querySelector(".mainPageListContent");
    // remove the current content
    while (mainPageListContent.firstChild) {
        mainPageListContent.removeChild(mainPageListContent.firstChild);
    }


    const previousHeading = document.querySelector(".listTitle");
    if ( previousHeading != null ) {
        previousHeading.remove();
    }

    const mainPageListContentNavBar = document.querySelector(".mainPageListContentNavBar");
    const parentTitle = listItem.title;
    const pageTitle = document.createElement("h2");
    pageTitle.classList.add("listTitle");
    pageTitle.textContent = parentTitle;
    mainPageListContentNavBar.appendChild(pageTitle);
    

    // if this is the selected menu, show the children and create an empty one as a new item:
    if (listItem.selected == true ) {
        for (let item in listMenuChildren) {
            const childListItemObject = dataEventsObj.createListObjectFromStorage(listMenuChildren[item]);
            createMainPageListingForm(childListItemObject);
    }
    const previousButton = document.querySelector(".buttonAddAnotherMainPageListItem");
    if ( previousButton != null ) {
        previousButton.remove();
    }
    
    const buttonAddAnotherListItem = document.createElement("button");
    buttonAddAnotherListItem.classList.add("buttonAddAnotherMainPageListItem");
    buttonAddAnotherListItem.textContent = "+ Add item";
    mainPageListContentNavBar.appendChild(buttonAddAnotherListItem);
    buttonAddAnotherListItem.addEventListener("click", function(e) {
        createEmptyListItem(listItem.ID);
        });
    }
}
const createEmptyListItem = (parentID) => {
    const additionalListItem = listItemObject.newListItem(
    NaN, 
    "", 
    "", 
    1, 
    false, 
    parentID, 
    false,
    false);

    console.log(additionalListItem);

    additionalListItem.addItemtoDB();
    const newEmptyItemForm = createMainPageListingForm(additionalListItem);
    newEmptyItemForm.querySelector('textarea').focus();
    console.log(newEmptyItemForm.closest('.mainPageListItemCard'));
    // markMainPageListingCardAsSelected(newEmptyItemForm.closest('.mainPageListItemCard'));

    }

const createMainPageListingForm = (listItem) => {
    const mainPageListContent = document.querySelector(".mainPageListContent");
    
    const mainPageListItemCard = document.createElement("div");
    mainPageListItemCard.classList.add("mainPageListItemCard");
    mainPageListContent.insertBefore(mainPageListItemCard, mainPageListContent.firstChild)

    let listItemForm = document.createElement("form");
    listItemForm.classList.add("mainPageListItemForm");
    listItemForm.setAttribute("data-parentList", listItem.parentList);
    listItemForm.setAttribute("data-itemid", listItem.ID);
    listItemForm.setAttribute("method", "post");
    listItemForm.setAttribute("action", "#");
    
    mainPageListItemCard.appendChild(listItemForm);
    
    
    listItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        });

    let inputCheckbox = document.createElement("input");
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.classList.add("listFormComponent");
    inputCheckbox.classList.add("listFormMarkComplete");
    listItemForm.appendChild(inputCheckbox);
    inputCheckbox.addEventListener("click", function (e) {
        console.log(e.target);
    });

    let inputTitle = document.createElement("textarea");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "List Item Title");
    inputTitle.classList.add("listFormComponent");
    inputTitle.classList.add("listFormTitleText");
    // inputTitle.setAttribute("value", listItem.title);
    inputTitle.textContent = " (" + listItem.ID + ")" + listItem.title;
    listItemForm.appendChild(inputTitle);
     
    let formDisplayDueDate = document.createElement("p");
        const dueDate = listItem.daysLeftToDue();
        formDisplayDueDate.textContent = `${dueDate.daysUntilDueWords}`;
    

    formDisplayDueDate.classList.add("listFormComponent");
    formDisplayDueDate.classList.add("formDisplayDueDate");
    mainPageListItemCard.appendChild(formDisplayDueDate);

    let formDisplayImportance = document.createElement("p");
    formDisplayImportance.textContent = listItem.importance;
    formDisplayImportance.classList.add("listFormComponent");
    formDisplayImportance.classList.add("formDisplayImportance");
    mainPageListItemCard.appendChild(formDisplayImportance);

    let formDisplayPinned = document.createElement("p");
    formDisplayPinned.textContent = listItem.pinned;
    formDisplayPinned.classList.add("listFormComponent");
    formDisplayPinned.classList.add("formDisplayPinned");
    mainPageListItemCard.appendChild(formDisplayPinned);   


    let formDeleteThisItem = document.createElement("p");
    formDeleteThisItem.textContent = listItem.pinned;
    formDeleteThisItem.textContent = "| Delete This |";
    formDeleteThisItem.classList.add("listFormComponent");
    formDeleteThisItem.classList.add("formDisplayDeleteItem");
    mainPageListItemCard.appendChild(formDeleteThisItem);   

    inputTitle.addEventListener("input", function (e) {
       
        // write any changes made directly to storage
        listItem.title = e.target.value;
        listItem.committed = true;
        listItem.addItemtoDB(listItem);
        // not validated as complete but no two-way comms here.  It should really have a test:
        const itemSavedMessage = document.querySelector(".updateHasSavedMessage");
        itemSavedMessage.classList.add("updateHasSavedMessageShow");
        itemSavedMessage.addEventListener('transitionend', function (e) {
            itemSavedMessage.classList.remove("updateHasSavedMessageShow");
        });
    });
    mainPageListItemCard.addEventListener("click", function (e) { 
        if ( e.target.classList.contains("formDisplayDeleteItem")) {
            return;
        }
        markMainPageListingCardAsSelected(e.target.closest('.mainPageListItemCard'));
    });

    formDeleteThisItem.addEventListener("click", function (e) {    
        const deleteParent = e.target.closest(`.mainPageListItemCard`);
        if (confirm(`are you sure you want to delete`) == true ) {
            
            
            deleteParent.remove();
            listItem.deleteFromDB();
        }    
    });

    mainPageListItemCard.addEventListener("mouseenter", (e) => {
        e.target.classList.add("mainPageListItemCardMouseInside");
    });

    mainPageListItemCard.addEventListener("mouseleave", (e) => {
        e.target.classList.remove("mainPageListItemCardMouseInside");
    });

    formDisplayDueDate.addEventListener("click", function (e) {
        console.log(listItem);
        // formModalObject.createForm(listItem, `date`, formDisplayDueDate.closest('.mainPageListItemCard'));
        formModalObject.updateInputValues(listItem);
        formModalObject.showForm(listItem);
      });
    formDisplayImportance.addEventListener("click", function (e) {
      console.log(e.target)
    });         
    formDisplayPinned.addEventListener("click", function (e) {
        formModalObject.createForm(listItem);
      });

      if ( listItem.selected == true ) {
        markMainPageListingCardAsSelected(mainPageListItemCard);
        }
return listItemForm;
  
}

const markMainPageListingCardAsSelected = (mainPageListItemCard) => {
// remove previous selections
    const activeClassesToRemove = document.querySelectorAll(".mainPageListItemCardActive");
    activeClassesToRemove.forEach(e => {
        // remove the DOM class
        e.classList.remove("mainPageListItemCardActive")
        // find the storage ID and remove the Selected state
        const dataItemID = e.querySelector(".mainPageListItemForm").dataset.itemid;
        console.log(dataItemID);
         const storageItem = dataEventsObj.getListItemDetails("get1Item", dataItemID);
         const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
         thisItem.selected = false;
         thisItem.addItemtoDB();
    });
  // set the row to active state so it's clear which is being edited
        const dataItemID = mainPageListItemCard.querySelector(".mainPageListItemForm").dataset.itemid;
        const storageItem = dataEventsObj.getListItemDetails("get1Item", dataItemID);
        console.log(storageItem);
        const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
        thisItem.selected = true;
        thisItem.addItemtoDB();
      mainPageListItemCard.classList.add("mainPageListItemCardActive");
}






const addListItemToMenu = (thisItem) => {
    const leftMenuProjectItemList = document.querySelector(".leftMenuProjectItemList");
    
    const leftMenuProjectItem = document.createElement('button');
    leftMenuProjectItem.classList.add("leftMenuProjectItem");
    leftMenuProjectItem.setAttribute('data-listitemid', thisItem.ID);
    
    leftMenuProjectItemList.insertBefore(leftMenuProjectItem, leftMenuProjectItemList.firstChild)
    // leftMenuProjectItemList.appendChild(leftMenuProjectItem);

    const ListImgEle = new Image();
    ListImgEle.classList.add("ListImgEle");
    ListImgEle.alt = "list icon";
    ListImgEle.src = ListImg;
    ListImgEle.setAttribute('data-listitemid', thisItem.ID);
    leftMenuProjectItem.appendChild(ListImgEle);
    
    const leftMenuItemTitle = document.createElement("p");
    leftMenuItemTitle.classList.add("leftMenuProjectItemText");
    leftMenuItemTitle.textContent = thisItem.title + " (" + thisItem.ID + ")";
    leftMenuItemTitle.setAttribute('data-listitemid', thisItem.ID);
    leftMenuProjectItem.appendChild(leftMenuItemTitle);

    leftMenuProjectItem.addEventListener("click", function (e) {
        leftMenuEventListeners(e.target);
    });
    return leftMenuProjectItem;

}

const showLeftMenuSelected = (leftMenuProjectItem, thisItem, initialLoad) => {
    const removePreviousSelection = document.querySelectorAll('.leftMenuItemShowAsSelected');
        
        if ( removePreviousSelection != null && initialLoad == false) {
            for (let i = 0; i < removePreviousSelection.length; i++ ) {
            const storageItem = dataEventsObj.getListItemDetails("get1Item", removePreviousSelection[i].dataset.listitemid);
            const removeSelectedFromThis = dataEventsObj.createListObjectFromStorage(storageItem);
            removeSelectedFromThis.selectedStateRemove();
            removePreviousSelection[i].classList.remove("leftMenuItemShowAsSelected");
            }
        }
    const parentButton = leftMenuProjectItem.closest('button');
    if ( thisItem.selected == true ) {
        parentButton.classList.add("leftMenuItemShowAsSelected");
    }
}

const leftMenuEventListeners = (clickedElement) => {
        
    const storageItem = dataEventsObj.getListItemDetails("get1Item", clickedElement.dataset.listitemid);

    const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
        if (thisItem.selected == true) {
            return;
        } else {
            thisItem.selectedStateAdd();
            showLeftMenuSelected(clickedElement, thisItem, false);
            thisItem.displayChildList();
        }

        deleteUncommittedEntries();
    // const deleteUncommittedEntries = dataEventsObj.getListItemDetails("uncommitted");
    //     for (let i = 0; i < deleteUncommittedEntries.length; i++ ) {
    //         const UncommittedEntry = dataEventsObj.createListObjectFromStorage(deleteUncommittedEntries[i]);
    //         UncommittedEntry.deleteFromDB();
    //     }
}

const deleteUncommittedEntries = () => {
        const deleteUncommittedEntries = dataEventsObj.getListItemDetails("uncommitted");
    for (let i = 0; i < deleteUncommittedEntries.length; i++ ) {
        const UncommittedEntry = dataEventsObj.createListObjectFromStorage(deleteUncommittedEntries[i]);
        UncommittedEntry.deleteFromDB();
    }
}

const toggleLeftMenuShow = () => {
    const leftMenu = document.querySelector(".leftMenu");
    leftMenu.classList.toggle("leftMenuFlyOut");
    const leftMenuProjectItemList = document.querySelector(`.leftMenuProjectItemList`);
    leftMenuProjectItemList.classList.toggle(`leftMenuProjectItemListShow`);
}

const initialEventListeners = () => {


    const leftMenu = document.querySelector(".leftMenu");
    console.log(leftMenu);
    leftMenu.addEventListener("mouseenter", toggleLeftMenuShow); 
    leftMenu.addEventListener("mouseleave", toggleLeftMenuShow); 
    
    // left mene click actions
    const allLeftMenuItems = document.querySelectorAll('.leftMenuProjectItem');
    allLeftMenuItems.forEach(e => e.addEventListener("click", function (e) {
        leftMenuEventListeners(e.target);
      }));

    // new list button actions
    const navAddNewItem = document.querySelector(".navAddNewItem");
    navAddNewItem.addEventListener("click", function(e) {
        // remove all empty DB entries so the next availableID is correct
        deleteUncommittedEntries();
        const newTitle = prompt("what is the title?");
        // REQUIRES VALIDATION && MODAL
        const newListItem = listItemObject.newListItem(
            NaN, 
            newTitle, 
            "", 
            1, 
            false, 
            'parent', 
            true, 
            true);
            
        console.table(newListItem);
        newListItem.addItemtoDB(newListItem);
        const leftMenuProjectItem = addListItemToMenu(newListItem);
        showLeftMenuSelected(leftMenuProjectItem, newListItem, false);
        newListItem.displayChildList();
    });
}


    return { initialSetUp, initialEventListeners, addListItemToMenu, displayListItemChildren };
}


// newGameGridCell.addEventListener('mouseenter', function(e) {
//     e.target.classList.add('gameGridCellMouseAnim');
// });