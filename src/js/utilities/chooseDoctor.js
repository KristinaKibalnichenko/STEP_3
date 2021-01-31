import VisitCardiologist from "../src/js/classes/VisitCardiologist.js";
import VisitDentist from "../src/js/classes/VisitDentist.js";
import VisitTherapist from "../src/js/classes/VisitTherapist.js";

export default function chooseDoctor() {
  const cardiologistForm = new VisitCardiologist({
    id: "visitcardiologist",
    classes: ["modal", "visit"],
  });
  const dentistForm = new VisitDentist({
    id: "visitdentist",
    classes: ["modal", "visit"],
  });
  const therapistForm = new VisitTherapist({
    id: "visittherapist",
    classes: ["modal", "visit"],
  });

  if ((select.options[1].selected = true)) {
    this.option.append(cardiologistForm.modal);
  }
  if ((select.options[2].selected = true)) {
    this.option.append(dentistForm.modal);
  } else if ((select.options[3].selected = true)) {
    this.option.append(therapistForm.modal);
  }
}

// chooseDoctor();
