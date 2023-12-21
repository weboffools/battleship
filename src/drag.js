function DragEvents() {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const board = document.querySelector('#drop-target');
  const pod = [blue, right, sperm, humpback, orca];

  function dragStartHandler(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
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
    if (e.target.className === 'grid-button') {
      e.target.appendChild(document.getElementById(data));
    } 
    else if (e.target.className === 'row') {
      e.target.firstChild.appendChild(document.getElementById(data));
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
}

module.exports = DragEvents;
