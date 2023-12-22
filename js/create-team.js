// BUTTON CREATE TEAM

const buttonTeamCreate = document.querySelector(".btnInner-team");

if (buttonTeamCreate.innerText == "Створити команди") {
  const btnElement = buttonTeamCreate.closest(".btn");

  if (btnElement) {
    btnElement.href = "index.html";
  }
}
