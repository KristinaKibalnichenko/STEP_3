import Form from "../classes/Form.js";
import Input from "../classes/Input.js";
import Select from "../classes/Select.js";
import { root } from "./constants.js";
import searchCards from "./searchCards.js";

export default function createSearchForm() {
    const divSearch = document.createElement("div");
    divSearch.id = "divSearchId";
    divSearch.style.cssText = `display: flex; justify-content: center; align-items: center; margin: 20px 150px; 
                               padding: 50px 30px; background-color: rgba(103, 128, 159, 0.7); border-radius: 15px`;

    const formSearch = new Form({
        id: "searchForm",
        classes: ["formclasses"],
        action: "",
    }).render();

    const searchField = new Input({
        type: "text", 
        name: "inpurSearch", 
        id: "inpurSearch", 
        classes: ["search", "inputs"], 
        placeholder: "Search by title or description", 
        value: ""}).render();

    const status = new Select({
        id: "chooseStatus", 
        classes: ["search", "status", "chooseStatus"],
        options: ["All", "Open", "Done"],
        }).render();
    
    const priority = new Select({
        id: "choosePriority", 
        classes: ["search", "priority", "choosePriority"],
        options: ["All", "High", "Normal", "Low"],
        }).render();
    
    const search = new Input({
        type: "submit", 
        name: "submitSearch", 
        id: "submitSearch", 
        classes: ["search", "inputs", "submit"], 
        value: "SEARCH"}).render();

    formSearch.append(searchField, status,priority, search);
    divSearch.append(formSearch);
    root.append(divSearch);

    search.addEventListener("click", searchCards);
    
    return [formSearch];
}