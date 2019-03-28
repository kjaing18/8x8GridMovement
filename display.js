/* eslint-disable no-unused-vars */
/* globals data, $ */

function stopWrap () {
  for (var i = 0; i < data.player.length; i++) {
    if (data.player[i].x < 0) {
      data.player[i].x = 0;
    }
    if (data.player[i].x > 7) {
      data.player[i].x = 7;
    }
    if (data.player[i].y < 0) {
      data.player[i].y = 0;
    }
    if (data.player[i].y > 7) {
      data.player[i].y = 7;
    }
  }
}

function draw () {
  for (let i = 0; i < data.previousPlayer.length; i++) {
    var left = 0;
    var top = 0;
    data.player[i].animating = true;
    if (data.player[i].x < data.previousPlayer[i].x) {
      left = -150;
    }
    if (data.player[i].x > data.previousPlayer[i].x) {
      left = 150;
    }
    if (data.player[i].y < data.previousPlayer[i].y) {
      top = -50;
    }
    if (data.player[i].y > data.previousPlayer[i].y) {
      top = 50;
    }
    $('#player' + i).animate({
      left: '+=' + left,
      top: '+=' + top
    }, 500, function () {
      $(this).css('top', '').css('left', '');
      $('#cell-' + data.player[i].x + '-' + data.player[i].y).append($(this));
      data.player[i].animating = false;
    });
  }
  data.previousPlayer = JSON.parse(JSON.stringify(data.player));
}
