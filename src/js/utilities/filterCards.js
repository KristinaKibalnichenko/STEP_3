const filter_status = document.querySelectorAll("status");
const filter_priority = document.querySelectorAll("priority");
const items_el = document.getElementById("divCardsId");
var card_items = items_el.getElementsByClassName("card-wrapper");

export default function filterCards() {
  filter_status.onchange = function () {
    console.log(this.value);
    for (var i = 0; i < card_items.length; i++) {
      if (card_items[i].classList.contains(this.value)) {
        card_items[i].style.display = "block";
      } else {
        card_items[i].style.display = "none";
      }
    }
  };

  filter_priority.onchange = function () {
    console.log(this.value);
    for (var i = 0; i < card_items.length; i++) {
      if (card_items[i].classList.contains(this.value)) {
        card_items[i].style.display = "block";
      } else {
        card_items[i].style.display = "none";
      }
    }
  };
}
