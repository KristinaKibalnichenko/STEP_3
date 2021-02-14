import Form from "../classes/Form.js";
import Input from "../classes/Input.js";
import Select from "../classes/Select.js";
import { root } from "./constants.js";

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
        required: true, 
        id: "inpurSearch", 
        classes: ["inputs"], 
        placeholder: "Search by title or description", 
        value: ""}).render();

    const status = new Select({
        id: "chooseStatus", 
        classes: ["status"],
        options: ["All", "Open", "Done"],
        }).render();
    
    const priority = new Select({
        id: "choosePriority", 
        classes: ["priority"],
        options: ["All", "High", "Normal", "Low"],
        }).render();
    
    const submit = new Input({
        type: "submit", 
        name: "submitSearch", 
        id: "submitSearch", 
        classes: ["inputs", "submit"], 
        value: "SUBMIT"}).render();

    formSearch.append(searchField, status,priority, submit);
    divSearch.append(formSearch);
    root.append(divSearch);
    return [formSearch];
}