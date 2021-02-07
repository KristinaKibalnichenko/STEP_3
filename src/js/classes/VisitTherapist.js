import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";

export default class VisitTherapist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const doctorFormElements = super.createFormElements();

    const age = new Input({
      type: "number",
      name: "age",
      required: true,
      id: "age",
      classes: ["inputs"],
      placeholder: "Возраст пациента",
      errorText: "Поле не валидно",
      value: "",
    }).render();

    const submit = new Input({
      type: "submit", 
      name: "submit", 
      id: "submitvisit", 
      classes: ["inputs", "submit"], 
      value: "Create"}).render();

    return [...doctorFormElements, age, submit];
  }
}
