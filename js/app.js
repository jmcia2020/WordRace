'use strict';
console.log('Ready to Race!');

function handleUserName(event) {
  event.preventDefault();
  var userNameInput = document.getElementById('username');
  var userName = useNameInput.value;
}

function handleInputWords(event) {
  event.preventDefault();
  var wordInput = document.getElementById('wordInput');
  var userNameInput = wordInput.value;
}

var usersName = document.getElementById('inputUserName');
usersName = document.getElementById('submit', handleInputWords);

var userInput = document.getElementById('inputWords');
userInput.addEventListener('submit', handleUserName);