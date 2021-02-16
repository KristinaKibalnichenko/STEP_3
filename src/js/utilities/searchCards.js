import getInfoFromDB from "./getInfoFromDB.js";

export default function searchCards(event) {
  event.preventDefault();
  let searchInput = document.getElementById("inpurSearch");
  let statusFilter = document.querySelector(".chooseStatus");
  let priorityFilter = document.querySelector(".choosePriority");
  
  getInfoFromDB()
      .then((data) => {
      console.log("data search ", data);
      if (data.length !== 0) {
        filterCards(searchInput, data, priorityFilter, statusFilter);         
      }
    })
    .catch((error) => console.log(error));
  
  function filterCards(searchField, data, priority, status) {
    data.forEach((elem) => {
      if (
        status.value !== "All" &&
        priority.value !== "All" &&
        searchField.value !== ""
      ) {
        if (
          elem.content.status === status.value &&
          elem.content.priority === priority.value &&
          elem.content.title
            .toUpperCase()
            .includes(searchField.value.toUpperCase())
        ) {
          console.log(elem);
        }
      } else if (
        status.value !== "All" &&
        priority.value === "All" &&
        searchField.value !== ""
      ) {
        if (
          elem.content.status === status.value &&
          elem.content.title
            .toUpperCase()
            .includes(searchField.value.toUpperCase())
        ) {
          console.log(elem);
        }
      } else if (
        status.value === "All" &&
        priority.value !== "All" &&
        searchField.value !== ""
      ) {
        if (
          elem.content.priority === priority.value &&
          elem.content.title
            .toUpperCase()
            .includes(searchField.value.toUpperCase())
        ) {
          console.log(elem);
        }
      } else if (
        status.value !== "All" &&
        priority.value === "All" &&
        searchField.value === ""
      ) {
        if (elem.content.status === status.value) {
          console.log(elem);
        }
      } else if (
        status.value === "All" &&
        priority.value !== "All" &&
        searchField.value === ""
      ) {
        if (elem.content.priority === priority.value) {
          console.log(elem);
        }
      } else if (
        status.value !== "All" &&
        priority.value !== "All" &&
        searchField.value === ""
      ) {
        if (
          elem.content.status === status.value &&
          elem.content.priority === priority.value
        ) {
          console.log(elem);
        }
      } else if (
        status.value === "All" &&
        priority.value === "All" &&
        searchField.value !== ""
      ) {
        elem.content.title
          .toUpperCase()
          .includes(searchField.value.toUpperCase());
        {
          console.log(elem);
        }
      } else if (
        status.value === "All" &&
        priority.value === "All" &&
        searchField.value === ""
      ) {
        console.log(elem);
      }
    });
  }
}