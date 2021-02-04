import Request from "../utilities/request.js";
import HtmlElement from "./CreateElem.js";
import Div from "./Div.js";
// import { VisitCardiologist } from "./VisitCardiologist.js";
// import { VisitDentist } from "./VisitDentist.js";
// import { VisitTherapist } from "./VisitTherapist.js";

export class VisitsPalette extends HtmlElement {
  constructor() {
    super({
      tagName: "div",
      classes: ["div"],
    });
    this.allVisits = new Div();
  }

  async refreshContent() {
    this.element.innerHTML = "";
    await this.getAllVisits();
    await this.createVisitCards();
    this.renderNoCardsCheck();
    this.renderCards();
  }

  async getAllVisits() {
    const getAllVisitsRequest = new Request();
    const allVisitsJson = await getAllVisitsRequest.sendRequest({
      path: "",
      method: "GET",
    });
    this.allVisits = JSON.parse(allVisitsJson);
  }
}
