class DOM {
  constructor(container) {
    this.container = container;
  }

  init() {
    const main = this.makeElement('div', [['class', 'game-area']]);
    const player = this.makeElement('div', [['class', 'player-area']]);
    const computer = this.makeElement('div', [['class', 'computer-area']]);
    const pBoardArea = this.makeElement('div', [['class', 'p-board-area']]);
    const cBoardArea = this.makeElement('div', [['class', 'c-board-area']]);
    const pBoard = this.makeElement('div', [['class', 'player-board']]);
    const cBoard = this.makeElement('div', [['class', 'comp-board']]);
    const pBoardHead = this.makeElement('div', [['class', 'p-board-head']]);
    for (let n of ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      let num = this.makeElement('span', [['class', 'axis-num']], n);
      pBoardHead.append(num);
    }
    const cBoardHead = this.makeElement('div', [['class', 'c-board-head']]);
    for (let n of ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      let num = this.makeElement('span', [['class', 'axis-num']], n);
      cBoardHead.append(num);
    }
    const pBoardSide = this.makeElement('div', [['class', 'p-board-side']]);
    for (let n of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
      let num = this.makeElement('span', [['class', 'axis-num']], n);
      pBoardSide.append(num);
    }
    const cBoardSide = this.makeElement('div', [['class', 'c-board-side']]);
    for (let n of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
      let num = this.makeElement('span', [['class', 'axis-num']], n);
      cBoardSide.append(num);
    }
    pBoardArea.append(pBoardHead, pBoardSide, pBoard);
    cBoardArea.append(cBoardHead, cBoardSide, cBoard);
    const titleArea = this.makeElement('div', [['class', 'title-area']]);
    const title = this.makeElement(
      'span',
      [['class', 'title-text']],
      'BATTLEWHALE',
    );
    titleArea.append(title);
    const compSidebar = this.makeElement('div', [['class', 'comp-sidebar']]);
    const fireControl = this.makeElement('div', [['class', 'fire-control']]);
    const disclaimer = this.makeElement('div', [['class', 'disclaimer']], 'Whales are not to scale');
    const ships = this.makeElement('div', [['class', 'ship-catalog']]);
    const shipsTitle = this.makeElement('h2', [['class', 'ships-title']]);
    shipsTitle.textContent = 'WHALES';
    const blueWhaleDiv = this.makeElement('div', [['class', 'whale-div']]);
    const blueWhale = this.makeElement('img', [
      ['class', 'whale'],
      ['src', './images/blue-whale.jpg'],
    ]);
    const blueWhaleText = this.makeElement('p', [['class', 'whale-text']]);
    blueWhaleText.textContent = 'BLUE 5 HITS';
    blueWhaleDiv.append(blueWhale, blueWhaleText);
    const rightWhaleDiv = this.makeElement('div', [['class', 'whale-div']]);

    const rightWhale = this.makeElement('img', [
      ['class', 'whale'],
      ['src', './images/right-whale.jpg'],
    ]);
    const rightWhaleText = this.makeElement('p', [['class', 'whale-text']]);
    rightWhaleText.textContent = 'RIGHT 4 HITS';
    rightWhaleDiv.append(rightWhale, rightWhaleText);

    const spermWhaleDiv = this.makeElement('div', [['class', 'whale-div']]);

    const spermWhale = this.makeElement('img', [
      ['class', 'whale'],
      ['src', './images/sperm-whale.jpg'],
    ]);
    const spermWhaleText = this.makeElement('p', [['class', 'whale-text']]);
    spermWhaleText.textContent = 'SPERM 3 HITS';
    spermWhaleDiv.append(spermWhale, spermWhaleText);

    const humpbackDiv = this.makeElement('div', [['class', 'whale-div']]);

    const humpback = this.makeElement('img', [
      ['class', 'whale'],
      ['src', './images/humpback.jpg'],
    ]);
    const humpbackText = this.makeElement('p', [['class', 'whale-text']]);
    humpbackText.textContent = 'HUMPBACK 3 HITS';

    humpbackDiv.append(humpback, humpbackText);
    const orcaDiv = this.makeElement('div', [['class', 'whale-div']]);

    const orca = this.makeElement('img', [
      ['class', 'whale'],
      ['src', './images/orca.jpg'],
    ]);
    const orcaText = this.makeElement('p', [['class', 'whale-text']]);
    orcaText.textContent = 'ORCA 2 HITS';
    orcaDiv.append(orca, orcaText);

    ships.append(
      shipsTitle,
      blueWhaleDiv,
      rightWhaleDiv,
      spermWhaleDiv,
      humpbackDiv,
      orcaDiv,
    );

    fireControl.append(ships);
    compSidebar.append(fireControl, disclaimer);
    const shipArea = this.makeElement('div', [['class', 'ship-area']]);
    const playerSidebar = this.makeElement('div', [
      ['class', 'player-sidebar'],
    ]);
    const hitPieces = this.makeElement('div', [['class', 'hit-pieces']]);
    for (let i = 0; i < 54; i++) {
      let piece = this.makeElement('div', [['class', 'hit-piece']]);
      hitPieces.append(piece);
    }
    const missPieces = this.makeElement('div', [['class', 'miss-pieces']]);
    for (let i = 0; i < 120; i++) {
      let piece = this.makeElement('div', [['class', 'miss-piece']]);
      missPieces.append(piece);
    }
    const quoteDiv = this.makeElement('div', [['class', 'quote-div']]);
    const quoteText = 'There is, one knows not what sweet mystery about this sea, whose gently awful stirrings seem to speak of some hidden soul beneath. -- Herman Melville';
    const quote = this.makeElement('h3', [['class', 'quote-text']], quoteText);
    quoteDiv.append(quote);
    const copyright = this.makeElement('span', [['class', 'img-copyright']]);
    const copyrightLinkText =
      'https://ocean.si.edu/ocean-life/marine-mammals/what-largest-whale-cetacea-size-comparison-chart';
    const copyrightLink = this.makeElement(
      'a',
      [
        [
          'href',
          'https://ocean.si.edu/ocean-life/marine-mammals/what-largest-whale-cetacea-size-comparison-chart',
        ],
      ],
      copyrightLinkText,
    );
    const copyrightText =
      'Whale images are used subject to usage conditions from the Smithsonian Institution:';
    const copyTextDiv = this.makeElement(
      'div',
      [['class', 'copy-text']],
      copyrightText,
    );
    copyright.append(copyTextDiv, copyrightLink);

    playerSidebar.append(hitPieces, missPieces);
    computer.append(titleArea, cBoardArea, compSidebar);
    player.append(shipArea, pBoardArea, playerSidebar);

    main.append(computer, player);
    this.container.append(main, quoteDiv, copyright);
  }

  makeElement(type, attributes, text) {
    const element = document.createElement(type);
    for (let attribute of attributes) {
      let [name, val] = attribute;
      element.setAttribute(name, val);
    }
    element.textContent = text;
    return element;
  }

  makeBoard(board, area) {
    for (let row of board.board) {
      const rowDiv = this.makeElement('div', [['class', 'row']]);
      area.append(rowDiv);
      for (let col of row) {
        const btn = this.makeElement('button', [['class', 'grid-button']]);
        rowDiv.append(btn);
      }
    }
  }
}

module.exports = DOM;
