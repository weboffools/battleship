function Events() {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const board = document.querySelector('#drop-target');
  const pod = [blue, right, sperm, humpback, orca];
  const button = document.querySelector('.grid-button');
  const start = document.querySelector('.start-button');

  function dragStartHandler(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setDragImage(button, 25/2, 25/2);
  }

  function dragenterHandler(e) {
    e.preventDefault();
  }

  function dragoverHandler(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }

  function dropHandler(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    e.target.appendChild(document.getElementById(data));
  }

  function rotateWhale(e) {
    e.currentTarget.classList.toggle('rotated-whale');
  }

  function getWhaleCoords(pod) {
    for (let whale of pod) {
      const id = whale.id;
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
      console.log(id, coords);
    }
  }
  window.addEventListener('DOMContentLoaded', () => {

    for (let whale of pod) {
      whale.addEventListener('dragstart', dragStartHandler);
    }
  });

  board.addEventListener('dragenter', dragenterHandler);
  board.addEventListener('dragover', dragoverHandler);
  board.addEventListener('drop', dropHandler);

  for (let whale of pod) {
    whale.addEventListener('click', rotateWhale);
  }

  start.addEventListener('click', () => {
    getWhaleCoords(pod);
  });
}

module.exports = Events;
