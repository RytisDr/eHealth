"use strict";
const headerInitHeight = document.getElementById("index-header").clientHeight;
const circlesSection = document.querySelector("#pieSection");
const contactButtons = document.querySelectorAll(".contactBtn");
const orderButtons = document.querySelectorAll(".orderBtn");
const aboutButtons = document.querySelectorAll(".aboutBtn");
//scroll actions
window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  const slogan = document.getElementById("slogan");
  const header = document.getElementById("index-header");
  const middleRing = document.querySelector("#middleRing");
  const outerRing = document.querySelector("#outerRing");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logo.style.width = "70px";
    logo.style.margin = "15px auto 0";
    header.style.height = "80px";
    slogan.style.opacity = "0";
  } else {
    logo.style.margin = "30px auto 0";
    header.style.height = headerInitHeight;
    logo.style.width = "130px";
    slogan.style.opacity = "1";
  }
  //the ring animaiton script, under conditions taht its in vw
  if (window.location.href.includes("index")) {
    if (isInViewport(circlesSection)) {
      middleRing.style.opacity = "1";
      middleRing.addEventListener("transitionend", opacity1);
    } else {
      middleRing.style.opacity = "0";
      outerRing.style.opacity = "0";
      middleRing.removeEventListener("transitionend", opacity1);
    }
  }
});
function opacity1() {
  outerRing.style.opacity = "1";
}
function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}
//Burger menu actions
document.querySelector("#burger").addEventListener("click", () => {
  document.querySelector("nav").style.top = "0";
  document.querySelector("#closeMenu").addEventListener("click", () => {
    document.querySelector("nav").style.top = "-301px";
  });
});
//navigation button actions
aboutButtons.forEach(btn => {
  listen(btn);
});
contactButtons.forEach(btn => {
  listen(btn);
});
orderButtons.forEach(btn => {
  listen(btn);
});
function listen(btn) {
  btn.addEventListener("click", e => {
    if (e.target.className === "contactBtn") {
      window.location.href = "/contact.html";
    }
    if (e.target.className === "orderBtn") {
      window.location.href = "/order.html";
    }
    if (e.target.className === "aboutBtn") {
      window.location.href = "/about.html";
    }
  });
}
document.querySelector("#home").addEventListener("click", () => {
  window.location.href = "index.html";
});
///fetch
fetch("data.json")
  .then(res => res.json())
  .then(result => {
    console.log(result);
  });
