/* globals data, handleWrap, draw */

document.addEventListener('keydown', function (event) {
  if (event.key === 'w') {
    data.player[0].y--;
  }
  if (event.key === 's') {
    data.player[0].y++;
  }
  if (event.key === 'a') {
    data.player[0].x--;
  }
  if (event.key === 'd') {
    data.player[0].x++;
  }

  if (event.key === 'i') {
    data.player[1].y--;
  }
  if (event.key === 'k') {
    data.player[1].y++;
  }
  if (event.key === 'j') {
    data.player[1].x--;
  }
  if (event.key === 'l') {
    data.player[1].x++;
  }
  handleWrap();
  draw();
});
