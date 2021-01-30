"use strict";

// import Modal from "./classes/Modal.js";
// import Input from "./classes/Input.js";
import Select from "./classes/Select.js";
// import LoginModal from "./classes/LoginModal.js";
import { loginBtn, createVisitBtn, root } from "./utilities/constants.js";
import { createAutorizationWindow } from "./utilities/autorization.js";
import { visitForm } from "./utilities/creatvisit.js";

if (localStorage.getItem("token") == null) {
  console.log(loginBtn);
  loginBtn.style.display = "block";
  createAutorizationWindow();
} else {
  console.log(createVisitBtn);
  createVisitBtn.style.display = "block";
}

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
