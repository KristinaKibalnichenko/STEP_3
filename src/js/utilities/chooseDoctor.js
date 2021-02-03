// import VisitCardiologist from "../src/js/classes/VisitCardiologist.js";
// import VisitDentist from "../src/js/classes/VisitDentist.js";
// import VisitTherapist from "../src/js/classes/VisitTherapist.js";

// const select = document.getElementsByTagName("select")[0];
// console.log(select);
// export default function chooseDoctor(e) {
//   const cardiologistForm = new VisitCardiologist({
//     id: "visitcardiologist",
//     classes: ["modal", "visit"],
//   });
//   const dentistForm = new VisitDentist({
//     id: "visitdentist",
//     classes: ["modal", "visit"],
//   });
//   const therapistForm = new VisitTherapist({
//     id: "visittherapist",
//     classes: ["modal", "visit"],
//   });
//   if (select.option === "Кардиолог") {
//     select.append(cardiologistForm.modal);
//   }
//   // if ((select.option[2].selected = true)) {
//   //   select.append(dentistForm.modal);
//   // } else if ((select.option[3].selected = true)) {
//   //   select.append(therapistForm.modal);
//   // }
// }
// select.addEventListener("change", chooseDoctor);