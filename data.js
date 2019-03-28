/* eslint-disable no-unused-vars */

var data = {
  player: [
    { x: 0, y: 0, alt: 'Idle Cat', src: 'png/IdleCat.png', animating: false },
    { x: 7, y: 7, alt: 'Idle Dog', src: 'png/IdleDog.png', animating: false }
  ],
  previousPlayer: []
};

data.previousPlayer = JSON.parse(JSON.stringify(data.player));
