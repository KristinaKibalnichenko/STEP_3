import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";

export default class VisitDentist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const lastVisit = new Input({
      type: "date",
      name: "date",
      required: true,
      id: "date",
      classes: ["inputs"],
      placeholder: "Дата последнего посещения",
      errorText: "Поле не валидно",
      value: "",
    }).render();
    return [lastVisit];
  }
}
