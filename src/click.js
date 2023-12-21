const helpers = require('./helpers');

exports.startGame = (game) => {
  const start = document.querySelector('.start-button');
  start.addEventListener('click', () => {
    game.start();
  });
};

exports.whaleClick = () => {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const pod = [blue, right, sperm, humpback, orca];

  for (let whale of pod) {
    whale.addEventListener('click', helpers.rotateWhale);
  }
};


