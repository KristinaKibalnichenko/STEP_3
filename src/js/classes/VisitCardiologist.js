import VisitDoctor from "./VisitDoctor.js";
import Input from "./Input.js";
import TextArea from "./TextArea.js";

export default class VisitCardiologist extends VisitDoctor {
  constructor({ id, classes }) {
    super({ id, classes });
  }
  createFormElements() {
    const pressure = new Input({
      type: "number",
      name: "pressure",
      required: true,
      id: "pressure",
      classes: ["inputs"],
      placeholder: "Обычное давление",
      errorText: "Поле не валидно",
      value: "",
    }).render();

    const massIndex = new Input({
      type: "number",
      name: "massindex",
      required: true,
      id: "massindex",
      classes: ["inputs"],
      placeholder: "Индекс массы тела",
      errorText: "Поле не валидно",
      value: "",
    }).render();

    const heartDiseases = new TextArea({
      maxlength: "100", 
      name: "diseases",
      required: true,
      id: "diseases",
      classes: ["textarea"],
      placeholder: "Перенесенные заболевания сердечно-сосудистой системы",
      value: "",
    }).render();

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
    return [pressure, massIndex, heartDiseases, age];
  }
}