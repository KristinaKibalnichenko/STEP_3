import CreateCard from "../classes/CreateCard.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function appendCards() {
    const divCards = document.getElementById("divCardsId");
    getInfoFromDB()
        .then((data) => {
            data.forEach(({id, content}) => {            
                const card = new CreateCard ({
                    id: id,
                    content: content,
                }).render();
                // card.draggable = true;
                // console.log("card: ", card, "-", card.id, "-", content);

                if (content.status == "Done") {
                    const statusDoneBtn = card.getElementsByClassName("cards-btn done")[0];
                    statusDoneBtn.disabled = true;
                }
                divCards.append(card);
                cardsBtnsHandler(card, content);
            });
            // const cards = root.querySelectorAll(".card-wrapper");
            // console.log("taskElements: ", cards);
            // cards.forEach((card) => {
            //     card.addEventListener(`dragstart`, (event) => {
            //     event.target.classList.add("selected");
            //     });
            // });
            // cards.forEach((card) => {
            //     card.addEventListener(`dragend`, (event) => {
            //     event.target.classList.remove("selected");
            //     });
            // });
            
            // divCards.addEventListener(`dragover`, (evt) => {
            //     // Разрешаем сбрасывать элементы в эту область
            //     evt.preventDefault();
            //     // const activeElement = tasksListElement.querySelector(`.selected`);
            //     });
        });
}