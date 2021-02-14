import putInfoToDB from "./putInfoToDB.js";
import createModalVisit from "./creatvisit.js";

export default function cardsBtnsHandler(card, content) {
  const divCards = document.querySelector("#divCardsId");
  const editBtn = card.getElementsByClassName("cards-btn edit")[0];
  const showMoreBtn = card.getElementsByClassName("cards-btn showMore")[0];
  const statusDoneBtn = card.getElementsByClassName("cards-btn done")[0];

  if (content.status == "Done") {
    statusDoneBtn.disabled = true;
  }
  divCards.append(card);

  if (content.status == "Open") {
    statusDoneBtn.addEventListener("click", function () {
      statusDoneBtn.disabled = true;
      content.status = "Done";
      putInfoToDB(card.id, content)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  }

  showMoreBtn.addEventListener("click", function () {
    // console.log("card", card);
    const cardElems = Array.from(card.getElementsByClassName("cardelem"));

    for (let index = 1; index < cardElems.length; index++) {
      // console.log("cardElems", cardElems);
      cardElems[index].classList.toggle("active");
    }
  });

  editBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const doctorForm = document.querySelector("#doctorForm");
    if (doctorForm != null) {
      doctorForm.remove();
    }
    createModalVisit(false, card.id, content);
  });
}
