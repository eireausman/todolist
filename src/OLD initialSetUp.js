import logoImg from './z_img/complete-60.png';

export default function intialSetUp() {
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

const navAddNewItem = document.createElement("p");
navAddNewItem.textContent = "Add New ++";
navAddNewItem.classList.add("navAddNewItem");
navDiv.appendChild(navAddNewItem);

const mainContainerDiv = document.createElement("section");
mainContainerDiv.classList.add("mainContainerDiv");
contentDiv.appendChild(mainContainerDiv);

const leftMenuNav = document.createElement("nav");
leftMenuNav.classList.add("leftMenu");
mainContainerDiv.appendChild(leftMenuNav);

const leftMenuProjectItemList = document.createElement("nav");
leftMenuProjectItemList.classList.add("leftMenuProjectItemList");
leftMenuNav.appendChild(leftMenuProjectItemList);



const mainPageListContent = document.createElement("div");
mainPageListContent.classList.add("mainPageListContent");
mainPageListContent.textContent = "here's a list item"
mainContainerDiv.appendChild(mainPageListContent);

}

