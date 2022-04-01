

import dataEvents from "./dataEvents.js";
import DomEvents from "./DOMevents.js";

 
export default function ListItemObj() {

    

    const newListItem = (listItemID, listItemTitle, dueDate, importance, pinned, parentList, selected, committed, completed) => {
        const dataEventsObj = dataEvents();
        const DOMEventsObj = DomEvents();
        // let newListItemID = listItemID;
        if ( isNaN(listItemID) ) {
            listItemID = dataEventsObj.findNextListID();
        }
        const listItem = {
            ID: listItemID,
            title: listItemTitle,
            dueDate: dueDate,
            importance: importance,
            pinned: pinned,
            parentList: parentList,
            selected: selected,
            committed, committed,
            completed, completed,
            addItemtoDB() {
                dataEventsObj.addListItemToDB(listItem);
            },
            selectedStateAdd() {
                dataEventsObj.addStateSelected(listItem);
            },
            selectedStateRemove() {
                dataEventsObj.removeStateSelected(listItem);
            },
            displayChildList() {
                DOMEventsObj.displayListItemChildren(listItem);
            },
            daysLeftToDue() {
                const days = dataEventsObj.daysUntilDue(listItem);
                return days;
            },
            deleteFromDB() {
                dataEventsObj.deleteThisObjectFromDB(listItem);
            }
        }
    return listItem;
    }
    

return { newListItem };

}