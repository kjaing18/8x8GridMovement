/* eslint-disable no-unused-vars */
/* globals data */

function handleWrap () {
  for (var i = 0; i < data.players.length; i++) {
    if (data.players[i].x < 0) {
      data.players[i].x = 7;
    }
    if (data.players[i].x > 7) {
      data.players[i].x = 0;
    }
    if (data.players[i].y < 0) {
      data.players[i].y = 7;
    }
    if (data.players[i].y > 7) {
      data.players[i].y = 0;
    }
  }
}

function draw () {
  for (var i = 0; i < data.players.length; i++) {
    var player = document.getElementById('player' + i);
    player.appendChild(document.getElementById('cell-' + data.players[i].x + '-' + data.players[i].y));
  }
}
