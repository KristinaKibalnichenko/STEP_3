import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import pushInfoToDB from "./pushInfoToDB.js";
import createNewCard from "./createNewCard.js";
import putInfoToDB from "./putInfoToDB.js";
import appendCards from "./appendCards.js";

export default function createDoctorForm(
  index,
  visitModal,
  id = "",
  content = {},
  switcher = true
) {
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

  const doctorForm = document.querySelector("#doctorForm");

  console.log("index: ", index);
  console.log("switcher ", switcher);
  if (switcher) {
    if (doctorForm != null) {
      doctorForm.remove();
    }
    content = {
      status: "Open",
    };
  }

  let pressure, massIndex, diseases, age, lastvisitdate;
  if (index === 1) {
    content.doctor = "Cardiologist";
    visitModal.append(cardiologistForm);

    pressure = document.querySelector("#pressure");
    massIndex = document.querySelector("#massindex");
    diseases = document.querySelector("#diseases");
    age = document.querySelector("#age");
  }
  if (index === 2) {
    content.doctor = "Dentist";
    visitModal.append(dentistForm);

    lastvisitdate = document.querySelector("#lastvisitdate");
  }
  if (index === 3) {
    content.doctor = "Therapist";
    visitModal.append(therapistForm);

    age = document.querySelector("#age");
  }

  const title = document.querySelector("#purpose");
  const description = document.querySelector("#description");
  const fullName = document.querySelector("#patient");
  const priority = document.querySelector(".urgency");

  console.log("content change: ", content);
  if (!switcher) {
    [title.value, description.value, fullName.value] = [
      content.title,
      content.description,
      content.fullName,
    ];
    // priority.value = content.priority.value;
    if (index === 1) {
      [pressure.value, massIndex.value, diseases.value, age.value] = [
        content.pressure,
        content.massIndex,
        content.diseases,
        content.age,
      ];
    }
    if (index === 2) {
      lastvisitdate.value = content.lastvisitdate;
    }
    if (index === 3) {
      age.value = content.age;
    }
  }

  const submitBtn = document.getElementById("submitvisit");
  submitBtn.addEventListener("click", function (e) {
    console.log("Submit card");
    e.preventDefault();
    let flag = true;
    content.title = title.value;
    content.description = description.value;
    content.fullName = fullName.value;
    content.priority = priority.value;
    if (
      !title.validity.valid ||
      !description.validity.valid ||
      !fullName.validity.valid ||
      !priority.validity.valid
    ) {
      flag = false;
    }
    if (index === 1) {
      content.pressure = pressure.value;
      content.massIndex = massIndex.value;
      content.diseases = diseases.value;
      content.age = age.value;
      if (
        !pressure.validity.valid ||
        !massIndex.validity.valid ||
        !diseases.validity.valid ||
        !age.validity.valid
      ) {
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
      content.age = age.value;
      if (!age.validity.valid) {
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
            // console.log("push data: ", JSON.parse(data));
            const returnedid = JSON.parse(data).id;
            // console.log("returnedid: ", returnedid);

            // console.log("Создаем новую карточку...");
            createNewCard(returnedid, content);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        putInfoToDB(id, content)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
        appendCards();
      }
      visitModal.classList.remove("active");
    }
  });
}
