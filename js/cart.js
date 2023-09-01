//CART

// Create close btn for each list element
// let myNodeList = document.querySelector("cart__list__item");
// for (let i = 0; i < myNodeList.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("REMOVE");
//   span.className = "cart__list__item__remove-btn";
//   span.appendChild(txt);
//   myNodeList[i].appendChild(span);
// }

let removeBtn = document.createElement("button");
removeBtn.className = "cart__list__item__remove-btn";
removeBtn.innerText = "remove";

// let removeBtnParent = document.getElementsByClassName(
//   "cart__list__item__content"
// );
// removeBtnParent.appendChild(removeBtn);

// document.body.append(removeBtn);

// let div = document.createElement("div");
// div.style.background = "red";
// div.style.width = "50px";
// div.style.height = "50px";

// document.body.append(div);

// let div1 = document.getElementsByClassName("cart__list__item__remove-btn");
// div1.onmousemove = function () {
//   div1.style.background = "red";
// };

// Push the btn to close current el
// let close = document.getElementsByClassName("cart__list__item__remove-btn");
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     let div = this.parentElement;
//     div.style.display = "none";
//   };
// }

// QUANTITY

function increaseCount(e, el) {
  let input = document.querySelector(".cart__list__item__quantity__num");
  input = el.previousElementSibling;
  let value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(e, el) {
  let input = el.nextElementSibling;
  let value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
