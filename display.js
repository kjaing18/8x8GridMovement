/* eslint-disable no-unused-vars */
/* globals data */

function handleWrap () {
  for (var i = 0; i < data.player.length; i++) {
    if (data.player[i].x < 0) {
      data.player[i].x = 7;
    }
    if (data.player[i].x > 7) {
      data.player[i].x = 0;
    }
    if (data.player[i].y < 0) {
      data.player[i].y = 7;
    }
    if (data.player[i].y > 7) {
      data.player[i].y = 0;
    }
  }
}

function draw () {
  for (var i = 0; i < data.player.length; i++) {
    var player = document.getElementById('player' + i);
    document.getElementById('cell-' + data.player[i].x + '-' + data.player[i].y).appendChild(player);
  }
}
