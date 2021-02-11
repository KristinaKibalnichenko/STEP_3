import CreateCard from "../classes/CreateCard.js";
import putInfoToDB from "./putInfoToDB.js";
import createModalVisit from "./creatvisit.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function appendCards() {
    getInfoFromDB()
        .then((data) => {
            data.forEach(({id, content}) => {
                // console.log("id", id);
                // console.log("content", content);
            
                const card = new CreateCard ({
                    id: id,
                    content: content,
                }).render();
                // console.log("card: ", card, "-", card.id, "-", content);

                cardsBtnsHandler(card, content);
            });
        });
}