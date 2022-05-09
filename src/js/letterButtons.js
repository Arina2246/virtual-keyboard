/* eslint-disable class-methods-use-this */
/* eslint-disable no-lonely-if */
/* eslint-disable prefer-destructuring */
export default class LetterButtons {
  addLetterButtons() {
    const buttons = document.querySelectorAll('.button');
    const letters = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 43, 44,
      45, 46, 47, 48, 49, 50, 51, 52,
    ];
    const result = [];
    for (let i = 0; i < 47; i += 1) {
      const q = letters.pop();
      result.push(buttons[q]);
    }
    for (let i = 0; i < result.length; i += 1) {
      const button = result[i];
      button.addEventListener('click', () => {
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
        const rightLetter = languageInput(button);
        document.querySelector('textArea').setRangeText(
          `${rightLetter}`,
          document.querySelector('textArea').selectionStart,
          document.querySelector('textArea').selectionEnd,
          // eslint-disable-next-line comma-dangle
          'end'
        );
        document.querySelector('textArea').focus();
      });
    }
  }
}
