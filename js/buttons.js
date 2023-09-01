let removeBtn = document.createElement("button");
removeBtn.className = "cart__list__item__remove-btn";
removeBtn.innerText = "remove";
// document.body.append(removeBtn);

let removeBtnParent = document.getElementsByClassName(
  "cart__list__item__content"
);
// document.body.append(removeBtnParent);

removeBtnParent.appendChild(removeBtn);

// let myNodeList = document.querySelector("cart__list__item__content");
// for (let i = 0; i < myNodeList.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("REMOVE");
//   span.className = "cart__list__item__remove-btn";
//   span.appendChild(txt);
//   myNodeList[i].appendChild(span);
// }
