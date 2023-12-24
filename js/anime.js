const rulesListItem = document.querySelectorAll(".rules-list__item");

rulesListItem.forEach((item) => {
  item.addEventListener("click", function () {
    const dropIcon = item.querySelector(".rules-list__item-right");
    const dropIconLeft = item.querySelector(
      ".rules-list__item-icon > svg > path"
    );
    const dropIconAnimation = item.querySelector(
      ".rules-list__item-right > svg > path"
    );
    const dropTitle = item.querySelector(".rules-list__item-title > p");

    item.classList.toggle("active");
    dropIcon.classList.toggle("active");
    dropTitle.classList.toggle("active");
    dropIconAnimation.classList.toggle("active");
    dropIconLeft.classList.toggle("active");
  });
});

rulesListItem.forEach((item) => {
  item.addEventListener("click", function () {
    const dropIconNum = item.querySelector(".five");

    dropIconNum.classList.toggle("active");
  });
});

rulesListItem.forEach((item) => {
  item.addEventListener("click", function () {
    const dropDownPanel = item.querySelector(".rules-dropdown");

    dropDownPanel.classList.toggle("active");
  });
});

// DROPDOWN
