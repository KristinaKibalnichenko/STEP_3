import Modal from "./Modal.js";
import Form from "./Form.js";
import Input from "./Input.js";

export default class LoginModal extends Modal {
	constructor({ id, classes }) {
		super ({ id, classes });
    }
    createForm(formElements = []) {
        const form = new Form({
            id: "register-form",
            classes: ["formclasses"],
            action: "",
        }).render();
        form.append(...formElements);
  
        // const form2 = new Form({
        //   id: "register-form-2",
        //   classes: ["formclasses"],
        //   action: "",
        // }).render();
        // form2.append(...formElements);
        
        // return [form, form2];
        return [form];
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
            value: "SUBMIT"}).render();

            return [login, password, submit];
            // return this.createForm([login, password, submit]);
    }
}