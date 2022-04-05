import dataEvents from "./dataEvents.js";
import DOMevents from "./DOMevents.js";

export default function listformModal() {
   
  const dataEventsObj = dataEvents();


    const createForm = () => {    
      

        // clear out any previous modals that have been created
        const modalsToDelete = document.querySelectorAll(".listModalFormContainer");
        modalsToDelete.forEach(e => e.remove());
      
        //create the modal form
        const mainContainerDiv = document.querySelector(".mainContainerDiv");

        
        const formContainer = document.createElement("div");
        formContainer.classList.add("listModalFormContainer");
        
        mainContainerDiv.appendChild(formContainer);

        const formModalForm = document.createElement("form");
        formModalForm.classList.add("listFormModalListItemEdit");
        formModalForm.setAttribute("name", "modalForm");
        formModalForm.setAttribute("data-parentList", NaN);
        formModalForm.setAttribute("data-itemID", NaN);
        formModalForm.setAttribute("method", "post");
        formModalForm.setAttribute("action", "#");
        formContainer.appendChild(formModalForm);

        const inputTitleLabel = document.createElement("label");
        inputTitleLabel.setAttribute("for", "title");
        inputTitleLabel.classList.add(`listFormModalLabel`);
        inputTitleLabel.textContent = `List Title`;
        formModalForm.appendChild(inputTitleLabel);

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.required = true;
        inputTitle.classList.add("listFormTitle");
        inputTitle.placeholder = "List Title";
        inputTitle.classList.add("listFormModalInput");
        inputTitle.setAttribute("id", "listFormTitle");
        inputTitle.setAttribute("name", "title");
        formModalForm.appendChild(inputTitle);

        const formModalDoneButton = document.createElement("button");
        formModalDoneButton.classList.add("listFormModalDoneButton");
        formModalDoneButton.textContent = "Done";
        formModalForm.appendChild(formModalDoneButton);

        const updateHasSavedMessage = document.createElement("div");
        updateHasSavedMessage.classList.add("listUpdateHasSavedMessageFormModal");
        updateHasSavedMessage.textContent = "Saved";
        formModalForm.appendChild(updateHasSavedMessage);

        inputTitle.addEventListener("input", function (e) {
          if (e.target.value.length > 0 ) {
            const listItemID = e.target.closest(`form`).dataset.itemid;
            const storageItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
            const listItem = dataEventsObj.createListObjectFromStorage(storageItem);

            listItem.title = inputTitle.value;
            listItem.committed = true;
            // not validated as complete but no two-way comms here
            listItem.addItemtoDB(listItem);
            
            updateHasSavedMessage.classList.add("listUpdateHasSavedMessageFormModalShow");
            formModalForm.classList.add("listFormModalListItemEditSaved");
          }
        });

        updateHasSavedMessage.addEventListener('transitionend', formModalSavedRemove);
          function formModalSavedRemove (e) {
              e.target.classList.remove("listUpdateHasSavedMessageFormModalShow");
              formModalForm.classList.remove("listFormModalListItemEditSaved");
        }
       

        formContainer.addEventListener('submit', (e) => { 
          e.preventDefault(); 
          });


        formContainer.addEventListener("click", (e) => {
          const clickOutsideModal = !e.target.closest('.listFormModalListItemEdit');
          if ( clickOutsideModal == true ) {
            closeModalForm()
          };
        });
        window.addEventListener('keydown', formModalEscape);
        function formModalEscape(e) {
          if ( e.key == "Escape" ) {
            closeModalForm()
          }
        }
        formModalDoneButton.addEventListener("click", (e) => {
            closeModalForm();
        });
         

        const closeModalForm = () => {
          const DOMEventsObj = DOMevents();
          // update the main page listing view to reflect any changes upon closure
            const form = document.querySelector(`.listFormModalListItemEdit`)
            const listItemID = form.dataset.itemid;
            const storedListItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
            const listItem = dataEventsObj.createListObjectFromStorage(storedListItem);

          if (listItem.committed == true ) {         
            const leftMenuProjectItem = DOMEventsObj.addListItemToMenu(listItem);
            DOMEventsObj.showLeftMenuSelected(leftMenuProjectItem, listItem, false);
            listItem.displayChildList();
          }
         
          formContainer.classList.remove("listFormContainerVisible");

                
        
        }
    }


    const updateInputValues = (listItem) => {
      const formModalForm = document.querySelector(".listFormModalListItemEdit");
      const inputTitle = document.getElementById("listFormTitle");
      inputTitle.value = "";
      formModalForm.setAttribute("data-parentList", listItem.parentList);
      formModalForm.setAttribute("data-itemID", listItem.ID);
    }

    const showForm = () => {
      const inputTitle = document.getElementById("listFormTitle");
      inputTitle.focus();
      const formContainer = document.querySelector(`.listModalFormContainer`);
      formContainer.classList.add("listFormContainerVisible");
    }
    

    return { createForm, updateInputValues, showForm }
}  