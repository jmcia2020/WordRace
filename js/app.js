/* global words */
"use strict";
console.log("Ready to Race!");
var userInput = "";
var score = 0;
console.log(words);
function wordsValidate() {
  if (words.indexOf(userInput.toLowerCase()) > -1) {
    score + 100;
    return true;
  } else {
    return false;
  }
}
