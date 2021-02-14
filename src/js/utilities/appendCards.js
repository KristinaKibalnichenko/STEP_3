import CreateCard from "../classes/CreateCard.js";
import putInfoToDB from "./putInfoToDB.js";
import createModalVisit from "./creatvisit.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function appendCards() {
  getInfoFromDB().then((data) => {
    data.forEach(({ id, content }) => {
      // console.log("id", id);
      // console.log("content", content);

      const card = new CreateCard({
        id: id,
        content: content,
      }).render();
      // console.log("card: ", card, "-", card.id, "-", content);

      cardsBtnsHandler(card, content);
    });
  });
}

const cardDrag = document.getElementsByClassName("draggable");
console.log(cardDrag);
cardDrag.onmousedown = function (e) {
  let coords = getCoords(cardDrag);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  cardDrag.style.position = "absolute";
  document.body.appendChild(cardDrag);
  moveAt(e);

  cardDrag.style.zIndex = 1000;

  function moveAt(e) {
    cardDrag.style.left = e.pageX - shiftX + "px";
    cardDrag.style.top = e.pageY - shiftY + "px";
  }
  main.onmousemove = function (e) {
    moveAt(e);
  };

  cardDrag.onmouseup = function (e) {
    document.onmousemove = null;
    cardDrag.onmouseup = null;
  };
};

cardDrag.ondragstart = function () {
  return false;
};

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
