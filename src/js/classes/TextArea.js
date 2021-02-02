export default class TextArea {
  constructor({ type, name, required, id, classes, placeholder, value }) {
    this.type = type;
    this.name = name;
    this.required = required;
    this.id = id;
    this.classes = classes;
    this.placeholder = placeholder;
    this.value = value;
  }
  render() {
    let textarea = document.createElement("textarea");
    textarea.type = this.type;
    textarea.name = this.name;
    textarea.required = this.required;
    textarea.id = this.id;
    // input.classes = this.classes;
    textarea.classList.add(...this.classes);
    textarea.placeholder = this.placeholder;
    textarea.value = this.value;

    this.textarea = textarea;

    return textarea;
  }
  handleBlur() {
    if (this.required) {
      console.log(true);
      if (!this.textarea.validity.valid) {
        console.log("DBL true");
        this.textarea.setCustomValidity(this.errorText);
      } else {
        console.log("Всё Ок");
      }
    }
    return false;
  }
}
