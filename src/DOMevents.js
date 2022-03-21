import ListItemObj from './ListItemObj.js';
import dataEvents from "./dataEvents.js";

import logoImg from './z_img/complete-60.png';
import ListImg from './z_img/list-48.png';


export default function DomEvents() {  

    const dataEventsObj = dataEvents();
    
const initialSetUp = () => {
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content")
    const theBody = document.querySelector("body");
    theBody.appendChild(contentDiv);
    
    const navDiv = document.createElement("nav");
    navDiv.classList.add("nav");
    contentDiv.appendChild(navDiv);
    
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");
    navDiv.appendChild(logoContainer);
    
    const logoImgEle = new Image();
    logoImgEle.classList.add("logoImgEle");
    logoImgEle.alt = "And done! company logo";
    logoImgEle.src = logoImg;
    logoContainer.appendChild(logoImgEle);
    
    
    const navTitle = document.createElement("p");
    navTitle.textContent = "And done!";
    navTitle.classList.add("navTitle");
    logoContainer.appendChild(navTitle);
    
    const navAddNewItem = document.createElement("button");
    navAddNewItem.textContent = "Add New ++";
    navAddNewItem.classList.add("navAddNewItem");
    navDiv.appendChild(navAddNewItem);
    
    const mainContainerDiv = document.createElement("section");
    mainContainerDiv.classList.add("mainContainerDiv");
    contentDiv.appendChild(mainContainerDiv);

    const leftMenuNav = document.createElement("nav");
    leftMenuNav.classList.add("leftMenu");
    mainContainerDiv.appendChild(leftMenuNav);
    
    const burgerFlyOutImgEle = new Image();
    burgerFlyOutImgEle.classList.add("burgerFlyOut");
    burgerFlyOutImgEle.alt = "Show Menu";
    burgerFlyOutImgEle.src = ListImg;
    leftMenuNav.appendChild(burgerFlyOutImgEle);
    
    const leftMenuProjectItemList = document.createElement("nav");
    leftMenuProjectItemList.classList.add("leftMenuProjectItemList");
    leftMenuNav.appendChild(leftMenuProjectItemList);
    
    
    const mainPageListContent = document.createElement("div");
    mainPageListContent.classList.add("mainPageListContent");
    mainContainerDiv.appendChild(mainPageListContent);

    // check here to populate list with initial values
    const storedListItems = dataEventsObj.getListItemDetails("getAll", null);
    for (let i = 0; i < storedListItems.length; i++) {
        let listItemToDisplay = storedListItems[i];
        addListItemToMenu(listItemToDisplay.title, listItemToDisplay.ID);
    }
}

const displayListItemChildren = (parentListItemID) => {
    const listMenuChildren = dataEventsObj.getListItemDetails("getListItemChildren", parentListItemID);
    const mainPageListContent = document.querySelector(".mainPageListContent");
    // remove the current content
    while (mainPageListContent.firstChild) {
        mainPageListContent.removeChild(mainPageListContent.firstChild);
    }
    const parentTitle = dataEventsObj.getListItemDetails("get1Item", parentListItemID).title;

    const pageTitle = document.createElement("h2");
    pageTitle.textContent = parentTitle;
    mainPageListContent.appendChild(pageTitle);

    for (let item in listMenuChildren) {
        let listItemForm = document.createElement("form");
        listItemForm.setAttribute("method", "post");
        listItemForm.setAttribute("action", "#");
        mainPageListContent.appendChild(listItemForm);

        let title = document.createElement("input");
        title.setAttribute("type", "text");
        title.setAttribute("name", "List Item Title");
        title.classList.add("ListFormComponent");
        title.setAttribute("value", listMenuChildren[item].title);
        listItemForm.appendChild(title);

        let dueDate = document.createElement("input");
        dueDate.setAttribute("type", "date");
        dueDate.setAttribute("name", "List Item Due Date");
        dueDate.classList.add("ListFormComponent");
        dueDate.setAttribute("value", listMenuChildren[item].dueDate);
        listItemForm.appendChild(dueDate);

    }
    


    
}

const addListItemToMenu = (listItemTitle, ListItemID) => {
    
    const leftMenuProjectItemList = document.querySelector(".leftMenuProjectItemList");
    
    const leftMenuProjectItem = document.createElement('button');
    leftMenuProjectItem.classList.add("leftMenuProjectItem");
    leftMenuProjectItem.setAttribute('data-listitemid', ListItemID);
    leftMenuProjectItemList.appendChild(leftMenuProjectItem);

    const ListImgEle = new Image();
    ListImgEle.classList.add("ListImgEle");
    ListImgEle.alt = "list icon";
    ListImgEle.src = ListImg;
    ListImgEle.setAttribute('data-listitemid', ListItemID);
    leftMenuProjectItem.appendChild(ListImgEle);
    
    const leftMenuItemTitle = document.createElement("p");
    leftMenuItemTitle.classList.add("leftMenuProjectItemText");
    leftMenuItemTitle.textContent = listItemTitle;
    leftMenuItemTitle.setAttribute('data-listitemid', ListItemID);
    leftMenuProjectItem.appendChild(leftMenuItemTitle);
}


const initialEventListeners = () => {
    const allLeftMenuItems = document.querySelectorAll('.leftMenuProjectItem');

    allLeftMenuItems.forEach(e => e.addEventListener("click", function (e) {
        const removePreviousSelection = document.querySelector('.leftMenuItemShowAsSelected');
        if ( removePreviousSelection != null ) {
            removePreviousSelection.classList.remove("leftMenuItemShowAsSelected");
        }
        const thisListItemID = e.target.dataset.listitemid;
        const parentButton = e.target.closest('button');
        parentButton.classList.add("leftMenuItemShowAsSelected");
        displayListItemChildren(thisListItemID);
       
      }));

    const navAddNewItem = document.querySelector(".navAddNewItem");
    navAddNewItem.addEventListener("click", function(e) {
       
        const newTitle = prompt("what is the title?");
        // REQUIRES VALIDATION && MODAL
        const listItemObject = ListItemObj();

        const newListItem = listItemObject.newListItem(newTitle);
        console.table(newListItem);
        newListItem.addItemtoDB(newListItem);
        addListItemToMenu(newListItem.title, newListItem.ID);
    });
}


    return { initialSetUp, initialEventListeners, addListItemToMenu };
}


// newGameGridCell.addEventListener('mouseenter', function(e) {
//     e.target.classList.add('gameGridCellMouseAnim');
// });