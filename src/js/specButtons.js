/* eslint-disable import/prefer-default-export */
class SpecButtons {
  addDisplayButtons() {
    const downEl = document.querySelectorAll(".down");
    const buttons = document.querySelectorAll(".caps");
    const up = document.querySelectorAll(".up");
    const shiftcaps = document.querySelectorAll(".shiftCaps");
    document.querySelector(".buttonBackspace").addEventListener("click", () => {
      const start = document.querySelector("textArea").selectionStart;
      let text = document.querySelector("textArea").value;
      text = text.slice(0, start - 1) + text.slice(start);
      document.querySelector("textArea").value = text;
      document.querySelector("textArea").selectionEnd = start - 1;
      document.querySelector("textArea").focus();
    });
    document.querySelector(".buttonEnter").addEventListener("click", () => {
      document
        .querySelector("textArea")
        .setRangeText(
          "\n",
          document.querySelector("textArea").selectionStart,
          document.querySelector("textArea").selectionEnd,
          "end"
        );
      document.querySelector("textArea").focus();
    });
    document.querySelector(".buttonDelete").addEventListener("click", () => {
      const start = document.querySelector("textArea").selectionStart;
      let text = document.querySelector("textArea").value;
      text = text.slice(0, start) + text.slice(start + 1);
      document.querySelector("textArea").value = text;
      document.querySelector("textArea").selectionEnd = start;
      document.querySelector("textArea").focus();
    });
    document.querySelector(".buttonTab").addEventListener("click", () => {
      document
        .querySelector("textArea")
        .setRangeText(
          "    ",
          document.querySelector("textArea").selectionStart,
          document.querySelector("textArea").selectionEnd,
          "end"
        );
      document.querySelector("textArea").focus();
    });
    document.querySelector(".buttonArrowLeft").addEventListener("click", () => {
      document
        .querySelector("textArea")
        .setRangeText(
          "◄",
          document.querySelector("textArea").selectionStart,
          document.querySelector("textArea").selectionEnd,
          "end"
        );
      document.querySelector("textArea").focus();
    });
    document.querySelector(".buttonArrowUp").addEventListener("click", () => {
      document
        .querySelector("textArea")
        .setRangeText(
          "▲",
          document.querySelector("textArea").selectionStart,
          document.querySelector("textArea").selectionEnd,
          "end"
        );
      document.querySelector("textArea").focus();
    });
    document
      .querySelector(".buttonArrowRight")
      .addEventListener("click", () => {
        document
          .querySelector("textArea")
          .setRangeText(
            "►",
            document.querySelector("textArea").selectionStart,
            document.querySelector("textArea").selectionEnd,
            "end"
          );
        document.querySelector("textArea").focus();
      });
    document.querySelector(".buttonArrowDown").addEventListener("click", () => {
      document
        .querySelector("textArea")
        .setRangeText(
          "▼",
          document.querySelector("textArea").selectionStart,
          document.querySelector("textArea").selectionEnd,
          "end"
        );
      document.querySelector("textArea").focus();
    });
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
      document.querySelector("textArea").focus();
    });
    document
      .querySelector(".buttonShiftLeft")
      .addEventListener("mousedown", () => {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.add("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          up[i].classList.remove("hide");
        }
        if (
          document
            .querySelector(".buttonCapsLock")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.add("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.remove("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("hide");
          }
        }
        document.querySelector("textArea").focus();
      });
    document
      .querySelector(".buttonShiftLeft")
      .addEventListener("mouseup", () => {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.remove("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          up[i].classList.add("hide");
        }
        if (
          document
            .querySelector(".buttonCapsLock")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.add("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.add("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("hide");
          }
        }
        document.querySelector("textArea").focus();
      });
    document
      .querySelector(".buttonShiftRight")
      .addEventListener("mousedown", () => {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.add("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          up[i].classList.remove("hide");
        }
        if (
          document
            .querySelector(".buttonCapsLock")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.add("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.remove("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("hide");
          }
        }
        document.querySelector("textArea").focus();
      });
    document
      .querySelector(".buttonShiftRight")
      .addEventListener("mouseup", () => {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.remove("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          up[i].classList.add("hide");
        }
        if (
          document
            .querySelector(".buttonCapsLock")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.add("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.add("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("hide");
          }
        }
        document.querySelector("textArea").focus();
      });
  }

  addKeyboardButtons() {
    const downEl = document.querySelectorAll(".down");
    const buttons = document.querySelectorAll(".caps");
    const up = document.querySelectorAll(".up");
    const shiftcaps = document.querySelectorAll(".shiftCaps");
    const keys = [];
    window.onkeyup = function (event) {
      // caps
      if (event.code === "CapsLock") {
        if (!buttons[0].classList.contains("hide")) {
          document
            .querySelector(".buttonCapsLock")
            .classList.add("activeButton");
        } else {
          document
            .querySelector(".buttonCapsLock")
            .classList.remove("activeButton");
        }
      }
      // SHIFT
      if (event.which === 16) {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.remove("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          up[i].classList.add("hide");
        }
        for (let i = 0; i < shiftcaps.length; i++) {
          shiftcaps[i].classList.add("hide");
        }
        if (
          document
            .querySelector(".buttonCapsLock")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.add("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.add("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("hide");
          }
        }
      }
      keys.splice(keys.indexOf(event.which), 1);
    };
    window.onkeydown = function (event) {
      // caps
      if (event.code === "CapsLock") {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.toggle("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.toggle("hide");
        }
        if (
          document
            .querySelector(".buttonShiftLeft")
            .classList.contains("activeButton") ||
          document
            .querySelector(".buttonShiftRight")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.toggle("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.toggle("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("hide");
          }
        }
      }
      // tab
      if (event.which === 9) {
        event.preventDefault();
        document
          .querySelector("textArea")
          .setRangeText(
            "    ",
            document.querySelector("textArea").selectionStart,
            document.querySelector("textArea").selectionEnd,
            "end"
          );
      }
      // alt
      if (event.which === 18) {
        event.preventDefault();
        if (
          document
            .querySelector(".buttonCtrlLeft")
            .classList.contains("activeButton") ||
          document
            .querySelector(".buttonCtrlRight")
            .classList.contains("activeButton")
        ) {
          const eng = document.querySelectorAll(".eng");
          for (let i = 0; i < eng.length; i++) {
            eng[i].classList.toggle("hide");
          }
          const rus = document.querySelectorAll(".rus");
          for (let i = 0; i < rus.length; i++) {
            rus[i].classList.toggle("hide");
          }
          if (document.querySelector(".eng").classList.contains("hide")) {
            localStorage.clear();
            localStorage.lang = "rus";
          } else {
            localStorage.clear();
            localStorage.lang = "eng";
          }
        }
      }
      // shift
      if (event.which === 16) {
        for (let i = 0; i < downEl.length; i++) {
          downEl[i].classList.toggle("hide");
        }
        for (let i = 0; i < buttons.length; i++) {
          up[i].classList.toggle("hide");
        }
        if (
          document
            .querySelector(".buttonCapsLock")
            .classList.contains("activeButton")
        ) {
          for (let i = 0; i < buttons.length; i++) {
            up[i].classList.add("hide");
          }
          for (let i = 0; i < downEl.length; i++) {
            downEl[i].classList.add("hide");
          }
          for (let i = 0; i < shiftcaps.length; i++) {
            shiftcaps[i].classList.remove("hide");
          }
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("hide");
          }
        }
      }
      const code = event.which;
      if (keys.indexOf(code) < 0) {
        keys.push(code);
      }
      if (event.which === 37) {
        event.preventDefault();
        document
          .querySelector("textArea")
          .setRangeText(
            "◄",
            document.querySelector("textArea").selectionStart,
            document.querySelector("textArea").selectionEnd,
            "end"
          );
      }
      if (event.which === 38) {
        event.preventDefault();
        document
          .querySelector("textArea")
          .setRangeText(
            "▲",
            document.querySelector("textArea").selectionStart,
            document.querySelector("textArea").selectionEnd,
            "end"
          );
      }
      if (event.which === 39) {
        event.preventDefault();
        document
          .querySelector("textArea")
          .setRangeText(
            "►",
            document.querySelector("textArea").selectionStart,
            document.querySelector("textArea").selectionEnd,
            "end"
          );
      }
      if (event.which === 40) {
        event.preventDefault();
        document
          .querySelector("textArea")
          .setRangeText(
            "▼",
            document.querySelector("textArea").selectionStart,
            document.querySelector("textArea").selectionEnd,
            "end"
          );
      }
    };
  }
}

export { SpecButtons };
