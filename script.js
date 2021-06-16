const buttons = document.getElementsByClassName("dropdown-button");

const buttonArr = Array.from(buttons);

const toggleMenu = function (event) {
  if (event.target.classList["0"] === "dropdown-button") {
    const menu = event.target.nextElementSibling;
    menu.classList.toggle("visible");
  } else {
    const menu = event.target.parentNode.nextElementSibling;
    menu.classList.toggle("visible");
  }
};

buttonArr.forEach((button) => button.addEventListener("click", toggleMenu));
