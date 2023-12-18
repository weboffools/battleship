import './style.css';
const Game = require('./game');
const DOM = require('./dom');

const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'container';
body.append(container);

const dom = new DOM(container);
dom.init();
const game = new Game(dom);
game.init();





