import Modal from "./Modal.js";
import Form from "./Form.js";
import Select from "./Select.js";

export default class VisitModal extends Modal {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createForm(formElements = []) {
    const formVisit = new Form({
      id: "visit-form",
      classes: ["formclasses"],
      action: "",
    }).render();
    formVisit.append(...formElements);
    return [formVisit];
  }

  createFormElements() {
    // const label = document.createElement("label");
    // label.textContent = "Выберите врача: ";

    const select = new Select({
      id: "chooseDoctor",
      classes: ["form-select"],
      options: ["Выберите врача: ", "Кардиолог", "Стоматолог", "Терапевт"],
    }).render();
    // label.append(select);
    // return [label];
    return [select];
  }

  closeModal() {
    super.closeModal();
    const doctorForm = document.getElementById("doctorForm");
    doctorForm.remove();
  }
}
