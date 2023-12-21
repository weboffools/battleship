function ClickEvents(game) {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const pod = [blue, right, sperm, humpback, orca];
  const start = document.querySelector('.start-button');

  function rotateWhale(e) {
    e.currentTarget.classList.toggle('rotated-whale');
  }

  for (let whale of pod) {
    whale.addEventListener('click', rotateWhale);
  }

  start.addEventListener('click', () => {
    game.start();
  });
}

module.exports = ClickEvents;
