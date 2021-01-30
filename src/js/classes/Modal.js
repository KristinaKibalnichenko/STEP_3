export default class Modal {
	constructor({ id, classes }) {
		this.id = id;
		this.classes = classes;
		this.modal = this.render();
	}
	render() {
		const content = this.createForm(this.createFormElements()) || "";
		const span = this.createElement({
			elem: "span",
			content: "X",
			classes: ["close"],
		});
		const additionalInfo = this.createElement({
			elem: "div",
			content: "",
			classes: ["addinfo"],
			id: "addinfo",
		});
		span.addEventListener("click", () => this.closeModal());
		// const divModalContent = this.createElement({
		// 	elem: "div",
		// 	classes: ["modal-content"],
		// 	content: [span, content],
		// });
		// const divModal = this.createElement({
		// 	elem: "div",
		// 	classes: this.classes,
		// 	content: [divModalContent],
		// 	id: this.id,
		// });
		// const divModalContent = this.createElement({
		// 	elem: "div",
		// 	classes: ["modal-content"],
		// 	content: [span, content],
		// });
		const divModal = this.createElement({
			elem: "div",
			classes: this.classes,
			content: [span, content, additionalInfo],
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
		console.log(this.modal);
		this.modal.classList.add("active");
	}
	closeModal() {
		this.modal.classList.remove("active");
		document.getElementById('addinfo').textContent = "";
	}
}