import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../classes/VisitModal.js";

export const visitForm = new VisitModal({
  id: "modalVisit",
  classes: ["modal", "visit"],
});
console.log("visitForm ", visitForm);
root.after(visitForm.modal);
createVisitBtn.addEventListener("click", function () {
  visitForm.openModal();
  // const submitBtn = document.getElementById("submit");
  // let flag = true;
  // let token, status;

  // submitBtn.addEventListener("click", signIn);
});
