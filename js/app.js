/* global words */
"use strict";
var userInput = '';
var currentPlayer = 0;
var users = [];
var displayWords =[];


// This function is an event handler that takes in the userName and changes it to UpperCase
function handleUserName(event) {
  event.preventDefault();
  var form = document.getElementById('inputUserName'); 
  var userNameInput = document.getElementById('username');
  var userName = userNameInput.value;
  userName = userName.toUpperCase();
  var user1 = new User();
  user1.name = userName;
  user1.currentScore = 0;
  users.push(user1);

  form.textContent = "Welcome " + userName + "!";
}

// This function is an event handler that changes the wordInput to lowerCase for validation
function handleInputWords(event) {
  event.preventDefault();
  var form2 = document.getElementById('inputWords');
  var wordInput = document.getElementById('wordInput');
  userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  wordsValidate(userInput);
  form2.reset();
}

var usersName = document.getElementById("inputUserName");
usersName.addEventListener("submit", handleUserName);
var userInput = document.getElementById("inputWords");
userInput.addEventListener("submit", handleInputWords);

function scoring (user) {
  user.currentScore += 50;
  for (var i = 3; i < userInput.length; i++) {
    this.currentScore += 25;
  }
}

// This function validates the words against the words.js file
function wordsValidate(userInput) {
  if (words.indexOf(userInput.toLowerCase()) > -1) {
    scoring(users[0]);
    return true;
  } else {
    alert("Please enter a valid word.");
    return false;
  }
}

var User = function (name) {
  this.name = name;
  this.currentScore;
};



// User.prototype.addScore = function (score) {
//   this.scores.push(score);
// };

// function saveToLocalStorage() {
//   var totalUsers = JSON.parse(localStorage.getItem("users"));
//   for (u in users) {
//     localStorage.setItem(users[u].name, JSON.stringify(users[u].scores));
//     if (totalUsers.indexOf(users[u].name) === -1) {
//       totalUsers.push(users[u].name);
//     }
//   }
//   localStorage.setItem("users", JSON.stringify(totalUsers));
// }

// function loadUser(name) {
//   var scores = JSON.parse(localStorage.getItem(name.toUpperCase())) || [];
//   return new User(name, scores);
// }
