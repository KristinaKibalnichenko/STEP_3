import getInfoFromDB from "./getInfoFromDB.js";
import { root } from "./constants.js";

export default function itemsAbsentAtDB() {
    // getInfoFromDB().then((data) => {
    //     if (data.length == 0) {
            const divCards = document.querySelector("#divCardsId");
            const noItems = document.createElement('p');
            noItems.style.cssText = `font-size: 28px; font-weight: bold; text-align: center; 
                                     color: blue; padding: 10px 0`;
            noItems.textContent = "No items have been added";
            divCards.append(noItems);
        // }
    // })
    // .catch((err) => {
    //     console.log(err.message);
    // });
}