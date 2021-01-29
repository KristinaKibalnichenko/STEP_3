"use strict";

// getToken();

///////////////////////////////////////////////////////////
class Modal {
	constructor({ id, classes }) {
		this.id = id;
		this.classes = classes;
		// this.text = text;
		this.modal = this.render();
	}
	render() {
		const content = this.createForm(this.createFormElements()) || "";
		const span = this.createElement({
			elem: "span",
			content: "X",
			classes: ["close"],
		});
		const close = document.querySelector(".close");
		span.addEventListener("click", () => this.closeModal());
		const divModalContent = this.createElement({
			elem: "div",
			classes: ["modal-content"],
			content: [span, content],
		});
		const divModal = this.createElement({
			elem: "div",
			classes: this.classes,
			content: [divModalContent],
			id: this.id,
		});
		return divModal;
	}
	createForm(formElements = []) {
		const form = document.createElement("form");
		form.id = "register-form";
		form.action = "";

		form.append(...formElements);

		return form;
	}

	createElement({ elem, id, classes, content }) {
		const element = document.createElement(elem);
		if (id) {
			element.id = id;
		}
		if (classes) {
			element.classList.add(...classes);
		}
		if (content) {
			element.append(...content);
		}

		return element;
	}
	createFormElements () {}
	openModal() {
		this.modal.classList.add("active");
	}
	closeModal() {
		this.modal.classList.remove("active");
	}
}

class Input {
	constructor({type, name, required, id, classes, placeholder, errorText, value}) {
		this.type = type;
		this.name = name; 
		this.required = required;
		this.id = id;
		this.classes = classes;
		this.placeholder = placeholder;
		this.errorText = errorText;
		this.value = value;
	}
	render() {
		let input = document.createElement("input");
		input.type = this.type;
		input.name = this.name;
		input.required = this.required;
		input.id = this.id;
		// input.classes = this.classes;
		input.classList.add(...this.classes);
		input.placeholder = this.placeholder;
		input.value = this.value;
		
		this.input = input;

		return input;
	}
	handleBlur() {
		console.log("PPPPP", this.required);
		if (this.required) {
			console.log(true);
			if (!this.input.validity.valid) {
				console.log("DBL true");
				this.input.setCustomValidity(this.errorText);
			} else {
				console.log("Всё Ок");
			}
		}
		return false;
	}
}

class Select {
	constructor({ id, classes, options }) {
	  this.id = id;
	  this.classes = classes;
	  this.options = options;
	}
	render() {
	  const selectList = document.createElement("select");
	  this.options.forEach((optionId) => {
		const opt = document.createElement("option");
		opt.value = optionId;
		opt.textContent = optionId;
		// opt.classList.add(...this.classes);
		selectList.appendChild(opt);
	  });
	  this.selectList = selectList;
	  selectList.classList.add(...this.classes);
	  return selectList;
	}
  }

class LoginModal extends Modal {
	constructor({ id, classes }) {
		super ({ id, classes });
	}
	createFormElements () {	
		const login = new Input({
			type: "email", 
			name: "login", 
			required: true, 
			id: "login", 
			classes: [], 
			placeholder: "Email address", 
			errorText: "Поле не валидно",
			value: ""}).render();

		const password = new Input({
			type: "password", 
			name: "password", 
			required: true, 
			id: "password", 
			classes: [], 
			placeholder: "Password", 
			errorText: "Поле не валидно",
			value: ""}).render();

		const submit = new Input({
			type: "submit", 
			name: "submit", 
			id: "submit", 
			classes: [], 
			value: "SIGN IN"}).render();

		// const select = new Select({
		// 	id: "Выберите врача",
		// 	classes: ["form-select"],
		// 	options: ["Кардиолог", "Стоматолог", "Терапевт"],
		// 	}).render();
		// return [login, password, submit, select];
		return [login, password, submit];
	}
}

// function getToken() {
const root = document.getElementById("header-wrapper");

const loginBtn = document.getElementById("enter");
console.log(loginBtn);

const loginForm = new LoginModal ({
	id: "modalLogin",
	classes: ["modal", "login"],
});
console.log("loginForm ", loginForm);
root.after(loginForm.modal);
loginBtn.addEventListener("click", function() {
	loginForm.openModal();
	const submitBtn = document.getElementById('submit');
// let flag = true;
// let token, status;

submitBtn.addEventListener("click", signIn);
});


/////////////////////////////
// const submitBtn = document.getElementById('submit');
let flag = true;
let token, status;

function signIn(event) {
	event.preventDefault();
	// console.log("TRUE");
	const email = document.getElementById('login');
	const password = document.getElementById('password');
	// const autorize = document.getElementById('autorization');
	const personalData = {
		"email": email.value,
		"password": password.value,
	};
	console.log(email.value, password.value);

	autorization(personalData)
	.then((data) => {
		token = data;
		console.log("status: ", status);
		console.log("token: ", data);
		if (status === 200) {
			// autorize.remove();
			if (!flag) {
				// document.getElementById('incorrectAutorization').remove();
			}
			loginForm.modal.remove();
			loginBtn.value = 'Create visit';
			loginBtn.id = 'createVisit';
			createNewVisit();
			getInfoFromDB().then((data) => {
				console.log("data ", data);
				// createSearchForm();
			})
			.catch((err) => {
				console.log(err.message);
			});
		} else {
			// if (flag) {
			// 	const div = document.createElement('div');
			// 	div.textContent = 'Incorrect E-mail or Password';
			// 	div.id = 'incorrectAutorization';
			// 	div.style.color = 'red';
			// 	div.style.fontWeight ='bold';
			// 	autorize.before(div);
			// 	flag = false;
			// }
		}
	})
	.catch((err) => {
		console.log(err.message);
	});
}

function createNewVisit() {
const createVisitBtn = document.getElementById('createVisit');
console.log(createVisitBtn);
createVisitBtn.addEventListener("click", () => {
	console.log("И тут создается модальное окно");
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
		console.log("message ", err.message);
	});
}

function getInfoFromDB() {
	return fetch('https://ajax.test-danit.com/api/cards', {
		headers: {
			'Authorization': `Bearer ${token}`,
		},
	})
	.then((data) => data.json()
	// {
	// 	console.log("getInfoFromDB", data);
	// 	return data.json();
	// 	}
		)
	.catch((err) => {
		console.log("message ", err.message);
	});
}

//////////////////////////
const content = {
	title: "Визит к кардиологу",
	description: "Плановый визит",
	doctor: "Cardiologist",
	bp: "24",
	age: 23,
	weight: 70
};

async function pushInfoToDB() {
	await autorization;
	return fetch('https://ajax.test-danit.com/api/cards', {
		method: "POST",
		body: JSON.stringify(content),
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json;charset=utf-8'
		},
	}).then((response) => response.text())
	.catch((err) => {
		console.log("message ", err.message);
	});
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

//DELETE
async function deleteInfoFromDB() {
	await autorization;
	return fetch('https://ajax.test-danit.com/api/cards/7914', {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${token}`,
			// 'Content-Type': 'application/json;charset=utf-8'
		},
	}).then((response) => {
		response.text();
		console.log("Deleted!!! Promise passed");
	})
	.catch((err) => {
		console.log("message ", err.message);
	});
}
// deleteInfoFromDB()
// 	.then((data) => {
// 		console.log("Ответ об удалении: ", data);
// 		getInfoFromDB().then((data) => {
// 			console.log("data ", data);
// 		});
// 	})
// 	.catch((err) => {
// 		console.log(err.message);
// 	});


// alert(response.headers.get('Content-Type'));

///////////////////////////////////////////////////////////////////////////////////////
function createSearchForm() {
	const form = document.createElement('form');
	const search = document.createElement('input');
	const status = document.createElement('select');
	const priority = document.createElement('select');
	const submit = document.createElement('input');

	form.action = "#";
	form.id = "searchForm";

	search.type = "text";
	search.id = "searchField";

	status.id = "statusField";

	priority.id = "priorityField";

	submit.type="submit";
	submit.value="Search";
	submit.id="submitField";

}


// const modalWindow1 = new Modal({
// 	id: "modal1",
// 	classes: ["modal", "class2"],
// 	text: "Hello World",
// });
// console.log(modalWindow1.render());

// withCredentials: true;  о токене