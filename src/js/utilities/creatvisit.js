import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../classes/VisitModal.js";
import createDoctorForm from "./createDoctorForm.js";


export default function createModalVisit() {
  console.log(true);
  const visitForm = new VisitModal({
    id: "modalVisit",
    classes: ["modal", "visit"],
  });
  
  root.append(visitForm.modal);
  createVisitBtn.addEventListener("click", function () {
    visitForm.openModal();
    
    const select = document.querySelector(".form-select");
  
    select.addEventListener("change", () => {
      let index = select.options.selectedIndex;
      createDoctorForm(index);
    });
  });
}
