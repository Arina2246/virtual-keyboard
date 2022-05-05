/* eslint-disable import/prefer-default-export */
class SpecButtons {
  addDisplayButtons() {
    const downEl = document.querySelectorAll(".down");
    const buttons = document.querySelectorAll(".caps");
    document.querySelector(".buttonCapsLock").addEventListener("click", () => {
      for (let i = 0; i < downEl.length; i++) {
        downEl[i].classList.toggle("hide");
      }
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle("hide");
      }
      if (!buttons[0].classList.contains("hide")) {
        document.querySelector(".buttonCapsLock").classList.add("activeButton");
      } else {
        document
          .querySelector(".buttonCapsLock")
          .classList.remove("activeButton");
      }
    });
  }

  addKeyboardButtons() {
    const downEl = document.querySelectorAll(".down");
    const buttons = document.querySelectorAll(".caps");
    window.onkeyup = function (event) {
      if (event.code === "CapsLock") {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.toggle("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.toggle("hide");
        }
      }
      if (!buttons[0].classList.contains("hide")) {
        document.querySelector(".buttonCapsLock").classList.add("activeButton");
      } else {
        document
          .querySelector(".buttonCapsLock")
          .classList.remove("activeButton");
      }
    };
  }
}

export { SpecButtons };
