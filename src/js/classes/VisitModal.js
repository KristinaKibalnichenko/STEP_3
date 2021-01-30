import Modal from "./Modal.js";
import Select from "./Select.js";

export default class VisitModal extends Modal {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const select = new Select({
      id: "Выберите врача",
      classes: ["form-select"],
      options: ["Выберите врача", "Кардиолог", "Стоматолог", "Терапевт"],
    }).render();
    return [select];
  }
}
