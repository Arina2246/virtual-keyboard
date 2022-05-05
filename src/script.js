import { ElementsAdd } from "./js/markup.js";
import { Language } from "./js/language.js";
import { ElementLanguageAdd, ElementLabelAdd } from "./js/buttonLabels.js";
import { Highlight } from "./js/highlight.js";
import { SpecButtons } from "./js/specButtons.js";

const wrapperAdd = new ElementsAdd();
const language = new Language();
const elementLanguageAdd = new ElementLanguageAdd();
const elementLabelAdd = new ElementLabelAdd();
const highlight = new Highlight();
const specButtonss = new SpecButtons();
wrapperAdd.addWrapper();
wrapperAdd.addWrapperHeader();
wrapperAdd.addTextArea();
wrapperAdd.addContent();
wrapperAdd.addContentP();
wrapperAdd.addWrapperKeyboard();
wrapperAdd.addKeyboardLine1();
wrapperAdd.addKeyboardLine2();
wrapperAdd.addKeyboardLine3();
wrapperAdd.addKeyboardLine4();
wrapperAdd.addKeyboardLine5();
language.addLanguage();
// менять язык
// language.deleteEng();
elementLanguageAdd.addEngLabels();
elementLanguageAdd.addRusLabels();
elementLabelAdd.addDown();
// elementLabelAdd.hideDown();
elementLabelAdd.addUp();
elementLabelAdd.hideUp();
elementLabelAdd.addCaps();
elementLabelAdd.hideCaps();
elementLabelAdd.addShiftCaps();
elementLabelAdd.hideShiftCaps();

specButtonss.addKeyboardButtons();
specButtonss.addDisplayButtons();
highlight.addHighlight();
if (localStorage.lang === "eng") {
  language.deleteRus();
} else {
  language.deleteEng();
}
