"use strict";

// import Modal from "./classes/Modal.js";
// import Input from "./classes/Input.js";
// import Select from "./classes/Select.js";
// import LoginModal from "./classes/LoginModal.js";
import { loginBtn, createVisitBtn, root } from "./utilities/constants.js";
import { createAutorizationWindow } from "./utilities/autorization.js";
import getInfoFromDB from "./utilities/getInfoFromDB.js";
import pushInfoToDB from "./utilities/pushInfoToDB.js";
import createSearchForm from "./utilities/createSearchForm.js";
import createCardsForm from "./utilities/createCardsForm.js";
import createModalVisit from "./utilities/creatvisit.js";
// import dragAndDrop from "./utilities/dragAndDrop.js";

// moveCard();

console.log("LS: ", localStorage.getItem("token"));
if (localStorage.getItem("token") == null) {
  console.log(loginBtn);
  loginBtn.style.display = "block";
  createAutorizationWindow();
} else {
  console.log(createVisitBtn);
  createVisitBtn.style.display = "block";
  createSearchForm();
  createCardsForm();
  createModalVisit();
}

///////////////////////////////////////////////////////////////////////////////////////

// alert(response.headers.get('Content-Type'));

// withCredentials: true;  о токене

const cardDrag = document.getElementsByClassName("card-wrapper");
cardDrag.onmousedown = function (e) {
  let coords = getCoords(cardDrag);
  let shiftX = e.pageX - coords.left;
  let shiftY = e.pageY - coords.top;

  cardDrag.style.position = "absolute";
  document.body.appendChild(cardDrag);
  moveAt(e);

  cardDrag.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    cardDrag.style.left = e.pageX - shiftX + "px";
    cardDrag.style.top = e.pageY - shiftY + "px";
  }

  document.onmousemove = function (e) {
    moveAt(e);
  };

  cardDrag.onmouseup = function () {
    document.onmousemove = null;
    cardDrag.onmouseup = null;
  };
};

cardDrag.ondragstart = function () {
  return false;
};

function getCoords(elem) {
  const box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
