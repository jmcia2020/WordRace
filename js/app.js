/* global words */
"use strict";
console.log("Ready to Race!");
var userInput = "";
var score = 0;
var users = [];
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
  userName = userName.toUpperCase();
  users.push(loadUser(userName));
}

function handleInputWords(event) {
  event.preventDefault();
  var wordInput = document.getElementById("wordInput");
  var userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  //updateScore();
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

function saveToLocalStorage() {
  var totalUsers = JSON.parse(localStorage.getItem("users"));
  for (u in users) {
    localStorage.setItem(users[u].name, JSON.stringify(users[u].scores));
    if (totalUsers.indexOf(users[u].name) === -1) {
      totalUsers.push(users[u].name);
    }
  }
  localStorage.setItem("users", JSON.stringify(totalUsers));
}

function loadUser(name) {
  var scores = JSON.parse(localStorage.getItem(name.toUpperCase())) || [];
  return new User(name, scores);
}
