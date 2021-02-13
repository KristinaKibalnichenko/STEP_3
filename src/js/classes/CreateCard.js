export default class CreateCard {
    constructor({ id, content, classes }) {
      this.id = id;
      this.content = content;
      this.classes = classes;
      this.output = this.render();
    }
    render() {
        const contentelems = this.createElements() || "";
        // console.log("CreateCard id: ", this.id);
        // console.log("CreateCard content: ", this.content);
        const editBtn = this.createElement({
            elem: "button",
            content: "EDIT",
            id: "editBtn",
            classes: ["cards-btn", "edit"],
        });
        const showMoreBtn = this.createElement({
            elem: "button",
            content: "SHOW/HIDE MORE",
            id: "showMoreBtn",
            classes: ["cards-btn", "showMore"],
        });
        const statusDoneBtn = this.createElement({
            elem: "button",
            // content: [this.content.status, " Exchange visit status to \"DONE\""],
            content: [this.content.status, " Exchange status to \"DONE\""],
            id: "doneBtn",
            classes: ["cards-btn", "done"],
        });
        const divBtnWrapper = this.createElement({
            elem: "div",
            // id: "divBtns",
            classes: ["card-btn-wrapper"],
            content: [editBtn, showMoreBtn, statusDoneBtn],
        });
        const wrapper = this.createElement({
            elem: "div",
            id: this.id,
            classes: ["card-wrapper"],
            content: [...contentelems, divBtnWrapper],
            attr: "draggable", 
            value: true,
        });

        return wrapper;
    }
  
    createElement({ elem, id, classes, content, attr, value }) {
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
        if (attr) {
            element.attr = value;
        }
        return element;
    }

    createElements() {
        let contentelems = [];
        for (let key in this.content) {
            if (key == "doctor" || key == "fullName") {
                contentelems.push(this.createElement({
                    elem: "p",
                    classes: ["cardelem", "defaultactive"],
                    content: [key, " - ", this.content[key]],
                }));
            } else {
                contentelems.push(this.createElement({
                    elem: "p",
                    classes: ["cardelem"],
                    content: [key, " - ", this.content[key]],
                }));
            }
        }
        return Array.from(contentelems);
    }
}
  