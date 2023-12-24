const getWhales = () => {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const pod = [blue, right, sperm, humpback, orca];

  let whales = [];
  for (let whale of pod) {
    const name = whale.id.split('-').join('');
    const frontCoord = whale.parentElement.dataset.gridNumber;
    const rect = whale.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const length = whale.dataset.length;
    let coords = [];
    const x = Number(frontCoord[1]);
    const y = Number(frontCoord[3]);
    coords.push([x, y]);
    if (width > height) {
      for (let i = 1; i < length; i++) {
        let current = [x, y + i];
        coords.push(current);
      }
    } else {
      for (let i = 1; i < length; i++) {
        let current = [x + i, y];
        coords.push(current);
      }
    }
    whales.push({ name, coords });
  }
  return whales;
};

exports.parseCoordString = (string) => {
  const x = Number(string[1]);
  const y = Number(string[3]);

  return [x, y];
};

const checkWhalesOnBoard = (whales) => {
  for (let whale of whales) {
    for (let pair of whale.coords) {
      const x = pair[0];
      const y = pair[1];
      if (x > 9 || x < 0 || y > 9 || y < 0) {
        return true;
      }
    }
  }
};

const checkWhalesNotOverlapping = (whales) => {
  let temp = [];
  for (let whale of whales) {
    for (let pair of whale.coords) {
      temp.push(pair.join(''));
    }
  }
  let set = new Set(temp);
  if (temp.length > set.size) return true;
};

exports.rotateWhale = (e) => {
  e.currentTarget.classList.toggle('rotated-whale');
};

const getDirection = (coords) => {
  let xs = [];
  let ys = [];
  for (let pair of coords) {
    xs.push(pair[0]);
    ys.push(pair[1]);
  }
  let xSet = new Set(xs);
  let ySet = new Set(ys);

  return xSet.size > ySet.size ? 'down' : 'right';
};

exports.placePlayerWhales = (board) => {
  let whales = getWhales();
  for (let whale of whales) {
    let direction = getDirection(whale.coords);
    let name = whale.name;
    let x = whale.coords[0][0];
    let y = whale.coords[0][1];
    board.placeShip(x, y, name, direction);
  }
};

exports.getButton = (x, y, player) => {
  let coord = String([x, y]);
  let button = document.querySelector(
    `button[data-grid-number='[${coord}]'].${player}-square`,
  );
  return button;
};

exports.checkPlayerBoard = (dom) => {
  const shipArea = document.querySelector('.ship-area');
  if (shipArea.children.length > 0) {
    dom.changeMessage(
      'All your whales have not been placed!',
      'Please place all whales before clicking START.',
    );
    return;
  } else {
    let whales = getWhales();
    if (checkWhalesOnBoard(whales)) {
      dom.changeMessage(
        'Some of your whales are off the board.',
        'Please rearrange your whales!',
      );
      return;
    } else if (checkWhalesNotOverlapping(whales)) {
      dom.changeMessage(
        'One or more of your whales are overlapping.',
        'Please rearrange your whales!',
      );
      return;
    } else {
      dom.changeMessage(
        'The game has now begun!',
        'Click a square on the Computer Board to attack.',
      );
      return true;
    }
  }
};
