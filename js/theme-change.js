// THEME

const themeButton = document.querySelector(".header-theme-button");
const themeButtonDark = document.querySelector(".header-theme-button-dark");
const linkTheme = document.getElementById("theme-change");

themeButton.addEventListener("click", function () {
  if (linkTheme) {
    if (linkTheme.href.includes("css/light-theme.css")) {
      linkTheme.href = "css/dark-theme.css";
    } else {
      linkTheme.href = "css/light-theme.css";
    }
  }

  themeButton.classList.remove("active");
  themeButtonDark.classList.add("active");
});

themeButtonDark.addEventListener("click", function () {
  if (linkTheme) {
    if (linkTheme.href.includes("css/light-theme.css")) {
      linkTheme.href = "css/dark-theme.css";
    } else {
      linkTheme.href = "css/light-theme.css";
    }
  }

  themeButtonDark.classList.remove("active");
  themeButton.classList.add("active");
});

const voiceButton = document.querySelector(".header-voice-button");
const voiceButtonOff = document.querySelector(".header-voice-button-off");

voiceButton.addEventListener("click", function () {
  voiceButton.classList.remove("active");
  voiceButtonOff.classList.add("active");
});

voiceButtonOff.addEventListener("click", function () {
  voiceButtonOff.classList.remove("active");
  voiceButton.classList.add("active");
});
