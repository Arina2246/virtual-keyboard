/* eslint-disable no-lonely-if */
/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
export default class Highlight {
  addHighlight() {
    const buttons = document.querySelectorAll('.button');
    const buttonsObj = {
      Backquote: buttons[0],
      Digit1: buttons[1],
      Digit2: buttons[2],
      Digit3: buttons[3],
      Digit4: buttons[4],
      Digit5: buttons[5],
      Digit6: buttons[6],
      Digit7: buttons[7],
      Digit8: buttons[8],
      Digit9: buttons[9],
      Digit0: buttons[10],
      Minus: buttons[11],
      Equal: buttons[12],
      Backspace: buttons[13],
      Tab: buttons[14],
      KeyQ: buttons[15],
      KeyW: buttons[16],
      KeyE: buttons[17],
      KeyR: buttons[18],
      KeyT: buttons[19],
      KeyY: buttons[20],
      KeyU: buttons[21],
      KeyI: buttons[22],
      KeyO: buttons[23],
      KeyP: buttons[24],
      BracketLeft: buttons[25],
      BracketRight: buttons[26],
      Backslash: buttons[27],
      Delete: buttons[28],
      CapsLock: buttons[29],
      KeyA: buttons[30],
      KeyS: buttons[31],
      KeyD: buttons[32],
      KeyF: buttons[33],
      KeyG: buttons[34],
      KeyH: buttons[35],
      KeyJ: buttons[36],
      KeyK: buttons[37],
      KeyL: buttons[38],
      Semicolon: buttons[39],
      Quote: buttons[40],
      Enter: buttons[41],
      ShiftLeft: buttons[42],
      KeyZ: buttons[43],
      KeyX: buttons[44],
      KeyC: buttons[45],
      KeyV: buttons[46],
      KeyB: buttons[47],
      KeyN: buttons[48],
      KeyM: buttons[49],
      Comma: buttons[50],
      Period: buttons[51],
      Slash: buttons[52],
      ArrowUp: buttons[53],
      ShiftRight: buttons[54],
      ControlLeft: buttons[55],
      MetaLeft: buttons[56],
      AltLeft: buttons[57],
      Space: buttons[58],
      AltRight: buttons[59],
      ArrowLeft: buttons[60],
      ArrowDown: buttons[61],
      ArrowRight: buttons[62],
      ControlRight: buttons[63],
    };
    function onKeyDownEventHandler(event) {
      const nn = event.code;
      const m = buttonsObj[`${nn}`];
      if (m) {
        m.classList.add('activeButton');
      }
      // add active letter buttons
      const letters = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 43,
        44, 45, 46, 47, 48, 49, 50, 51, 52,
      ];

      function languageInput(l) {
        const value = l.textContent;
        let h = '';
        if (document.querySelector('.eng').classList.contains('hide')) {
          if (!document.querySelector('.up').classList.contains('hide')) {
            h = value[4];
          } else if (
            !document.querySelector('.down').classList.contains('hide')
          ) {
            h = value[5];
          } else if (
            !document.querySelector('.caps').classList.contains('hide')
          ) {
            h = value[6];
          } else if (
            !document.querySelector('.shiftCaps').classList.contains('hide')
          ) {
            h = value[7];
          }
        } else {
          if (!document.querySelector('.up').classList.contains('hide')) {
            h = value[0];
          } else if (
            !document.querySelector('.down').classList.contains('hide')
          ) {
            h = value[1];
          } else if (
            !document.querySelector('.caps').classList.contains('hide')
          ) {
            h = value[2];
          } else if (
            !document.querySelector('.shiftCaps').classList.contains('hide')
          ) {
            h = value[3];
          }
        }
        return h;
      }
      for (let i = 0; i < buttons.length; i += 1) {
        const activeButton = buttons[i].classList.contains('activeButton');
        const correctActiveButton = letters.includes(i);
        if (activeButton && correctActiveButton) {
          const rightLetter = languageInput(buttons[i]);
          document.querySelector('textArea').setRangeText(
            `${rightLetter}`,
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            // eslint-disable-next-line comma-dangle
            'end'
          );
        }
      }
    }
    function onKeyUpEventHandler(event) {
      const nn = event.code;
      const m = buttonsObj[`${nn}`];
      if (m) {
        m.classList.remove('activeButton');
      }
    }

    document.querySelector('.textArea').onkeydown = onKeyDownEventHandler;
    document.querySelector('.textArea').onkeyup = onKeyUpEventHandler;
  }
}
