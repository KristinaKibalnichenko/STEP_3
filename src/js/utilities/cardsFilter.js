const filter_priority = document.querySelector("priority");
const filter_status = document.querySelector("status");
const items_el = document.getElementById("divCardsId");
const items = items_el.getElementsByClassName("card-wrapper");

export default function cardFilter() {
  filter_priority.onchange = function () {
    console.log(this.value);
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(this.value)) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  };

  filter_status.onchange = function () {
    console.log(this.value);
    for (var i = 0; i < items.length; i++) {
      if (items[i].classList.contains(this.value)) {
        items[i].style.display = "block";
      } else {
        items[i].style.display = "none";
      }
    }
  };
}
cardFilter();
