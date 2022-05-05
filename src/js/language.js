/* eslint-disable import/prefer-default-export */
class Language {
  addLanguage() {
    const buttons = document.querySelectorAll(".button");
    for (let i = 0; i < buttons.length; i++) {
      const eng = document.createElement("span");
      const rus = document.createElement("span");
      eng.className = "eng";
      buttons[i].append(eng);
      rus.className = "rus";
      buttons[i].append(rus);
    }
  }

  deleteEng() {
    const eng = document.querySelectorAll(".eng");
    for (let i = 0; i < eng.length; i++) {
      eng[i].className = "eng hide";
    }
  }

  deleteRus() {
    const rus = document.querySelectorAll(".rus");
    for (let i = 0; i < rus.length; i++) {
      rus[i].className = "rus hide";
    }
  }
}
export { Language };
