import Form from "../classes/Form.js";
import Input from "../classes/Input.js";
import Select from "../classes/Select.js";
// import { root } from "./constants.js";
// import getInfoFromDB from "./getInfoFromDB.js";
import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";

export default function createDoctorForm(index) {
    const formDoctor = new Form({
        id: "doctorForm",
        classes: ["formclasses"],
        action: "",
    }).render();

    const divVisit = document.getElementById("modalVisit");
    const cardiologistForm = new VisitCardiologist({
        id: "visitcardiologist",
        classes: ["modal", "visit"],
    });
    // cardiologistForm.createFormElements();
    console.log("cardiologistForm ", cardiologistForm);
    const dentistForm = new VisitDentist({
        id: "visitdentist",
        classes: ["modal", "visit"],
    });
    const therapistForm = new VisitTherapist({
        id: "visittherapist",
        classes: ["modal", "visit"],
    });

    if (index === 0) {
        formDoctor.append(cardiologistForm);
    }
    if (index === 1) {
        formDoctor.append(dentistForm);
    }
    if (index === 2) {
        formDoctor.append(therapistForm);
    }

    divVisit.append(formDoctor);
}