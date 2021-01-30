import getInfoFromDB from "./getInfoFromDB.js";
import { root } from "./constants.js";

export default function itemsAbsentAtDB() {
    getInfoFromDB().then((data) => {
        console.log("data ", data);
        console.log(data.length);
        const divDescrition = document.createElement('div');
        divDescrition.style.cssText = `font-size: 28px; font-weight: bold; text-align: center; 
                                       color: blue; padding: 10px 0; height: 54.5px;`;
        if (data.length == 0) {
            divDescrition.textContent = "No items have been added";
        }
        root.append(divDescrition);
    })
    .catch((err) => {
        console.log(err.message);
    });
}