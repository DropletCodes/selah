// NAV LINKS

const menuIcon = document.getElementById("menu_icon");
const navLinks = document.getElementById("nav_links");

menuIcon.addEventListener("click", menuClicked, false);

function menuClicked() {
  navLinks.classList.toggle("hidden");
}

// SLIDESHOW

const ssImg = document.getElementById("slideshow_image");
const nextImg = document.getElementById("next_image");
let randomNum = 0;

if (ssImg && nextImg) {
  ssImg.addEventListener("click", next, false);

  function next() {
    randomNum = Math.floor(Math.random() * 100) + 1;

    nextImg.style.backgroundImage = `url(images/slideshow-images/${randomNum}.jpg),
    linear-gradient(to bottom, #eef8f5, #8ec1ba)`;
    nextImg.style.zIndex = "5";
    nextImg.classList.remove("hidden");

    setTimeout(finishNext, 1200);
  }

  function finishNext() {
    ssImg.style.backgroundImage = `url(images/slideshow-images/${randomNum}.jpg),
    linear-gradient(to bottom, #eef8f5, #8ec1ba)`;
    nextImg.classList.add("hidden");
  }
}

// FORM

function formSubmitted() {
  console.log("Form submitted!");
  alert("Form received!");
}
