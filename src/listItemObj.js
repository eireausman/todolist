import { lastDayOfWeekWithOptions } from "date-fns/fp";

import dataEvents from "./dataEvents.js";

 
export default function ListItemObj() {

    

    const newListItem = (listItemTitle) => {
        const dataEventsObj = dataEvents();
        const listItemID = dataEventsObj.findNextListID();
        const listItem = {
            ID: listItemID,
            title: listItemTitle,
            dueDate: null,
            importance: "Normal",
            pinned: false,
            parentList: 1,
            selected: true,
            addItemtoDB(listItem) {
                dataEventsObj.addListItemToDB(listItem);
            }
            }
    return listItem;
    }
    









return { newListItem };

}