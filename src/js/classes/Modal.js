export default class Modal {
    constructor({ id, classes }) {
      this.id = id;
      this.classes = classes;
      this.modal = this.render();
    }
    render() {
      const contentelems = this.createForm(this.createFormElements()) || "";
      
      const span = this.createElement({
        elem: "span",
        content: "X",
        classes: ["close"],
      });
      
      const divModal = this.createElement({
        elem: "div",
        classes: this.classes,
        content: [span, ...contentelems],
        id: this.id,
      });

      span.addEventListener("click", () => this.closeModal());

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
      return formElements;
    }
    // createFormElements() {}
    openModal() {
      // console.log(this.modal);
      this.modal.classList.add("active");
    }
    closeModal() {
      this.modal.classList.remove("active");
      
      const forms = Object.values(this.modal.getElementsByTagName("form"));
      forms.forEach((form) => {
        Object.values(form.children).forEach((element) => {
          if (element.getAttribute("type") != "submit") {
            element.value = "";
          }
          if (element.tagName === "SELECT") {
            element.value = element.firstElementChild.value;
          }
        });
      });
    }
  }
  