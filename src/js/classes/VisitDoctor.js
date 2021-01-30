import Select from "./Select.js";
import Input from "./Input.js";
import TextArea from "./TextArea.js";

export default class VisitDoctor {
  constructor({ id, classes }) {
    this.id = id;
    this.classes = classes;
  }
  createFormElements() {
    const purposeVisit = new Input ({
      type: "text",
      name: "purpose",
      required: true,
      id: "purpose",
      classes: ["inputs"],
      placeholder: "Цель визита",
      errorText: "Поле не валидно",
      value: "",
    }).render();

    const shortDescription = new TextArea({
      type: "text",
      name: "description",
      required: true,
      id: "description",
      classes: ["textarea"],
      placeholder: "Краткое описание визита",
      value: "",
    }).render();

    const patient = new Input ({
      type: "text",
      name: "patient",
      required: true,
      id: "patient",
      classes: ["inputs"],
      placeholder: "ФИО пациента",
      errorText: "Поле не валидно",
      value: "",
    }).render();

    const urgency = new Select({
      id: "urgency",
      classes: ["form-select"],
      options: ["Priority", "High", "Normal", "Low"],
    }).render();
    return [purposeVisit, shortDescription, patient, urgency];
  }
}
