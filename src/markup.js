class ElementsAdd {
  addWrapper() {
    let wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.querySelector("body").append(wrapper);
  }
  addWrapperHeader() {
    let wrapperHeader = document.createElement("div");
    wrapperHeader.className = "wrapperHeader";
    document.querySelector(".wrapper").append(wrapperHeader);
  }
  addTextArea() {
    let textArea = document.createElement("textarea");
    textArea.className = "textArea";
    textArea.setAttribute("rows", 20);
    textArea.setAttribute("cols", 15);
    document.querySelector(".wrapperHeader").append(textArea);
  }
  addContent() {
    let content = document.createElement("div");
    content.className = "content";
    document.querySelector(".wrapperHeader").append(content);
  }
  addContentP() {
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p1.innerHTML = "Keyboard for Windows";
    p2.innerHTML = "Press Shift+Alt to change language";
    document.querySelector(".content").append(p1);
    document.querySelector(".content").append(p2);
  }
  addWrapperKeyboard() {
    let wrapperKeyboard = document.createElement("div");
    wrapperKeyboard.className = "wrapperKeyboard";
    document.querySelector(".wrapper").append(wrapperKeyboard);
  }
  addKeyboardLine1() {
    let keyboardLine1 = document.createElement("div");
    keyboardLine1.className = "keyboardLine lineOne";
    document.querySelector(".wrapperKeyboard").append(keyboardLine1);

    let buttonBackquote = document.createElement("div");
    buttonBackquote.className = "button buttonBackquote";
    document.querySelector(".lineOne").append(buttonBackquote);

    let buttonOne = document.createElement("div");
    buttonOne.className = "button buttonOne";
    document.querySelector(".lineOne").append(buttonOne);

    let buttonTwo = document.createElement("div");
    buttonTwo.className = "button buttonTwo";
    document.querySelector(".lineOne").append(buttonTwo);

    let buttonTree = document.createElement("div");
    buttonTree.className = "button buttonTree";
    document.querySelector(".lineOne").append(buttonTree);

    let buttonFour = document.createElement("div");
    buttonFour.className = "button buttonFour";
    document.querySelector(".lineOne").append(buttonFour);

    let buttonFive = document.createElement("div");
    buttonFive.className = "button buttonFive";
    document.querySelector(".lineOne").append(buttonFive);

    let buttonSix = document.createElement("div");
    buttonSix.className = "button buttonSix";
    document.querySelector(".lineOne").append(buttonSix);

    let buttonSeven = document.createElement("div");
    buttonSeven.className = "button buttonSeven";
    document.querySelector(".lineOne").append(buttonSeven);

    let buttonEight = document.createElement("div");
    buttonEight.className = "button buttonEight";
    document.querySelector(".lineOne").append(buttonEight);

    let buttonNine = document.createElement("div");
    buttonNine.className = "button buttonNine";
    document.querySelector(".lineOne").append(buttonNine);

    let buttonZero = document.createElement("div");
    buttonZero.className = "button buttonZero";
    document.querySelector(".lineOne").append(buttonZero);

    let buttonMinus = document.createElement("div");
    buttonMinus.className = "button buttonMinus";
    document.querySelector(".lineOne").append(buttonMinus);

    let buttonEqual = document.createElement("div");
    buttonEqual.className = "button buttonEqual";
    document.querySelector(".lineOne").append(buttonEqual);

    let buttonBackspace = document.createElement("div");
    buttonBackspace.className = "button buttonBackspace specButton";
    document.querySelector(".lineOne").append(buttonBackspace);
  }
  addKeyboardLine2() {
    let keyboardLine2 = document.createElement("div");
    keyboardLine2.className = "keyboardLine lineTwo";
    document.querySelector(".wrapperKeyboard").append(keyboardLine2);

    let buttonTab = document.createElement("div");
    buttonTab.className = "button buttonTab specButton";
    document.querySelector(".lineTwo").append(buttonTab);

    let buttonQ = document.createElement("div");
    buttonQ.className = "button buttonQ";
    document.querySelector(".lineTwo").append(buttonQ);

    let buttonW = document.createElement("div");
    buttonW.className = "button buttonW";
    document.querySelector(".lineTwo").append(buttonW);

    let buttonE = document.createElement("div");
    buttonE.className = "button buttonE";
    document.querySelector(".lineTwo").append(buttonE);

    let buttonR = document.createElement("div");
    buttonR.className = "button buttonR";
    document.querySelector(".lineTwo").append(buttonR);

    let buttonT = document.createElement("div");
    buttonT.className = "button buttonT";
    document.querySelector(".lineTwo").append(buttonT);

    let buttonY = document.createElement("div");
    buttonY.className = "button buttonY";
    document.querySelector(".lineTwo").append(buttonY);

    let buttonU = document.createElement("div");
    buttonU.className = "button buttonU";
    document.querySelector(".lineTwo").append(buttonU);

    let buttonI = document.createElement("div");
    buttonI.className = "button buttonI";
    document.querySelector(".lineTwo").append(buttonI);

    let buttonO = document.createElement("div");
    buttonO.className = "button buttonO";
    document.querySelector(".lineTwo").append(buttonO);

    let buttonP = document.createElement("div");
    buttonP.className = "button buttonP";
    document.querySelector(".lineTwo").append(buttonP);

    let buttonBracketLeft = document.createElement("div");
    buttonBracketLeft.className = "button buttonBracketLeft";
    document.querySelector(".lineTwo").append(buttonBracketLeft);

    let buttonBraketRight = document.createElement("div");
    buttonBraketRight.className = "button buttonBraketRight";
    document.querySelector(".lineTwo").append(buttonBraketRight);

    let buttonBackSlash = document.createElement("div");
    buttonBackSlash.className = "button buttonBackSlash";
    document.querySelector(".lineTwo").append(buttonBackSlash);

    let buttonDelete = document.createElement("div");
    buttonDelete.className = "button buttonDelete specButton";
    document.querySelector(".lineTwo").append(buttonDelete);
  }
  addKeyboardLine3() {
    let keyboardLine3 = document.createElement("div");
    keyboardLine3.className = "keyboardLine lineTree";
    document.querySelector(".wrapperKeyboard").append(keyboardLine3);

    let buttonCapsLock = document.createElement("div");
    buttonCapsLock.className = "button buttonCapsLock specButton";
    document.querySelector(".lineTree").append(buttonCapsLock);

    let buttonA = document.createElement("div");
    buttonA.className = "button buttonA";
    document.querySelector(".lineTree").append(buttonA);

    let buttonS = document.createElement("div");
    buttonS.className = "button buttonS";
    document.querySelector(".lineTree").append(buttonS);

    let buttonD = document.createElement("div");
    buttonD.className = "button buttonD";
    document.querySelector(".lineTree").append(buttonD);

    let buttonF = document.createElement("div");
    buttonF.className = "button buttonF";
    document.querySelector(".lineTree").append(buttonF);

    let buttonG = document.createElement("div");
    buttonG.className = "button buttonG";
    document.querySelector(".lineTree").append(buttonG);

    let buttonH = document.createElement("div");
    buttonH.className = "button buttonH";
    document.querySelector(".lineTree").append(buttonH);

    let buttonJ = document.createElement("div");
    buttonJ.className = "button buttonJ";
    document.querySelector(".lineTree").append(buttonJ);

    let buttonK = document.createElement("div");
    buttonK.className = "button buttonK";
    document.querySelector(".lineTree").append(buttonK);

    let buttonL = document.createElement("div");
    buttonL.className = "button buttonL";
    document.querySelector(".lineTree").append(buttonL);

    let buttonSemicolon = document.createElement("div");
    buttonSemicolon.className = "button buttonSemicolon";
    document.querySelector(".lineTree").append(buttonSemicolon);

    let buttonQuote = document.createElement("div");
    buttonQuote.className = "button buttonQuote";
    document.querySelector(".lineTree").append(buttonQuote);

    let buttonEnter = document.createElement("div");
    buttonEnter.className = "button buttonEnter specButton";
    document.querySelector(".lineTree").append(buttonEnter);
  }
  addKeyboardLine4() {
    let keyboardLine4 = document.createElement("div");
    keyboardLine4.className = "keyboardLine lineFour";
    document.querySelector(".wrapperKeyboard").append(keyboardLine4);

    let buttonShiftLeft = document.createElement("div");
    buttonShiftLeft.className = "button buttonShiftLeft specButton";
    document.querySelector(".lineFour").append(buttonShiftLeft);

    let buttonZ = document.createElement("div");
    buttonZ.className = "button buttonZ";
    document.querySelector(".lineFour").append(buttonZ);

    let buttonX = document.createElement("div");
    buttonX.className = "button buttonX";
    document.querySelector(".lineFour").append(buttonX);

    let buttonC = document.createElement("div");
    buttonC.className = "button buttonC";
    document.querySelector(".lineFour").append(buttonC);

    let buttonV = document.createElement("div");
    buttonV.className = "button buttonV";
    document.querySelector(".lineFour").append(buttonV);

    let buttonB = document.createElement("div");
    buttonB.className = "button buttonB";
    document.querySelector(".lineFour").append(buttonB);

    let buttonN = document.createElement("div");
    buttonN.className = "button buttonH";
    document.querySelector(".lineFour").append(buttonN);

    let buttonM = document.createElement("div");
    buttonM.className = "button buttonM";
    document.querySelector(".lineFour").append(buttonM);

    let buttonComma = document.createElement("div");
    buttonComma.className = "button buttonComma";
    document.querySelector(".lineFour").append(buttonComma);

    let buttonDot = document.createElement("div");
    buttonDot.className = "button buttonDot";
    document.querySelector(".lineFour").append(buttonDot);

    let buttonSlash = document.createElement("div");
    buttonSlash.className = "button buttonSlash";
    document.querySelector(".lineFour").append(buttonSlash);

    let buttonArrowUp = document.createElement("div");
    buttonArrowUp.className = "button buttonArrowUp specButton";
    document.querySelector(".lineFour").append(buttonArrowUp);

    let buttonShiftRight = document.createElement("div");
    buttonShiftRight.className = "button buttonShiftRight specButton";
    document.querySelector(".lineFour").append(buttonShiftRight);
  }
  addKeyboardLine5() {
    let keyboardLine5 = document.createElement("div");
    keyboardLine5.className = "keyboardLine lineFive";
    document.querySelector(".wrapperKeyboard").append(keyboardLine5);

    let buttonCtrlLeft = document.createElement("div");
    buttonCtrlLeft.className = "button buttonCtrlLeft specButton";
    document.querySelector(".lineFive").append(buttonCtrlLeft);

    let buttonWin = document.createElement("div");
    buttonWin.className = "button buttonWin specButton";
    document.querySelector(".lineFive").append(buttonWin);

    let buttonAltLeft = document.createElement("div");
    buttonAltLeft.className = "button buttonAltLeft specButton";
    document.querySelector(".lineFive").append(buttonAltLeft);

    let buttonSpace = document.createElement("div");
    buttonSpace.className = "button buttonSpace";
    document.querySelector(".lineFive").append(buttonSpace);

    let buttonAltRight = document.createElement("div");
    buttonAltRight.className = "button buttonAltRight specButton";
    document.querySelector(".lineFive").append(buttonAltRight);

    let buttonCtrlRight = document.createElement("div");
    buttonCtrlRight.className = "button buttonCtrlRight specButton";
    document.querySelector(".lineFive").append(buttonCtrlRight);

    let buttonArrowLeft = document.createElement("div");
    buttonArrowLeft.className = "button buttonArrowLeft specButton";
    document.querySelector(".lineFive").append(buttonArrowLeft);

    let buttonArrowDown = document.createElement("div");
    buttonArrowDown.className = "button buttonArrowDown specButton";
    document.querySelector(".lineFive").append(buttonArrowDown);

    let buttonArrowRight = document.createElement("div");
    buttonArrowRight.className = "button buttonArrowRight specButton";
    document.querySelector(".lineFive").append(buttonArrowRight);
  }
}

export { ElementsAdd };
