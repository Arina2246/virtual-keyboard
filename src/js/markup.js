/* eslint-disable import/prefer-default-export */
class ElementsAdd {
  addWrapper() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.querySelector("body").append(wrapper);
  }

  addWrapperHeader() {
    const wrapperHeader = document.createElement("div");
    wrapperHeader.className = "wrapperHeader";
    document.querySelector(".wrapper").append(wrapperHeader);
  }

  addTextArea() {
    const textArea = document.createElement("textarea");
    textArea.className = "textArea";
    textArea.setAttribute("rows", 20);
    textArea.setAttribute("cols", 15);
    document.querySelector(".wrapperHeader").append(textArea);
    document.querySelector("textArea").focus();
  }

  addContent() {
    const content = document.createElement("div");
    content.className = "content";
    document.querySelector(".wrapperHeader").append(content);
  }

  addContentP() {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.innerHTML = "Keyboard for Windows";
    p2.innerHTML = "Press Shift+Alt to change language";
    document.querySelector(".content").append(p1);
    document.querySelector(".content").append(p2);
  }

  addWrapperKeyboard() {
    const wrapperKeyboard = document.createElement("div");
    wrapperKeyboard.className = "wrapperKeyboard";
    document.querySelector(".wrapper").append(wrapperKeyboard);
  }

  addKeyboardLine1() {
    const keyboardLine1 = document.createElement("div");
    keyboardLine1.className = "keyboardLine lineOne";
    document.querySelector(".wrapperKeyboard").append(keyboardLine1);

    const buttonBackquote = document.createElement("div");
    buttonBackquote.className = "button buttonBackquote";
    document.querySelector(".lineOne").append(buttonBackquote);

    const buttonOne = document.createElement("div");
    buttonOne.className = "button buttonOne";
    document.querySelector(".lineOne").append(buttonOne);

    const buttonTwo = document.createElement("div");
    buttonTwo.className = "button buttonTwo";
    document.querySelector(".lineOne").append(buttonTwo);

    const buttonTree = document.createElement("div");
    buttonTree.className = "button buttonTree";
    document.querySelector(".lineOne").append(buttonTree);

    const buttonFour = document.createElement("div");
    buttonFour.className = "button buttonFour";
    document.querySelector(".lineOne").append(buttonFour);

    const buttonFive = document.createElement("div");
    buttonFive.className = "button buttonFive";
    document.querySelector(".lineOne").append(buttonFive);

    const buttonSix = document.createElement("div");
    buttonSix.className = "button buttonSix";
    document.querySelector(".lineOne").append(buttonSix);

    const buttonSeven = document.createElement("div");
    buttonSeven.className = "button buttonSeven";
    document.querySelector(".lineOne").append(buttonSeven);

    const buttonEight = document.createElement("div");
    buttonEight.className = "button buttonEight";
    document.querySelector(".lineOne").append(buttonEight);

    const buttonNine = document.createElement("div");
    buttonNine.className = "button buttonNine";
    document.querySelector(".lineOne").append(buttonNine);

    const buttonZero = document.createElement("div");
    buttonZero.className = "button buttonZero";
    document.querySelector(".lineOne").append(buttonZero);

    const buttonMinus = document.createElement("div");
    buttonMinus.className = "button buttonMinus";
    document.querySelector(".lineOne").append(buttonMinus);

    const buttonEqual = document.createElement("div");
    buttonEqual.className = "button buttonEqual";
    document.querySelector(".lineOne").append(buttonEqual);

    const buttonBackspace = document.createElement("div");
    buttonBackspace.className = "button buttonBackspace specButton";
    document.querySelector(".lineOne").append(buttonBackspace);
  }

  addKeyboardLine2() {
    const keyboardLine2 = document.createElement("div");
    keyboardLine2.className = "keyboardLine lineTwo";
    document.querySelector(".wrapperKeyboard").append(keyboardLine2);

    const buttonTab = document.createElement("div");
    buttonTab.className = "button buttonTab specButton";
    document.querySelector(".lineTwo").append(buttonTab);

    const buttonQ = document.createElement("div");
    buttonQ.className = "button buttonQ";
    document.querySelector(".lineTwo").append(buttonQ);

    const buttonW = document.createElement("div");
    buttonW.className = "button buttonW";
    document.querySelector(".lineTwo").append(buttonW);

    const buttonE = document.createElement("div");
    buttonE.className = "button buttonE";
    document.querySelector(".lineTwo").append(buttonE);

    const buttonR = document.createElement("div");
    buttonR.className = "button buttonR";
    document.querySelector(".lineTwo").append(buttonR);

    const buttonT = document.createElement("div");
    buttonT.className = "button buttonT";
    document.querySelector(".lineTwo").append(buttonT);

    const buttonY = document.createElement("div");
    buttonY.className = "button buttonY";
    document.querySelector(".lineTwo").append(buttonY);

    const buttonU = document.createElement("div");
    buttonU.className = "button buttonU";
    document.querySelector(".lineTwo").append(buttonU);

    const buttonI = document.createElement("div");
    buttonI.className = "button buttonI";
    document.querySelector(".lineTwo").append(buttonI);

    const buttonO = document.createElement("div");
    buttonO.className = "button buttonO";
    document.querySelector(".lineTwo").append(buttonO);

    const buttonP = document.createElement("div");
    buttonP.className = "button buttonP";
    document.querySelector(".lineTwo").append(buttonP);

    const buttonBracketLeft = document.createElement("div");
    buttonBracketLeft.className = "button buttonBracketLeft";
    document.querySelector(".lineTwo").append(buttonBracketLeft);

    const buttonBraketRight = document.createElement("div");
    buttonBraketRight.className = "button buttonBraketRight";
    document.querySelector(".lineTwo").append(buttonBraketRight);

    const buttonBackSlash = document.createElement("div");
    buttonBackSlash.className = "button buttonBackSlash";
    document.querySelector(".lineTwo").append(buttonBackSlash);

    const buttonDelete = document.createElement("div");
    buttonDelete.className = "button buttonDelete specButton";
    document.querySelector(".lineTwo").append(buttonDelete);
  }

  addKeyboardLine3() {
    const keyboardLine3 = document.createElement("div");
    keyboardLine3.className = "keyboardLine lineTree";
    document.querySelector(".wrapperKeyboard").append(keyboardLine3);

    const buttonCapsLock = document.createElement("div");
    buttonCapsLock.className = "button buttonCapsLock specButton";
    document.querySelector(".lineTree").append(buttonCapsLock);

    const buttonA = document.createElement("div");
    buttonA.className = "button buttonA";
    document.querySelector(".lineTree").append(buttonA);

    const buttonS = document.createElement("div");
    buttonS.className = "button buttonS";
    document.querySelector(".lineTree").append(buttonS);

    const buttonD = document.createElement("div");
    buttonD.className = "button buttonD";
    document.querySelector(".lineTree").append(buttonD);

    const buttonF = document.createElement("div");
    buttonF.className = "button buttonF";
    document.querySelector(".lineTree").append(buttonF);

    const buttonG = document.createElement("div");
    buttonG.className = "button buttonG";
    document.querySelector(".lineTree").append(buttonG);

    const buttonH = document.createElement("div");
    buttonH.className = "button buttonH";
    document.querySelector(".lineTree").append(buttonH);

    const buttonJ = document.createElement("div");
    buttonJ.className = "button buttonJ";
    document.querySelector(".lineTree").append(buttonJ);

    const buttonK = document.createElement("div");
    buttonK.className = "button buttonK";
    document.querySelector(".lineTree").append(buttonK);

    const buttonL = document.createElement("div");
    buttonL.className = "button buttonL";
    document.querySelector(".lineTree").append(buttonL);

    const buttonSemicolon = document.createElement("div");
    buttonSemicolon.className = "button buttonSemicolon";
    document.querySelector(".lineTree").append(buttonSemicolon);

    const buttonQuote = document.createElement("div");
    buttonQuote.className = "button buttonQuote";
    document.querySelector(".lineTree").append(buttonQuote);

    const buttonEnter = document.createElement("div");
    buttonEnter.className = "button buttonEnter specButton";
    document.querySelector(".lineTree").append(buttonEnter);
  }

  addKeyboardLine4() {
    const keyboardLine4 = document.createElement("div");
    keyboardLine4.className = "keyboardLine lineFour";
    document.querySelector(".wrapperKeyboard").append(keyboardLine4);

    const buttonShiftLeft = document.createElement("div");
    buttonShiftLeft.className = "button buttonShiftLeft specButton";
    document.querySelector(".lineFour").append(buttonShiftLeft);

    const buttonZ = document.createElement("div");
    buttonZ.className = "button buttonZ";
    document.querySelector(".lineFour").append(buttonZ);

    const buttonX = document.createElement("div");
    buttonX.className = "button buttonX";
    document.querySelector(".lineFour").append(buttonX);

    const buttonC = document.createElement("div");
    buttonC.className = "button buttonC";
    document.querySelector(".lineFour").append(buttonC);

    const buttonV = document.createElement("div");
    buttonV.className = "button buttonV";
    document.querySelector(".lineFour").append(buttonV);

    const buttonB = document.createElement("div");
    buttonB.className = "button buttonB";
    document.querySelector(".lineFour").append(buttonB);

    const buttonN = document.createElement("div");
    buttonN.className = "button buttonH";
    document.querySelector(".lineFour").append(buttonN);

    const buttonM = document.createElement("div");
    buttonM.className = "button buttonM";
    document.querySelector(".lineFour").append(buttonM);

    const buttonComma = document.createElement("div");
    buttonComma.className = "button buttonComma";
    document.querySelector(".lineFour").append(buttonComma);

    const buttonDot = document.createElement("div");
    buttonDot.className = "button buttonDot";
    document.querySelector(".lineFour").append(buttonDot);

    const buttonSlash = document.createElement("div");
    buttonSlash.className = "button buttonSlash";
    document.querySelector(".lineFour").append(buttonSlash);

    const buttonArrowUp = document.createElement("div");
    buttonArrowUp.className = "button buttonArrowUp specButton";
    document.querySelector(".lineFour").append(buttonArrowUp);

    const buttonShiftRight = document.createElement("div");
    buttonShiftRight.className = "button buttonShiftRight specButton";
    document.querySelector(".lineFour").append(buttonShiftRight);
  }

  addKeyboardLine5() {
    const keyboardLine5 = document.createElement("div");
    keyboardLine5.className = "keyboardLine lineFive";
    document.querySelector(".wrapperKeyboard").append(keyboardLine5);

    const buttonCtrlLeft = document.createElement("div");
    buttonCtrlLeft.className = "button buttonCtrlLeft specButton";
    document.querySelector(".lineFive").append(buttonCtrlLeft);

    const buttonWin = document.createElement("div");
    buttonWin.className = "button buttonWin specButton";
    document.querySelector(".lineFive").append(buttonWin);

    const buttonAltLeft = document.createElement("div");
    buttonAltLeft.className = "button buttonAltLeft specButton";
    document.querySelector(".lineFive").append(buttonAltLeft);

    const buttonSpace = document.createElement("div");
    buttonSpace.className = "button buttonSpace";
    document.querySelector(".lineFive").append(buttonSpace);

    const buttonAltRight = document.createElement("div");
    buttonAltRight.className = "button buttonAltRight specButton";
    document.querySelector(".lineFive").append(buttonAltRight);

    const buttonArrowLeft = document.createElement("div");
    buttonArrowLeft.className = "button buttonArrowLeft specButton";
    document.querySelector(".lineFive").append(buttonArrowLeft);

    const buttonArrowDown = document.createElement("div");
    buttonArrowDown.className = "button buttonArrowDown specButton";
    document.querySelector(".lineFive").append(buttonArrowDown);

    const buttonArrowRight = document.createElement("div");
    buttonArrowRight.className = "button buttonArrowRight specButton";
    document.querySelector(".lineFive").append(buttonArrowRight);

    const buttonCtrlRight = document.createElement("div");
    buttonCtrlRight.className = "button buttonCtrlRight specButton";
    document.querySelector(".lineFive").append(buttonCtrlRight);
  }
}

export { ElementsAdd };
