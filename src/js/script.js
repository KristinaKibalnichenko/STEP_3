"use strict";

// import Modal from "./classes/Modal.js";
// import Input from "./classes/Input.js";
import Select from "./classes/Select.js";
// import LoginModal from "./classes/LoginModal.js";
import { loginBtn, createVisitBtn, root } from "./utilities/constants.js";
import { createAutorizationWindow } from "./utilities/autorization.js";
import getInfoFromDB from "./utilities/getInfoFromDB.js";
import pushInfoToDB from "./utilities/pushInfoToDB.js";
import itemsAbsentAtDB from "./utilities/itemsAbsentAtDB.js";

import { visitForm } from "./utilities/creatvisit.js";

console.log("LS: ", localStorage.getItem("token"));
if (localStorage.getItem("token") == null) {
  console.log(loginBtn);
  loginBtn.style.display = "block";
  createAutorizationWindow();
} else {
	console.log(createVisitBtn);
	createVisitBtn.style.display = 'block';
	itemsAbsentAtDB();
}

// pushInfoToDB()
// 	.then((data) => {
// 		console.log(data);
// 		getInfoFromDB().then((data) => {
// 			console.log("data ", data);
// 		})
// 		.catch((err) => {
// 			console.log(err.message);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});


///////////////////////////////////////////////////////////////////////////////////////
function createSearchForm() {
  const form = document.createElement("form");
  const search = document.createElement("input");
  const status = document.createElement("select");
  const priority = document.createElement("select");
  const submit = document.createElement("input");

  form.action = "#";
  form.id = "searchForm";

  search.type = "text";
  search.id = "searchField";

  status.id = "statusField";

  priority.id = "priorityField";

  submit.type = "submit";
  submit.value = "Search";
  submit.id = "submitField";
}

// alert(response.headers.get('Content-Type'));

// withCredentials: true;  о токене
