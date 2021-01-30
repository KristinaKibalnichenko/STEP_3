import Modal from "./Modal.js";
import Input from "./Input.js";

export default class LoginModal extends Modal {
	constructor({ id, classes }) {
		super ({ id, classes });
	}
	createFormElements () {	
		const login = new Input({
			type: "email", 
			name: "login", 
			required: true, 
			id: "login", 
			classes: ["inputs"], 
			placeholder: "Email address", 
			errorText: "Поле не валидно",
			value: ""}).render();

		const password = new Input({
			type: "password", 
			name: "password", 
			required: true, 
			id: "password", 
			classes: ["inputs"], 
			placeholder: "Password", 
			errorText: "Поле не валидно",
			value: ""}).render();

		const submit = new Input({
			type: "submit", 
			name: "submit", 
			id: "submit", 
			classes: ["inputs", "submit"], 
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