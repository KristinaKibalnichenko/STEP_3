import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../classes/VisitModal.js";
import createDoctorForm from "./createDoctorForm.js";

export default function createModalVisit() {
  console.log(true);
  const visitModalForm = new VisitModal({
    id: "modalVisit",
    classes: ["modal", "visit"],
  });
  
  root.append(visitModalForm.modal);
  createVisitBtn.addEventListener("click", function () {
    visitModalForm.openModal();
    console.log("visitModalForm", visitModalForm);

    const select = document.querySelector(".form-select");
  
    select.addEventListener("change", () => {
      let index = select.options.selectedIndex;
      createDoctorForm(index, visitModalForm);
    });
  });
}
