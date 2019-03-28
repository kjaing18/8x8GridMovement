/* globals data, stopWrap, draw */

document.addEventListener('keyup', function (event) {
  if (!data.player[0].animating) {
    if (event.key === 'w') {
      data.player[0].y--;
      stopWrap();
      draw();
    }
    if (event.key === 's') {
      data.player[0].y++;
      stopWrap();
      draw();
    }
    if (event.key === 'a') {
      data.player[0].x--;
      stopWrap();
      draw();
    }
    if (event.key === 'd') {
      data.player[0].x++;
      stopWrap();
      draw();
    }
  }

  if (!data.player[1].animating) {
    if (event.key === 'i') {
      data.player[1].y--;
      stopWrap();
      draw();
    }
    if (event.key === 'k') {
      data.player[1].y++;
      stopWrap();
      draw();
    }
    if (event.key === 'j') {
      data.player[1].x--;
      stopWrap();
      draw();
    }
    if (event.key === 'l') {
      data.player[1].x++;
      stopWrap();
      draw();
    }
  }
});
