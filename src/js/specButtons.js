/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
export default class SpecButtons {
  addDisplayButtons() {
    const downEl = document.querySelectorAll('.down');
    const buttons = document.querySelectorAll('.caps');
    const up = document.querySelectorAll('.up');
    const shiftcaps = document.querySelectorAll('.shiftCaps');
    document.querySelector('.buttonBackspace').addEventListener('click', () => {
      const start = document.querySelector('textArea').selectionStart;
      let text = document.querySelector('textArea').value;
      text = text.slice(0, start - 1) + text.slice(start);
      document.querySelector('textArea').value = text;
      document.querySelector('textArea').selectionEnd = start - 1;
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonAltLeft').addEventListener('click', () => {
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonAltRight').addEventListener('click', () => {
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonCtrlLeft').addEventListener('click', () => {
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonCtrlRight').addEventListener('click', () => {
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonEnter').addEventListener('click', () => {
      document
        .querySelector('textArea')
        .setRangeText(
          '\n',
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          'end'
        );
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonSpace').addEventListener('click', () => {
      document
        .querySelector('textArea')
        .setRangeText(
          ' ',
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          'end'
        );
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonDelete').addEventListener('click', () => {
      const start = document.querySelector('textArea').selectionStart;
      let text = document.querySelector('textArea').value;
      text = text.slice(0, start) + text.slice(start + 1);
      document.querySelector('textArea').value = text;
      document.querySelector('textArea').selectionEnd = start;
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonTab').addEventListener('click', () => {
      document
        .querySelector('textArea')
        .setRangeText(
          '    ',
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          'end'
        );
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonArrowLeft').addEventListener('click', () => {
      document
        .querySelector('textArea')
        .setRangeText(
          '◄',
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          'end'
        );
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonArrowUp').addEventListener('click', () => {
      document
        .querySelector('textArea')
        .setRangeText(
          '▲',
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          'end'
        );
      document.querySelector('textArea').focus();
    });
    document
      .querySelector('.buttonArrowRight')
      .addEventListener('click', () => {
        document
          .querySelector('textArea')
          .setRangeText(
            '►',
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            'end'
          );
        document.querySelector('textArea').focus();
      });
    document.querySelector('.buttonArrowDown').addEventListener('click', () => {
      document
        .querySelector('textArea')
        .setRangeText(
          '▼',
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          'end'
        );
      document.querySelector('textArea').focus();
    });
    document.querySelector('.buttonCapsLock').addEventListener('click', () => {
      for (let i = 0; i < downEl.length; i += 1) {
        downEl[i].classList.toggle('hide');
      }
      for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].classList.toggle('hide');
      }
      if (!buttons[0].classList.contains('hide')) {
        document.querySelector('.buttonCapsLock').classList.add('activeButton');
      } else {
        document
          .querySelector('.buttonCapsLock')
          .classList.remove('activeButton');
      }
      document.querySelector('textArea').focus();
    });
    document
      .querySelector('.buttonShiftLeft')
      .addEventListener('mousedown', () => {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.add('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          up[i].classList.remove('hide');
        }
        if (
          document
            .querySelector('.buttonCapsLock')
            .classList.contains('activeButton')
        ) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.add('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.remove('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.add('hide');
          }
        }
        document.querySelector('textArea').focus();
      });
    document
      .querySelector('.buttonShiftLeft')
      .addEventListener('mouseup', () => {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.remove('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          up[i].classList.add('hide');
        }
        if (
          document
            .querySelector('.buttonCapsLock')
            .classList.contains('activeButton')
        ) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.add('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.add('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.remove('hide');
          }
        }
        document.querySelector('textArea').focus();
      });
    document
      .querySelector('.buttonShiftRight')
      .addEventListener('mousedown', () => {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.add('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          up[i].classList.remove('hide');
        }
        if (
          document
            .querySelector('.buttonCapsLock')
            .classList.contains('activeButton')
        ) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.add('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.remove('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.add('hide');
          }
        }
        document.querySelector('textArea').focus();
      });
    document
      .querySelector('.buttonShiftRight')
      .addEventListener('mouseup', () => {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.remove('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          up[i].classList.add('hide');
        }
        if (
          document
            .querySelector('.buttonCapsLock')
            .classList.contains('activeButton')
        ) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.add('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.add('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.remove('hide');
          }
        }
        document.querySelector('textArea').focus();
      });
  }

  addKeyboardButtons() {
    const downEl = document.querySelectorAll('.down');
    const buttons = document.querySelectorAll('.caps');
    const up = document.querySelectorAll('.up');
    const shiftcaps = document.querySelectorAll('.shiftCaps');
    const keys = [];
    // !!!!!!!!!!!!!!!!!!!1
    // window.onkeyup =
    function windowOnkeyup(event) {
      // caps
      if (event.code === 'CapsLock') {
        if (!buttons[0].classList.contains('hide')) {
          document
            .querySelector('.buttonCapsLock')
            .classList.add('activeButton');
        } else {
          document
            .querySelector('.buttonCapsLock')
            .classList.remove('activeButton');
        }
      }
      // SHIFT
      if (event.which === 16) {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.remove('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          up[i].classList.add('hide');
        }
        for (let i = 0; i < shiftcaps.length; i += 1) {
          shiftcaps[i].classList.add('hide');
        }
        if (
          document
            .querySelector('.buttonCapsLock')
            .classList.contains('activeButton')
        ) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.add('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.add('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.remove('hide');
          }
        }
      }
      keys.splice(keys.indexOf(event.which), 1);
    }
    window.onkeyup = windowOnkeyup;
    // window.onkeydown =
    function windowOnkeydown(event) {
      // caps
      if (event.code === 'CapsLock') {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.toggle('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          buttons[i].classList.toggle('hide');
        }
        const m = document
          .querySelector('.buttonShiftLeft')
          .classList.contains('activeButton');
        const n = document
          .querySelector('.buttonShiftRight')
          .classList.contains('activeButton');
        if (m || n) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.toggle('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.toggle('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.add('hide');
          }
        }
      }
      // tab
      if (event.which === 9) {
        event.preventDefault();
        document
          .querySelector('textArea')
          .setRangeText(
            '    ',
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            'end'
          );
      }
      // alt
      if (event.which === 18) {
        event.preventDefault();
        const n = document
          .querySelector('.buttonCtrlLeft')
          .classList.contains('activeButton');
        const m = document
          .querySelector('.buttonCtrlRight')
          .classList.contains('activeButton');
        if (n || m) {
          const eng = document.querySelectorAll('.eng');
          for (let i = 0; i < eng.length; i += 1) {
            eng[i].classList.toggle('hide');
          }
          const rus = document.querySelectorAll('.rus');
          for (let i = 0; i < rus.length; i += 1) {
            rus[i].classList.toggle('hide');
          }
          if (document.querySelector('.eng').classList.contains('hide')) {
            localStorage.clear();
            localStorage.lang = 'rus';
          } else {
            localStorage.clear();
            localStorage.lang = 'eng';
          }
        }
      }
      // shift
      if (event.which === 16) {
        for (let i = 0; i < downEl.length; i += 1) {
          downEl[i].classList.toggle('hide');
        }
        for (let i = 0; i < buttons.length; i += 1) {
          up[i].classList.toggle('hide');
        }
        if (
          document
            .querySelector('.buttonCapsLock')
            .classList.contains('activeButton')
        ) {
          for (let i = 0; i < buttons.length; i += 1) {
            up[i].classList.add('hide');
          }
          for (let i = 0; i < downEl.length; i += 1) {
            downEl[i].classList.add('hide');
          }
          for (let i = 0; i < shiftcaps.length; i += 1) {
            shiftcaps[i].classList.remove('hide');
          }
          for (let i = 0; i < buttons.length; i += 1) {
            buttons[i].classList.add('hide');
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
          .querySelector('textArea')
          .setRangeText(
            '◄',
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            'end'
          );
      }
      if (event.which === 38) {
        event.preventDefault();
        document
          .querySelector('textArea')
          .setRangeText(
            '▲',
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            'end'
          );
      }
      if (event.which === 39) {
        event.preventDefault();
        document
          .querySelector('textArea')
          .setRangeText(
            '►',
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            'end'
          );
      }
      if (event.which === 40) {
        event.preventDefault();
        document
          .querySelector('textArea')
          .setRangeText(
            '▼',
            document.querySelector('textArea').selectionStart,
            document.querySelector('textArea').selectionEnd,
            'end'
          );
      }
      const o = [
        'Backquote',
        'Digit1',
        'Digit2',
        'Digit3',
        'Digit4',
        'Digit5',
        'Digit6',
        'Digit7',
        'Digit8',
        'Digit9',
        'Digit0',
        'Minus',
        'Equal',
        'KeyQ',
        'KeyW',
        'KeyE',
        'KeyR',
        'KeyT',
        'KeyY',
        'KeyU',
        'KeyI',
        'KeyO',
        'KeyP',
        'BracketLeft',
        'BracketRight',
        'Backslash',
        'KeyA',
        'KeyS',
        'KeyD',
        'KeyF',
        'KeyG',
        'KeyH',
        'KeyJ',
        'KeyK',
        'KeyL',
        'Semicolon',
        'Quote',
        'KeyZ',
        'KeyX',
        'KeyC',
        'KeyV',
        'KeyB',
        'KeyN',
        'KeyM',
        'Comma',
        'Period',
        'Slash',
      ];
      for (let i = 0; i < o.length; i += 1) {
        const m = event.code;
        if (o[i].includes(m)) {
          event.preventDefault();
        }
      }
    }
    window.onkeydown = windowOnkeydown;
  }
}
