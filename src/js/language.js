/* eslint-disable class-methods-use-this */
export default class Language {
  addLanguage() {
    const buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i += 1) {
      const eng = document.createElement('span');
      const rus = document.createElement('span');
      eng.className = 'eng';
      buttons[i].append(eng);
      rus.className = 'rus';
      buttons[i].append(rus);
    }
  }

  deleteEng() {
    const eng = document.querySelectorAll('.eng');
    for (let i = 0; i < eng.length; i += 1) {
      eng[i].className = 'eng hide';
    }
  }

  deleteRus() {
    const rus = document.querySelectorAll('.rus');
    for (let i = 0; i < rus.length; i += 1) {
      rus[i].className = 'rus hide';
    }
  }
}
