"use strict";

// import Modal from "./classes/Modal.js";
// import Input from "./classes/Input.js";
// import Select from "./classes/Select.js";
// import LoginModal from "./classes/LoginModal.js";
import { loginBtn, createVisitBtn, root } from "./utilities/constants.js";
import { createAutorizationWindow } from "./utilities/autorization.js";
// import getInfoFromDB from "./utilities/getInfoFromDB.js";
// import pushInfoToDB from "./utilities/pushInfoToDB.js";
import createSearchForm from "./utilities/createSearchForm.js";
import createCardsForm from "./utilities/createCardsForm.js";
import createModalVisit from "./utilities/creatvisit.js";
// import { cardFilter } from "./utilities/cardsFilter.js";
// import VisitsPalette from "./classes/CardsDesk.js";

// console.log("LS: ", localStorage.getItem("token"));
if (localStorage.getItem("token") == null) {
  // console.log(loginBtn);
  loginBtn.style.display = "block";
  createAutorizationWindow();
} else {
  // console.log(createVisitBtn);
  createVisitBtn.style.display = "block";
  createSearchForm();
  createCardsForm();
  createModalVisit(true);
}

///////////////////////////////////////////////////////////////////////////////////////

// alert(response.headers.get('Content-Type'));

// withCredentials: true;  о токене
