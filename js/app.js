/* global words */
"use strict";
var userInput = "";
var currentPlayer = null;
var userCollection = {};
var displayWords = [];
var wordCount = 0;

// This function validates the words against the words.js file
function wordsValidate() {
  if (currentPlayer === null) {
    return;
  }
  if (words.includes(userInput.toLowerCase())) {
    userCollection[currentPlayer] += 50;
    for (var i = 3; i < userInput.length; i++) {
      userCollection[currentPlayer] += 25;
    }
  } else {
    alert("Invalid word, you get no points...");
  }
}

// This function is an event handler that takes in the userName and changes it to UpperCase
function handleUserName(event) {
  event.preventDefault();
  var form = document.getElementById("inputUserName");
  var userNameInput = document.getElementById("username");
  var userName = userNameInput.value;
  userName = userName.toUpperCase();
  console.log(userCollection);
  if (userCollection[userName] === undefined) {
    userCollection[userName] = 0;
  }
  currentPlayer = userName;
  form.textContent = "Welcome " + userName;
}

// This function is used to end a game round and reset user form for multiple players
function UserFinish() {
  localStorage.setItem("users", JSON.stringify(userCollection));
  var form = document.getElementById("inputUserName");
  var form2 = document.getElementById("inputWords");
  form.reset();
  form2.reset();
  alert("Your turn is over");
  wordCount = 0;
}

// This function is an event handler that changes the wordInput to lowerCase for validation
function handleInputWords(event) {
  event.preventDefault();
  var form2 = document.getElementById("inputWords");
  var wordInput = document.getElementById("wordInput");
  userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  wordCount++;
  wordsValidate();
  form2.reset();
  if (wordCount === 5) {
    UserFinish();
  }
}

var usersName = document.getElementById("inputUserName");
usersName.addEventListener("submit", handleUserName);
var userInput = document.getElementById("inputWords");
userInput.addEventListener("submit", handleInputWords);
