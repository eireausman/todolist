import areIntervalsOverlappingWithOptions from "date-fns/esm/fp/areIntervalsOverlappingWithOptions/index.js";
import dataEvents from "./dataEvents.js";

export default function formModal() {
   
    const dataEventsObj = dataEvents();

    const createForm = (listItem, originElement, originClosestCard) => {    
      

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
        inputTitleLabel.textContent = `Note (required)`;
        formModalForm.appendChild(inputTitleLabel);

        const inputTitle = document.createElement("input");
        inputTitle.setAttribute("type", "text");
        inputTitle.required = true;
        inputTitle.classList.add("listFormTitle");
        inputTitle.setAttribute("id", "title");
        inputTitle.setAttribute("name", "title");
        inputTitle.value = "n/a";
        formModalForm.appendChild(inputTitle);
        if ( originElement == `title` ) {
          inputTitle.focus();
        }

        const inputDueDateLabel = document.createElement("label");
        inputDueDateLabel.setAttribute("for", "dueDate");
        inputDueDateLabel.textContent = "Due Date (optional)";
        formModalForm.appendChild(inputDueDateLabel);
        if ( originElement == `date` ) {
          inputDueDateLabel.focus();
        }

        let inputDueDate = document.createElement("input");
        inputDueDate.setAttribute("type", "date");        
        inputDueDate.setAttribute("id", "dueDate");
        inputDueDate.setAttribute("name", "dueDate");
        inputDueDate.classList.add("listFormComponent");
        inputDueDate.classList.add("listFormDueDate");
        inputDueDate.setAttribute("value", "");
        formModalForm.appendChild(inputDueDate);

        const updateHasSavedMessage = document.createElement("div");
        updateHasSavedMessage.classList.add("updateHasSavedMessageFormModal");
        updateHasSavedMessage.textContent = "Saved";
        formModalForm.appendChild(updateHasSavedMessage);

        

        // const inputImportance = document.createElement("checkbox");
        // inputImportance.setAttribute("type", "select");
        // inputImportance.setAttribute("name", "List Item Due Date");
        // inputImportance.classList.add("ListFormComponent");
        // inputImportance.setAttribute("value", listItem.dueDate);
        // formModalForm.appendChild(inputImportance);

        // const endFormModalEdit = document.createElement("button");
        // endFormModalEdit.textContent = "Complete";
        // formModalForm.appendChild(endFormModalEdit);
   

        formModalForm.addEventListener("input", function (e) {
          console.log(e.target.closest(`form`).dataset.itemid);
          const listItemID = e.target.closest(`form`).dataset.itemid;
          // listItemID = document.querySelector(`form[data-itemid="${listItem.ID}"]`);
           // const tempIDSearch = document.querySelector(`form[data-itemid="${listItem.ID}"]`);
      // console.log(tempIDSearch);
          const storageItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
          const listItem = dataEventsObj.createListObjectFromStorage(storageItem);

          listItem.title = inputTitle.value;
          listItem.dueDate = inputDueDate.value;
          listItem.committed = true;
          console.table(listItem);
          listItem.addItemtoDB(listItem);
          // not validated as complete but no two-way comms here:
          updateHasSavedMessage.classList.add("updateHasSavedMessageFormModalShow");
          formModalForm.classList.add("formModalListItemEditSaved");
        });

        updateHasSavedMessage.addEventListener('transitionend', formModalSavedRemove);
          function formModalSavedRemove (e) {
              console.log(e.target.classList);
              e.target.classList.remove("updateHasSavedMessageFormModalShow");
              formModalForm.classList.remove("formModalListItemEditSaved");
              // window.removeEventListener('transitionend', formModalSavedRemove)
        }
       

        formContainer.addEventListener('submit', (e) => { 
          e.preventDefault(); 
          });


        formContainer.addEventListener("click", (e) => {
          // console.log(e.target.closest('form').length); 
          const clickOutsideModal = !e.target.closest('.formModalListItemEdit');
          if ( clickOutsideModal == true ) {
            closeModalForm()
          };
        });
        window.addEventListener('keydown', formModalEscape);
        function formModalEscape(e) {
          if ( e.key == "Escape" ) {
            closeModalForm()
            // window.removeEventListener('keydown', formModalEscape)
          }
        }
         

        const closeModalForm = () => {
          // update the main page listing view to reflect any changes upon closure
          const listItemID = document.querySelector(`.formModalListItemEdit`).dataset.itemid;
          console.log(listItemID);
          // const listItemID = document.querySelector(`form[data-itemid="${listItem.ID}"]`);
          const storedListItem = dataEventsObj.getListItemDetails("get1Item", listItemID);
          const listItem = dataEventsObj.createListObjectFromStorage(storedListItem);
          console.log(listItem);
          const listItemParentObject = dataEventsObj.getListItemDetails("get1Item", listItem.parentList);
          const parentObject = dataEventsObj.createListObjectFromStorage(listItemParentObject);
          parentObject.displayChildList();
          formContainer.classList.remove("formContainerVisible");
        }
    }


    const updateInputValues = (listItem) => {
      const formModalForm = document.querySelector(".formModalListItemEdit");
      console.log(formModalForm);
      const inputTitle = document.querySelector(".listFormTitle");
      const inputDueDate = document.querySelector(".listFormDueDate");
      console.log(inputTitle);
      inputTitle.value = listItem.title;
      console.log(listItem.title);
      inputDueDate.value = listItem.dueDate;
      formModalForm.setAttribute("data-parentList", listItem.parentList);
      formModalForm.setAttribute("data-itemID", listItem.ID);
      
    }

    const showForm = () => {
      const formContainer = document.querySelector(`.modalFormContainer`);
      formContainer.classList.add("formContainerVisible");
    }
    

    return { createForm, updateInputValues, showForm }
}  