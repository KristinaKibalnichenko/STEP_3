"use strict";

import { loginBtn, createVisitBtn, root } from "./utilities/constants.js";
import { createAutorizationWindow } from "./utilities/autorization.js";
import createSearchForm from "./utilities/createSearchForm.js";
import createCardsForm from "./utilities/createCardsForm.js";
import createModalVisit from "./utilities/creatvisit.js";
// import VisitsPalette from "./classes/CardsDesk.js";

if (localStorage.getItem("token") == null) {
  loginBtn.style.display = "block";
  createAutorizationWindow();
} else {
  createVisitBtn.style.display = 'block';
  createSearchForm();
  createCardsForm();
	createModalVisit(true);
}


///////////////////////////////////////////////////////////////////////////////////////

// alert(response.headers.get('Content-Type'));

// withCredentials: true;  о токене
