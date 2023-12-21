exports.getWhales = () => {
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

exports.checkWhalesOnBoard = (whales) => {
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

exports.checkWhalesNotOverlapping = (whales) => {
  let temp = [];
  for (let whale of whales) {
    for (let pair of whale.coords) {
      temp.push(pair.join(''));
    }
  }
  let set = new Set(temp);
  if (temp.length > set.size) return true;
};

