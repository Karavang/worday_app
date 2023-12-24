const swiper = new Swiper(".slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 20,
  speed: 500,

  autoplay: {
    delay: 3000,
  },
});

// SLIDER TIMER

const swiperTimer = new Swiper(".slider-timer", {
  direction: "horizontal",
  loop: false,
  slidesPerView: 3,
  centeredSlides: true,
  speed: 500,
  initialSlide: 0,
  slideToClickedSlide: true,
});

// PLAY GAME

const sixSec = document.querySelector(".timer__item_pink");
const nameSlidePlayer = document.querySelector(
  ".slider-timer-slide__list-name"
);
