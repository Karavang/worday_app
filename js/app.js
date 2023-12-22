const header = document.querySelector(".header");
const menuList = document.querySelector(".menu-list");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const sliderTimerSlide = document.querySelector(
  ".slider-timer .swiper-slide-next"
);

function removeActiveClass() {
  menuList.classList.remove("active");
  header.classList.remove("active");
  sliderTimerSlide.classList.remove("active");
}

first.addEventListener("click", function () {
  menuList.classList.toggle("active");
  header.classList.toggle("active");
  sliderTimerSlide.classList.toggle("active");

  setTimeout(removeActiveClass, 60500);
});

second.addEventListener("click", function () {
  menuList.classList.toggle("active");
  header.classList.toggle("active");
  sliderTimerSlide.classList.toggle("active");

  setTimeout(removeActiveClass, 6500);
});

// const header = document.querySelector(".header");
// const menuList = document.querySelector(".menu-list");
// const first = document.querySelector(".first");
// const second = document.querySelector(".second");

// const sliderTimerSlideNext = document.querySelector(
//   ".slider-timer .swiper-slide-next"
// );

// const sliderTimerSlidePrev = document.querySelector(
//   ".slider-timer .swiper-slide-prev"
// );

// function removeActiveClass() {
//   menuList.classList.remove("active");
//   header.classList.remove("active");

//   sliderTimerSlideNext.classList.remove("active");
//   sliderTimerSlidePrev.classList.remove("active");
// }

// function toggleActiveClass() {
//   menuList.classList.toggle("active");
//   header.classList.toggle("active");

//   sliderTimerSlideNext.classList.toggle("active");
//   sliderTimerSlidePrev.classList.toggle("active");
// }

// let timerId;

// first.addEventListener("click", function () {
//   toggleActiveClass();

//   clearTimeout(timerId);
//   timerId = setTimeout(removeActiveClass, 61000);
// });

// second.addEventListener("click", function () {
//   toggleActiveClass();

//   clearTimeout(timerId);
//   timerId = setTimeout(removeActiveClass, 7000);
// });

// HANDS

window.onload = () => {
  document.querySelector(".path").style.animation =
    "swipe-dot 2s 0.5s infinite";

  document.querySelector(".hand-icon").style.animation =
    "swipe-hand 2s infinite";
};
