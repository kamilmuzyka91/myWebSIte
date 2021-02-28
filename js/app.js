document.addEventListener("DOMContentLoaded", () => {
  // DOM is ready ?
  console.log("DOM fully loaded and parsed");

  // scroll to the top

  const top_arrow = document.querySelector(".top-arrow");

  top_arrow.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // lightbox gallery

  const lightbox = document.createElement("div");
  const img = document.createElement("img");
  const images = document.querySelectorAll(".gallery__img");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  images.forEach((images) => {
    images.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      const img = document.createElement("img");
      img.src = images.src;
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild);
      }
      lightbox.appendChild(img);
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove("active");
  });
});
