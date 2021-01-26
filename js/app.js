"use strict";
console.log("Ready to Race!");

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
