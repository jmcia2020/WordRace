'use strict';


function loadPlayer() {
  var score = JSON.parse(localStorage.getItem('score'));
  var name = JSON.parse(localStorage.getItem('name'));
  return new Player(name, score);
}

var player = loadPlayer();
