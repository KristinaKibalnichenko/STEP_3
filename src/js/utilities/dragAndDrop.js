import { root } from "./constants.js";

// export default function moveCard() {
// const cardDrag = document.getElementsByClassName("card-wrapper");
// cardDrag.onmousedown = function (e) {
//   const coords = getCoords(cardDrag);
//   const shiftX = e.pageX - coords.left;
//   const shiftY = e.pageY - coords.top;

//   cardDrag.style.position = "absolute";
//   document.body.appendChild(cardDrag);
//   moveAt(e);

//   cardDrag.style.zIndex = 1000; // над другими элементами

//   function moveAt(e) {
//     cardDrag.style.left = e.pageX - shiftX + "px";
//     cardDrag.style.top = e.pageY - shiftY + "px";
//   }

//   document.onmousemove = function (e) {
//     moveAt(e);
//   };

//   cardDrag.onmouseup = function () {
//     document.onmousemove = null;
//     cardDrag.onmouseup = null;
//   };
// };

// cardDrag.ondragstart = function () {
//   return false;
// };

// function getCoords(elem) {
//   const box = elem.getBoundingClientRect();
//   return {
//     top: box.top + pageYOffset,
//     left: box.left + pageXOffset,
//   };
// }
