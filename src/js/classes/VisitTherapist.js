import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";

export default class VisitTherapist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const age = new Input({
      type: "age",
      name: "age",
      required: true,
      id: "age",
      classes: ["inputs"],
      placeholder: "Возраст пациента",
      errorText: "Поле не валидно",
      value: "",
    }).render();
    return [age];
  }
}
