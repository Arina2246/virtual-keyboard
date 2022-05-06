/* eslint-disable class-methods-use-this */
export default class ElementLanguageAdd {
  addEngLabels() {
    const eng = document.querySelectorAll('.eng');
    for (let i = 0; i < eng.length; i += 1) {
      const up = document.createElement('span');
      const down = document.createElement('span');
      const caps = document.createElement('span');
      const shiftCaps = document.createElement('span');
      up.className = 'up';
      eng[i].append(up);
      down.className = 'down';
      eng[i].append(down);
      caps.className = 'caps';
      eng[i].append(caps);
      shiftCaps.className = 'shiftCaps';
      eng[i].append(shiftCaps);
    }
  }

  addRusLabels() {
    const rus = document.querySelectorAll('.rus');
    for (let i = 0; i < rus.length; i += 1) {
      const up = document.createElement('span');
      up.className = 'up';
      rus[i].append(up);
      const down = document.createElement('span');
      down.className = 'down';
      rus[i].append(down);
      const caps = document.createElement('span');
      caps.className = 'caps';
      rus[i].append(caps);
      const shiftCaps = document.createElement('span');
      shiftCaps.className = 'shiftCaps';
      rus[i].append(shiftCaps);
    }
  }
}
