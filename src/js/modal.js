class Modal {
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

  createForm(formElements = []) {
    const form = document.createElement("form");
    form.id = "register-form";
    form.action = "";

    form.append(...formElements);

    return form;
  }
  createFormElements() {}

  openModal() {
    this.modal.classList.add("active");
  }

  closeModal() {
    this.modal.classList.remove("active");
  }
}

class RegisterModal extends Modal {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const login = new Input({
      type: "text",
      name: "login",
      required: true,
      id: "login",
      classes: "",
      placeholder: "ваш Логин",
      errorText: "поле обязательно к заполнению или не было заполнено",
    }).render();

    const email = new Input({
      type: "email",
      name: "email",
      required: true,
      id: "email",
      classes: "",
      placeholder: "ваш email",
      errorText: "поле обязательно к заполнению или не было заполнено",
    }).render();

    const password = new Input({
      type: "password",
      name: "password",
      required: true,
      id: "password",
      classes: "",
      placeholder: "ваш password",
      errorText: "поле обязательно к заполнению или не было заполнено",
    }).render();

    const repeatPassword = new Input({
      type: "password",
      name: "password",
      required: true,
      id: "repeatPassword",
      classes: "",
      placeholder: "повторите пароль",
      errorText: "поле обязательно к заполнению или не было заполнено",
    }).render();

    const submit = new Input({
      type: "submit",
      value: "Registration",
    }).render();
    console.log(login);
    return [login, email, password, repeatPassword, submit];
  }
}
