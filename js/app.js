/* global words */
'use strict';
var userInput = '';
var currentPlayer = null;
var userCollection = {};
var displayWords = [];
var wordCount = 0;

var usersName = document.getElementById('inputUserName');
usersName.addEventListener('submit', handleUserName);
var userInput = document.getElementById('inputWords');
userInput.addEventListener('submit', handleInputWords);

// This function validates the words against the words.js file and the displayWords array
function wordsValidate() {
  if (currentPlayer === null) {
    return;
  }
  if (displayWords.includes(userInput.toLowerCase())) {
    alert('You already used that word... no points');
  }
  else if (words.includes(userInput.toLowerCase())) {
    userCollection[currentPlayer] += 50;
    for (var i = 3; i < userInput.length; i++) {
      userCollection[currentPlayer] += 25;
    }
  } else {
    alert('That\'s not one of the 1000 most common words... no points');
  }
}
//}

// This function is an event handler that takes in the userName and changes it to UpperCase
function handleUserName(event) {
  event.preventDefault();
  var form = document.getElementById('inputUserName');
  var userNameInput = document.getElementById('username');
  var userName = userNameInput.value;
  userName = userName.toUpperCase();
  console.log(userCollection);
  if (userCollection[userName] === undefined) {
    userCollection[userName] = 0;
  }
  currentPlayer = userName;
  form.textContent = 'Welcome ' + userName + '!';
}

// This function is an event handler that changes the wordInput to lowerCase for validation
function handleInputWords(event) {
  event.preventDefault();
  var form2 = document.getElementById('inputWords');
  var wordInput = document.getElementById('wordInput');
  userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  wordCount++;
  wordsValidate();
  displayWords.push(userInput);
  form2.reset();
  if (wordCount === 5) {
    userFinish();
  }
}

// This function is used to end a game round and reset user form for multiple players
function userFinish() {
  localStorage.setItem('users', JSON.stringify(userCollection));
  var form = document.getElementById('inputUserName');
  var form2 = document.getElementById('inputWords');
  form.reset();
  form2.reset();
  alert('Your turn is over. Your score was ' + userCollection[currentPlayer]);
  wordCount = 0;
  displayWords = [];
}

var usersName = document.getElementById('inputUserName');
usersName.addEventListener('submit', handleUserName);
var userInput = document.getElementById('inputWords');
userInput.addEventListener('submit', handleInputWords);
