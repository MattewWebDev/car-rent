const navBar = document.querySelector(".navbar");

const barBtn = document.querySelector(".bars-button");
const xBtn = document.querySelector(".x-button");
const navLinks = document.querySelector(".navbar-links");

barBtn.addEventListener("click", () => {
  xBtn.classList.toggle("hide");
  barBtn.classList.toggle("hide");
  navLinks.classList.add("show");
  navBar.classList.add("scrolled");
});

xBtn.addEventListener("click", () => {
  xBtn.classList.toggle("hide");
  barBtn.classList.toggle("hide");
  navLinks.classList.remove("show");
  navBar.classList.remove("scrolled");
});

clearTimeout(
  (window.onscroll = () => {
    if (window.scrollY > 0) {
      navBar.classList.add("scrolled");
    } else {
      navBar.classList.remove("scrolled");
    }
  })
);
const carSelector = document.querySelectorAll(".cars-selector");
const car = document.querySelectorAll(".car");

carSelector.forEach(function (selected, index) {
  selected.addEventListener("click", function () {
    car.forEach((car) => {
      car.classList.remove("show");
    });
    car[index].classList.add("show");
  });
});

carSelector.forEach((selected) => {
  selected.addEventListener("click", () => {
    carSelector.forEach((selected) => {
      selected.classList.remove("chose");
    });
    selected.classList.add("chose");
  });
});

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navBar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight + 20;

    window.scrollTo({
      left: 0,
      top: position,
    });
    if (window.innerWidth < 768) {
      navLinks.classList.toggle("show");
      xBtn.classList.toggle("hide");
      barBtn.classList.toggle("hide");
    }
  });
});

scrollLinks.forEach((link) => {
  link.addEventListener("click", () => {
    scrollLinks.forEach((link) => {
      link.classList.remove("chosen");
    });
    link.classList.add("chosen");
  });
});

const conSection = document.querySelectorAll(".section");
const windowBottom = window.innerHeight;

window.addEventListener("scroll", function () {
  scrollLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= windowBottom - 500) {
      scrollLinks.forEach((link) => {
        link.classList.remove("chosen");
      });
      link.classList.add("chosen");
    }
    if (this.window.scrollY < 1) {
      scrollLinks.forEach((link) => {
        link.classList.remove("chosen");
      });
    }
  });
});

window.addEventListener("scroll", function () {
  conSection.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop + 100 < windowBottom) {
      section.classList.add("animation");
    } else {
      section.classList.remove("animation");
    }
  });
});

const homeBtn = document.querySelector(".home-button");

homeBtn.addEventListener("click", () => {
  const element = document.getElementById("about");
  let navHeight = document
    .querySelector(".navbar")
    .getBoundingClientRect().height;
  let position = element.offsetTop - navHeight;
  window.scrollTo({
    left: 0,
    top: position,
  });
});
