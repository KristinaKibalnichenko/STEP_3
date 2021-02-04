import Form from "../classes/Form.js";
import Input from "../classes/Input.js";
import Select from "../classes/Select.js";
import { root } from "./constants.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function createSearchForm() {
    const divSearch = document.createElement("div");
    divSearch.id = "divSearchId";
    divSearch.style.cssText = "display: flex; justify-content: center; align-items: center";

    const formSearch = new Form({
        id: "searchForm",
        classes: ["formclasses"],
        action: "",
    }).render();

    const searchField = new Input({
        type: "text", 
        name: "inpurSearch", 
        // required: true, 
        id: "inpurSearch", 
        classes: ["search", "inputs"], 
        placeholder: "Search by title or description", 
        value: ""}).render();

    const status = new Select({
        id: "chooseStatus", 
        classes: ["search", "status"],
        options: ["All", "Open", "Done"],
        }).render();
    
    const priority = new Select({
        id: "choosePriority", 
        classes: ["search", "priority"],
        options: ["All", "High", "Normal", "Low"],
        }).render();
    
    const submit = new Input({
        type: "submit", 
        name: "submitSearch", 
        id: "submitSearch", 
        classes: ["search", "inputs", "submit"], 
        value: "SUBMIT"}).render();

    formSearch.append(searchField, status,priority, submit);
    divSearch.append(formSearch);
    root.append(divSearch);

    submit.addEventListener("click", function() {
        console.log("SEARCH");
        getInfoFromDB().then((data) => {
            console.log("data ", data);
            console.log(data.length);
            
        })
        .catch((err) => {
            console.log(err.message);
        });
		
    });
    
    return [formSearch];
}