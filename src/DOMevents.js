import ListItemObj from './ListItemObj.js';
import dataEvents from "./dataEvents.js";
import taskFormModal from "./taskFormModal.js";
import listFormModal from "./listFormModal.js";

import ListImg from './z_img/listKart.png';
import MenuImg from './z_img/menu.png';
import FaceSweatImg from './z_img/overdueFaceSweat.png';
import NewLambImg from './z_img/newLamb.png';
import AWeekAwayImg from './z_img/1weekCalendar.png';
import OverAWeekAwayImg from './z_img/over1WeekTimeMachine.png';
import NoDueDateImg from './z_img/noDueDateThinking.png';
import CompletedImg from './z_img/completeLanded.png';

import PencilImg from './z_img/pencil.png';
import TrashImg from './z_img/trash.png';
import CheckBoxImg from './z_img/checkbox.png';
import CheckBoxUncheckedImg from './z_img/uncheckedbox.png';


export default function DomEvents() {  

    const dataEventsObj = dataEvents();
    const listItemObject = ListItemObj();
    const taskFormModalObject = taskFormModal();
    const listFormModalObject = listFormModal();

const initialSetUp = () => {

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content")
    const theBody = document.querySelector("body");
    theBody.appendChild(contentDiv);  
    
    const mainContainerDiv = document.createElement("section");
    mainContainerDiv.classList.add("mainContainerDiv");
    contentDiv.appendChild(mainContainerDiv);

    const leftMenuNav = document.createElement("div");
    leftMenuNav.classList.add("leftMenu");
    mainContainerDiv.appendChild(leftMenuNav);
    
    const burgerFlyOutButton = document.createElement(`button`);
    burgerFlyOutButton.classList.add("burgerFlyOutButton");
    leftMenuNav.appendChild(burgerFlyOutButton);

    const burgerFlyOutImgEle = new Image();
    burgerFlyOutImgEle.classList.add("burgerFlyOut");
    burgerFlyOutImgEle.alt = "Show Menu";
    burgerFlyOutImgEle.src = MenuImg;
    burgerFlyOutButton.appendChild(burgerFlyOutImgEle);
    burgerFlyOutButton.addEventListener(`click`, (e) => {
        toggleLeftMenuShow(`flyOut`);
    });

    const leftMenuProjectItemList = document.createElement("nav");
    leftMenuProjectItemList.classList.add("leftMenuProjectItemList");
    leftMenuNav.appendChild(leftMenuProjectItemList);
   
    const mainPageListContainer = document.createElement("div");
    mainPageListContainer.classList.add("mainPageListContainer");
    mainContainerDiv.appendChild(mainPageListContainer);

    const mainPageListContentNavBar = document.createElement("nav");
    mainPageListContentNavBar.classList.add("mainPageListContentNavBar");
    mainPageListContainer.appendChild(mainPageListContentNavBar);

    const mainPageListContent = document.createElement("section");
    mainPageListContent.classList.add("mainPageListContent");
    mainPageListContainer.appendChild(mainPageListContent);
    
    addTimeBasedBreakPoints();


    const navAddNewItem = document.createElement("button");
    navAddNewItem.textContent = "New List ++";
    navAddNewItem.classList.add("navAddNewItem");
    leftMenuProjectItemList.insertBefore(navAddNewItem, leftMenuProjectItemList.firstChild);
    
    if (localStorage.length == 0 ) {
        addDefaultToDoList();
    }
    
    const LeftMenuListItems = dataEventsObj.getListItemDetails("isParent", null);
    for (let i = 0; i < LeftMenuListItems.length; i++) {
        const thisItem = dataEventsObj.createListObjectFromStorage(LeftMenuListItems[i]);
        const leftMenuProjectItem = addListItemToMenu(thisItem, true);
        showLeftMenuSelected(leftMenuProjectItem, thisItem, true);
        if (thisItem.selected == true) {
            thisItem.displayChildList();
        }
    }


    taskFormModalObject.createForm();
    listFormModalObject.createForm();

}

function addDefaultToDoList() {
    const newListItem = listItemObject.newListItem(
        NaN, 
        "To Do List", 
        "", 
        1, 
        false, 
        'parent', 
        true, 
        true,
        false);

    newListItem.addItemtoDB();
}

const repositionNewListButton = (e) => {
    const newListButton = document.querySelector(`.navAddNewItem`); 
    const leftMenu = document.querySelector(`.leftMenuProjectItemList`);
    leftMenu.insertBefore(newListButton, leftMenu.firstChild);
}

const addTimeBasedBreakPoints = () => {

    const mainPageListContent = document.querySelector(`.mainPageListContent`);

    const mainPageListContentNewItem = document.createElement("div");
    mainPageListContentNewItem.classList.add("contentBreakPoint");
    mainPageListContentNewItem.classList.add("mainPageListContentNewItem");
    mainPageListContent.appendChild(mainPageListContentNewItem);

    const mainPageListContentNewItemHeadingContainer = document.createElement(`div`);
    mainPageListContentNewItemHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentNewItem.appendChild(mainPageListContentNewItemHeadingContainer);

    const mainPageListContentNewItemImg = new Image();
    mainPageListContentNewItemImg.classList.add(`contentBreakPointImg`);
    mainPageListContentNewItemImg.alt = "New";
    mainPageListContentNewItemImg.src = NewLambImg;
    mainPageListContentNewItemHeadingContainer.appendChild(mainPageListContentNewItemImg);
    
    const mainPageListContentNewItemHeadingText = document.createElement(`h2`);
    mainPageListContentNewItemHeadingText.textContent = "New";
    mainPageListContentNewItemHeadingText.classList.add(`breakPointHeadingText`);
    mainPageListContentNewItemHeadingContainer.appendChild(mainPageListContentNewItemHeadingText);

    const mainPageListContentOverdue = document.createElement("div");
    mainPageListContentOverdue.classList.add("contentBreakPoint");
    mainPageListContentOverdue.classList.add("mainPageListContentOverdue");
    mainPageListContent.appendChild(mainPageListContentOverdue);

    const mainPageListContentOverdueItemHeadingContainer = document.createElement(`div`);
    mainPageListContentOverdueItemHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentOverdue.appendChild(mainPageListContentOverdueItemHeadingContainer);

    const mainPageListContentOverdueImg = new Image();
    mainPageListContentOverdueImg.classList.add(`contentBreakPointImg`);
    mainPageListContentOverdueImg.alt = "Overdue";
    mainPageListContentOverdueImg.src = FaceSweatImg;
    mainPageListContentOverdueItemHeadingContainer.appendChild(mainPageListContentOverdueImg);
  
    const mainPageListContentOverdueHeading = document.createElement(`h2`);
    mainPageListContentOverdueHeading.textContent = "Overdue";
    mainPageListContentOverdueHeading.classList.add(`breakPointHeading`);
    mainPageListContentOverdueItemHeadingContainer.appendChild(mainPageListContentOverdueHeading);

    const mainPageListContentNextWeek = document.createElement("div");
    mainPageListContentNextWeek.classList.add("contentBreakPoint");
    mainPageListContentNextWeek.classList.add("mainPageListContentNextWeek");
    mainPageListContent.appendChild(mainPageListContentNextWeek);

    const mainPageListContentNextWeekHeadingContainer = document.createElement(`div`);
    mainPageListContentNextWeekHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentNextWeek.appendChild(mainPageListContentNextWeekHeadingContainer);

    const mainPageListContentNextWeekImg = new Image();
    mainPageListContentNextWeekImg.classList.add(`contentBreakPointImg`);
    mainPageListContentNextWeekImg.alt = "Due this week";
    mainPageListContentNextWeekImg.src = AWeekAwayImg;
    mainPageListContentNextWeekHeadingContainer.appendChild(mainPageListContentNextWeekImg);

    const mainPageListContentNextWeekHeading = document.createElement(`h2`);
    mainPageListContentNextWeekHeading.textContent = "In the next week";
    mainPageListContentNextWeekHeading.classList.add(`breakPointHeading`);
    mainPageListContentNextWeekHeadingContainer.appendChild(mainPageListContentNextWeekHeading);

    
    const mainPageListContentAfterNextWeek = document.createElement("div");
    mainPageListContentAfterNextWeek.classList.add("contentBreakPoint");
    mainPageListContentAfterNextWeek.classList.add("mainPageListContentAfterNextWeek");
    mainPageListContent.appendChild(mainPageListContentAfterNextWeek);

    const mainPageListContentAfterNextWeekHeadingContainer = document.createElement(`div`);
    mainPageListContentAfterNextWeekHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentAfterNextWeek.appendChild(mainPageListContentAfterNextWeekHeadingContainer);

    const mainPageListContentAfterNextWeekImg = new Image();
    mainPageListContentAfterNextWeekImg.classList.add(`contentBreakPointImg`);
    mainPageListContentAfterNextWeekImg.alt = "Due over a week away";
    mainPageListContentAfterNextWeekImg.src = OverAWeekAwayImg;
    mainPageListContentAfterNextWeekHeadingContainer.appendChild(mainPageListContentAfterNextWeekImg);

    const mainPageListContentAfterNextWeekHeading = document.createElement(`h2`);
    mainPageListContentAfterNextWeekHeading.textContent = "More than a week away";
    mainPageListContentAfterNextWeekHeading.classList.add(`breakPointHeading`);
    mainPageListContentAfterNextWeekHeadingContainer.appendChild(mainPageListContentAfterNextWeekHeading);

    const mainPageListContentNoDateSet = document.createElement("div");
    mainPageListContentNoDateSet.classList.add("contentBreakPoint");
    mainPageListContentNoDateSet.classList.add("mainPageListContentNoDateSet");
    mainPageListContent.appendChild(mainPageListContentNoDateSet);

    const mainPageListContentNoDateSetHeadingContainer = document.createElement(`div`);
    mainPageListContentNoDateSetHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentNoDateSet.appendChild(mainPageListContentNoDateSetHeadingContainer);

    const mainPageListContentNoDateSetImg = new Image();
    mainPageListContentNoDateSetImg.classList.add(`contentBreakPointImg`);
    mainPageListContentNoDateSetImg.alt = "Due over a week away";
    mainPageListContentNoDateSetImg.src = NoDueDateImg;
    mainPageListContentNoDateSetHeadingContainer.appendChild(mainPageListContentNoDateSetImg);

    const mainPageListContentNoDateSetHeading = document.createElement(`h2`);
    mainPageListContentNoDateSetHeading.textContent = "No due date";
    mainPageListContentNoDateSetHeading.classList.add(`breakPointHeading`);
    mainPageListContentNoDateSetHeadingContainer.appendChild(mainPageListContentNoDateSetHeading);

    const mainPageListContentComplete = document.createElement("div");
    mainPageListContentComplete.classList.add("contentBreakPoint");
    mainPageListContentComplete.classList.add("mainPageListContentComplete");
    mainPageListContent.appendChild(mainPageListContentComplete);




    const mainPageListContentCompleteHeadingContainer = document.createElement(`div`);
    mainPageListContentCompleteHeadingContainer.classList.add(`breakPointHeading`);
    mainPageListContentComplete.appendChild(mainPageListContentCompleteHeadingContainer);

    const mainPageListContentCompleteImg = new Image();
    mainPageListContentCompleteImg.classList.add(`contentBreakPointImg`);
    mainPageListContentCompleteImg.alt = "Due over a week away";
    mainPageListContentCompleteImg.src = CompletedImg;
    mainPageListContentCompleteHeadingContainer.appendChild(mainPageListContentCompleteImg);

    const mainPageListContentCompleteHeading = document.createElement(`h2`);
    mainPageListContentCompleteHeading.textContent = "Completed";
    mainPageListContentCompleteHeading.classList.add(`breakPointHeading`);
    mainPageListContentCompleteHeadingContainer.appendChild(mainPageListContentCompleteHeading);
}

const displayListItemChildren = (listItem) => {
    const listMenuChildren = dataEventsObj.getListItemDetails("getListItemChildren", listItem.ID);
    const mainPageListContent = document.querySelector(".mainPageListContent");
    // remove the current content before populating
    while (mainPageListContent.firstChild) {
        mainPageListContent.removeChild(mainPageListContent.firstChild);
    }
    
    addTimeBasedBreakPoints();

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
    

    // if this is the selected menu, show the children
    if (listItem.selected == true ) {
        if (listMenuChildren.length > 0 ) {
            for (let item in listMenuChildren) {
                const childListItemObject = dataEventsObj.createListObjectFromStorage(listMenuChildren[item]);
                createMainPageListingForm(childListItemObject);
            }   
        // if there are no children to display, create a new one ready for editing:
        } else {
                createEmptyListItem(listItem.ID);
        }
    const previousButton = document.querySelector(".buttonAddAnotherMainPageListItem");
    if ( previousButton != null ) {
        previousButton.remove();
    }
    
    const buttonAddAnotherListItem = document.createElement("button");
    buttonAddAnotherListItem.classList.add("buttonAddAnotherMainPageListItem");
    buttonAddAnotherListItem.textContent = "+ Add Task";
    buttonAddAnotherListItem.alt = "Add a task to this list";
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
    false,
    false);

    additionalListItem.addItemtoDB();

    const newEmptyItemForm = createMainPageListingForm(additionalListItem);
    newEmptyItemForm.querySelector('input').focus();

    }

const showBreakPointClass = (e) => {
    if (!e.classList.contains(`contentBreakPointShow`)) {
        e.classList.add(`contentBreakPointShow`);
    }
}

const refreshBreakPointHeading = (e) => {
    // After a card is created, it is appended to the breakpoint section as the first child.  
    // Therefore,  after creation, we need to move the header back to the top of the section.
      const moveThisHeader = e.querySelector(`.breakPointHeading`);
      e.insertBefore(moveThisHeader, e.firstChild);
}

const createMainPageListingForm = (listItem) => {

    const dueDate = listItem.daysLeftToDue();
    let appendToThis = document.querySelector(".mainPageListContent");
    
    if ( listItem.completed == true ) {
        appendToThis = document.querySelector(`.mainPageListContentComplete`);
        showBreakPointClass(appendToThis);
    } else if ( listItem.committed == false ) {
        appendToThis = document.querySelector(`.mainPageListContentNewItem`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue < 0 ) {
        appendToThis = document.querySelector(`.mainPageListContentOverdue`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue > 0 && dueDate.daysUntilDue <= 7 ) {
        appendToThis = document.querySelector(`.mainPageListContentNextWeek`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue > 7) {
        appendToThis = document.querySelector(`.mainPageListContentAfterNextWeek`);
        showBreakPointClass(appendToThis);
    } else if ( dueDate.daysUntilDue == 0) {
        appendToThis = document.querySelector(`.mainPageListContentNoDateSet`);
        showBreakPointClass(appendToThis);
    }
   
    const mainPageListItemCard = document.createElement("div");
    mainPageListItemCard.classList.add("mainPageListItemCard");
    appendToThis.insertBefore(mainPageListItemCard, appendToThis.firstChild)

    refreshBreakPointHeading(appendToThis);

    const mainPageListItemContentLeft = document.createElement("div");
    mainPageListItemContentLeft.classList.add("mainPageListItemContentLeft");
    mainPageListItemCard.appendChild(mainPageListItemContentLeft);

    let listItemForm = document.createElement("form");
    listItemForm.classList.add("mainPageListItemForm");
    listItemForm.setAttribute("data-parentList", listItem.parentList);
    listItemForm.setAttribute("data-itemid", listItem.ID);
    listItemForm.setAttribute("method", "post");
    listItemForm.setAttribute("action", "#");
    
    mainPageListItemContentLeft.appendChild(listItemForm);
    
    
    listItemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        });

 
    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "List Item Title");
    inputTitle.classList.add("listFormTitleText");

     if ( listItem.title == "" ) {
        // inputTitle.placeholder = `${listItem.ID} - Task Title `;
        inputTitle.placeholder = `Task Title `;
    } else {
        // inputTitle.value =  `${listItem.ID} - ` + listItem.title;
        inputTitle.value =  listItem.title;
    }
    
    listItemForm.appendChild(inputTitle);
     
    let formDisplayDueDate = document.createElement("button");
    formDisplayDueDate.textContent = `${dueDate.daysUntilDueWords}`;
    formDisplayDueDate.classList.add("formDisplayDueDate");
    mainPageListItemContentLeft.appendChild(formDisplayDueDate);
    if ( listItem.title.length > 0 ) {
        formDisplayDueDate.classList.add("formDisplayDueDateShow");
        if ( listItem.completed == true ) {
            formDisplayDueDate.classList.add("formDisplayDueDateCompleted");
        }
    }
    


    const mainPageListItemContentRight = document.createElement("div");
    mainPageListItemContentRight.classList.add("mainPageListItemContentRight");
    mainPageListItemCard.appendChild(mainPageListItemContentRight);

    const checkBoxImgButton = document.createElement(`button`);
    checkBoxImgButton.classList.add(`checkBoxImgButton`);
    checkBoxImgButton.classList.add("listFormActionButton");
    mainPageListItemContentRight.appendChild(checkBoxImgButton);

    
    const checkBoxImgEle = new Image();
    if ( listItem.completed == true ) {
        checkBoxImgEle.src = CheckBoxImg;
    } else {
        checkBoxImgEle.src = CheckBoxUncheckedImg;
    }
    checkBoxImgEle.classList.add(`checkBoxImgEle`);
    checkBoxImgEle.alt = "Checkbox: Mark this entry as complete";
    checkBoxImgButton.appendChild(checkBoxImgEle);
    checkBoxImgButton.addEventListener("click", function (e) {
        const completedlistItemCard = e.target.closest(`.mainPageListItemCard`);
        const completedBreakPoint = document.querySelector(`.mainPageListContentComplete`);
        listItem.completed = !listItem.completed;
        listItem.addItemtoDB();
        const parentStoredItem = dataEventsObj.getListItemDetails("get1Item", listItem.parentList);
        const parentObject = dataEventsObj.createListObjectFromStorage(parentStoredItem);
        parentObject.displayChildList();
        
    });

    const pencilImgButton = document.createElement(`button`);
    pencilImgButton.classList.add(`pencilImgButton`);
    pencilImgButton.classList.add("listFormActionButton");
    mainPageListItemContentRight.appendChild(pencilImgButton);

    const pencilImgEle = new Image();
    pencilImgEle.src = PencilImg;
    pencilImgEle.classList.add(`pencilImgEle`);
    pencilImgEle.alt = "Pencil: Edit this entry";
    pencilImgButton.appendChild(pencilImgEle);

    const trashImgButton = document.createElement(`button`);
    trashImgButton.classList.add(`trashImgButton`);
    trashImgButton.classList.add("listFormActionButton");
    mainPageListItemContentRight.appendChild(trashImgButton);

    const trashImgEle = new Image();
    trashImgEle.src = TrashImg;
    trashImgEle.alt = "Bin: Delete this entry";
    trashImgEle.classList.add(`trashImgEle`);
    trashImgButton.appendChild(trashImgEle);

    const updateHasSavedMessage = document.createElement("p");
    updateHasSavedMessage.classList.add("updateHasSavedMessage");
    updateHasSavedMessage.textContent = "Saved";
    updateHasSavedMessage.setAttribute("data-savedtag", listItem.ID);
    mainPageListItemContentRight.appendChild(updateHasSavedMessage);

    inputTitle.addEventListener("input", function (e) {
        
        // write any changes made directly to storage
        if ( e.target.value.length > 0 ) {
        listItem.title = e.target.value;
        listItem.committed = true;
        listItem.addItemtoDB(listItem);
        // not validated as complete but no two-way comms here.  It should really have a test to confirm this has been done correctly:
        const itemSavedMessage = document.querySelector(`p[data-savedtag="${listItem.ID}"]`);
        itemSavedMessage.classList.add("updateHasSavedMessageShow");
        itemSavedMessage.addEventListener('transitionend', function (e) {
            itemSavedMessage.classList.remove("updateHasSavedMessageShow");
        });
        const relatedDueDateText = e.target.closest(`.mainPageListItemContentLeft`).querySelector(`.formDisplayDueDate`);
        relatedDueDateText.classList.add(`formDisplayDueDateShow`);
        }
    });

    mainPageListItemCard.addEventListener("click", function (e) { 
        // if the item that was clicked is being deleted, don't attempt to mark it as selected
        if ( e.target.classList.contains("trashImgButton") || e.target.classList.contains("trashImgEle")) { 
            return;
        }
        markMainPageListingCardAsSelected(e.target.closest('.mainPageListItemCard'));
    });

    trashImgButton.addEventListener("click", function (e) {    
        const cardElement = e.target.closest(`.mainPageListItemCard`);
        if (confirm(`Delete: \n\nTitle: ${listItem.title}`) == true ) {
            
            
            cardElement.remove();
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
        taskFormModalObject.updateInputValues(listItem);
        taskFormModalObject.showForm(listItem);
      });
    pencilImgButton.addEventListener("click", function (e) {
    taskFormModalObject.updateInputValues(listItem);
    taskFormModalObject.showForm();
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
         const storageItem = dataEventsObj.getListItemDetails("get1Item", dataItemID);
         const thisItem = dataEventsObj.createListObjectFromStorage(storageItem);
         thisItem.selected = false;
         thisItem.addItemtoDB();
    });
  // set the row to active state so it's clear which is being edited
        const dataItemID = mainPageListItemCard.querySelector(".mainPageListItemForm").dataset.itemid;
        const storageItem = dataEventsObj.getListItemDetails("get1Item", dataItemID);
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
    
    leftMenuProjectItemList.insertBefore(leftMenuProjectItem, leftMenuProjectItemList.firstChild);

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
        deleteUncommittedEntries();
        leftMenuEventListeners(e.target);
    });
    repositionNewListButton();
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
        toggleLeftMenuShow();
}

const deleteUncommittedEntries = () => {
        const deleteUncommittedEntries = dataEventsObj.getListItemDetails("uncommitted");
    
    for (let i = 0; i < deleteUncommittedEntries.length; i++ ) {
        const UncommittedEntry = dataEventsObj.createListObjectFromStorage(deleteUncommittedEntries[i]);
        UncommittedEntry.deleteFromDB();
    }
}

const toggleLeftMenuShow = (action) => {
    const burgerFlyOutButton = document.querySelector(`.burgerFlyOutButton`);
    const navAddNewItem = document.querySelector(`.navAddNewItem`);
    const leftMenu = document.querySelector(".leftMenu");
    const leftMenuProjectItemList = document.querySelector(`.leftMenuProjectItemList`);
    if (action == `flyOut`) {
        burgerFlyOutButton.classList.add(`burgerFlyOutButtonHide`);
        navAddNewItem.classList.add(`navAddNewItemLeftMenuOut`);
        leftMenu.classList.add("leftMenuFlyOut");
        leftMenuProjectItemList.classList.add(`leftMenuProjectItemListShow`);
    } else {
        burgerFlyOutButton.classList.remove(`burgerFlyOutButtonHide`);
        navAddNewItem.classList.remove(`navAddNewItemLeftMenuOut`);
        leftMenu.classList.remove("leftMenuFlyOut");
        leftMenuProjectItemList.classList.remove(`leftMenuProjectItemListShow`);
    }
    
    
   
    
}

const initialEventListeners = () => {

    const leftMenu = document.querySelector(".leftMenu");
    leftMenu.addEventListener("mouseenter", (e) => { 
        toggleLeftMenuShow(`flyOut`);
    }); 
    leftMenu.addEventListener("mouseleave", (e) => { 
        toggleLeftMenuShow(`flyIn`);
    }); 
    // left menu click actions
    const allLeftMenuItems = document.querySelectorAll('.leftMenuProjectItem');
    allLeftMenuItems.forEach(e => e.addEventListener("click", function (e) {
       

        leftMenuEventListeners(e.target);
  
      }));

    // new list button actions
    const navAddNewItem = document.querySelector(".navAddNewItem");
    navAddNewItem.addEventListener("click", function(e) {
        // remove all empty DB entries so the next availableID is correct
        deleteUncommittedEntries();
     
        const newListItem = listItemObject.newListItem(
            NaN, 
            "", 
            "", 
            1, 
            false, 
            'parent', 
            true, 
            false,
            false);

        newListItem.addItemtoDB();
        listFormModalObject.updateInputValues(newListItem);
        toggleLeftMenuShow();
        listFormModalObject.showForm(newListItem);
    
    });
}


    return { initialSetUp, initialEventListeners, addListItemToMenu, displayListItemChildren, showLeftMenuSelected, deleteUncommittedEntries};
}
