// document.addEventListener("DOMContentLoaded", function () {
// console.log("DOM fully loaded and parsed!");
// variable
// const section1 = document.getElementById("aboutMe");
const top_arrow = document.querySelector(".top-arrow");
const wrapper = document.querySelector(".wrapper");

const gallery_list = document.querySelectorAll("li.gallery__list");
const gallery_image = document.querySelectorAll(".sm-img");

// function scrollToSection(el) {
//   el.scrollIntoView();
// }

// scroll to the top
top_arrow.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

gallery_image.forEach(function (el) {
  el.addEventListener("click", function (event) {
    this.classList.toggle("lg-img");
  });
});
