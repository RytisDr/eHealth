"use strict";
const headerInitHeight = document.getElementById("index-header").clientHeight;

window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  const slogan = document.getElementById("slogan");
  const header = document.getElementById("index-header");
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
});
