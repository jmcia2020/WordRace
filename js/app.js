/* global words */
'use strict';
var userInput = '';
var currentPlayer = null;
var userCollection = {};
var displayWords = [];
var wordCount = 0;

//Hides the word input form (until a username is entered)
document.getElementById("inputWords").style.display = "none";

//Event listeners added
var usersName = document.getElementById('inputUserName');
usersName.addEventListener('submit', handleUserName);
var inputField = document.getElementById('inputWords');
inputField.addEventListener('submit', handleInputWords);

//Globally used elements
var harcoreChk = document.getElementById('chkHardcore');

// Validates words against words.js file and displayWords arr then adds scores to the user object
function wordsValidate() {
  if (currentPlayer === null) {
    return;
  }
  
  if (displayWords.includes(userInput.toLowerCase())) {
    alert('You already used that word... no points');
    return false;
  }
  else if (words.includes(userInput.toLowerCase())) {
    userCollection[currentPlayer] += 50;
    for (var i = 3; i < userInput.length; i++) {
      userCollection[currentPlayer] += 25;
      return true;
    }
  } else {
    alert('That\'s not one of the 1000 most common words... no points');
  }
}
//}

// Event handler that takes in username, changes it to UpperCase, and displays it
function handleUserName(event) {
  event.preventDefault();
  var form = document.getElementById('inputUserName');
  var userNameInput = document.getElementById('username');
  var userName = userNameInput.value;

  console.log(userName);
  userName = userName.toUpperCase();
  console.log(userCollection);
  if (userCollection[userName] === undefined) {
    userCollection[userName] = 0;
  }
  currentPlayer = userName;
  document.getElementById("inputUserName").style.display = "none";
  document.getElementById("inputWords").style.display = "block";
}

// Event handler pushes words to arr and prints them on screen
function handleInputWords(event) {
  event.preventDefault();
  var form2 = document.getElementById('inputWords');
  var wordInput = document.getElementById('wordInput');
  userInput = wordInput.value;
  userInput = userInput.toLowerCase();
  wordCount++;
  if(wordsValidate()){
    displayWords.push(userInput);
  }
  if (wordCount === 5) {
    userFinish();
  }
  form2.reset();
  var placeHolder = document.getElementById('placeHolder');
  placeHolder.innerHTML = '';
  for (var i = displayWords.length-1; i >= 0; i--) {
    var wordList = document.createElement('span');
    wordList.textContent = displayWords[i];
    placeHolder.appendChild(wordList);
  }
}

// Function ends a game round and resets user form for multiple players
function userFinish() {
  displayWords = [];
  localStorage.setItem('users', JSON.stringify(userCollection));
  var form = document.getElementById('inputUserName');
  var form2 = document.getElementById('inputWords');
  form.reset();
  form2.reset();
  alert('Your turn is over. Your score was ' + userCollection[currentPlayer]);
  wordCount = 0;
  document.getElementById("inputWords").style.display = "none";
  document.getElementById("inputUserName").style.display = "block";
}

function compareLastWord(newWord){
  var lastWord = displayWords[displayWords.length-1]
  var lastChar = lastWord.substring(lastWord.length-1,lastWord.length);
  var fistChar = newWord.substring(0,1);
  if(lastChar === fistChar){
    return true;
  }else{
    return false;
  }
}

// Event listeners added
var usersName = document.getElementById('inputUserName');
usersName.addEventListener('submit', handleUserName);
var userInput = document.getElementById('inputWords');
userInput.addEventListener('submit', handleInputWords);
