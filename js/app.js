const section1 = document.getElementById("aboutMe");

function scrollToSection(el) {
  el.scrollIntoView();
}

// scroll with the up arrow
function scrollUp() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
