"use strict";
const contactButtons = document.querySelectorAll(".contactBtn");
const orderButtons = document.querySelectorAll(".orderBtn");

//Burger menu actions
document.querySelector("#burger").addEventListener("click", () => {
  document.querySelector("nav").style.top = "0";
  document.querySelector("#closeMenu").addEventListener("click", () => {
    document.querySelector("nav").style.top = "-301px";
  });
});
//navigation button actions
contactButtons.forEach(btn => {
  listen(btn);
});
orderButtons.forEach(btn => {
  listen(btn);
});
function listen(btn) {
  btn.addEventListener("click", () => {
    if (btn.contactButtons) {
      window.location.href = "contact.html";
    }
    if (orderButtons) {
      window.location.href = "order.html";
    }
  });
}
