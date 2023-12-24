(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* { margin: 0; padding: 0; }

:root {
  --light-blue: rgb(90, 172, 201);
  --med-blue: rgb(58, 133, 171);
  --dark-blue: rgb(79, 85, 99);
  --title-red: rgb(210, 99, 105);
  --ship-grey: rgb(195, 192, 195);
  --off-white: rgb(229, 220, 203);
  --title-white: rgb(224, 225, 218);
}

html {
  font-family: 'Archivo Black', sans-serif;
  box-sizing: border-box;
}

body {
  background: whitesmoke;
}

.container {
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 60px 60px 60px;
  justify-items: center;
  gap: 20px;
}

.game-area {
  position: relative;
  display: grid;
  margin-top: 20px;
  height: 500px;
  border: 6px solid var(--dark-blue);
  background: var(--dark-blue);
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.player-area {
  display: grid;
  border: 2px solid whitesmoke;
  width: calc(((340px * 8) / 5) + 30px);
  grid-column: 2 / 3;
  grid-template-columns: calc(300px / 11 * 2 + 6px) 2fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.p-board-area {
  display: grid;
  margin-right: 3px;
  background: var(--dark-blue);
  grid-template-columns: 30px 300px;
  grid-template-rows: 30px 300px 40px 1fr;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.p-board-head {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}

.p-board-side {
  display: grid;
  height: 300px;
  grid-template-rows: repeat(10, 1fr);
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.player-board {
  display: grid;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(10, 1fr);
  background: 
    linear-gradient(217deg, var(--light-blue), var(--med-blue) 70.71%),
    linear-gradient(127deg, var(--light-blue), var(--med-blue) 70.71%),
    linear-gradient(336deg, var(--dark-blue), var(--dark-blue) 70.71%);
  }

.ship-area {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: var(--dark-blue);
  border-right: 1px solid var(--title-white);
}

.ship {
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 4px;
  width: calc(300px / 11 - 1px);
  outline: 1px solid var(--off-white);
}

.ship-dot {
  width: 12px;
  height: 12px;
  background: rgba(256, 256, 256, 0.2);
  border: 1px dashed black;
  border-radius: 100%;
}

.blue-ship {
  background: linear-gradient(rgb(132, 142, 151), rgb(164, 186, 200));
  height: calc(300px / 11 * 5 + 8px);
}

.right-ship {
  background: linear-gradient(rgb(79, 94, 125), rgb(169, 188, 207));
  height: calc(300px / 11 * 4 + 6px);
}

.sperm-ship {
  background: linear-gradient(rgb(168, 166, 144), rgb(144, 150, 129));
  height: calc(300px / 11 * 3 + 4px);
}

.humpback-ship {
  align-self: flex-end;
  background: linear-gradient(rgb(124, 137, 153), rgb(101, 109, 122));
  height: calc(300px / 11 * 3 + 4px);
}

.orca-ship {
  background: linear-gradient(rgb(56, 63, 75), rgb(109, 119, 152));
  height: calc(300px / 11 * 2 + 1px);
}

.rotated-whale {
  transform-origin: calc(26.27px / 2) calc(25.27px / 2);
  transform: rotate(-90deg);
}

.player-sidebar {
  display: grid;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  grid-template-rows: 1fr 2fr;
}

.hit-pieces {
  display: grid;
  padding: 3px;
  align-items: center;
  justify-items: center;
  border-bottom: 3px solid var(--dark-blue);
  grid-template-columns: repeat(6, 1fr);
  grid-row: 1 / 2;
  background: var(--med-blue);
}

.hit-piece {
  position: sticky;
  z-index: 4;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: red;
}

.miss-pieces {
  display: grid;
  padding: 3px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(8, 1fr);
  grid-row: 2 / 3;
  background: var(--med-blue);
}

.miss-piece {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: white;
}

.computer-area {
  display: grid;
  border: 2px solid whitesmoke;
  width: calc(((340px * 8) / 5) + 30px);
  grid-template-columns: 1fr 6fr 3fr;
  grid-template-rows: 1fr;
  grid-column: 1 / 2;
}

.c-board-area {
  display: grid;
  margin-right: 3px;
  background: var(--dark-blue);
  grid-template-columns: 30px 300px;
  grid-template-rows: 30px 300px;
  grid-column: 2 / 3;
}

.c-board-head {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}

.c-board-side {
  display: grid;
  height: 300px;
  grid-template-rows: repeat(10, 1fr);
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.comp-board {
  display: grid;
  position: relative;
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  width: 100%;
  height: 300px;
  grid-template-rows: repeat(10, 1fr);
  background: 
    linear-gradient(217deg, var(--light-blue), var(--med-blue) 70.71%),
    linear-gradient(127deg, var(--light-blue), var(--med-blue) 70.71%),
    linear-gradient(336deg, var(--dark-blue), var(--dark-blue) 70.71%);
}

.title-area {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-column: 1 / 2;
  background: var(--off-white);
}

.title-text {
  padding: 10px;
  font-size: 28px;
  font-weight: 400;
  writing-mode: vertical-lr;
  text-orientation: upright;
  color: var(--title-white);
  background: var(--title-red);
}

.comp-sidebar {
  display: grid;
  grid-column: 3 / 4;
}

.fire-control {
  display: grid;
  background: var(--off-white);
}

.ships {
  display: grid;
}

.control-area {
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-row: 4 / 5;
  grid-column: 1 / 3;
  background: var(--dark-blue);
}

.start-button {
  width: 50%;
  font-size: 20px;
  font-family: inherit;
  border: 2px solid var(--med-blue);
  border-radius: 5px;
  margin-left: 10px;
  background: var(--title-red);
  color: var(--title-white);
}

.axis-num {
  display: grid;
  border: 2px groove var(--title-white);
  color: var(--title-white);
  font-size: 16px;
  justify-items: center;
  align-items: center;
}

.grid-button {
  display: grid;
  justify-items: center;
  align-items: center;
  background: rgba(100, 100, 100, 0);
  border: 1px solid rgba(250, 250, 250, 0.3);
  width: calc(311px / 11);
  height: calc(300px / 11);
}

.comp-board .grid-button:hover {
  background: rgba(224, 225, 218, 0.5);
}

.row {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(10, 1fr);
}

.ships-title {
  text-align: center;
}

.whale-div {
  display: grid;
}

.whale {
  width: 100%;
}

.whale-text {
  font-family: san-serif;
  font-weight: bold;
  text-align: center;
  color: red;
}

.start-text {
  color: red;
}

.message-area {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  font-size: 24px;
}

.message-1 {
  color: darkblue;
}

.message-2 {
  color: seagreen;
}

.quote-div {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 5px;
  background: rgba(229, 220, 203, 0.3);

  border-radius: 10px;
}

.quote-div h3 {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  font-family: cursive;
  font-size: 22px;
  font-weight: lighter;
}

.copy-text, a {
  font-size: 12px;
  font-family: Arial, sans-serif;
  font-weight: normal;
}

.disclaimer {
  font-family: sans-serif;
  font-size: smaller;
  color: var(--title-white);
}

.no-harm {
  position: absolute;
  bottom: -25px;
  left: 15px;
  font-family: sans-serif;
  font-size: smaller;
}

.c-board-caption {
  font-size: 24px;
  position: absolute;
  left: 5px;
  bottom: -30px;
  color: var(--title-white);
}

.p-board-caption {
  padding-left: 35px;
  padding-top: 5px;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-size: 24px;
  color: var(--title-white);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,IAAI,SAAS,EAAE,UAAU,EAAE;;AAI3B;EACE,+BAA+B;EAC/B,6BAA6B;EAC7B,4BAA4B;EAC5B,8BAA8B;EAC9B,+BAA+B;EAC/B,+BAA+B;EAC/B,iCAAiC;AACnC;;AAEA;EACE,wCAAwC;EACxC,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,qBAAqB;EACrB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,4BAA4B;EAC5B,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,qCAAqC;EACrC,kBAAkB;EAClB,yDAAyD;EACzD,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,4BAA4B;EAC5B,iCAAiC;EACjC,uCAAuC;EACvC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC;;;sEAGoE;EACpE;;AAEF;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,qCAAqC;EACrC,kCAAkC;EAClC,kBAAkB;EAClB,eAAe;EACf,4BAA4B;EAC5B,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,6BAA6B;EAC7B,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,mEAAmE;EACnE,kCAAkC;AACpC;;AAEA;EACE,iEAAiE;EACjE,kCAAkC;AACpC;;AAEA;EACE,mEAAmE;EACnE,kCAAkC;AACpC;;AAEA;EACE,oBAAoB;EACpB,mEAAmE;EACnE,kCAAkC;AACpC;;AAEA;EACE,gEAAgE;EAChE,kCAAkC;AACpC;;AAEA;EACE,qDAAqD;EACrD,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,yCAAyC;EACzC,qCAAqC;EACrC,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,qCAAqC;EACrC,eAAe;EACf,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,4BAA4B;EAC5B,iCAAiC;EACjC,8BAA8B;EAC9B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,mCAAmC;EACnC;;;sEAGoE;AACtE;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,yBAAyB;EACzB,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,eAAe;EACf,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,eAAe;EACf,oBAAoB;EACpB,iCAAiC;EACjC,kBAAkB;EAClB,iBAAiB;EACjB,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,yBAAyB;EACzB,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,kCAAkC;EAClC,0CAA0C;EAC1C,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,oCAAoC;;EAEpC,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,yBAAyB;AAC3B","sourcesContent":["* { margin: 0; padding: 0; }\n\n@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');\n\n:root {\n  --light-blue: rgb(90, 172, 201);\n  --med-blue: rgb(58, 133, 171);\n  --dark-blue: rgb(79, 85, 99);\n  --title-red: rgb(210, 99, 105);\n  --ship-grey: rgb(195, 192, 195);\n  --off-white: rgb(229, 220, 203);\n  --title-white: rgb(224, 225, 218);\n}\n\nhtml {\n  font-family: 'Archivo Black', sans-serif;\n  box-sizing: border-box;\n}\n\nbody {\n  background: whitesmoke;\n}\n\n.container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 60px 60px 60px;\n  justify-items: center;\n  gap: 20px;\n}\n\n.game-area {\n  position: relative;\n  display: grid;\n  margin-top: 20px;\n  height: 500px;\n  border: 6px solid var(--dark-blue);\n  background: var(--dark-blue);\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n}\n\n.player-area {\n  display: grid;\n  border: 2px solid whitesmoke;\n  width: calc(((340px * 8) / 5) + 30px);\n  grid-column: 2 / 3;\n  grid-template-columns: calc(300px / 11 * 2 + 6px) 2fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.p-board-area {\n  display: grid;\n  margin-right: 3px;\n  background: var(--dark-blue);\n  grid-template-columns: 30px 300px;\n  grid-template-rows: 30px 300px 40px 1fr;\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n}\n\n.p-board-head {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n}\n\n.p-board-side {\n  display: grid;\n  height: 300px;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.player-board {\n  display: grid;\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(10, 1fr);\n  background: \n    linear-gradient(217deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(127deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(336deg, var(--dark-blue), var(--dark-blue) 70.71%);\n  }\n\n.ship-area {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  background: var(--dark-blue);\n  border-right: 1px solid var(--title-white);\n}\n\n.ship {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  border-radius: 4px;\n  width: calc(300px / 11 - 1px);\n  outline: 1px solid var(--off-white);\n}\n\n.ship-dot {\n  width: 12px;\n  height: 12px;\n  background: rgba(256, 256, 256, 0.2);\n  border: 1px dashed black;\n  border-radius: 100%;\n}\n\n.blue-ship {\n  background: linear-gradient(rgb(132, 142, 151), rgb(164, 186, 200));\n  height: calc(300px / 11 * 5 + 8px);\n}\n\n.right-ship {\n  background: linear-gradient(rgb(79, 94, 125), rgb(169, 188, 207));\n  height: calc(300px / 11 * 4 + 6px);\n}\n\n.sperm-ship {\n  background: linear-gradient(rgb(168, 166, 144), rgb(144, 150, 129));\n  height: calc(300px / 11 * 3 + 4px);\n}\n\n.humpback-ship {\n  align-self: flex-end;\n  background: linear-gradient(rgb(124, 137, 153), rgb(101, 109, 122));\n  height: calc(300px / 11 * 3 + 4px);\n}\n\n.orca-ship {\n  background: linear-gradient(rgb(56, 63, 75), rgb(109, 119, 152));\n  height: calc(300px / 11 * 2 + 1px);\n}\n\n.rotated-whale {\n  transform-origin: calc(26.27px / 2) calc(25.27px / 2);\n  transform: rotate(-90deg);\n}\n\n.player-sidebar {\n  display: grid;\n  grid-column: 3 / 4;\n  grid-row: 1 / 3;\n  grid-template-rows: 1fr 2fr;\n}\n\n.hit-pieces {\n  display: grid;\n  padding: 3px;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 3px solid var(--dark-blue);\n  grid-template-columns: repeat(6, 1fr);\n  grid-row: 1 / 2;\n  background: var(--med-blue);\n}\n\n.hit-piece {\n  position: sticky;\n  z-index: 4;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background: red;\n}\n\n.miss-pieces {\n  display: grid;\n  padding: 3px;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(8, 1fr);\n  grid-row: 2 / 3;\n  background: var(--med-blue);\n}\n\n.miss-piece {\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background: white;\n}\n\n.computer-area {\n  display: grid;\n  border: 2px solid whitesmoke;\n  width: calc(((340px * 8) / 5) + 30px);\n  grid-template-columns: 1fr 6fr 3fr;\n  grid-template-rows: 1fr;\n  grid-column: 1 / 2;\n}\n\n.c-board-area {\n  display: grid;\n  margin-right: 3px;\n  background: var(--dark-blue);\n  grid-template-columns: 30px 300px;\n  grid-template-rows: 30px 300px;\n  grid-column: 2 / 3;\n}\n\n.c-board-head {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n}\n\n.c-board-side {\n  display: grid;\n  height: 300px;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.comp-board {\n  display: grid;\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  width: 100%;\n  height: 300px;\n  grid-template-rows: repeat(10, 1fr);\n  background: \n    linear-gradient(217deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(127deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(336deg, var(--dark-blue), var(--dark-blue) 70.71%);\n}\n\n.title-area {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-column: 1 / 2;\n  background: var(--off-white);\n}\n\n.title-text {\n  padding: 10px;\n  font-size: 28px;\n  font-weight: 400;\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  color: var(--title-white);\n  background: var(--title-red);\n}\n\n.comp-sidebar {\n  display: grid;\n  grid-column: 3 / 4;\n}\n\n.fire-control {\n  display: grid;\n  background: var(--off-white);\n}\n\n.ships {\n  display: grid;\n}\n\n.control-area {\n  display: grid;\n  grid-template-rows: 30px 1fr;\n  grid-row: 4 / 5;\n  grid-column: 1 / 3;\n  background: var(--dark-blue);\n}\n\n.start-button {\n  width: 50%;\n  font-size: 20px;\n  font-family: inherit;\n  border: 2px solid var(--med-blue);\n  border-radius: 5px;\n  margin-left: 10px;\n  background: var(--title-red);\n  color: var(--title-white);\n}\n\n.axis-num {\n  display: grid;\n  border: 2px groove var(--title-white);\n  color: var(--title-white);\n  font-size: 16px;\n  justify-items: center;\n  align-items: center;\n}\n\n.grid-button {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  background: rgba(100, 100, 100, 0);\n  border: 1px solid rgba(250, 250, 250, 0.3);\n  width: calc(311px / 11);\n  height: calc(300px / 11);\n}\n\n.comp-board .grid-button:hover {\n  background: rgba(224, 225, 218, 0.5);\n}\n\n.row {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.ships-title {\n  text-align: center;\n}\n\n.whale-div {\n  display: grid;\n}\n\n.whale {\n  width: 100%;\n}\n\n.whale-text {\n  font-family: san-serif;\n  font-weight: bold;\n  text-align: center;\n  color: red;\n}\n\n.start-text {\n  color: red;\n}\n\n.message-area {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  text-align: center;\n  font-size: 24px;\n}\n\n.message-1 {\n  color: darkblue;\n}\n\n.message-2 {\n  color: seagreen;\n}\n\n.quote-div {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 5px;\n  background: rgba(229, 220, 203, 0.3);\n\n  border-radius: 10px;\n}\n\n.quote-div h3 {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n  font-family: cursive;\n  font-size: 22px;\n  font-weight: lighter;\n}\n\n.copy-text, a {\n  font-size: 12px;\n  font-family: Arial, sans-serif;\n  font-weight: normal;\n}\n\n.disclaimer {\n  font-family: sans-serif;\n  font-size: smaller;\n  color: var(--title-white);\n}\n\n.no-harm {\n  position: absolute;\n  bottom: -25px;\n  left: 15px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.c-board-caption {\n  font-size: 24px;\n  position: absolute;\n  left: 5px;\n  bottom: -30px;\n  color: var(--title-white);\n}\n\n.p-board-caption {\n  padding-left: 35px;\n  padding-top: 5px;\n  grid-column: 1 / 3;\n  grid-row: 3 / 4;\n  font-size: 24px;\n  color: var(--title-white);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

class Gameboard {
  attempts = [];
  sunk = [];

  constructor(name) {
    this.name = name;
    this.board = this.buildBoard();
  }

  buildBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      board.push(row);
      for (let j = 0; j < 10; j++) {
        row.push(new Space(i, j));
      }
    }
    return board;
  }

  ships = {
    bluewhale: 5,
    rightwhale: 4,
    spermwhale: 3,
    humpbackwhale: 3,
    orcawhale: 2,
  };

  placeShip(x, y, name, direction) {
    [x, y] = this.checkCoords(x, y);
    let length = this.ships[name];
    let shipInTheWay = this.checkForShip(x, y, length, direction);
    if (shipInTheWay) return 0;
    this.board[x][y] = new Ship(name, length);
    for (let i = 1; i < length; i++) {
      if (direction === 'right') {
        this.board[x][y + i].ship = this.board[x][y];
      } else {
        this.board[x + i][y].ship = this.board[x][y];
      }
    }
    return 1;
  }

  receiveAttack(x, y) {
    [x, y] = this.checkCoords(x, y);
    let sunk;

    if (this.board[x][y] instanceof Ship) {
      let ship = this.board[x][y];
      this.board[x][y].hit();
      if (ship.isSunk()) {
        this.sunk.push(ship);
        sunk = ship.name;
      }
      this.attempts.push([x, y]);
      return ['hit', sunk ];
    } else {
      if (this.board[x][y].ship !== null) {
        let ship = this.board[x][y].ship;
        this.board[x][y].ship.hit();
        if (ship.isSunk()) {
          this.sunk.push(ship);
          sunk = ship.name;
        }
        this.attempts.push([x, y]);
        return ['hit', sunk ];
      } else {
        this.trackMiss(x, y);
        return ['miss', sunk ];
      }
    }
  }

  reportAllSunk() {
    let count = 0;
    for (let ship of this.sunk) {
      count++;
    }
    return count;
  }

  getLength(begin, end) {
    if (begin[0] === end[0]) {
      return end[1] - begin[1];
    } else {
      return end[0] - begin[0];
    }
  }

  trackMiss(x, y) {
    this.attempts.push([x, y]);
  }

  convertCoord(coord) {
    return coord[0] * 10 + coord[1];
  }

  checkCoords(x, y) {
    if (
      x <= this.board.length - 1 &&
      x >= 0 &&
      y <= this.board.length - 1 &&
      y >= 0
    ) {
      return [x, y];
    } else {
      throw new RangeError('x and y must be between 0 and 10');
    }
  }

  checkForShip(x, y, length, direction) {
    let fore = this.board[x][y];
    if (fore instanceof Ship) return fore;
    for (let i = 1; i < length; i++) {
      if (direction === 'right') {
        let increment = y + i;
        try {
          this.checkCoords(x, increment);
        } catch (e) {
          return e;
        }
        let space = this.board[x][increment];
        if (space instanceof Space && space.ship instanceof Ship) {
          return space.ship;
        } else if (space instanceof Ship) {
          return space;
        }
      } else {
        let increment = x + i;
        try {
          this.checkCoords(increment, y);
        } catch (e) {
          return e;
        }
        let space = this.board[increment][y];
        if (space instanceof Space && space.ship instanceof Ship) {
          return space.ship;
        } else if (space instanceof Ship) {
          return space;
        }
      }
    }
    return;
  }
}

class Space {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ship = null;
  }
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/click.js":
/*!**********************!*\
  !*** ./src/click.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

const helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

exports.startGame = (game) => {
  const start = document.querySelector('.start-button');
  start.addEventListener(
    'click',
    () => {
      if (helpers.checkPlayerBoard(game.dom)) {
        game.start();
        addGridClicks(game);
      }
    },
  );
};

exports.removeStartGame = (game) => {
  const start = document.querySelector('.start-button');
  start.removeEventListener(
    'click',
    () => {
      game.start();
      addGridClicks(game);
    },
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

const addGridClicks = (game) => {
  const squares = document.querySelectorAll('.computer-square');
  squares.forEach((square) => {
    square.addEventListener(
      'click',
      (e) => {
        const [x, y] = helpers.parseCoordString(e.target.dataset.gridNumber);
        game.loop(x, y);
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


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const blueW = __webpack_require__(/*! ./images/blue-whale.jpg */ "./src/images/blue-whale.jpg");
const rightW = __webpack_require__(/*! ./images/right-whale.jpg */ "./src/images/right-whale.jpg");
const spermW = __webpack_require__(/*! ./images/sperm-whale.jpg */ "./src/images/sperm-whale.jpg");
const humpW = __webpack_require__(/*! ./images/humpback.jpg */ "./src/images/humpback.jpg");
const orcaW = __webpack_require__(/*! ./images/orca.jpg */ "./src/images/orca.jpg");
const helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

class DOM {
  constructor(container) {
    this.container = container;
  }

  init() {
    const main = this.makeElement('div', [['class', 'game-area']]);
    const player = this.makeElement('div', [['class', 'player-area']]);
    const computer = this.makeElement('div', [['class', 'computer-area']]);
    const pBoardArea = this.makeElement('div', [['class', 'p-board-area']]);
    const pBoardCaption = this.makeElement('div', [['class', 'p-board-caption']], 'Player Board');
    
    const cBoardArea = this.makeElement('div', [['class', 'c-board-area']]);
    const cBoardCaption = this.makeElement('div', [['class', 'c-board-caption']], 'Computer Board');

    const pBoard = this.makeElement('div', [['class', 'player-board'],['id', 'drop-target']]);
    const cBoard = this.makeElement('div', [['class', 'comp-board']]);
    cBoard.append(cBoardCaption);
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
    const controls = this.makeElement('div', [['class', 'control-area']]);
    const startButton = this.makeElement('button', [['class', 'start-button']], 'START');
    controls.append(startButton);
    pBoardArea.append(pBoardHead, pBoardSide, pBoard, pBoardCaption, controls);
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
      ['class', 'whale blue-whale-img'],
      ['src', blueW],
    ]);
    const blueWhaleText = this.makeElement('p', [['class', 'whale-text']]);
    blueWhaleText.textContent = 'BLUE -- 5 HITS';
    blueWhaleDiv.append(blueWhale, blueWhaleText);
    const rightWhaleDiv = this.makeElement('div', [['class', 'whale-div']]);

    const rightWhale = this.makeElement('img', [
      ['class', 'whale'],
      ['src', rightW],
    ]);
    const rightWhaleText = this.makeElement('p', [['class', 'whale-text']]);
    rightWhaleText.textContent = 'RIGHT -- 4 HITS';
    rightWhaleDiv.append(rightWhale, rightWhaleText);

    const spermWhaleDiv = this.makeElement('div', [['class', 'whale-div']]);

    const spermWhale = this.makeElement('img', [
      ['class', 'whale'],
      ['src', spermW],
    ]);
    const spermWhaleText = this.makeElement('p', [['class', 'whale-text']]);
    spermWhaleText.textContent = 'SPERM -- 3 HITS';
    spermWhaleDiv.append(spermWhale, spermWhaleText);

    const humpbackDiv = this.makeElement('div', [['class', 'whale-div']]);

    const humpback = this.makeElement('img', [
      ['class', 'whale'],
      ['src', humpW],
    ]);
    const humpbackText = this.makeElement('p', [['class', 'whale-text']]);
    humpbackText.textContent = 'HUMPBACK -- 3 HITS';

    humpbackDiv.append(humpback, humpbackText);
    const orcaDiv = this.makeElement('div', [['class', 'whale-div']]);

    const orca = this.makeElement('img', [
      ['class', 'whale'],
      ['src', orcaW],
    ]);
    const orcaText = this.makeElement('p', [['class', 'whale-text']]);
    orcaText.textContent = 'ORCA -- 2 HITS';
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
    const bluePiece = this.makeElement('div', [['class', 'ship blue-ship'], ['id', 'blue-whale'], ['draggable', 'true'], ['data-length', '5']]);
    for (let i = 0; i < 5; i++) {
      let dot = this.makeElement('div', [['class', 'ship-dot']]);
      bluePiece.append(dot);
    }

    const rightPiece = this.makeElement('div', [['class', 'ship right-ship'], ['id', 'right-whale'], ['draggable', 'true'], ['data-length', '4']]);
    for (let i = 0; i < 4; i++) {
      let dot = this.makeElement('div', [['class', 'ship-dot']]);
      rightPiece.append(dot);
    }

    const spermPiece = this.makeElement('div', [['class', 'ship sperm-ship'], ['id', 'sperm-whale'], ['draggable', 'true'], ['data-length', '3']]);
    for (let i = 0; i < 3; i++) {
      let dot = this.makeElement('div', [['class', 'ship-dot']]);
      spermPiece.append(dot);
    }

    const humpbackPiece = this.makeElement('div', [['class', 'ship humpback-ship'], ['id', 'humpback-whale'], ['draggable', 'true'], ['data-length', '3']]);
    for (let i = 0; i < 3; i++) {
      let dot = this.makeElement('div', [['class', 'ship-dot']]);
      humpbackPiece.append(dot);
    }

    const orcaPiece = this.makeElement('div', [['class', 'ship orca-ship'], ['id', 'orca-whale'], ['draggable', 'true'], ['data-length', '2']]);
    for (let i = 0; i < 2; i++) {
      let dot = this.makeElement('div', [['class', 'ship-dot']]);
      orcaPiece.append(dot);
    }

    shipArea.append(bluePiece, rightPiece, spermPiece, humpbackPiece, orcaPiece);
    const playerSidebar = this.makeElement('div', [
      ['class', 'player-sidebar'],
    ]);
    const hitPieces = this.makeElement('div', [['class', 'hit-pieces']]);
    for (let i = 0; i < 36; i++) {
      let piece = this.makeElement('div', [['class', 'hit-piece']]);
      hitPieces.append(piece);
    }
    const missPieces = this.makeElement('div', [['class', 'miss-pieces']]);
    for (let i = 0; i < 72; i++) {
      let piece = this.makeElement('div', [['class', 'miss-piece']]);
      missPieces.append(piece);
    }
    const noHarm = this.makeElement('div', [['class', 'no-harm']], 'No whales were harmed in the making of this game.');
    const messageArea = this.makeElement('div', [['class', 'message-area']]); 
    const line1 = this.makeElement('span', [['class', 'message-1']], 'Drag your whales onto the Player Board and click START to start the game.');
    const line2 = this.makeElement('span', [['class', 'message-2']], 'Click the whale to rotate it.');
    messageArea.append(line1, line2);

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

    main.append(computer, player, noHarm);
    this.container.append(main, messageArea, quoteDiv, copyright);
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
    const boardSquare = `${board.name.toLowerCase()}-square`;
    for (let row of board.board) {
      const rowDiv = this.makeElement('div', [['class', 'row']]);
      area.append(rowDiv);
      for (let col of row) {
        const btn = this.makeElement('button', [['class', `grid-button ${boardSquare}`], ['data-grid-number', `[${board.board.indexOf(row)},${row.indexOf(col)}]`]]);
        rowDiv.append(btn);
      }
    }
  }

  changeMessage(one, two) {
    const line1 = document.querySelector('.message-1');
    const line2 = document.querySelector('.message-2');
    line1.textContent = one;
    line2.textContent = two;
  }

  appendDot(x, y, outcome, name) {
    name = name.toLowerCase();
    const button = helpers.getButton(x, y, name);
    const className = `${outcome}-piece`;
    const piece = this.makeElement('div', [['class', className]]);
    if (button.firstChild && button.firstChild.classList.contains('ship')) {
      button.firstChild.firstChild.append(piece);
    } else {
      button.appendChild(piece);
    }
  }
}

module.exports = DOM;


/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((module) => {

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
    if (e.target.className === 'grid-button player-square') {
      e.target.appendChild(document.getElementById(data));
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


/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./board */ "./src/board.js");
const Player = __webpack_require__(/*! ./player */ "./src/player.js");
const helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
const click = __webpack_require__(/*! ./click */ "./src/click.js");
const RemoveDraggable = __webpack_require__(/*! ./undrag */ "./src/undrag.js");

class Game {
  constructor(dom) {
    this.dom = dom;
  }

  pBoard = document.querySelector('.player-board');
  cBoard = document.querySelector('.comp-board');
  compBoard = new Gameboard('Computer');
  playerBoard = new Gameboard('Player');
  player = new Player('player');
  computer = new Player('computer');

  init() {
    this.dom.makeBoard(this.compBoard, this.cBoard);
    this.dom.makeBoard(this.playerBoard, this.pBoard);
    this.computer.randomPlace(this.compBoard);
  }

  start() {
    RemoveDraggable();
    click.unWhaleClick();
    helpers.placePlayerWhales(this.playerBoard);
  }

  loop(x, y) {
    let outcome;
    let sunk = '';
    [outcome, sunk] = this.player.takeTurn(this.compBoard, x, y);
    this.dom.appendDot(x, y, outcome, this.compBoard.name);
    if (sunk) {
      this.dom.changeMessage(`You sunk my ${sunk}!`, '');
    }
    [outcome, sunk, x, y] = this.computer.takeTurn(this.playerBoard, x, y);
    this.dom.appendDot(x, y, outcome, this.playerBoard.name);
    if (sunk) {
      this.dom.changeMessage(`I sunk your ${sunk}!`, '');
    }
    let winner = this.checkForWin(this.playerBoard, this.compBoard);
    if (winner) {
      this.dom.changeMessage(`${winner} wins!`, '');
      click.removeGridClicks(this.compBoard);
    }
  }

  checkForWin(pboard, cboard) {
    let p = pboard.reportAllSunk() === 5 ? 1 : 0;
    let c = cboard.reportAllSunk() === 5 ? 1 : 0;

    if (p === 1) {
      return 'Computer';
    } else if (c === 1) {
      return 'Player';
    } else {
      return false;
    }
  }
}

module.exports = Game;


/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const Game = __webpack_require__(/*! ./game */ "./src/game.js");
const DOM = __webpack_require__(/*! ./dom */ "./src/dom.js");
const DragEvents = __webpack_require__(/*! ./drag */ "./src/drag.js");
const click = __webpack_require__(/*! ./click */ "./src/click.js");

const body = document.querySelector('body');
const container = document.createElement('div');
container.className = 'container';
body.append(container);

const dom = new DOM(container);
dom.init();
const game = new Game(dom);
game.init();
DragEvents();
click.startGame(game);
click.whaleClick();









/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module) => {

class Player {

  attempts = [];

  constructor(name) {
    this.name = name;
  }

  takeTurn(board, x, y) {
    let outcome;
    let sunk;
    if (board.name === 'Computer') {
      [ outcome, sunk ] = board.receiveAttack(x, y);
      this.attempts.push([x, y]);
      return [ outcome, sunk ];
    } else {
      x = this.genRandomNum(10);
      y = this.genRandomNum(10);
      [x, y] = this.randomTurn(this.attempts, x, y);
      [ outcome, sunk ] = board.receiveAttack(x, y);
      this.attempts.push([x, y]);
      return [ outcome, sunk, x, y ];
    }
  }

  genRandomNum(n) {
    return Math.floor(Math.random() * n);
  }

  randomPlace(board) {
    for (let ship in board.ships) {
      let success = 0;
      let name = ship;
      while (success === 0) {
        let x = this.genRandomNum(10);
        let y = this.genRandomNum(10);
        let direction = ['right', 'down'][this.genRandomNum(2)];
        if (board.placeShip(x, y, name, direction)) success = 1;
      }
    }
  }

  randomTurn(attempted, x, y) {
    for (let attempt of attempted) {
      if (String(attempt) === String([x, y])) {
        x = this.genRandomNum(10);
        y = this.genRandomNum(10);
        [x, y] = this.randomTurn(attempted, x, y);
      }
    }
    return [x, y];
  }
}

module.exports = Player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

class Ship {

  taken_hits = 0;
  sunk = 0;

  constructor(name, length) {
    this.name = name;
    this.length = length;
  }

  hit() {
    this.taken_hits++;
    return;
  }

  isSunk() {
    this.taken_hits === this.length ? this.sunk = 1 : 0;
    return this.sunk;
  }
}

module.exports = Ship;


/***/ }),

/***/ "./src/undrag.js":
/*!***********************!*\
  !*** ./src/undrag.js ***!
  \***********************/
/***/ ((module) => {

function RemoveDraggable() {
  const blue = document.querySelector('#blue-whale');
  const right = document.querySelector('#right-whale');
  const sperm = document.querySelector('#sperm-whale');
  const humpback = document.querySelector('#humpback-whale');
  const orca = document.querySelector('#orca-whale');
  const pod = [blue, right, sperm, humpback, orca];

  for (let whale of pod) {
    whale.setAttribute('draggable', false);
  }
}

module.exports = RemoveDraggable;


/***/ }),

/***/ "./src/images/blue-whale.jpg":
/*!***********************************!*\
  !*** ./src/images/blue-whale.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b403359aeb6340ebf36d.jpg";

/***/ }),

/***/ "./src/images/humpback.jpg":
/*!*********************************!*\
  !*** ./src/images/humpback.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2ec00387169b19edf7ba.jpg";

/***/ }),

/***/ "./src/images/orca.jpg":
/*!*****************************!*\
  !*** ./src/images/orca.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3845430d94eba8fa41e0.jpg";

/***/ }),

/***/ "./src/images/right-whale.jpg":
/*!************************************!*\
  !*** ./src/images/right-whale.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3c2d71fdb21f23c60dc6.jpg";

/***/ }),

/***/ "./src/images/sperm-whale.jpg":
/*!************************************!*\
  !*** ./src/images/sperm-whale.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "601ac49dc60dc4f092b6.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwySEFBMkg7QUFDM0g7QUFDQSw4Q0FBOEMsV0FBVzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTywwR0FBMEcsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFB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Vzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcElxQjtBQUNyQixhQUFhLG1CQUFPLENBQUMsNkJBQVE7QUFDN0IsWUFBWSxtQkFBTyxDQUFDLDJCQUFPO0FBQzNCLG1CQUFtQixtQkFBTyxDQUFDLDZCQUFRO0FBQ25DLGNBQWMsbUJBQU8sQ0FBQywrQkFBUzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDdERBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jbGljay5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RyYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VuZHJhZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG5cbjpyb290IHtcbiAgLS1saWdodC1ibHVlOiByZ2IoOTAsIDE3MiwgMjAxKTtcbiAgLS1tZWQtYmx1ZTogcmdiKDU4LCAxMzMsIDE3MSk7XG4gIC0tZGFyay1ibHVlOiByZ2IoNzksIDg1LCA5OSk7XG4gIC0tdGl0bGUtcmVkOiByZ2IoMjEwLCA5OSwgMTA1KTtcbiAgLS1zaGlwLWdyZXk6IHJnYigxOTUsIDE5MiwgMTk1KTtcbiAgLS1vZmYtd2hpdGU6IHJnYigyMjksIDIyMCwgMjAzKTtcbiAgLS10aXRsZS13aGl0ZTogcmdiKDIyNCwgMjI1LCAyMTgpO1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6ICdBcmNoaXZvIEJsYWNrJywgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG59XG5cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2MHB4IDYwcHggNjBweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG5cbi5nYW1lLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlcjogNnB4IHNvbGlkIHZhcigtLWRhcmstYmx1ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiA0MHB4O1xufVxuXG4ucGxheWVyLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICB3aWR0aDogY2FsYygoKDM0MHB4ICogOCkgLyA1KSArIDMwcHgpO1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzMDBweCAvIDExICogMiArIDZweCkgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xufVxuXG4ucC1ib2FyZC1hcmVhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwMHB4IDQwcHggMWZyO1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMztcbn1cblxuLnAtYm9hcmQtaGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuLnAtYm9hcmQtc2lkZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLnBsYXllci1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYmFja2dyb3VuZDogXG4gICAgbGluZWFyLWdyYWRpZW50KDIxN2RlZywgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLW1lZC1ibHVlKSA3MC43MSUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgxMjdkZWcsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1tZWQtYmx1ZSkgNzAuNzElKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzM2ZGVnLCB2YXIoLS1kYXJrLWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpIDcwLjcxJSk7XG4gIH1cblxuLnNoaXAtYXJlYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMSAvIDM7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRpdGxlLXdoaXRlKTtcbn1cblxuLnNoaXAge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IGNhbGMoMzAwcHggLyAxMSAtIDFweCk7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1vZmYtd2hpdGUpO1xufVxuXG4uc2hpcC1kb3Qge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuMik7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmJsdWUtc2hpcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMTMyLCAxNDIsIDE1MSksIHJnYigxNjQsIDE4NiwgMjAwKSk7XG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExICogNSArIDhweCk7XG59XG5cbi5yaWdodC1zaGlwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig3OSwgOTQsIDEyNSksIHJnYigxNjksIDE4OCwgMjA3KSk7XG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExICogNCArIDZweCk7XG59XG5cbi5zcGVybS1zaGlwIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxNjgsIDE2NiwgMTQ0KSwgcmdiKDE0NCwgMTUwLCAxMjkpKTtcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEgKiAzICsgNHB4KTtcbn1cblxuLmh1bXBiYWNrLXNoaXAge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxMjQsIDEzNywgMTUzKSwgcmdiKDEwMSwgMTA5LCAxMjIpKTtcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEgKiAzICsgNHB4KTtcbn1cblxuLm9yY2Etc2hpcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoNTYsIDYzLCA3NSksIHJnYigxMDksIDExOSwgMTUyKSk7XG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExICogMiArIDFweCk7XG59XG5cbi5yb3RhdGVkLXdoYWxlIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygyNi4yN3B4IC8gMikgY2FsYygyNS4yN3B4IC8gMik7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5wbGF5ZXItc2lkZWJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcbiAgZ3JpZC1yb3c6IDEgLyAzO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG59XG5cbi5oaXQtcGllY2VzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1lZC1ibHVlKTtcbn1cblxuLmhpdC1waWVjZSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLm1pc3MtcGllY2VzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogM3B4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYmFja2dyb3VuZDogdmFyKC0tbWVkLWJsdWUpO1xufVxuXG4ubWlzcy1waWVjZSB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29tcHV0ZXItYXJlYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XG4gIHdpZHRoOiBjYWxjKCgoMzQwcHggKiA4KSAvIDUpICsgMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG59XG5cbi5jLWJvYXJkLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMzAwcHg7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuLmMtYm9hcmQtaGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDExLCAxZnIpO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbn1cblxuLmMtYm9hcmQtc2lkZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLmNvbXAtYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGJhY2tncm91bmQ6IFxuICAgIGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1tZWQtYmx1ZSkgNzAuNzElKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tbWVkLWJsdWUpIDcwLjcxJSksXG4gICAgbGluZWFyLWdyYWRpZW50KDMzNmRlZywgdmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSA3MC43MSUpO1xufVxuXG4udGl0bGUtYXJlYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vZmYtd2hpdGUpO1xufVxuXG4udGl0bGUtdGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcbiAgY29sb3I6IHZhcigtLXRpdGxlLXdoaXRlKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGl0bGUtcmVkKTtcbn1cblxuLmNvbXAtc2lkZWJhciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcbn1cblxuLmZpcmUtY29udHJvbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLW9mZi13aGl0ZSk7XG59XG5cbi5zaGlwcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5jb250cm9sLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xuICBncmlkLXJvdzogNCAvIDU7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcbn1cblxuLnN0YXJ0LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1lZC1ibHVlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGl0bGUtcmVkKTtcbiAgY29sb3I6IHZhcigtLXRpdGxlLXdoaXRlKTtcbn1cblxuLmF4aXMtbnVtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyOiAycHggZ3Jvb3ZlIHZhcigtLXRpdGxlLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLXRpdGxlLXdoaXRlKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ncmlkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjMpO1xuICB3aWR0aDogY2FsYygzMTFweCAvIDExKTtcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEpO1xufVxuXG4uY29tcC1ib2FyZCAuZ3JpZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI1LCAyMTgsIDAuNSk7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xufVxuXG4uc2hpcHMtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53aGFsZS1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ud2hhbGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndoYWxlLXRleHQge1xuICBmb250LWZhbWlseTogc2FuLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmVkO1xufVxuXG4uc3RhcnQtdGV4dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tZXNzYWdlLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubWVzc2FnZS0xIHtcbiAgY29sb3I6IGRhcmtibHVlO1xufVxuXG4ubWVzc2FnZS0yIHtcbiAgY29sb3I6IHNlYWdyZWVuO1xufVxuXG4ucXVvdGUtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjI5LCAyMjAsIDIwMywgMC4zKTtcblxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ucXVvdGUtZGl2IGgzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5jb3B5LXRleHQsIGEge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmRpc2NsYWltZXIge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xufVxuXG4ubm8taGFybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMjVweDtcbiAgbGVmdDogMTVweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmMtYm9hcmQtY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1cHg7XG4gIGJvdHRvbTogLTMwcHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XG59XG5cbi5wLWJvYXJkLWNhcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgZ3JpZC1yb3c6IDMgLyA0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxJQUFJLFNBQVMsRUFBRSxVQUFVLEVBQUU7O0FBSTNCO0VBQ0UsK0JBQStCO0VBQy9CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Is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QUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7O0VBRXBDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxcblxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgLS1saWdodC1ibHVlOiByZ2IoOTAsIDE3MiwgMjAxKTtcXG4gIC0tbWVkLWJsdWU6IHJnYig1OCwgMTMzLCAxNzEpO1xcbiAgLS1kYXJrLWJsdWU6IHJnYig3OSwgODUsIDk5KTtcXG4gIC0tdGl0bGUtcmVkOiByZ2IoMjEwLCA5OSwgMTA1KTtcXG4gIC0tc2hpcC1ncmV5OiByZ2IoMTk1LCAxOTIsIDE5NSk7XFxuICAtLW9mZi13aGl0ZTogcmdiKDIyOSwgMjIwLCAyMDMpO1xcbiAgLS10aXRsZS13aGl0ZTogcmdiKDIyNCwgMjI1LCAyMTgpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2MHB4IDYwcHggNjBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmdhbWUtYXJlYSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBib3JkZXI6IDZweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogNDBweDtcXG59XFxuXFxuLnBsYXllci1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IGNhbGMoKCgzNDBweCAqIDgpIC8gNSkgKyAzMHB4KTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzMDBweCAvIDExICogMiArIDZweCkgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLnAtYm9hcmQtYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwMHB4IDQwcHggMWZyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbn1cXG5cXG4ucC1ib2FyZC1oZWFkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnAtYm9hcmQtc2lkZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYmFja2dyb3VuZDogXFxuICAgIGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1tZWQtYmx1ZSkgNzAuNzElKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDEyN2RlZywgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLW1lZC1ibHVlKSA3MC43MSUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzM2ZGVnLCB2YXIoLS1kYXJrLWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpIDcwLjcxJSk7XFxuICB9XFxuXFxuLnNoaXAtYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLXRpdGxlLXdoaXRlKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogY2FsYygzMDBweCAvIDExIC0gMXB4KTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1vZmYtd2hpdGUpO1xcbn1cXG5cXG4uc2hpcC1kb3Qge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuMik7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbn1cXG5cXG4uYmx1ZS1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMTMyLCAxNDIsIDE1MSksIHJnYigxNjQsIDE4NiwgMjAwKSk7XFxuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDUgKyA4cHgpO1xcbn1cXG5cXG4ucmlnaHQtc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDc5LCA5NCwgMTI1KSwgcmdiKDE2OSwgMTg4LCAyMDcpKTtcXG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExICogNCArIDZweCk7XFxufVxcblxcbi5zcGVybS1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMTY4LCAxNjYsIDE0NCksIHJnYigxNDQsIDE1MCwgMTI5KSk7XFxuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDMgKyA0cHgpO1xcbn1cXG5cXG4uaHVtcGJhY2stc2hpcCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxMzcsIDE1MyksIHJnYigxMDEsIDEwOSwgMTIyKSk7XFxuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDMgKyA0cHgpO1xcbn1cXG5cXG4ub3JjYS1zaGlwIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoNTYsIDYzLCA3NSksIHJnYigxMDksIDExOSwgMTUyKSk7XFxuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDIgKyAxcHgpO1xcbn1cXG5cXG4ucm90YXRlZC13aGFsZSB7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjYWxjKDI2LjI3cHggLyAyKSBjYWxjKDI1LjI3cHggLyAyKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxufVxcblxcbi5wbGF5ZXItc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbn1cXG5cXG4uaGl0LXBpZWNlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1lZC1ibHVlKTtcXG59XFxuXFxuLmhpdC1waWVjZSB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgei1pbmRleDogNDtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG59XFxuXFxuLm1pc3MtcGllY2VzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoOCwgMWZyKTtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1lZC1ibHVlKTtcXG59XFxuXFxuLm1pc3MtcGllY2Uge1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbi5jb21wdXRlci1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xcbiAgd2lkdGg6IGNhbGMoKCgzNDBweCAqIDgpIC8gNSkgKyAzMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmMtYm9hcmQtYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4uYy1ib2FyZC1oZWFkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLmMtYm9hcmQtc2lkZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY29tcC1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBiYWNrZ3JvdW5kOiBcXG4gICAgbGluZWFyLWdyYWRpZW50KDIxN2RlZywgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLW1lZC1ibHVlKSA3MC43MSUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tbWVkLWJsdWUpIDcwLjcxJSksXFxuICAgIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHZhcigtLWRhcmstYmx1ZSksIHZhcigtLWRhcmstYmx1ZSkgNzAuNzElKTtcXG59XFxuXFxuLnRpdGxlLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1vZmYtd2hpdGUpO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XFxuICB0ZXh0LW9yaWVudGF0aW9uOiB1cHJpZ2h0O1xcbiAgY29sb3I6IHZhcigtLXRpdGxlLXdoaXRlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRpdGxlLXJlZCk7XFxufVxcblxcbi5jb21wLXNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG59XFxuXFxuLmZpcmUtY29udHJvbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLnNoaXBzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jb250cm9sLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xcbn1cXG5cXG4uc3RhcnQtYnV0dG9uIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1lZC1ibHVlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGl0bGUtcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XFxufVxcblxcbi5heGlzLW51bSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAycHggZ3Jvb3ZlIHZhcigtLXRpdGxlLXdoaXRlKTtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZC1idXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTAwLCAxMDAsIDApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjMpO1xcbiAgd2lkdGg6IGNhbGMoMzExcHggLyAxMSk7XFxuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSk7XFxufVxcblxcbi5jb21wLWJvYXJkIC5ncmlkLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyNCwgMjI1LCAyMTgsIDAuNSk7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLnNoaXBzLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndoYWxlLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4ud2hhbGUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53aGFsZS10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW4tc2VyaWY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5zdGFydC10ZXh0IHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbi5tZXNzYWdlLWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5tZXNzYWdlLTEge1xcbiAgY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4ubWVzc2FnZS0yIHtcXG4gIGNvbG9yOiBzZWFncmVlbjtcXG59XFxuXFxuLnF1b3RlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjI5LCAyMjAsIDIwMywgMC4zKTtcXG5cXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5xdW90ZS1kaXYgaDMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuXFxuLmNvcHktdGV4dCwgYSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uZGlzY2xhaW1lciB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XFxufVxcblxcbi5uby1oYXJtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTI1cHg7XFxuICBsZWZ0OiAxNXB4O1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbi5jLWJvYXJkLWNhcHRpb24ge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNXB4O1xcbiAgYm90dG9tOiAtMzBweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XFxufVxcblxcbi5wLWJvYXJkLWNhcHRpb24ge1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGF0dGVtcHRzID0gW107XG4gIHN1bmsgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5idWlsZEJvYXJkKCk7XG4gIH1cblxuICBidWlsZEJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHJvdy5wdXNoKG5ldyBTcGFjZShpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIHNoaXBzID0ge1xuICAgIGJsdWV3aGFsZTogNSxcbiAgICByaWdodHdoYWxlOiA0LFxuICAgIHNwZXJtd2hhbGU6IDMsXG4gICAgaHVtcGJhY2t3aGFsZTogMyxcbiAgICBvcmNhd2hhbGU6IDIsXG4gIH07XG5cbiAgcGxhY2VTaGlwKHgsIHksIG5hbWUsIGRpcmVjdGlvbikge1xuICAgIFt4LCB5XSA9IHRoaXMuY2hlY2tDb29yZHMoeCwgeSk7XG4gICAgbGV0IGxlbmd0aCA9IHRoaXMuc2hpcHNbbmFtZV07XG4gICAgbGV0IHNoaXBJblRoZVdheSA9IHRoaXMuY2hlY2tGb3JTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICBpZiAoc2hpcEluVGhlV2F5KSByZXR1cm4gMDtcbiAgICB0aGlzLmJvYXJkW3hdW3ldID0gbmV3IFNoaXAobmFtZSwgbGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldLnNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4ICsgaV1beV0uc2hpcCA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgW3gsIHldID0gdGhpcy5jaGVja0Nvb3Jkcyh4LCB5KTtcbiAgICBsZXQgc3VuaztcblxuICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgbGV0IHNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHRoaXMuc3Vuay5wdXNoKHNoaXApO1xuICAgICAgICBzdW5rID0gc2hpcC5uYW1lO1xuICAgICAgfVxuICAgICAgdGhpcy5hdHRlbXB0cy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gWydoaXQnLCBzdW5rIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hdW3ldLnNoaXAgIT09IG51bGwpIHtcbiAgICAgICAgbGV0IHNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldLnNoaXA7XG4gICAgICAgIHRoaXMuYm9hcmRbeF1beV0uc2hpcC5oaXQoKTtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICB0aGlzLnN1bmsucHVzaChzaGlwKTtcbiAgICAgICAgICBzdW5rID0gc2hpcC5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0ZW1wdHMucHVzaChbeCwgeV0pO1xuICAgICAgICByZXR1cm4gWydoaXQnLCBzdW5rIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYWNrTWlzcyh4LCB5KTtcbiAgICAgICAgcmV0dXJuIFsnbWlzcycsIHN1bmsgXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnN1bmspIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIGdldExlbmd0aChiZWdpbiwgZW5kKSB7XG4gICAgaWYgKGJlZ2luWzBdID09PSBlbmRbMF0pIHtcbiAgICAgIHJldHVybiBlbmRbMV0gLSBiZWdpblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVuZFswXSAtIGJlZ2luWzBdO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrTWlzcyh4LCB5KSB7XG4gICAgdGhpcy5hdHRlbXB0cy5wdXNoKFt4LCB5XSk7XG4gIH1cblxuICBjb252ZXJ0Q29vcmQoY29vcmQpIHtcbiAgICByZXR1cm4gY29vcmRbMF0gKiAxMCArIGNvb3JkWzFdO1xuICB9XG5cbiAgY2hlY2tDb29yZHMoeCwgeSkge1xuICAgIGlmIChcbiAgICAgIHggPD0gdGhpcy5ib2FyZC5sZW5ndGggLSAxICYmXG4gICAgICB4ID49IDAgJiZcbiAgICAgIHkgPD0gdGhpcy5ib2FyZC5sZW5ndGggLSAxICYmXG4gICAgICB5ID49IDBcbiAgICApIHtcbiAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd4IGFuZCB5IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxMCcpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRm9yU2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIGxldCBmb3JlID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICBpZiAoZm9yZSBpbnN0YW5jZW9mIFNoaXApIHJldHVybiBmb3JlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgbGV0IGluY3JlbWVudCA9IHkgKyBpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuY2hlY2tDb29yZHMoeCwgaW5jcmVtZW50KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzcGFjZSA9IHRoaXMuYm9hcmRbeF1baW5jcmVtZW50XTtcbiAgICAgICAgaWYgKHNwYWNlIGluc3RhbmNlb2YgU3BhY2UgJiYgc3BhY2Uuc2hpcCBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICByZXR1cm4gc3BhY2Uuc2hpcDtcbiAgICAgICAgfSBlbHNlIGlmIChzcGFjZSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgICAgICByZXR1cm4gc3BhY2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBpbmNyZW1lbnQgPSB4ICsgaTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNoZWNrQ29vcmRzKGluY3JlbWVudCwgeSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BhY2UgPSB0aGlzLmJvYXJkW2luY3JlbWVudF1beV07XG4gICAgICAgIGlmIChzcGFjZSBpbnN0YW5jZW9mIFNwYWNlICYmIHNwYWNlLnNoaXAgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIHNwYWNlLnNoaXA7XG4gICAgICAgIH0gZWxzZSBpZiAoc3BhY2UgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIHNwYWNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5jbGFzcyBTcGFjZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zaGlwID0gbnVsbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcbiIsImNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxuZXhwb3J0cy5zdGFydEdhbWUgPSAoZ2FtZSkgPT4ge1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idXR0b24nKTtcbiAgc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGlmIChoZWxwZXJzLmNoZWNrUGxheWVyQm9hcmQoZ2FtZS5kb20pKSB7XG4gICAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgICAgYWRkR3JpZENsaWNrcyhnYW1lKTtcbiAgICAgIH1cbiAgICB9LFxuICApO1xufTtcblxuZXhwb3J0cy5yZW1vdmVTdGFydEdhbWUgPSAoZ2FtZSkgPT4ge1xuICBjb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idXR0b24nKTtcbiAgc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAnY2xpY2snLFxuICAgICgpID0+IHtcbiAgICAgIGdhbWUuc3RhcnQoKTtcbiAgICAgIGFkZEdyaWRDbGlja3MoZ2FtZSk7XG4gICAgfSxcbiAgKTtcbn07XG5cbmV4cG9ydHMud2hhbGVDbGljayA9ICgpID0+IHtcbiAgY29uc3QgYmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHVlLXdoYWxlJyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0LXdoYWxlJyk7XG4gIGNvbnN0IHNwZXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZXJtLXdoYWxlJyk7XG4gIGNvbnN0IGh1bXBiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bXBiYWNrLXdoYWxlJyk7XG4gIGNvbnN0IG9yY2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JjYS13aGFsZScpO1xuICBjb25zdCBwb2QgPSBbYmx1ZSwgcmlnaHQsIHNwZXJtLCBodW1wYmFjaywgb3JjYV07XG5cbiAgZm9yIChsZXQgd2hhbGUgb2YgcG9kKSB7XG4gICAgd2hhbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoZWxwZXJzLnJvdGF0ZVdoYWxlKTtcbiAgfVxufTtcblxuZXhwb3J0cy51bldoYWxlQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmx1ZS13aGFsZScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC13aGFsZScpO1xuICBjb25zdCBzcGVybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVybS13aGFsZScpO1xuICBjb25zdCBodW1wYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1wYmFjay13aGFsZScpO1xuICBjb25zdCBvcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yY2Etd2hhbGUnKTtcbiAgY29uc3QgcG9kID0gW2JsdWUsIHJpZ2h0LCBzcGVybSwgaHVtcGJhY2ssIG9yY2FdO1xuXG4gIGZvciAobGV0IHdoYWxlIG9mIHBvZCkge1xuICAgIHdoYWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVscGVycy5yb3RhdGVXaGFsZSk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZEdyaWRDbGlja3MgPSAoZ2FtZSkgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXB1dGVyLXNxdWFyZScpO1xuICBzcXVhcmVzLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgJ2NsaWNrJyxcbiAgICAgIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGhlbHBlcnMucGFyc2VDb29yZFN0cmluZyhlLnRhcmdldC5kYXRhc2V0LmdyaWROdW1iZXIpO1xuICAgICAgICBnYW1lLmxvb3AoeCwgeSk7XG4gICAgICB9LFxuICAgICAgeyBvbmNlOiB0cnVlIH0sXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLnJlbW92ZUdyaWRDbGlja3MgPSAoYm9hcmQpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1zcXVhcmUnKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgW3gsIHldID0gaGVscGVycy5wYXJzZUNvb3JkU3RyaW5nKGUudGFyZ2V0LmRhdGFzZXQuZ3JpZE51bWJlcik7XG4gICAgICB0aGlzLnRha2VUdXJuKGJvYXJkLCB4LCB5KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiY29uc3QgYmx1ZVcgPSByZXF1aXJlKCcuL2ltYWdlcy9ibHVlLXdoYWxlLmpwZycpO1xuY29uc3QgcmlnaHRXID0gcmVxdWlyZSgnLi9pbWFnZXMvcmlnaHQtd2hhbGUuanBnJyk7XG5jb25zdCBzcGVybVcgPSByZXF1aXJlKCcuL2ltYWdlcy9zcGVybS13aGFsZS5qcGcnKTtcbmNvbnN0IGh1bXBXID0gcmVxdWlyZSgnLi9pbWFnZXMvaHVtcGJhY2suanBnJyk7XG5jb25zdCBvcmNhVyA9IHJlcXVpcmUoJy4vaW1hZ2VzL29yY2EuanBnJyk7XG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbmNsYXNzIERPTSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBtYWluID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnZ2FtZS1hcmVhJ11dKTtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdwbGF5ZXItYXJlYSddXSk7XG4gICAgY29uc3QgY29tcHV0ZXIgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjb21wdXRlci1hcmVhJ11dKTtcbiAgICBjb25zdCBwQm9hcmRBcmVhID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncC1ib2FyZC1hcmVhJ11dKTtcbiAgICBjb25zdCBwQm9hcmRDYXB0aW9uID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncC1ib2FyZC1jYXB0aW9uJ11dLCAnUGxheWVyIEJvYXJkJyk7XG4gICAgXG4gICAgY29uc3QgY0JvYXJkQXJlYSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ2MtYm9hcmQtYXJlYSddXSk7XG4gICAgY29uc3QgY0JvYXJkQ2FwdGlvbiA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ2MtYm9hcmQtY2FwdGlvbiddXSwgJ0NvbXB1dGVyIEJvYXJkJyk7XG5cbiAgICBjb25zdCBwQm9hcmQgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdwbGF5ZXItYm9hcmQnXSxbJ2lkJywgJ2Ryb3AtdGFyZ2V0J11dKTtcbiAgICBjb25zdCBjQm9hcmQgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjb21wLWJvYXJkJ11dKTtcbiAgICBjQm9hcmQuYXBwZW5kKGNCb2FyZENhcHRpb24pO1xuICAgIGNvbnN0IHBCb2FyZEhlYWQgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdwLWJvYXJkLWhlYWQnXV0pO1xuICAgIGZvciAobGV0IG4gb2YgWycnLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0pIHtcbiAgICAgIGxldCBudW0gPSB0aGlzLm1ha2VFbGVtZW50KCdzcGFuJywgW1snY2xhc3MnLCAnYXhpcy1udW0nXV0sIG4pO1xuICAgICAgcEJvYXJkSGVhZC5hcHBlbmQobnVtKTtcbiAgICB9XG4gICAgY29uc3QgY0JvYXJkSGVhZCA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ2MtYm9hcmQtaGVhZCddXSk7XG4gICAgZm9yIChsZXQgbiBvZiBbJycsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXSkge1xuICAgICAgbGV0IG51bSA9IHRoaXMubWFrZUVsZW1lbnQoJ3NwYW4nLCBbWydjbGFzcycsICdheGlzLW51bSddXSwgbik7XG4gICAgICBjQm9hcmRIZWFkLmFwcGVuZChudW0pO1xuICAgIH1cbiAgICBjb25zdCBwQm9hcmRTaWRlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncC1ib2FyZC1zaWRlJ11dKTtcbiAgICBmb3IgKGxldCBuIG9mIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddKSB7XG4gICAgICBsZXQgbnVtID0gdGhpcy5tYWtlRWxlbWVudCgnc3BhbicsIFtbJ2NsYXNzJywgJ2F4aXMtbnVtJ11dLCBuKTtcbiAgICAgIHBCb2FyZFNpZGUuYXBwZW5kKG51bSk7XG4gICAgfVxuICAgIGNvbnN0IGNCb2FyZFNpZGUgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjLWJvYXJkLXNpZGUnXV0pO1xuICAgIGZvciAobGV0IG4gb2YgWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ10pIHtcbiAgICAgIGxldCBudW0gPSB0aGlzLm1ha2VFbGVtZW50KCdzcGFuJywgW1snY2xhc3MnLCAnYXhpcy1udW0nXV0sIG4pO1xuICAgICAgY0JvYXJkU2lkZS5hcHBlbmQobnVtKTtcbiAgICB9XG4gICAgY29uc3QgY29udHJvbHMgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjb250cm9sLWFyZWEnXV0pO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gdGhpcy5tYWtlRWxlbWVudCgnYnV0dG9uJywgW1snY2xhc3MnLCAnc3RhcnQtYnV0dG9uJ11dLCAnU1RBUlQnKTtcbiAgICBjb250cm9scy5hcHBlbmQoc3RhcnRCdXR0b24pO1xuICAgIHBCb2FyZEFyZWEuYXBwZW5kKHBCb2FyZEhlYWQsIHBCb2FyZFNpZGUsIHBCb2FyZCwgcEJvYXJkQ2FwdGlvbiwgY29udHJvbHMpO1xuICAgIGNCb2FyZEFyZWEuYXBwZW5kKGNCb2FyZEhlYWQsIGNCb2FyZFNpZGUsIGNCb2FyZCk7XG4gICAgY29uc3QgdGl0bGVBcmVhID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAndGl0bGUtYXJlYSddXSk7XG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLm1ha2VFbGVtZW50KFxuICAgICAgJ3NwYW4nLFxuICAgICAgW1snY2xhc3MnLCAndGl0bGUtdGV4dCddXSxcbiAgICAgICdCQVRUTEVXSEFMRScsXG4gICAgKTtcbiAgICB0aXRsZUFyZWEuYXBwZW5kKHRpdGxlKTtcbiAgICBjb25zdCBjb21wU2lkZWJhciA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ2NvbXAtc2lkZWJhciddXSk7XG4gICAgY29uc3QgZmlyZUNvbnRyb2wgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdmaXJlLWNvbnRyb2wnXV0pO1xuICAgIGNvbnN0IGRpc2NsYWltZXIgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdkaXNjbGFpbWVyJ11dLCAnV2hhbGVzIGFyZSBub3QgdG8gc2NhbGUnKTtcbiAgICBjb25zdCBzaGlwcyA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtY2F0YWxvZyddXSk7XG4gICAgY29uc3Qgc2hpcHNUaXRsZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2gyJywgW1snY2xhc3MnLCAnc2hpcHMtdGl0bGUnXV0pO1xuICAgIHNoaXBzVGl0bGUudGV4dENvbnRlbnQgPSAnV0hBTEVTJztcbiAgICBjb25zdCBibHVlV2hhbGVEaXYgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICd3aGFsZS1kaXYnXV0pO1xuICAgIGNvbnN0IGJsdWVXaGFsZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2ltZycsIFtcbiAgICAgIFsnY2xhc3MnLCAnd2hhbGUgYmx1ZS13aGFsZS1pbWcnXSxcbiAgICAgIFsnc3JjJywgYmx1ZVddLFxuICAgIF0pO1xuICAgIGNvbnN0IGJsdWVXaGFsZVRleHQgPSB0aGlzLm1ha2VFbGVtZW50KCdwJywgW1snY2xhc3MnLCAnd2hhbGUtdGV4dCddXSk7XG4gICAgYmx1ZVdoYWxlVGV4dC50ZXh0Q29udGVudCA9ICdCTFVFIC0tIDUgSElUUyc7XG4gICAgYmx1ZVdoYWxlRGl2LmFwcGVuZChibHVlV2hhbGUsIGJsdWVXaGFsZVRleHQpO1xuICAgIGNvbnN0IHJpZ2h0V2hhbGVEaXYgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICd3aGFsZS1kaXYnXV0pO1xuXG4gICAgY29uc3QgcmlnaHRXaGFsZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2ltZycsIFtcbiAgICAgIFsnY2xhc3MnLCAnd2hhbGUnXSxcbiAgICAgIFsnc3JjJywgcmlnaHRXXSxcbiAgICBdKTtcbiAgICBjb25zdCByaWdodFdoYWxlVGV4dCA9IHRoaXMubWFrZUVsZW1lbnQoJ3AnLCBbWydjbGFzcycsICd3aGFsZS10ZXh0J11dKTtcbiAgICByaWdodFdoYWxlVGV4dC50ZXh0Q29udGVudCA9ICdSSUdIVCAtLSA0IEhJVFMnO1xuICAgIHJpZ2h0V2hhbGVEaXYuYXBwZW5kKHJpZ2h0V2hhbGUsIHJpZ2h0V2hhbGVUZXh0KTtcblxuICAgIGNvbnN0IHNwZXJtV2hhbGVEaXYgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICd3aGFsZS1kaXYnXV0pO1xuXG4gICAgY29uc3Qgc3Blcm1XaGFsZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2ltZycsIFtcbiAgICAgIFsnY2xhc3MnLCAnd2hhbGUnXSxcbiAgICAgIFsnc3JjJywgc3Blcm1XXSxcbiAgICBdKTtcbiAgICBjb25zdCBzcGVybVdoYWxlVGV4dCA9IHRoaXMubWFrZUVsZW1lbnQoJ3AnLCBbWydjbGFzcycsICd3aGFsZS10ZXh0J11dKTtcbiAgICBzcGVybVdoYWxlVGV4dC50ZXh0Q29udGVudCA9ICdTUEVSTSAtLSAzIEhJVFMnO1xuICAgIHNwZXJtV2hhbGVEaXYuYXBwZW5kKHNwZXJtV2hhbGUsIHNwZXJtV2hhbGVUZXh0KTtcblxuICAgIGNvbnN0IGh1bXBiYWNrRGl2ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnd2hhbGUtZGl2J11dKTtcblxuICAgIGNvbnN0IGh1bXBiYWNrID0gdGhpcy5tYWtlRWxlbWVudCgnaW1nJywgW1xuICAgICAgWydjbGFzcycsICd3aGFsZSddLFxuICAgICAgWydzcmMnLCBodW1wV10sXG4gICAgXSk7XG4gICAgY29uc3QgaHVtcGJhY2tUZXh0ID0gdGhpcy5tYWtlRWxlbWVudCgncCcsIFtbJ2NsYXNzJywgJ3doYWxlLXRleHQnXV0pO1xuICAgIGh1bXBiYWNrVGV4dC50ZXh0Q29udGVudCA9ICdIVU1QQkFDSyAtLSAzIEhJVFMnO1xuXG4gICAgaHVtcGJhY2tEaXYuYXBwZW5kKGh1bXBiYWNrLCBodW1wYmFja1RleHQpO1xuICAgIGNvbnN0IG9yY2FEaXYgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICd3aGFsZS1kaXYnXV0pO1xuXG4gICAgY29uc3Qgb3JjYSA9IHRoaXMubWFrZUVsZW1lbnQoJ2ltZycsIFtcbiAgICAgIFsnY2xhc3MnLCAnd2hhbGUnXSxcbiAgICAgIFsnc3JjJywgb3JjYVddLFxuICAgIF0pO1xuICAgIGNvbnN0IG9yY2FUZXh0ID0gdGhpcy5tYWtlRWxlbWVudCgncCcsIFtbJ2NsYXNzJywgJ3doYWxlLXRleHQnXV0pO1xuICAgIG9yY2FUZXh0LnRleHRDb250ZW50ID0gJ09SQ0EgLS0gMiBISVRTJztcbiAgICBvcmNhRGl2LmFwcGVuZChvcmNhLCBvcmNhVGV4dCk7XG5cbiAgICBzaGlwcy5hcHBlbmQoXG4gICAgICBzaGlwc1RpdGxlLFxuICAgICAgYmx1ZVdoYWxlRGl2LFxuICAgICAgcmlnaHRXaGFsZURpdixcbiAgICAgIHNwZXJtV2hhbGVEaXYsXG4gICAgICBodW1wYmFja0RpdixcbiAgICAgIG9yY2FEaXYsXG4gICAgKTtcblxuICAgIGZpcmVDb250cm9sLmFwcGVuZChzaGlwcyk7XG4gICAgY29tcFNpZGViYXIuYXBwZW5kKGZpcmVDb250cm9sLCBkaXNjbGFpbWVyKTtcbiAgICBjb25zdCBzaGlwQXJlYSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtYXJlYSddXSk7XG4gICAgY29uc3QgYmx1ZVBpZWNlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcCBibHVlLXNoaXAnXSwgWydpZCcsICdibHVlLXdoYWxlJ10sIFsnZHJhZ2dhYmxlJywgJ3RydWUnXSwgWydkYXRhLWxlbmd0aCcsICc1J11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgbGV0IGRvdCA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtZG90J11dKTtcbiAgICAgIGJsdWVQaWVjZS5hcHBlbmQoZG90KTtcbiAgICB9XG5cbiAgICBjb25zdCByaWdodFBpZWNlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcCByaWdodC1zaGlwJ10sIFsnaWQnLCAncmlnaHQtd2hhbGUnXSwgWydkcmFnZ2FibGUnLCAndHJ1ZSddLCBbJ2RhdGEtbGVuZ3RoJywgJzQnXV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBsZXQgZG90ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcC1kb3QnXV0pO1xuICAgICAgcmlnaHRQaWVjZS5hcHBlbmQoZG90KTtcbiAgICB9XG5cbiAgICBjb25zdCBzcGVybVBpZWNlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcCBzcGVybS1zaGlwJ10sIFsnaWQnLCAnc3Blcm0td2hhbGUnXSwgWydkcmFnZ2FibGUnLCAndHJ1ZSddLCBbJ2RhdGEtbGVuZ3RoJywgJzMnXV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsZXQgZG90ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcC1kb3QnXV0pO1xuICAgICAgc3Blcm1QaWVjZS5hcHBlbmQoZG90KTtcbiAgICB9XG5cbiAgICBjb25zdCBodW1wYmFja1BpZWNlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcCBodW1wYmFjay1zaGlwJ10sIFsnaWQnLCAnaHVtcGJhY2std2hhbGUnXSwgWydkcmFnZ2FibGUnLCAndHJ1ZSddLCBbJ2RhdGEtbGVuZ3RoJywgJzMnXV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBsZXQgZG90ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcC1kb3QnXV0pO1xuICAgICAgaHVtcGJhY2tQaWVjZS5hcHBlbmQoZG90KTtcbiAgICB9XG5cbiAgICBjb25zdCBvcmNhUGllY2UgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdzaGlwIG9yY2Etc2hpcCddLCBbJ2lkJywgJ29yY2Etd2hhbGUnXSwgWydkcmFnZ2FibGUnLCAndHJ1ZSddLCBbJ2RhdGEtbGVuZ3RoJywgJzInXV0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBsZXQgZG90ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcC1kb3QnXV0pO1xuICAgICAgb3JjYVBpZWNlLmFwcGVuZChkb3QpO1xuICAgIH1cblxuICAgIHNoaXBBcmVhLmFwcGVuZChibHVlUGllY2UsIHJpZ2h0UGllY2UsIHNwZXJtUGllY2UsIGh1bXBiYWNrUGllY2UsIG9yY2FQaWVjZSk7XG4gICAgY29uc3QgcGxheWVyU2lkZWJhciA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtcbiAgICAgIFsnY2xhc3MnLCAncGxheWVyLXNpZGViYXInXSxcbiAgICBdKTtcbiAgICBjb25zdCBoaXRQaWVjZXMgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdoaXQtcGllY2VzJ11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM2OyBpKyspIHtcbiAgICAgIGxldCBwaWVjZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ2hpdC1waWVjZSddXSk7XG4gICAgICBoaXRQaWVjZXMuYXBwZW5kKHBpZWNlKTtcbiAgICB9XG4gICAgY29uc3QgbWlzc1BpZWNlcyA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ21pc3MtcGllY2VzJ11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDcyOyBpKyspIHtcbiAgICAgIGxldCBwaWVjZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ21pc3MtcGllY2UnXV0pO1xuICAgICAgbWlzc1BpZWNlcy5hcHBlbmQocGllY2UpO1xuICAgIH1cbiAgICBjb25zdCBub0hhcm0gPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICduby1oYXJtJ11dLCAnTm8gd2hhbGVzIHdlcmUgaGFybWVkIGluIHRoZSBtYWtpbmcgb2YgdGhpcyBnYW1lLicpO1xuICAgIGNvbnN0IG1lc3NhZ2VBcmVhID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnbWVzc2FnZS1hcmVhJ11dKTsgXG4gICAgY29uc3QgbGluZTEgPSB0aGlzLm1ha2VFbGVtZW50KCdzcGFuJywgW1snY2xhc3MnLCAnbWVzc2FnZS0xJ11dLCAnRHJhZyB5b3VyIHdoYWxlcyBvbnRvIHRoZSBQbGF5ZXIgQm9hcmQgYW5kIGNsaWNrIFNUQVJUIHRvIHN0YXJ0IHRoZSBnYW1lLicpO1xuICAgIGNvbnN0IGxpbmUyID0gdGhpcy5tYWtlRWxlbWVudCgnc3BhbicsIFtbJ2NsYXNzJywgJ21lc3NhZ2UtMiddXSwgJ0NsaWNrIHRoZSB3aGFsZSB0byByb3RhdGUgaXQuJyk7XG4gICAgbWVzc2FnZUFyZWEuYXBwZW5kKGxpbmUxLCBsaW5lMik7XG5cbiAgICBjb25zdCBxdW90ZURpdiA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3F1b3RlLWRpdiddXSk7XG4gICAgY29uc3QgcXVvdGVUZXh0ID0gJ1RoZXJlIGlzLCBvbmUga25vd3Mgbm90IHdoYXQgc3dlZXQgbXlzdGVyeSBhYm91dCB0aGlzIHNlYSwgd2hvc2UgZ2VudGx5IGF3ZnVsIHN0aXJyaW5ncyBzZWVtIHRvIHNwZWFrIG9mIHNvbWUgaGlkZGVuIHNvdWwgYmVuZWF0aC4gLS0gSGVybWFuIE1lbHZpbGxlJztcbiAgICBjb25zdCBxdW90ZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2gzJywgW1snY2xhc3MnLCAncXVvdGUtdGV4dCddXSwgcXVvdGVUZXh0KTtcbiAgICBxdW90ZURpdi5hcHBlbmQocXVvdGUpO1xuICAgIGNvbnN0IGNvcHlyaWdodCA9IHRoaXMubWFrZUVsZW1lbnQoJ3NwYW4nLCBbWydjbGFzcycsICdpbWctY29weXJpZ2h0J11dKTtcbiAgICBjb25zdCBjb3B5cmlnaHRMaW5rVGV4dCA9XG4gICAgICAnaHR0cHM6Ly9vY2Vhbi5zaS5lZHUvb2NlYW4tbGlmZS9tYXJpbmUtbWFtbWFscy93aGF0LWxhcmdlc3Qtd2hhbGUtY2V0YWNlYS1zaXplLWNvbXBhcmlzb24tY2hhcnQnO1xuICAgIGNvbnN0IGNvcHlyaWdodExpbmsgPSB0aGlzLm1ha2VFbGVtZW50KFxuICAgICAgJ2EnLFxuICAgICAgW1xuICAgICAgICBbXG4gICAgICAgICAgJ2hyZWYnLFxuICAgICAgICAgICdodHRwczovL29jZWFuLnNpLmVkdS9vY2Vhbi1saWZlL21hcmluZS1tYW1tYWxzL3doYXQtbGFyZ2VzdC13aGFsZS1jZXRhY2VhLXNpemUtY29tcGFyaXNvbi1jaGFydCcsXG4gICAgICAgIF0sXG4gICAgICBdLFxuICAgICAgY29weXJpZ2h0TGlua1RleHQsXG4gICAgKTtcbiAgICBjb25zdCBjb3B5cmlnaHRUZXh0ID1cbiAgICAgICdXaGFsZSBpbWFnZXMgYXJlIHVzZWQgc3ViamVjdCB0byB1c2FnZSBjb25kaXRpb25zIGZyb20gdGhlIFNtaXRoc29uaWFuIEluc3RpdHV0aW9uOic7XG4gICAgY29uc3QgY29weVRleHREaXYgPSB0aGlzLm1ha2VFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICBbWydjbGFzcycsICdjb3B5LXRleHQnXV0sXG4gICAgICBjb3B5cmlnaHRUZXh0LFxuICAgICk7XG5cbiAgICBjb3B5cmlnaHQuYXBwZW5kKGNvcHlUZXh0RGl2LCBjb3B5cmlnaHRMaW5rKTtcblxuICAgIHBsYXllclNpZGViYXIuYXBwZW5kKGhpdFBpZWNlcywgbWlzc1BpZWNlcyk7XG4gICAgY29tcHV0ZXIuYXBwZW5kKHRpdGxlQXJlYSwgY0JvYXJkQXJlYSwgY29tcFNpZGViYXIpO1xuICAgIHBsYXllci5hcHBlbmQoc2hpcEFyZWEsIHBCb2FyZEFyZWEsIHBsYXllclNpZGViYXIpO1xuXG4gICAgbWFpbi5hcHBlbmQoY29tcHV0ZXIsIHBsYXllciwgbm9IYXJtKTtcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmQobWFpbiwgbWVzc2FnZUFyZWEsIHF1b3RlRGl2LCBjb3B5cmlnaHQpO1xuICB9XG5cbiAgbWFrZUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcywgdGV4dCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKSB7XG4gICAgICBsZXQgW25hbWUsIHZhbF0gPSBhdHRyaWJ1dGU7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWwpO1xuICAgIH1cbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIG1ha2VCb2FyZChib2FyZCwgYXJlYSkge1xuICAgIGNvbnN0IGJvYXJkU3F1YXJlID0gYCR7Ym9hcmQubmFtZS50b0xvd2VyQ2FzZSgpfS1zcXVhcmVgO1xuICAgIGZvciAobGV0IHJvdyBvZiBib2FyZC5ib2FyZCkge1xuICAgICAgY29uc3Qgcm93RGl2ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncm93J11dKTtcbiAgICAgIGFyZWEuYXBwZW5kKHJvd0Rpdik7XG4gICAgICBmb3IgKGxldCBjb2wgb2Ygcm93KSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMubWFrZUVsZW1lbnQoJ2J1dHRvbicsIFtbJ2NsYXNzJywgYGdyaWQtYnV0dG9uICR7Ym9hcmRTcXVhcmV9YF0sIFsnZGF0YS1ncmlkLW51bWJlcicsIGBbJHtib2FyZC5ib2FyZC5pbmRleE9mKHJvdyl9LCR7cm93LmluZGV4T2YoY29sKX1dYF1dKTtcbiAgICAgICAgcm93RGl2LmFwcGVuZChidG4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZU1lc3NhZ2Uob25lLCB0d28pIHtcbiAgICBjb25zdCBsaW5lMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLTEnKTtcbiAgICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLTInKTtcbiAgICBsaW5lMS50ZXh0Q29udGVudCA9IG9uZTtcbiAgICBsaW5lMi50ZXh0Q29udGVudCA9IHR3bztcbiAgfVxuXG4gIGFwcGVuZERvdCh4LCB5LCBvdXRjb21lLCBuYW1lKSB7XG4gICAgbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBidXR0b24gPSBoZWxwZXJzLmdldEJ1dHRvbih4LCB5LCBuYW1lKTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtvdXRjb21lfS1waWVjZWA7XG4gICAgY29uc3QgcGllY2UgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsIGNsYXNzTmFtZV1dKTtcbiAgICBpZiAoYnV0dG9uLmZpcnN0Q2hpbGQgJiYgYnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgIGJ1dHRvbi5maXJzdENoaWxkLmZpcnN0Q2hpbGQuYXBwZW5kKHBpZWNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKHBpZWNlKTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBET007XG4iLCJmdW5jdGlvbiBEcmFnRXZlbnRzKCkge1xuICBjb25zdCBibHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsdWUtd2hhbGUnKTtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtd2hhbGUnKTtcbiAgY29uc3Qgc3Blcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Blcm0td2hhbGUnKTtcbiAgY29uc3QgaHVtcGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtcGJhY2std2hhbGUnKTtcbiAgY29uc3Qgb3JjYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmNhLXdoYWxlJyk7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AtdGFyZ2V0Jyk7XG4gIGNvbnN0IHBvZCA9IFtibHVlLCByaWdodCwgc3Blcm0sIGh1bXBiYWNrLCBvcmNhXTtcblxuICBmdW5jdGlvbiBkcmFnU3RhcnRIYW5kbGVyKGUpIHtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgZS50YXJnZXQuaWQpO1xuICAgIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnZW50ZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnb3ZlckhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICdncmlkLWJ1dHRvbiBwbGF5ZXItc3F1YXJlJykge1xuICAgICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YSkpO1xuICAgIH0gXG4gIH1cblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBmb3IgKGxldCB3aGFsZSBvZiBwb2QpIHtcbiAgICAgIHdoYWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydEhhbmRsZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ2VudGVySGFuZGxlcik7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ292ZXJIYW5kbGVyKTtcbiAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyb3BIYW5kbGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEcmFnRXZlbnRzO1xuIiwiY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZCcpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9wbGF5ZXInKTtcbmNvbnN0IGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbmNvbnN0IGNsaWNrID0gcmVxdWlyZSgnLi9jbGljaycpO1xuY29uc3QgUmVtb3ZlRHJhZ2dhYmxlID0gcmVxdWlyZSgnLi91bmRyYWcnKTtcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGRvbSkge1xuICAgIHRoaXMuZG9tID0gZG9tO1xuICB9XG5cbiAgcEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci1ib2FyZCcpO1xuICBjQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcC1ib2FyZCcpO1xuICBjb21wQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCdDb21wdXRlcicpO1xuICBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoJ1BsYXllcicpO1xuICBwbGF5ZXIgPSBuZXcgUGxheWVyKCdwbGF5ZXInKTtcbiAgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCdjb21wdXRlcicpO1xuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5kb20ubWFrZUJvYXJkKHRoaXMuY29tcEJvYXJkLCB0aGlzLmNCb2FyZCk7XG4gICAgdGhpcy5kb20ubWFrZUJvYXJkKHRoaXMucGxheWVyQm9hcmQsIHRoaXMucEJvYXJkKTtcbiAgICB0aGlzLmNvbXB1dGVyLnJhbmRvbVBsYWNlKHRoaXMuY29tcEJvYXJkKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIFJlbW92ZURyYWdnYWJsZSgpO1xuICAgIGNsaWNrLnVuV2hhbGVDbGljaygpO1xuICAgIGhlbHBlcnMucGxhY2VQbGF5ZXJXaGFsZXModGhpcy5wbGF5ZXJCb2FyZCk7XG4gIH1cblxuICBsb29wKHgsIHkpIHtcbiAgICBsZXQgb3V0Y29tZTtcbiAgICBsZXQgc3VuayA9ICcnO1xuICAgIFtvdXRjb21lLCBzdW5rXSA9IHRoaXMucGxheWVyLnRha2VUdXJuKHRoaXMuY29tcEJvYXJkLCB4LCB5KTtcbiAgICB0aGlzLmRvbS5hcHBlbmREb3QoeCwgeSwgb3V0Y29tZSwgdGhpcy5jb21wQm9hcmQubmFtZSk7XG4gICAgaWYgKHN1bmspIHtcbiAgICAgIHRoaXMuZG9tLmNoYW5nZU1lc3NhZ2UoYFlvdSBzdW5rIG15ICR7c3Vua30hYCwgJycpO1xuICAgIH1cbiAgICBbb3V0Y29tZSwgc3VuaywgeCwgeV0gPSB0aGlzLmNvbXB1dGVyLnRha2VUdXJuKHRoaXMucGxheWVyQm9hcmQsIHgsIHkpO1xuICAgIHRoaXMuZG9tLmFwcGVuZERvdCh4LCB5LCBvdXRjb21lLCB0aGlzLnBsYXllckJvYXJkLm5hbWUpO1xuICAgIGlmIChzdW5rKSB7XG4gICAgICB0aGlzLmRvbS5jaGFuZ2VNZXNzYWdlKGBJIHN1bmsgeW91ciAke3N1bmt9IWAsICcnKTtcbiAgICB9XG4gICAgbGV0IHdpbm5lciA9IHRoaXMuY2hlY2tGb3JXaW4odGhpcy5wbGF5ZXJCb2FyZCwgdGhpcy5jb21wQm9hcmQpO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIHRoaXMuZG9tLmNoYW5nZU1lc3NhZ2UoYCR7d2lubmVyfSB3aW5zIWAsICcnKTtcbiAgICAgIGNsaWNrLnJlbW92ZUdyaWRDbGlja3ModGhpcy5jb21wQm9hcmQpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRm9yV2luKHBib2FyZCwgY2JvYXJkKSB7XG4gICAgbGV0IHAgPSBwYm9hcmQucmVwb3J0QWxsU3VuaygpID09PSA1ID8gMSA6IDA7XG4gICAgbGV0IGMgPSBjYm9hcmQucmVwb3J0QWxsU3VuaygpID09PSA1ID8gMSA6IDA7XG5cbiAgICBpZiAocCA9PT0gMSkge1xuICAgICAgcmV0dXJuICdDb21wdXRlcic7XG4gICAgfSBlbHNlIGlmIChjID09PSAxKSB7XG4gICAgICByZXR1cm4gJ1BsYXllcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lO1xuIiwiY29uc3QgZ2V0V2hhbGVzID0gKCkgPT4ge1xuICBjb25zdCBibHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsdWUtd2hhbGUnKTtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtd2hhbGUnKTtcbiAgY29uc3Qgc3Blcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Blcm0td2hhbGUnKTtcbiAgY29uc3QgaHVtcGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtcGJhY2std2hhbGUnKTtcbiAgY29uc3Qgb3JjYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmNhLXdoYWxlJyk7XG4gIGNvbnN0IHBvZCA9IFtibHVlLCByaWdodCwgc3Blcm0sIGh1bXBiYWNrLCBvcmNhXTtcblxuICBsZXQgd2hhbGVzID0gW107XG4gIGZvciAobGV0IHdoYWxlIG9mIHBvZCkge1xuICAgIGNvbnN0IG5hbWUgPSB3aGFsZS5pZC5zcGxpdCgnLScpLmpvaW4oJycpO1xuICAgIGNvbnN0IGZyb250Q29vcmQgPSB3aGFsZS5wYXJlbnRFbGVtZW50LmRhdGFzZXQuZ3JpZE51bWJlcjtcbiAgICBjb25zdCByZWN0ID0gd2hhbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLmZsb29yKHJlY3Qud2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodCA9IE1hdGguZmxvb3IocmVjdC5oZWlnaHQpO1xuICAgIGNvbnN0IGxlbmd0aCA9IHdoYWxlLmRhdGFzZXQubGVuZ3RoO1xuICAgIGxldCBjb29yZHMgPSBbXTtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGZyb250Q29vcmRbMV0pO1xuICAgIGNvbnN0IHkgPSBOdW1iZXIoZnJvbnRDb29yZFszXSk7XG4gICAgY29vcmRzLnB1c2goW3gsIHldKTtcbiAgICBpZiAod2lkdGggPiBoZWlnaHQpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBbeCwgeSArIGldO1xuICAgICAgICBjb29yZHMucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgY3VycmVudCA9IFt4ICsgaSwgeV07XG4gICAgICAgIGNvb3Jkcy5wdXNoKGN1cnJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICB3aGFsZXMucHVzaCh7IG5hbWUsIGNvb3JkcyB9KTtcbiAgfVxuICByZXR1cm4gd2hhbGVzO1xufTtcblxuZXhwb3J0cy5wYXJzZUNvb3JkU3RyaW5nID0gKHN0cmluZykgPT4ge1xuICBjb25zdCB4ID0gTnVtYmVyKHN0cmluZ1sxXSk7XG4gIGNvbnN0IHkgPSBOdW1iZXIoc3RyaW5nWzNdKTtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuY29uc3QgY2hlY2tXaGFsZXNPbkJvYXJkID0gKHdoYWxlcykgPT4ge1xuICBmb3IgKGxldCB3aGFsZSBvZiB3aGFsZXMpIHtcbiAgICBmb3IgKGxldCBwYWlyIG9mIHdoYWxlLmNvb3Jkcykge1xuICAgICAgY29uc3QgeCA9IHBhaXJbMF07XG4gICAgICBjb25zdCB5ID0gcGFpclsxXTtcbiAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNoZWNrV2hhbGVzTm90T3ZlcmxhcHBpbmcgPSAod2hhbGVzKSA9PiB7XG4gIGxldCB0ZW1wID0gW107XG4gIGZvciAobGV0IHdoYWxlIG9mIHdoYWxlcykge1xuICAgIGZvciAobGV0IHBhaXIgb2Ygd2hhbGUuY29vcmRzKSB7XG4gICAgICB0ZW1wLnB1c2gocGFpci5qb2luKCcnKSk7XG4gICAgfVxuICB9XG4gIGxldCBzZXQgPSBuZXcgU2V0KHRlbXApO1xuICBpZiAodGVtcC5sZW5ndGggPiBzZXQuc2l6ZSkgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnRzLnJvdGF0ZVdoYWxlID0gKGUpID0+IHtcbiAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3JvdGF0ZWQtd2hhbGUnKTtcbn07XG5cbmNvbnN0IGdldERpcmVjdGlvbiA9IChjb29yZHMpID0+IHtcbiAgbGV0IHhzID0gW107XG4gIGxldCB5cyA9IFtdO1xuICBmb3IgKGxldCBwYWlyIG9mIGNvb3Jkcykge1xuICAgIHhzLnB1c2gocGFpclswXSk7XG4gICAgeXMucHVzaChwYWlyWzFdKTtcbiAgfVxuICBsZXQgeFNldCA9IG5ldyBTZXQoeHMpO1xuICBsZXQgeVNldCA9IG5ldyBTZXQoeXMpO1xuXG4gIHJldHVybiB4U2V0LnNpemUgPiB5U2V0LnNpemUgPyAnZG93bicgOiAncmlnaHQnO1xufTtcblxuZXhwb3J0cy5wbGFjZVBsYXllcldoYWxlcyA9IChib2FyZCkgPT4ge1xuICBsZXQgd2hhbGVzID0gZ2V0V2hhbGVzKCk7XG4gIGZvciAobGV0IHdoYWxlIG9mIHdoYWxlcykge1xuICAgIGxldCBkaXJlY3Rpb24gPSBnZXREaXJlY3Rpb24od2hhbGUuY29vcmRzKTtcbiAgICBsZXQgbmFtZSA9IHdoYWxlLm5hbWU7XG4gICAgbGV0IHggPSB3aGFsZS5jb29yZHNbMF1bMF07XG4gICAgbGV0IHkgPSB3aGFsZS5jb29yZHNbMF1bMV07XG4gICAgYm9hcmQucGxhY2VTaGlwKHgsIHksIG5hbWUsIGRpcmVjdGlvbik7XG4gIH1cbn07XG5cbmV4cG9ydHMuZ2V0QnV0dG9uID0gKHgsIHksIHBsYXllcikgPT4ge1xuICBsZXQgY29vcmQgPSBTdHJpbmcoW3gsIHldKTtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYGJ1dHRvbltkYXRhLWdyaWQtbnVtYmVyPSdbJHtjb29yZH1dJ10uJHtwbGF5ZXJ9LXNxdWFyZWAsXG4gICk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnRzLmNoZWNrUGxheWVyQm9hcmQgPSAoZG9tKSA9PiB7XG4gIGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtYXJlYScpO1xuICBpZiAoc2hpcEFyZWEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgIGRvbS5jaGFuZ2VNZXNzYWdlKFxuICAgICAgJ0FsbCB5b3VyIHdoYWxlcyBoYXZlIG5vdCBiZWVuIHBsYWNlZCEnLFxuICAgICAgJ1BsZWFzZSBwbGFjZSBhbGwgd2hhbGVzIGJlZm9yZSBjbGlja2luZyBTVEFSVC4nLFxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGxldCB3aGFsZXMgPSBnZXRXaGFsZXMoKTtcbiAgICBpZiAoY2hlY2tXaGFsZXNPbkJvYXJkKHdoYWxlcykpIHtcbiAgICAgIGRvbS5jaGFuZ2VNZXNzYWdlKFxuICAgICAgICAnU29tZSBvZiB5b3VyIHdoYWxlcyBhcmUgb2ZmIHRoZSBib2FyZC4nLFxuICAgICAgICAnUGxlYXNlIHJlYXJyYW5nZSB5b3VyIHdoYWxlcyEnLFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNoZWNrV2hhbGVzTm90T3ZlcmxhcHBpbmcod2hhbGVzKSkge1xuICAgICAgZG9tLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAgICdPbmUgb3IgbW9yZSBvZiB5b3VyIHdoYWxlcyBhcmUgb3ZlcmxhcHBpbmcuJyxcbiAgICAgICAgJ1BsZWFzZSByZWFycmFuZ2UgeW91ciB3aGFsZXMhJyxcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5jaGFuZ2VNZXNzYWdlKFxuICAgICAgICAnVGhlIGdhbWUgaGFzIG5vdyBiZWd1biEnLFxuICAgICAgICAnQ2xpY2sgYSBzcXVhcmUgb24gdGhlIENvbXB1dGVyIEJvYXJkIHRvIGF0dGFjay4nLFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuY29uc3QgRE9NID0gcmVxdWlyZSgnLi9kb20nKTtcbmNvbnN0IERyYWdFdmVudHMgPSByZXF1aXJlKCcuL2RyYWcnKTtcbmNvbnN0IGNsaWNrID0gcmVxdWlyZSgnLi9jbGljaycpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG5ib2R5LmFwcGVuZChjb250YWluZXIpO1xuXG5jb25zdCBkb20gPSBuZXcgRE9NKGNvbnRhaW5lcik7XG5kb20uaW5pdCgpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGRvbSk7XG5nYW1lLmluaXQoKTtcbkRyYWdFdmVudHMoKTtcbmNsaWNrLnN0YXJ0R2FtZShnYW1lKTtcbmNsaWNrLndoYWxlQ2xpY2soKTtcblxuXG5cblxuXG5cblxuIiwiY2xhc3MgUGxheWVyIHtcblxuICBhdHRlbXB0cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgdGFrZVR1cm4oYm9hcmQsIHgsIHkpIHtcbiAgICBsZXQgb3V0Y29tZTtcbiAgICBsZXQgc3VuaztcbiAgICBpZiAoYm9hcmQubmFtZSA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgWyBvdXRjb21lLCBzdW5rIF0gPSBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5hdHRlbXB0cy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gWyBvdXRjb21lLCBzdW5rIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSB0aGlzLmdlblJhbmRvbU51bSgxMCk7XG4gICAgICB5ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgW3gsIHldID0gdGhpcy5yYW5kb21UdXJuKHRoaXMuYXR0ZW1wdHMsIHgsIHkpO1xuICAgICAgWyBvdXRjb21lLCBzdW5rIF0gPSBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5hdHRlbXB0cy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gWyBvdXRjb21lLCBzdW5rLCB4LCB5IF07XG4gICAgfVxuICB9XG5cbiAgZ2VuUmFuZG9tTnVtKG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG4gIH1cblxuICByYW5kb21QbGFjZShib2FyZCkge1xuICAgIGZvciAobGV0IHNoaXAgaW4gYm9hcmQuc2hpcHMpIHtcbiAgICAgIGxldCBzdWNjZXNzID0gMDtcbiAgICAgIGxldCBuYW1lID0gc2hpcDtcbiAgICAgIHdoaWxlIChzdWNjZXNzID09PSAwKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgICBsZXQgeSA9IHRoaXMuZ2VuUmFuZG9tTnVtKDEwKTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFsncmlnaHQnLCAnZG93biddW3RoaXMuZ2VuUmFuZG9tTnVtKDIpXTtcbiAgICAgICAgaWYgKGJvYXJkLnBsYWNlU2hpcCh4LCB5LCBuYW1lLCBkaXJlY3Rpb24pKSBzdWNjZXNzID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByYW5kb21UdXJuKGF0dGVtcHRlZCwgeCwgeSkge1xuICAgIGZvciAobGV0IGF0dGVtcHQgb2YgYXR0ZW1wdGVkKSB7XG4gICAgICBpZiAoU3RyaW5nKGF0dGVtcHQpID09PSBTdHJpbmcoW3gsIHldKSkge1xuICAgICAgICB4ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgICB5ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgICBbeCwgeV0gPSB0aGlzLnJhbmRvbVR1cm4oYXR0ZW1wdGVkLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuXG4gIHRha2VuX2hpdHMgPSAwO1xuICBzdW5rID0gMDtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMudGFrZW5faGl0cysrO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLnRha2VuX2hpdHMgPT09IHRoaXMubGVuZ3RoID8gdGhpcy5zdW5rID0gMSA6IDA7XG4gICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJmdW5jdGlvbiBSZW1vdmVEcmFnZ2FibGUoKSB7XG4gIGNvbnN0IGJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmx1ZS13aGFsZScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC13aGFsZScpO1xuICBjb25zdCBzcGVybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVybS13aGFsZScpO1xuICBjb25zdCBodW1wYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1wYmFjay13aGFsZScpO1xuICBjb25zdCBvcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yY2Etd2hhbGUnKTtcbiAgY29uc3QgcG9kID0gW2JsdWUsIHJpZ2h0LCBzcGVybSwgaHVtcGJhY2ssIG9yY2FdO1xuXG4gIGZvciAobGV0IHdoYWxlIG9mIHBvZCkge1xuICAgIHdoYWxlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVtb3ZlRHJhZ2dhYmxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9