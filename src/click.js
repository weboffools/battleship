const helpers = require('./helpers');

exports.startGame = (game) => {
  const start = document.querySelector('.start-button');
  start.addEventListener(
    'click',
    () => {
      game.start();
    },
    { once: true },
  );
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

exports.unWhaleClick = () => {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const pod = [blue, right, sperm, humpback, orca];

  for (let whale of pod) {
    whale.removeEventListener('click', helpers.rotateWhale);
  }
};

exports.addGridClicks = (cboard, pboard, player, comp, dom, loop) => {
  const squares = document.querySelectorAll('.computer-square');
  squares.forEach((square) => {
    square.addEventListener(
      'click',
      (e) => {
        const [x, y] = helpers.parseCoordString(e.target.dataset.gridNumber);
        loop(cboard, pboard, player, comp, x, y, dom);
      },
      { once: true },
    );
  });
};

exports.removeGridClicks = (board) => {
  const squares = document.querySelectorAll('.computer-square');
  squares.forEach((square) => {
    square.removeEventListener('click', (e) => {
      const [x, y] = helpers.parseCoordString(e.target.dataset.gridNumber);
      this.takeTurn(board, x, y);
    });
  });
};
