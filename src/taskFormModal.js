import dataEvents from "./dataEvents.js";

export default function taskformModal() {
   
    const dataEventsObj = dataEvents();

    const createForm = () => {    
      

        // clear out any previous modals that have been created
        const modalsToDelete = document.querySelectorAll(".modalFormContainer");
        modalsToDelete.forEach(e => e.remove());
      
        //create the modal form
        const mainContainerDiv = document.querySelector(".mainContainerDiv");

        
        const formContainer = document.createElement("div");
        formContainer.classList.add("modalFormContainer");
        
        mainContainerDiv.appendChild(formContainer);

        const formModalForm = document.createElement("form");
        formModalForm.classList.add("formModalListItemEdit");
        formModalForm.setAttribute("name", "modalForm");
        formModalForm.setAttribute("data-parentList", NaN);
        formModalForm.setAttribute("data-itemID", NaN);
        formModalForm.setAttribute("method", "post");
        formModalForm.setAttribute("action", "#");
        formContainer.appendChild(formModalForm);

        const inputTitleLabel = document.createElement("label");
        inputTitleLabel.setAttribute("for", "title");
        inputTitleLabel.classList.add(`formModalLabel`);
        inputTitleLabel.textContent = `Note (required)`;
        formModalForm.appendChild(inputTitleLabel);

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.required = true;
        inputTitle.classList.add("taskFormTitle");
        inputTitle.classList.add("formModalInput");
        inputTitle.setAttribute("id", "taskFormTitle");
        inputTitle.setAttribute("name", "title");
        inputTitle.value = "n/a";
        formModalForm.appendChild(inputTitle);
      
        const inputDueDateLabel = document.createElement("label");
        inputDueDateLabel.setAttribute("for", "dueDate");
        inputDueDateLabel.classList.add(`formModalLabel`);
        inputDueDateLabel.textContent = "Due Date (optional)";
        formModalForm.appendChild(inputDueDateLabel);
       

        let inputDueDate = document.createElement("input");
        inputDueDate.setAttribute("type", "date");        
        inputDueDate.setAttribute("id", "listFormDueDate");
        inputDueDate.setAttribute("name", "dueDate");
        inputDueDate.classList.add("listFormDueDate");
        inputDueDate.classList.add("formModalInput");
        inputDueDate.setAttribute("value", "");
        formModalForm.appendChild(inputDueDate);

        const formModalDoneButton = document.createElement("button");
        formModalDoneButton.classList.add("formModalDoneButton");
        formModalDoneButton.textContent = "Done";
        formModalForm.appendChild(formModalDoneButton);

        const updateHasSavedMessage = document.createElement("div");
        updateHasSavedMessage.classList.add("updateHasSavedMessageFormModal");
        updateHasSavedMessage.textContent = "Saved";
        formModalForm.appendChild(updateHasSavedMessage);

   

        formModalForm.addEventListener("input", function (e) {
          const listItemID = e.target.closest(`form`).dataset.itemid;
          const storageItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
          const listItem = dataEventsObj.createListObjectFromStorage(storageItem);

          listItem.title = inputTitle.value;
          listItem.dueDate = inputDueDate.value;
          listItem.committed = true;
          listItem.addItemtoDB(listItem);
          // not validated as complete but no two-way comms here:
          updateHasSavedMessage.classList.add("updateHasSavedMessageFormModalShow");
          formModalForm.classList.add("formModalListItemEditSaved");
        });

        updateHasSavedMessage.addEventListener('transitionend', formModalSavedRemove);
          function formModalSavedRemove (e) {
              e.target.classList.remove("updateHasSavedMessageFormModalShow");
              formModalForm.classList.remove("formModalListItemEditSaved");
              // window.removeEventListener('transitionend', formModalSavedRemove)
        }
       

        formContainer.addEventListener('submit', (e) => { 
          e.preventDefault(); 
          });


        formContainer.addEventListener("click", (e) => {
          const clickOutsideModal = !e.target.closest('.formModalListItemEdit');
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
            closeModalForm()
        });
         

        const closeModalForm = () => {
          // update the main page listing view to reflect any changes upon closure
          const listItemID = document.querySelector(`.formModalListItemEdit`).dataset.itemid;
          const storedListItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
          const listItem = dataEventsObj.createListObjectFromStorage(storedListItem);
          const listItemParentObject = dataEventsObj.getListItemDetails("get1Item", listItem.parentList);
          const parentObject = dataEventsObj.createListObjectFromStorage(listItemParentObject);
          parentObject.displayChildList();
          formContainer.classList.remove("formContainerVisible");
        }
    }


    const updateInputValues = (listItem) => {
      const formModalForm = document.querySelector(".formModalListItemEdit");
      const inputTitle = document.getElementById("taskFormTitle");
      const inputDueDate = document.getElementById("listFormDueDate");
      inputTitle.value = listItem.title;
      inputDueDate.value = listItem.dueDate;
      formModalForm.setAttribute("data-parentList", listItem.parentList);
      formModalForm.setAttribute("data-itemID", listItem.ID);
      
    }

    const showForm = () => {
      const inputTitle = document.getElementById("taskFormTitle");
      inputTitle.focus();
      const formContainer = document.querySelector(`.modalFormContainer`); 
      formContainer.classList.add("formContainerVisible");
    
    }
    

    return { createForm, updateInputValues, showForm }
}  