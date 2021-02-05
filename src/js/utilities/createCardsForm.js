import Form from "../classes/Form.js";
import Input from "../classes/Input.js";
import Select from "../classes/Select.js";
import { root } from "./constants.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function createCards() {
    const divSearch = document.createElement("div");
    divSearch.id = "divcreateCards";
    divSearch.style.cssText = `display: flex; justify-content: center; margin: 20px 150px; 
                               padding: 50px 30px; background-color: lightgrey; border-radius: 15px`;

    // const formSearch = new Form({
    //     id: "searchForm",
    //     classes: ["formclasses"],
    //     action: "",
    // }).render();

    // const searchField = new Input({
    //     type: "text", 
    //     name: "inpurSearch", 
    //     // required: true, 
    //     id: "inpurSearch", 
    //     classes: ["search", "inputs"], 
    //     placeholder: "Search by title or description", 
    //     value: ""}).render();

    // const status = new Select({
    //     id: "chooseStatus", 
    //     classes: ["search", "status"],
    //     options: ["All", "Open", "Done"],
    //     }).render();
    
    // const priority = new Select({
    //     id: "choosePriority", 
    //     classes: ["search", "priority"],
    //     options: ["All", "High", "Normal", "Low"],
    //     }).render();
    
    // const submit = new Input({
    //     type: "submit", 
    //     name: "submitSearch", 
    //     id: "submitSearch", 
    //     classes: ["search", "inputs", "submit"], 
    //     value: "SUBMIT"}).render();

    // formSearch.append(searchField, status,priority, submit);
    // divSearch.append(formSearch);
    // root.append(divSearch);

    // submit.addEventListener("click", function() {
    //     console.log("SEARCH");
    //     getInfoFromDB().then((data) => {
    //         console.log("data ", data);
    //         console.log(data.length);
            
    //         if (data.length !== 0) {
                
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err.message);
    //     });
		
    // });
    
    // return [formSearch];
}