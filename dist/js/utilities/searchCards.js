import getInfoFromDB from "./getInfoFromDB.js";

export default function searchCards(event) {
  const cards = document.querySelectorAll(".card-wrapper");

  cards.forEach((card) => {
    card.style.display = "none";
  });
  event.preventDefault();
  let searchInput = document.getElementById("inpurSearch").value;
  let statusFilter = document.querySelector(".chooseStatus").value;
  let priorityFilter = document.querySelector(".choosePriority").value;

  getInfoFromDB()
    .then((data) => {
      // const newCards = Array.from(document.querySelectorAll(".card-wrapper"));

      if (data.length !== 0) {
        // console.log(data);
        const result = filterCards(data);
        // console.log(newCards);
        result.forEach((item) => {
          cards.forEach((elem) => {
            if (item.id == elem.id) {
              elem.style.display = "block";
            }
          });
        });
      }
    })
    .catch((error) => console.log(error));

  function filterCards(data) {
    return data.filter(
      ({ content }) =>
        (statusFilter === content.status || statusFilter === "All") &&
        (content.priority === priorityFilter || priorityFilter === "All") &&
        (content.description
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
          !searchInput)
    );
  }
}
