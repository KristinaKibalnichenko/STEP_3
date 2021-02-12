import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../classes/VisitModal.js";
import createDoctorForm from "./createDoctorForm.js";

export default function createModalVisit(switcher, id, content) {
  // console.log("card.id__: ", id);
  if (switcher) {
    const visitModalForm = new VisitModal({
      id: "modalVisit",
      classes: ["modal", "visit"],
    });
    const visitModal = visitModalForm.modal;
    root.append(visitModal);
    console.log("visitModalForm.modal", visitModalForm);
    createVisitBtn.addEventListener("click",  function (e) {
      e.stopPropagation();
      visitModalForm.openModal();
      const selectForm = document.querySelector("#visit-form");
      // console.log("selectForm create visit", selectForm);
      selectForm.style.display = "block";
      const select = document.querySelector(".form-select");
    
      select.addEventListener("change", () => {
        let index = select.options.selectedIndex;
        createDoctorForm(index, visitModal);
      });
    });
  } else {
    const visitModal = document.getElementById("modalVisit");
    visitModal.classList.add("active");
    const selectForm = document.querySelector("#visit-form");
    // console.log("selectForm ", selectForm);
    selectForm.style.display = "none";
    
    let index;
    if (content.doctor == "Cardiologist") {
      index = 1;
    }
    if (content.doctor == "Dentist") {
      index = 2;
    }
    if (content.doctor == "Therapist") {
      index = 3;
    }
    createDoctorForm(index, visitModal, id, content, false);
  }
  
  const visitModal = document.getElementById("modalVisit");
  const closeBtn = document.querySelector(".close");
  document.addEventListener('click', function(e) {
    const target = e.target;
    const itsmodal = target == visitModal || visitModal.contains(target);
    const itsbtn = target == closeBtn;
    const modalIsActive = visitModal.classList.contains("active");
    
    if (!itsmodal && !itsbtn && modalIsActive) {
      visitModal.classList.remove("active");
    }
  });
}
