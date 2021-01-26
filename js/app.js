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

//button
// Get the input field
var input = document.getElementById("myInput");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});

function handleUserName(event) {
  event.preventDefault();
  var userNameInput = document.getElementById("username");
  var userName = useNameInput.value;
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

/*
use this function to load the user data for the leaderboards and for the game
  function loadUser(name) {
    var scores = JSON.parse(localStorage.getItem(name.toUpperCase())) || [];
    user = new User(name,scores);
  }
*/
