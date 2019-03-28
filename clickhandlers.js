/* globals data, stopWrap, draw */

var playerOneDown = document.getElementById('p1Down');
var playerTwoDown = document.getElementById('p2Down');
var playerOneUp = document.getElementById('p1Up');
var playerTwoUp = document.getElementById('p2Up');
var playerOneLeft = document.getElementById('p1Left');
var playerTwoLeft = document.getElementById('p2Left');
var playerOneRight = document.getElementById('p1Right');
var playerTwoRight = document.getElementById('p2Right');

playerOneDown.onclick = function () {
  if (data.player[0].animating) {
    return;
  }
  data.player[0].y++;
  stopWrap();
  draw();
};
playerTwoDown.onclick = function () {
  if (data.player[1].animating) {
    return;
  }
  data.player[1].y++;
  stopWrap();
  draw();
};
playerOneUp.onclick = function () {
  if (data.player[0].animating) {
    return;
  }
  data.player[0].y--;
  stopWrap();
  draw();
};
playerTwoUp.onclick = function () {
  if (data.player[1].animating) {
    return;
  }
  data.player[1].y--;
  stopWrap();
  draw();
};
playerOneLeft.onclick = function () {
  if (data.player[0].animating) {
    return;
  }
  data.player[0].x--;
  stopWrap();
  draw();
};
playerTwoLeft.onclick = function () {
  if (data.player[1].animating) {
    return;
  }
  data.player[1].x--;
  stopWrap();
  draw();
};
playerOneRight.onclick = function () {
  if (data.player[0].animating) {
    return;
  }
  data.player[0].x++;
  stopWrap();
  draw();
};
playerTwoRight.onclick = function () {
  if (data.player[1].animating) {
    return;
  }
  data.player[1].x++;
  stopWrap();
  draw();
};
