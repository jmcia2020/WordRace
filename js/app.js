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

function handleUserName(event) {
  event.preventDefault();
  var userNameInput = document.getElementById("username");
  var userName = userNameInput.value;
  loadUser(userName);
}

function handleInputWords(event) {
  event.preventDefault();
  var wordInput = document.getElementById("wordInput");
  var userNameInput = wordInput.value;
}

var usersName = document.getElementById("inputUserName");
usersName = document.getElementById("submit", handleInputWords);

var userInput = document.getElementById("inputWords");
userInput.addEventListener("submit", handleUserName);

var User = function (name, scores) {
  this.name = name;
  this.scores = scores;
};

User.prototype.addScore = function (score) {
  this.scores.push(score);
};

User.prototype.saveToLocalStorage = function () {
  localStorage.setItem(this.name, JSON.stringify(this.scores));
};

  function loadUser(name) {
    var scores = JSON.parse(localStorage.getItem(name.toUpperCase())) || [];
    user = new User(name,scores);
  }
