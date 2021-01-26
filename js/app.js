/* global words */
"use strict";
console.log("Ready to Race!");
var userInput = '';
var currentPlayer;


function wordsValidate() {
  if (words.indexOf(userInput.toLowerCase()) > -1) {
    return true;
    users[currentPlayer].scoring();
  } else {
    return false;
    alert("Please enter a valid word.");
  }
}

function handleUserName(event) {
  event.preventDefault();
  var userNameInput = document.getElementById('username');
  var userName = userNameInput.value;
  userName = userName.toUpperCase();
  loadUser(userName);
}

function handleInputWords(event) {
  event.preventDefault();
  var wordInput = document.getElementById('wordInput');
  userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  wordsValidate();
}

var usersName = document.getElementById("inputUserName");
usersName = document.getElementById("submit", handleInputWords);

var userInput = document.getElementById("inputWords");
userInput.addEventListener("submit", handleUserName);

var User = function (name, scores) {
  this.name = name;
  this.scores = scores;
  this.currentScore;
};

User.prototype.scoring = function () {
  this.currentScore += 50;
  for (var i = 3; i < userInput.length; i++) {
    this.currentScore += 25;
  }
};

User.prototype.addScore = function (score) {
  this.scores.push(score);
};

User.prototype.saveToLocalStorage = function () {
  localStorage.setItem(this.name, JSON.stringify(this.scores));
};

function loadUser(name) {
  var scores = JSON.parse(localStorage.getItem(name.toUpperCase())) || [];
  var user = new User(name,scores);
}
