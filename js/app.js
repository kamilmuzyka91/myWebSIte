const section1 = document.getElementById("aboutMe");

function scrollToSection(el) {
  el.scrollIntoView();
}

// zamień funkcję na zdarzenie, bo nie przekazujesz żadnych parametrów 
btn.addEventListener("click", function(){
  window.scrollTo(0,200);
})

// scroll with the up arrow
function scrollUp() {
  return window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
