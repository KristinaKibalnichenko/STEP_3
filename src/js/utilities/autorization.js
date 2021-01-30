import { loginBtn, createVisitBtn, root } from "./constants.js";
import LoginModal from "../classes/LoginModal.js";
import getInfoFromDB from "./getInfoFromDB.js";
import itemsAbsentAtDB from "./itemsAbsentAtDB.js";

export function createAutorizationWindow() {
	const loginForm = new LoginModal ({
		id: "modalLogin",
		classes: ["modal", "login", "wrapper"],
	});
	loginForm.modal.style.width = "39vw";
	console.log("loginForm ", loginForm);
	root.append(loginForm.modal);
	loginBtn.addEventListener("click", function() {
		loginForm.openModal();
		const submitBtn = document.getElementById('submit');
		submitBtn.addEventListener("click", signIn);
	});
}

let token, status;
function signIn(event) {
	event.preventDefault();
	const email = document.getElementById('login');
	const password = document.getElementById('password');
	const personalData = {
		"email": email.value,
		"password": password.value,
	};
	console.log(email.value, password.value);

	autorization(personalData)
	.then((data) => {
		token = data;
		console.log("status: ", status);
		console.log("token: ", token);
		const loginForm = document.getElementById('modalLogin');
		const span = document.getElementById('addinfo');
		let flag = true;
		if (status === 200) {
			localStorage.setItem("token", token);
			loginForm.remove();
			loginBtn.style.display = "none";
			createVisitBtn.style.display = "block";
			
			itemsAbsentAtDB();
			// getInfoFromDB().then((data) => {
			// 	console.log("data ", data);
			// 	console.log(data.length);
			// 	const divDescrition = document.createElement('div');
			// 	divDescrition.style.cssText = `font-size: 28px; font-weight: bold; text-align: center; 
			// 								   color: blue; padding: 10px 0; height: 54.5px;`;
			// 	if (data.length == 0) {
			// 		divDescrition.textContent = "No items have been added";
			// 	}
			// 	root.append(divDescrition);
			// })
			// .catch((err) => {
			// 	console.log(err.message);
			// });

			// createSearchForm();
			
			//////////////////////////////////////////////////
			createVisitBtn.addEventListener("click", () => {
				alert("И тут создается модальное окно");
			});
			//////////////////////////////////////////////////
		} else {
			span.textContent = 'Incorrect username or password';
			span.style.color = "red";
			span.style.padding = "0 10px";
			flag = false;
		}
		if (!flag) {
			email.addEventListener("click", () => {
				span.textContent = '';
				flag = true;
			});
			password.addEventListener("click", () => {
				span.textContent = '';
				flag = true;
			});
		}
	})
	.catch((err) => {
		console.log(err.message);
	});
}

function autorization(personalData) {
	return fetch('https://ajax.test-danit.com/api/cards/login', {
		method: "POST",
		body: JSON.stringify(personalData),
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
	})
	.then((response) => {	
		status = response.status;
		console.log("autorization", response);
		return response.text();
		})
	.catch((err) => {
		console.log("Autorization request message: ", err.message);
	});
}