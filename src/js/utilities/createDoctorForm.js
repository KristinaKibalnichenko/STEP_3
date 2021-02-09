import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import pushInfoToDB from "./pushInfoToDB.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function createDoctorForm(index, visitModalForm) {
    const cardiologistForm = new VisitCardiologist({
        // id: "visitcardiologist",
        classes: ["modal", "visit"],
    }).render();
    const dentistForm = new VisitDentist({
        // id: "visitdentist",
        classes: ["modal", "visit"],
    }).render();
    const therapistForm = new VisitTherapist({
        // id: "visittherapist",
        classes: ["modal", "visit"],
    }).render();

    const doctorForm = document.querySelector('#doctorForm');
    
    if (doctorForm != null) {
        doctorForm.remove();
    }

    let content = {};
    if (index === 1) {
        content.doctor = "Cardiologist";
        visitModalForm.modal.append(cardiologistForm);
    }
    if (index === 2) {
        content.doctor = "Dentist";
        visitModalForm.modal.append(dentistForm);
    }
    if (index === 3) {
        content.doctor = "Therapist";
        visitModalForm.modal.append(therapistForm);
    }
    const submitBtn = document.getElementById("submitvisit");
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();
        let flag = true;
        
        const title = document.querySelector('#purpose');
        const description = document.querySelector('#description');
        const fullName = document.querySelector('#patient');
        const priority = document.querySelector('.urgency');
        content.title = title.value;
        content.description = description.value;
        content.fullName = fullName.value;
        content.priority = priority.value;
        if (!title.validity.valid || !description.validity.valid || !fullName.validity.valid || !priority.validity.valid) {
            flag = false;
        }
        if (index === 1) {
            const pressure = document.querySelector('#pressure');
            const massIndex = document.querySelector('#massindex');
            const diseases = document.querySelector('#diseases');
            const age = document.querySelector('#age');
            content.pressure = pressure.value;
            content.massIndex = massIndex.value;
            content.diseases = diseases.value;
            content.age = age.value;
            if (!pressure.validity.valid || !massIndex.validity.valid || !diseases.validity.valid || !age.validity.valid) {
                flag = false;
            }
        }
        if (index === 2) {
            const lastvisitdate = document.querySelector('#lastvisitdate');
            content.lastvisitdate = lastvisitdate.value;
            if (!lastvisitdate.validity.valid) {
                flag = false;
            }
        }
        if (index === 3) {
            const age = document.querySelector('#age');
            content.age = age.value;
            if (!age.validity.valid) {
                flag = false;
            }
        }

        console.log("content", content);
        console.log("flag: ", flag);
        if (!flag) {
            console.log("Some field(s) do(es) not valid");
        } else {
            pushInfoToDB(content)
                .then((data) => {
                    console.log(data);
                    // !!! Здесь нужно сохранять ИД карточки (как сохранять зависит от способа отображения в форме) !!!
                    getInfoFromDB().then((data) => {
                        console.log("data ", data);
                        // createCardsForm();
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
                })
                .catch((err) => {
                    console.log(err.message);
                });
            visitModalForm.closeModal();
        }
    });
}