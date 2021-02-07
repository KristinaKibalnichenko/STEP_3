import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import pushInfoToDB from "./pushInfoToDB.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function createDoctorForm(index) {
    const visitForm = document.getElementById("modalVisit");

    const cardiologistForm = new VisitCardiologist({
        id: "visitcardiologist",
        classes: ["modal", "visit"],
    }).render();
    const dentistForm = new VisitDentist({
        id: "visitdentist",
        classes: ["modal", "visit"],
    }).render();
    const therapistForm = new VisitTherapist({
        id: "visittherapist",
        classes: ["modal", "visit"],
    }).render();

    const doctorForm = document.querySelector('#doctorForm');
    // console.log("temp", doctorForm);
    let content = {};
    
    if (doctorForm != null) {
        doctorForm.remove();
    }

    if (index === 1) {
        content.doctor = "Cardiologist";
        visitForm.append(cardiologistForm);
        // console.log("cardiologistForm", cardiologistForm);
    }
    if (index === 2) {
        content.doctor = "Dentist";
        visitForm.append(dentistForm);
    }
    if (index === 3) {
        content.doctor = "Therapist";
        visitForm.append(therapistForm);
    }
    const submitBtn = document.getElementById("submitvisit");
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        content.title = document.querySelector('#purpose').value;
        content.description = document.querySelector('#description').value;
        content.fullName = document.querySelector('#patient').value;
        // content.priority = document.querySelector('#urgency').value;
        if (index === 1) {
            content.pressure = document.querySelector('#pressure').value;
            content.massIndex = document.querySelector('#massindex').value;
            content.diseases = document.querySelector('#diseases').value;
            content.age = document.querySelector('#age').value;
        }
        if (index === 2) {
            content.lastvisitdate = document.querySelector('#lastvisitdate').value;
        }
        if (index === 3) {
            content.age = document.querySelector('#age').value;
        }
        console.log(content);

        pushInfoToDB(content)
            .then((data) => {
                console.log(data);
                // !!! Здесь нужно сохранять ИД карточки (как сохранять зависит от способа отображения в форме) !!!
                getInfoFromDB().then((data) => {
                    console.log("data ", data);
                })
                .catch((err) => {
                    console.log(err.message);
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
            visitForm.remove();
    });
}