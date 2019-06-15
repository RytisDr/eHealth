"use strict";
const headerInitHeight = document.getElementById("index-header").clientHeight;
const circlesSection = document.querySelector("#pieSection");
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
  if (isInViewport(circlesSection)) {
    middleRing.style.opacity = "1";
    middleRing.addEventListener("transitionend", opacity1);
  } else {
    middleRing.style.opacity = "0";
    outerRing.style.opacity = "0";
    middleRing.removeEventListener("transitionend", opacity1);
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
