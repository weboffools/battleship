function Events() {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const board = document.querySelector('#drop-target');

  function dragStartHandler(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.setData('application/x-moz-node', e.target);
    e.dataTransfer.dropEffect = 'move';
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

  window.addEventListener('DOMContentLoaded', () => {
    const group = [blue, right, sperm, humpback, orca];

    for (let item of group) {
      item.addEventListener('dragstart', dragStartHandler);
    }
  });

  board.addEventListener('dragenter', dragenterHandler);
  board.addEventListener('dragover', dragoverHandler);
  board.addEventListener('drop', dropHandler);
}

module.exports = Events;
