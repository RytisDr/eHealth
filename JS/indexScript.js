"use strict";
const headerInitHeight = document.getElementById("index-header").clientHeight;
const circlesSection = document.querySelector("#pieSection");
const contactButtons = document.querySelectorAll(".contactBtn");
const orderButtons = document.querySelectorAll(".orderBtn");
const aboutButtons = document.querySelectorAll(".aboutBtn");
//window size
const windowWidth = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
);
//scroll actions
window.addEventListener("scroll", () => {
  const logo = document.getElementById("logo");
  const slogan = document.getElementById("slogan");
  const header = document.getElementById("index-header");
  const middleRing = document.querySelector("#middleRing");
  const outerRing = document.querySelector("#outerRing");
  const nav = document.querySelector("nav");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    logo.style.width = "70px";
    logo.style.marginTop = "15px";
    header.style.height = "80px";
    slogan.style.opacity = "0";
    if (windowWidth >= 700) {
      nav.style.height = "80px";
    }
  } else {
    logo.style.marginTop = "30px";
    header.style.height = headerInitHeight;
    logo.style.width = "130px";
    slogan.style.opacity = "1";
    if (windowWidth >= 700) {
      nav.style.height = "150px";
    }
  }
  //the ring animation script, under conditions taht its in vw
  if (circlesSection) {
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
      window.location.href = "contact";
    }
    if (e.target.className === "orderBtn") {
      window.location.href = "order";
    }
    if (e.target.className === "aboutBtn") {
      window.location.href = "about";
    }
  });
}
document.querySelector("#logo").addEventListener("click", () => {
  window.location.href = "index";
});
///fetch the JSON, apply to the DOM
fetch("data.json")
  .then(res => res.json())
  .then(result => {
    result.forEach(item => {
      if (document.body.id === "indexBody") {
        applyIndexData(item);
      }
      if (document.body.id === "aboutBody") {
        applyAboutData(item);
      }
    });
  });
function applyIndexData(data) {
  //images
  if (windowWidth > 600) {
    document.querySelector("#review1Img").src = data.reviews.review1ImgL;
    document.querySelector("#review2Img").src = data.reviews.review2ImgL;
    document.querySelector("#weights").src = data.indexMain.bgImage1L;
    document.querySelector("#buffet").src = data.indexMain.bgImage2L;
  } else {
    //main bg images
    document.querySelector("#weights").src = data.indexMain.bgImage1;
    document.querySelector("#buffet").src = data.indexMain.bgImage2;
    //review IMG
    document.querySelector("#review1Img").src = data.reviews.review1Img;
    document.querySelector("#review2Img").src = data.reviews.review2Img;
  }

  //first h1
  document.querySelector("#whiteBg h1").textContent = data.indexMain.heading1;
  //first p
  document.querySelector("#whiteBg p").textContent = data.indexMain.mainP;
  //under SVG
  document.querySelector("#pieSection h1").textContent =
    data.underCircles.heading1;
  document.querySelector("#pieSection p").textContent =
    data.underCircles.paragraph;
  //reviews
  document.querySelector("#review1 p").textContent = data.reviews.review1P;
  document.querySelector("#review2 p").textContent = data.reviews.review2P;
}
function applyAboutData(data) {
  document.querySelector("#profileP").textContent = data.aboutMe.pictureP;
  document.querySelector("#aboutP").textContent = data.aboutMe.aboutP;
  if (windowWidth > 600) {
    document.querySelector("#profile img").src = data.aboutMe.imageL;
  } else {
    document.querySelector("#profile img").src = data.aboutMe.image;
  }
}
