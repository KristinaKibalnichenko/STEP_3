import { createVisitBtn, root } from "./constants.js";
import VisitModal from "../classes/VisitModal.js";
// import VisitCardiologist from "../classes/VisitCardiologist.js";
// import VisitDentist from "../classes/VisitDentist.js";
// import VisitTherapist from "../classes/VisitTherapist.js";
import createDoctorForm from "./createDoctorForm.js";


export default function createModalVisit() {
  console.log(true);
  const visitForm = new VisitModal({
    id: "modalVisit",
    classes: ["modal", "visit"],
  });
  console.log("visitForm ", visitForm);
  root.append(visitForm.modal);
  createVisitBtn.addEventListener("click", function () {
    visitForm.openModal();
    
    const select = document.getElementsByClassName("form-select")[0];
    console.log("select ", select);
    // console.log("select.option", select.option);

    // const cardiologistForm = new VisitCardiologist({
    //   id: "visitcardiologist",
    //   classes: ["modal", "visit"],
    // });
    // const dentistForm = new VisitDentist({
    //   id: "visitdentist",
    //   classes: ["modal", "visit"],
    // });
    // const therapistForm = new VisitTherapist({
    //   id: "visittherapist",
    //   classes: ["modal", "visit"],
    // });

    let n = select.options.selectedIndex;
    console.log(n);

    // if (select.option === "Кардиолог") {
    //   console.log("Кардиолог");
    //   select.append(cardiologistForm.modal);
    // }
  // if ((select.option[2].selected = true)) {
  //   select.append(dentistForm.modal);
  // } else if ((select.option[3].selected = true)) {
  //   select.append(therapistForm.modal);
  // }
  // }
  
    select.addEventListener("change", () => {
      let index = select.options.selectedIndex;
      console.log("index", index);
      createDoctorForm(index);
    });
  });
}
