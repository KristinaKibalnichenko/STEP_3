import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import pushInfoToDB from "./pushInfoToDB.js";
import createNewCard from "./createNewCard.js";
import putInfoToDB from "./putInfoToDB.js";
import appendCards from "./appendCards.js";
import { root } from "./constants.js";
import CreateCard from "../classes/CreateCard.js";
import cardsBtnsHandler from "./cardsBtnsHandler.js";
import getInfoFromDB from "./getInfoFromDB.js";

export default function createDoctorForm(index, visitModal, id = '', content = {}, switcher = true) {
    // console.log("card.id new__: ", id);
    console.log("visitModal", visitModal);
    const cardiologistForm = new VisitCardiologist({
        classes: ["modal", "visit"],
    }).render();
    const dentistForm = new VisitDentist({
        classes: ["modal", "visit"],
    }).render();
    console.log("dentistForm ", dentistForm);
    const therapistForm = new VisitTherapist({
        classes: ["modal", "visit"],
    }).render();

    const doctorForm = document.querySelector('#doctorForm');
    
    // console.log("index: ", index);
    // console.log("switcher ", switcher);
    if (switcher) {
        if (doctorForm != null) {
            doctorForm.remove();
        }
        content = {
            status: "Open",
        };
    }

    let pressure, massIndex, diseases, cardioageage, therapistage, lastvisitdate;
    if (index === 1) {
        content.doctor = "Cardiologist";
        visitModal.append(cardiologistForm);

        pressure = document.querySelector('#pressure');
        massIndex = document.querySelector('#massindex');
        diseases = document.querySelector('#diseases');
        cardioageage = document.querySelector('#cardioage');
    }
    if (index === 2) {
        content.doctor = "Dentist";
        visitModal.append(dentistForm);

        lastvisitdate = document.querySelector('#lastvisitdate');
    }
    if (index === 3) {
        content.doctor = "Therapist";
        visitModal.append(therapistForm);

        therapistage = document.querySelector('#therapistage');
    }

    const title = document.querySelector('#purpose');
    const description = document.querySelector('#description');
    const fullName = document.querySelector('#patient');
    const priority = document.querySelector('.urgency');
    console.log("priority ", priority);
    console.log("fullName ", fullName);

    console.log("content change: ", content);
    if (!switcher) {
        [title.value, description.value, fullName.value] = [content.title, content.description, content.fullName];
        priority.options.value = content.priority.value;
        if (index === 1) {
            [pressure.value, massIndex.value, diseases.value, cardioageage.value] = [content.pressure, content.massIndex, content.diseases, content.cardioageage];
        }
        if (index === 2) {
            lastvisitdate.value = content.lastvisitdate;
        }
        if (index === 3) {
            therapistage.value = content.therapistage;
        }
    }

    const submitBtn = document.getElementById("submitvisit");
    submitBtn.addEventListener("click", function(e) {
        console.log("Submit card");
        e.preventDefault();
        let flag = true;
        content.title = title.value;
        content.description = description.value;
        content.fullName = fullName.value;
        content.priority = priority.value;
        if (!title.validity.valid || !description.validity.valid || !fullName.validity.valid || !priority.validity.valid) {
            flag = false;
        }
        if (index === 1) {
            content.pressure = pressure.value;
            content.massIndex = massIndex.value;
            content.diseases = diseases.value;
            content.cardioageage = cardioageage.value;
            if (!pressure.validity.valid || !massIndex.validity.valid || !diseases.validity.valid || !cardioageage.validity.valid) {
                flag = false;
            }
        }
        if (index === 2) {
            content.lastvisitdate = lastvisitdate.value;
            if (!lastvisitdate.validity.valid) {
                flag = false;
            }
        }
        if (index === 3) {
            content.therapistage = therapistage.value;
            if (!therapistage.validity.valid) {
                flag = false;
            }
        }

        // console.log("content", content);
        // console.log("flag: ", flag);
        if (!flag) {
            console.log("Some field(s) do(es) not valid");
        } else {
            if (switcher) {
                pushInfoToDB(content)
                    .then((data) => {
                        const returnedid = JSON.parse(data).id;
                        createNewCard(returnedid, content);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            } else {
                putInfoToDB(id, content)
                    .then((data) => {
                        const oldCard = document.getElementById(id);
                        const returnedContent = JSON.parse(data).content;
                        const newCard = new CreateCard ({
                            id: id,
                            content: returnedContent,
                        }).render();
                        document.getElementById("divCardsId").replaceChild(newCard, oldCard);
                        if (content.status == "Done") {
                            const statusDoneBtn = newCard.getElementsByClassName("cards-btn done")[0];
                            statusDoneBtn.disabled = true;
                        }
                        cardsBtnsHandler(newCard, returnedContent);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
                // appendCards();
            }
            visitModal.classList.remove("active");
        }
    });
}