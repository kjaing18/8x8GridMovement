/* globals data, draw */

function createPlayer (playerNumber) {
  var img = document.createElement('img');
  img.className = 'sprites';
  img.id = 'player' + playerNumber;
  var player = data.player[playerNumber];
  img.alt = player.alt;
  img.src = player.src;
  document.body.appendChild(img);
}

for (var i = 0; i < data.player.length; i++) {
  createPlayer(i);
}
draw();
