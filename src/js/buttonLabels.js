/* eslint-disable class-methods-use-this */
const down = [
  '`',
  'ё',
  '1',
  '1',
  '2',
  '2',
  '3',
  '3',
  '4',
  '4',
  '5',
  '5',
  '6',
  '6',
  '7',
  '7',
  '8',
  '8',
  '9',
  '9',
  '0',
  '0',
  '-',
  '-',
  '=',
  '=',
  'Backspace',
  'Backspace',
  'Tab',
  'Tab',
  'q',
  'й',
  'w',
  'ц',
  'e',
  'у',
  'r',
  'к',
  't',
  'е',
  'y',
  'н',
  'u',
  'г',
  'i',
  'ш',
  'o',
  'щ',
  'p',
  'з',
  '[',
  'х',
  ']',
  'ъ',
  '\\',
  '\\',
  'Del',
  'Del',
  'CapsLock',
  'CapsLock',
  'a',
  'ф',
  's',
  'ы',
  'd',
  'в',
  'f',
  'а',
  'g',
  'п',
  'h',
  'р',
  'j',
  'о',
  'k',
  'л',
  'l',
  'д',
  ';',
  'ж',
  "'",
  'э',
  'Enter',
  'Enter',
  'Shift',
  'Shift',
  'z',
  'я',
  'x',
  'ч',
  'c',
  'с',
  'v',
  'м',
  'b',
  'и',
  'n',
  'т',
  'm',
  'ь',
  ',',
  'б',
  '.',
  'ю',
  '/',
  '.',
  '◄',
  '◄',
  'Shift',
  'Shift',
  'Ctrl',
  'Ctrl',
  'Win',
  'Win',
  'Alt',
  'Alt',
  '',
  '',
  'Alt',
  'Alt',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  'Ctrl',
  'Ctrl',
];
const up = [
  '~',
  'Ё',
  '!',
  '!',
  '@',
  '"',
  '#',
  '№',
  '$',
  ';',
  '%',
  '%',
  '^',
  ':',
  '&',
  '?',
  '*',
  '*',
  '(',
  '(',
  ')',
  ')',
  '_',
  '_',
  '+',
  '+',
  'Backspace',
  'Backspace',
  'Tab',
  'Tab',
  'Q',
  'Й',
  'W',
  'Ц',
  'E',
  'У',
  'R',
  'К',
  'T',
  'Е',
  'Y',
  'Н',
  'U',
  'Г',
  'I',
  'Ш',
  'O',
  'Щ',
  'P',
  'З',
  '{',
  'Х',
  '}',
  'Ъ',
  '|',
  '/',
  'Del',
  'Del',
  'CapsLock',
  'CapsLock',
  'A',
  'Ф',
  'S',
  'Ы',
  'D',
  'В',
  'F',
  'А',
  'G',
  'П',
  'H',
  'Р',
  'J',
  'О',
  'K',
  'Л',
  'L',
  'Д',
  ':',
  'Ж',
  '"',
  'Э',
  'Enter',
  'Enter',
  'Shift',
  'Shift',
  'Z',
  'Я',
  'X',
  'Ч',
  'C',
  'С',
  'V',
  'М',
  'B',
  'И',
  'N',
  'Т',
  'M',
  'Ь',
  '<',
  'Б',
  '>',
  'Ю',
  '?',
  ',',
  '◄',
  '◄',
  'Shift',
  'Shift',
  'Ctrl',
  'Ctrl',
  'Win',
  'Win',
  'Alt',
  'Alt',
  '',
  '',
  'Alt',
  'Alt',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  'Ctrl',
  'Ctrl',
];
const caps = [
  '`',
  'Ё',
  '1',
  '1',
  '2',
  '2',
  '3',
  '3',
  '4',
  '4',
  '5',
  '5',
  '6',
  '6',
  '7',
  '7',
  '8',
  '8',
  '9',
  '9',
  '0',
  '0',
  '-',
  '-',
  '=',
  '=',
  'Backspace',
  'Backspace',
  'Tab',
  'Tab',
  'Q',
  'Й',
  'W',
  'Ц',
  'E',
  'У',
  'R',
  'К',
  'T',
  'Е',
  'Y',
  'Н',
  'U',
  'Г',
  'I',
  'Ш',
  'O',
  'Щ',
  'P',
  'З',
  '[',
  'Х',
  ']',
  'Ъ',
  '\\',
  '\\',
  'Del',
  'Del',
  'CapsLock',
  'CapsLock',
  'A',
  'Ф',
  'S',
  'Ы',
  'D',
  'В',
  'F',
  'А',
  'G',
  'П',
  'H',
  'Р',
  'J',
  'О',
  'K',
  'Л',
  'L',
  'Д',
  ';',
  'Ж',
  "'",
  'Э',
  'Enter',
  'Enter',
  'Shift',
  'Shift',
  'Z',
  'Я',
  'X',
  'Ч',
  'C',
  'С',
  'V',
  'М',
  'B',
  'И',
  'N',
  'Т',
  'M',
  'Ь',
  ',',
  'Б',
  '.',
  'Ю',
  '/',
  '.',
  '◄',
  '◄',
  'Shift',
  'Shift',
  'Ctrl',
  'Ctrl',
  'Win',
  'Win',
  'Alt',
  'Alt',
  '',
  '',
  'Alt',
  'Alt',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  'Ctrl',
  'Ctrl',
];
const shiftCaps = [
  '~',
  'ё',
  '!',
  '!',
  '@',
  '"',
  '#',
  '№',
  '$',
  ';',
  '%',
  '%',
  '^',
  ':',
  '&',
  '?',
  '*',
  '*',
  '(',
  '(',
  ')',
  ')',
  '_',
  '_',
  '+',
  '+',
  'Backspace',
  'Backspace',
  'Tab',
  'Tab',
  'q',
  'й',
  'w',
  'ц',
  'e',
  'у',
  'r',
  'к',
  't',
  'е',
  'y',
  'н',
  'u',
  'г',
  'i',
  'ш',
  'o',
  'щ',
  'p',
  'з',
  '{',
  'х',
  '}',
  'ъ',
  '|',
  '/',
  'Del',
  'Del',
  'CapsLock',
  'CapsLock',
  'a',
  'ф',
  's',
  'ы',
  'd',
  'в',
  'f',
  'а',
  'g',
  'п',
  'h',
  'р',
  'j',
  'о',
  'k',
  'л',
  'l',
  'д',
  ':',
  'ж',
  '"',
  'э',
  'Enter',
  'Enter',
  'Shift',
  'Shift',
  'z',
  'я',
  'x',
  'ч',
  'c',
  'с',
  'v',
  'м',
  'b',
  'и',
  'n',
  'т',
  'm',
  'ь',
  '<',
  'б',
  '>',
  'ю',
  '?',
  ',',
  '◄',
  '◄',
  'Shift',
  'Shift',
  'Ctrl',
  'Ctrl',
  'Win',
  'Win',
  'Alt',
  'Alt',
  '',
  '',
  'Alt',
  'Alt',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  '◄',
  'Ctrl',
  'Ctrl',
];
export default class ElementLabelAdd {
  addDown() {
    const downEl = document.querySelectorAll('.down');
    for (let i = 0; i < downEl.length; i += 1) {
      downEl[i].innerHTML = down[i];
    }
  }

  hideDown() {
    const downEl = document.querySelectorAll('.down');
    for (let i = 0; i < downEl.length; i += 1) {
      downEl[i].className = 'down hide';
    }
  }

  addUp() {
    const upEl = document.querySelectorAll('.up');
    for (let i = 0; i < upEl.length; i += 1) {
      upEl[i].innerHTML = up[i];
    }
  }

  hideUp() {
    const upEl = document.querySelectorAll('.up');
    for (let i = 0; i < upEl.length; i += 1) {
      upEl[i].className = 'up hide';
    }
  }

  addCaps() {
    const capsEl = document.querySelectorAll('.caps');
    for (let i = 0; i < capsEl.length; i += 1) {
      capsEl[i].innerHTML = caps[i];
    }
  }

  hideCaps() {
    const capsEl = document.querySelectorAll('.caps');
    for (let i = 0; i < capsEl.length; i += 1) {
      capsEl[i].className = 'caps hide';
    }
  }

  addShiftCaps() {
    const shiftCapsEl = document.querySelectorAll('.shiftCaps');
    for (let i = 0; i < shiftCapsEl.length; i += 1) {
      shiftCapsEl[i].innerHTML = shiftCaps[i];
    }
  }

  hideShiftCaps() {
    const shiftCapsEl = document.querySelectorAll('.shiftCaps');
    for (let i = 0; i < shiftCapsEl.length; i += 1) {
      shiftCapsEl[i].className = 'shiftCaps hide';
    }
  }
}
