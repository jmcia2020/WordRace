/* global words */
"use strict";
console.log("Ready to Race!");
var userInput = '';
var currentPlayer = 0;
var users = [];
var displayWords =[];


// This function validates the words against the words.js file
function wordsValidate() {
  if (words.indexOf(userInput.toLowerCase()) > -1) {
   // users[currentPlayer].scoring();
    return true;
  } else {
    alert("Please enter a valid word.");
    return false;
  }
}

// This function is an event handler that takes in the userName and changes it to UpperCase
function handleUserName(event) {
  event.preventDefault();
  var form = document.getElementById('inputUserName'); 
  var userNameInput = document.getElementById('username');
  var userName = userNameInput.value;
  console.log(userName);
  userName = userName.toUpperCase();
  users.push(loadUser(userName));
  form.textContent = "welcome" + userName;
}

// This function is an event handler that changes the wordInput to lowerCase for validation

function handleInputWords(event) {
  event.preventDefault();
  var form2 = document.getElementById('inputWords');
  var wordInput = document.getElementById('wordInput');
  userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  console.log(userInput);
  wordsValidate();
  form2.reset();
  //updateScore();
}

var usersName = document.getElementById("inputUserName");

usersName.addEventListener("submit", handleUserName);

var userInput = document.getElementById("inputWords");
userInput.addEventListener("submit", handleInputWords);

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
