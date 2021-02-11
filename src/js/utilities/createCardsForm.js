import { root } from "./constants.js";
import getInfoFromDB from "./getInfoFromDB.js";
import itemsAbsentAtDB from "./itemsAbsentAtDB.js";
import appendCards from "./appendCards.js";

export default function createCardsForm() {
    const divCards = document.createElement("div");
    divCards.id = "divCardsId";
    divCards.style.cssText = `display: flex; flex-wrap: wrap; margin: 20px 150px; padding: 50px 30px; 
                              background-color: lightgrey; border-radius: 15px`;

    root.append(divCards);
    getInfoFromDB()
    .then((data) => {
        console.log("data", data);
        if (data.length == 0) {
            itemsAbsentAtDB();
        } else {
            let arr2 = [];
            data.forEach(({id}) => {
                console.log(id);
                arr2.push(document.getElementById(id));
            });
            let arr = document.getElementsByClassName("card-wrapper");
            console.log("arr", arr);
            console.log("arr2", arr2);
            
            appendCards();
        }
    })
    .catch((err) => {
        console.log(err.message);
    });

}