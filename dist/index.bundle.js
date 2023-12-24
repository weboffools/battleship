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

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* { margin: 0; padding: 0; }\n\n@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');\n\n:root {\n  --light-blue: rgb(90, 172, 201);\n  --med-blue: rgb(58, 133, 171);\n  --dark-blue: rgb(79, 85, 99);\n  --title-red: rgb(210, 99, 105);\n  --ship-grey: rgb(195, 192, 195);\n  --off-white: rgb(229, 220, 203);\n  --title-white: rgb(224, 225, 218);\n}\n\nhtml {\n  font-family: 'Archivo Black', sans-serif;\n  box-sizing: border-box;\n}\n\nbody {\n  background: whitesmoke;\n}\n\n.container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 60px 60px 60px;\n  justify-items: center;\n  gap: 20px;\n}\n\n.game-area {\n  position: relative;\n  display: grid;\n  margin-top: 20px;\n  height: 500px;\n  border: 6px solid var(--dark-blue);\n  background: var(--dark-blue);\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n}\n\n.player-area {\n  display: grid;\n  border: 2px solid whitesmoke;\n  width: calc(((340px * 8) / 5) + 30px);\n  grid-column: 2 / 3;\n  grid-template-columns: calc(300px / 11 * 2 + 6px) 2fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.p-board-area {\n  display: grid;\n  margin-right: 3px;\n  background: var(--dark-blue);\n  grid-template-columns: 30px 300px;\n  grid-template-rows: 30px 300px 40px 1fr;\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n}\n\n.p-board-head {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n}\n\n.p-board-side {\n  display: grid;\n  height: 300px;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.player-board {\n  display: grid;\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(10, 1fr);\n  background: \n    linear-gradient(217deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(127deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(336deg, var(--dark-blue), var(--dark-blue) 70.71%);\n  }\n\n.ship-area {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 1 / 3;\n  background: var(--dark-blue);\n  border-right: 1px solid var(--title-white);\n}\n\n.ship {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  border-radius: 4px;\n  width: calc(300px / 11 - 1px);\n  outline: 1px solid var(--off-white);\n}\n\n.ship-dot {\n  width: 12px;\n  height: 12px;\n  background: rgba(256, 256, 256, 0.2);\n  border: 1px dashed black;\n  border-radius: 100%;\n}\n\n.blue-ship {\n  background: linear-gradient(rgb(132, 142, 151), rgb(164, 186, 200));\n  height: calc(300px / 11 * 5 + 8px);\n}\n\n.right-ship {\n  background: linear-gradient(rgb(79, 94, 125), rgb(169, 188, 207));\n  height: calc(300px / 11 * 4 + 6px);\n}\n\n.sperm-ship {\n  background: linear-gradient(rgb(168, 166, 144), rgb(144, 150, 129));\n  height: calc(300px / 11 * 3 + 4px);\n}\n\n.humpback-ship {\n  align-self: flex-end;\n  background: linear-gradient(rgb(124, 137, 153), rgb(101, 109, 122));\n  height: calc(300px / 11 * 3 + 4px);\n}\n\n.orca-ship {\n  background: linear-gradient(rgb(56, 63, 75), rgb(109, 119, 152));\n  height: calc(300px / 11 * 2 + 1px);\n}\n\n.rotated-whale {\n  transform-origin: calc(26.27px / 2) calc(25.27px / 2);\n  transform: rotate(-90deg);\n}\n\n.player-sidebar {\n  display: grid;\n  grid-column: 3 / 4;\n  grid-row: 1 / 3;\n  grid-template-rows: 1fr 2fr;\n}\n\n.hit-pieces {\n  display: grid;\n  padding: 3px;\n  align-items: center;\n  justify-items: center;\n  border-bottom: 3px solid var(--dark-blue);\n  grid-template-columns: repeat(6, 1fr);\n  grid-row: 1 / 2;\n  background: var(--med-blue);\n}\n\n.hit-piece {\n  position: sticky;\n  z-index: 4;\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background: red;\n}\n\n.miss-pieces {\n  display: grid;\n  padding: 3px;\n  align-items: center;\n  justify-items: center;\n  grid-template-columns: repeat(8, 1fr);\n  grid-row: 2 / 3;\n  background: var(--med-blue);\n}\n\n.miss-piece {\n  width: 12px;\n  height: 12px;\n  border-radius: 100%;\n  background: white;\n}\n\n.computer-area {\n  display: grid;\n  border: 2px solid whitesmoke;\n  width: calc(((340px * 8) / 5) + 30px);\n  grid-template-columns: 1fr 6fr 3fr;\n  grid-template-rows: 1fr;\n  grid-column: 1 / 2;\n}\n\n.c-board-area {\n  display: grid;\n  margin-right: 3px;\n  background: var(--dark-blue);\n  grid-template-columns: 30px 300px;\n  grid-template-rows: 30px 300px;\n  grid-column: 2 / 3;\n}\n\n.c-board-head {\n  display: grid;\n  grid-template-columns: repeat(11, 1fr);\n  grid-row: 1 / 2;\n  grid-column: 1 / 3;\n}\n\n.c-board-side {\n  display: grid;\n  height: 300px;\n  grid-template-rows: repeat(10, 1fr);\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.comp-board {\n  display: grid;\n  position: relative;\n  grid-row: 2 / 3;\n  grid-column: 2 / 3;\n  width: 100%;\n  height: 300px;\n  grid-template-rows: repeat(10, 1fr);\n  background: \n    linear-gradient(217deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(127deg, var(--light-blue), var(--med-blue) 70.71%),\n    linear-gradient(336deg, var(--dark-blue), var(--dark-blue) 70.71%);\n}\n\n.title-area {\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  grid-column: 1 / 2;\n  background: var(--off-white);\n}\n\n.title-text {\n  padding: 10px;\n  font-size: 28px;\n  font-weight: 400;\n  writing-mode: vertical-lr;\n  text-orientation: upright;\n  color: var(--title-white);\n  background: var(--title-red);\n}\n\n.comp-sidebar {\n  display: grid;\n  grid-column: 3 / 4;\n}\n\n.fire-control {\n  display: grid;\n  background: var(--off-white);\n}\n\n.ships {\n  display: grid;\n}\n\n.control-area {\n  display: grid;\n  grid-template-rows: 30px 1fr;\n  grid-row: 4 / 5;\n  grid-column: 1 / 3;\n  background: var(--dark-blue);\n}\n\n.start-button {\n  width: 50%;\n  font-size: 20px;\n  font-family: inherit;\n  border: 2px solid var(--med-blue);\n  border-radius: 5px;\n  margin-left: 10px;\n  background: var(--title-red);\n  color: var(--title-white);\n}\n\n.axis-num {\n  display: grid;\n  border: 2px groove var(--title-white);\n  color: var(--title-white);\n  font-size: 16px;\n  justify-items: center;\n  align-items: center;\n}\n\n.grid-button {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  background: rgba(100, 100, 100, 0);\n  border: 1px solid rgba(250, 250, 250, 0.3);\n  width: calc(311px / 11);\n  height: calc(300px / 11);\n}\n\n.comp-board .grid-button:hover {\n  background: rgba(224, 225, 218, 0.5);\n}\n\n.row {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n.ships-title {\n  text-align: center;\n}\n\n.whale-div {\n  display: grid;\n}\n\n.whale {\n  width: 100%;\n}\n\n.whale-text {\n  font-family: san-serif;\n  font-weight: bold;\n  text-align: center;\n  color: red;\n}\n\n.start-text {\n  color: red;\n}\n\n.message-area {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  text-align: center;\n  font-size: 24px;\n}\n\n.message-1 {\n  color: darkblue;\n}\n\n.message-2 {\n  color: seagreen;\n}\n\n.quote-div {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 5px;\n  background: rgba(229, 220, 203, 0.3);\n\n  border-radius: 10px;\n}\n\n.quote-div h3 {\n  width: 100%;\n  text-align: center;\n  white-space: nowrap;\n  font-family: cursive;\n  font-size: 22px;\n  font-weight: lighter;\n}\n\n.copy-text, a {\n  font-size: 12px;\n  font-family: Arial, sans-serif;\n  font-weight: normal;\n}\n\n.disclaimer {\n  font-family: sans-serif;\n  font-size: smaller;\n  color: var(--title-white);\n}\n\n.no-harm {\n  position: absolute;\n  bottom: -25px;\n  left: 15px;\n  font-family: sans-serif;\n  font-size: smaller;\n}\n\n.c-board-caption {\n  font-size: 24px;\n  position: absolute;\n  left: 5px;\n  bottom: -30px;\n  color: var(--title-white);\n}\n\n.p-board-caption {\n  padding-left: 35px;\n  padding-top: 5px;\n  grid-column: 1 / 3;\n  grid-row: 3 / 4;\n  font-size: 24px;\n  color: var(--title-white);\n}\n\n"],"sourceRoot":""}]);
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
const helpers = __webpack_require__(/*! ./helpers */ "./src/helpers.js");

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
      game.start();
      addGridClicks(game);
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
    const shipArea = document.querySelector('.ship-area');
    if (shipArea.children.length > 0) {
      this.dom.changeMessage(
        'All your whales have not been placed!',
        'Please place all whales before clicking START.',
      );
    } else {
      let whales = helpers.getWhales();
      if (helpers.checkWhalesOnBoard(whales)) {
        this.dom.changeMessage(
          'Some of your whales are off the board.',
          'Please rearrange your whales!',
        );
      } else if (helpers.checkWhalesNotOverlapping(whales)) {
        this.dom.changeMessage(
          'One or more of your whales are overlapping.',
          'Please rearrange your whales!',
        );
      } else {
        this.dom.changeMessage(
          'The game has now begun!',
          'Click a square on the Computer Board to attack.',
        );
        whales = helpers.getWhales();
        RemoveDraggable();
        click.unWhaleClick();
        helpers.placePlayerWhales(this.playerBoard, whales);
      }
    }
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

exports.parseCoordString = (string) => {
  const x = Number(string[1]);
  const y = Number(string[3]);

  return [x, y];
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

  return (xSet.size > ySet.size) ? 'down' : 'right';
};

exports.placePlayerWhales = (board, whales) => {
  for (let whale of whales) {
    let direction = getDirection(whale.coords);
    let name = whale.name;
    let x = whale.coords[0][0];
    let y = whale.coords[0][1];
    board.placeShip(x, y, name, direction);
  }
};

exports.getButton = (x, y, player) => {
  let coord = String([x,y]);
  let button = document.querySelector(`button[data-grid-number='[${coord}]'].${player}-square`);
  return button;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiwySEFBMkg7QUFDM0g7QUFDQSw4Q0FBOEMsV0FBVzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTywwR0FBMEcsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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TyxDQUFDLDZCQUFRO0FBQzdCLFlBQVksbUJBQU8sQ0FBQywyQkFBTztBQUMzQixtQkFBbUIsbUJBQU8sQ0FBQyw2QkFBUTtBQUNuQyxjQUFjLG1CQUFPLENBQUMsK0JBQVM7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3REQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY2xpY2suanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kcmFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91bmRyYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXZvK0JsYWNrJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuXG46cm9vdCB7XG4gIC0tbGlnaHQtYmx1ZTogcmdiKDkwLCAxNzIsIDIwMSk7XG4gIC0tbWVkLWJsdWU6IHJnYig1OCwgMTMzLCAxNzEpO1xuICAtLWRhcmstYmx1ZTogcmdiKDc5LCA4NSwgOTkpO1xuICAtLXRpdGxlLXJlZDogcmdiKDIxMCwgOTksIDEwNSk7XG4gIC0tc2hpcC1ncmV5OiByZ2IoMTk1LCAxOTIsIDE5NSk7XG4gIC0tb2ZmLXdoaXRlOiByZ2IoMjI5LCAyMjAsIDIwMyk7XG4gIC0tdGl0bGUtd2hpdGU6IHJnYigyMjQsIDIyNSwgMjE4KTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiAnQXJjaGl2byBCbGFjaycsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNjBweCA2MHB4IDYwcHg7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG4uZ2FtZS1hcmVhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBib3JkZXI6IDZweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogNDBweDtcbn1cblxuLnBsYXllci1hcmVhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcbiAgd2lkdGg6IGNhbGMoKCgzNDBweCAqIDgpIC8gNSkgKyAzMHB4KTtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzAwcHggLyAxMSAqIDIgKyA2cHgpIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLnAtYm9hcmQtYXJlYSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAzMDBweCA0MHB4IDFmcjtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICBncmlkLXJvdzogMSAvIDM7XG59XG5cbi5wLWJvYXJkLWhlYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbi5wLWJvYXJkLXNpZGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5wbGF5ZXItYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGJhY2tncm91bmQ6IFxuICAgIGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1tZWQtYmx1ZSkgNzAuNzElKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMTI3ZGVnLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tbWVkLWJsdWUpIDcwLjcxJSksXG4gICAgbGluZWFyLWdyYWRpZW50KDMzNmRlZywgdmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSA3MC43MSUpO1xuICB9XG5cbi5zaGlwLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDEgLyAzO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsdWUpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10aXRsZS13aGl0ZSk7XG59XG5cbi5zaGlwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiBjYWxjKDMwMHB4IC8gMTEgLSAxcHgpO1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tb2ZmLXdoaXRlKTtcbn1cblxuLnNoaXAtZG90IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjIpO1xuICBib3JkZXI6IDFweCBkYXNoZWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5ibHVlLXNoaXAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDEzMiwgMTQyLCAxNTEpLCByZ2IoMTY0LCAxODYsIDIwMCkpO1xuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDUgKyA4cHgpO1xufVxuXG4ucmlnaHQtc2hpcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoNzksIDk0LCAxMjUpLCByZ2IoMTY5LCAxODgsIDIwNykpO1xuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDQgKyA2cHgpO1xufVxuXG4uc3Blcm0tc2hpcCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMTY4LCAxNjYsIDE0NCksIHJnYigxNDQsIDE1MCwgMTI5KSk7XG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExICogMyArIDRweCk7XG59XG5cbi5odW1wYmFjay1zaGlwIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMTI0LCAxMzcsIDE1MyksIHJnYigxMDEsIDEwOSwgMTIyKSk7XG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExICogMyArIDRweCk7XG59XG5cbi5vcmNhLXNoaXAge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDU2LCA2MywgNzUpLCByZ2IoMTA5LCAxMTksIDE1MikpO1xuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDIgKyAxcHgpO1xufVxuXG4ucm90YXRlZC13aGFsZSB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNhbGMoMjYuMjdweCAvIDIpIGNhbGMoMjUuMjdweCAvIDIpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4ucGxheWVyLXNpZGViYXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gIGdyaWQtcm93OiAxIC8gMztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xufVxuXG4uaGl0LXBpZWNlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZWQtYmx1ZSk7XG59XG5cbi5oaXQtcGllY2Uge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5taXNzLXBpZWNlcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDNweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1lZC1ibHVlKTtcbn1cblxuLm1pc3MtcGllY2Uge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbXB1dGVyLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICB3aWR0aDogY2FsYygoKDM0MHB4ICogOCkgLyA1KSArIDMwcHgpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xufVxuXG4uYy1ib2FyZC1hcmVhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDMwMHB4O1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbi5jLWJvYXJkLWhlYWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMSwgMWZyKTtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG59XG5cbi5jLWJvYXJkLXNpZGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDMwMHB4O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi5jb21wLWJvYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBiYWNrZ3JvdW5kOiBcbiAgICBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tbWVkLWJsdWUpIDcwLjcxJSksXG4gICAgbGluZWFyLWdyYWRpZW50KDEyN2RlZywgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLW1lZC1ibHVlKSA3MC43MSUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgzMzZkZWcsIHZhcigtLWRhcmstYmx1ZSksIHZhcigtLWRhcmstYmx1ZSkgNzAuNzElKTtcbn1cblxuLnRpdGxlLWFyZWEge1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgYmFja2dyb3VuZDogdmFyKC0tb2ZmLXdoaXRlKTtcbn1cblxuLnRpdGxlLXRleHQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gIHRleHQtb3JpZW50YXRpb246IHVwcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRpdGxlLXJlZCk7XG59XG5cbi5jb21wLXNpZGViYXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbjogMyAvIDQ7XG59XG5cbi5maXJlLWNvbnRyb2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1vZmYtd2hpdGUpO1xufVxuXG4uc2hpcHMge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4uY29udHJvbC1hcmVhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmcjtcbiAgZ3JpZC1yb3c6IDQgLyA1O1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XG59XG5cbi5zdGFydC1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tZWQtYmx1ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRpdGxlLXJlZCk7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XG59XG5cbi5heGlzLW51bSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogMnB4IGdyb292ZSB2YXIoLS10aXRsZS13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ3JpZC1idXR0b24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMDAsIDEwMCwgMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4zKTtcbiAgd2lkdGg6IGNhbGMoMzExcHggLyAxMSk7XG4gIGhlaWdodDogY2FsYygzMDBweCAvIDExKTtcbn1cblxuLmNvbXAtYm9hcmQgLmdyaWQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNSwgMjE4LCAwLjUpO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLnNoaXBzLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2hhbGUtZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLndoYWxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53aGFsZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IHNhbi1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnN0YXJ0LXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWVzc2FnZS1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm1lc3NhZ2UtMSB7XG4gIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLm1lc3NhZ2UtMiB7XG4gIGNvbG9yOiBzZWFncmVlbjtcbn1cblxuLnF1b3RlLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIyOSwgMjIwLCAyMDMsIDAuMyk7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnF1b3RlLWRpdiBoMyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uY29weS10ZXh0LCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgY29sb3I6IHZhcigtLXRpdGxlLXdoaXRlKTtcbn1cblxuLm5vLWhhcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTI1cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5jLWJvYXJkLWNhcHRpb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNXB4O1xuICBib3R0b206IC0zMHB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xufVxuXG4ucC1ib2FyZC1jYXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAzIC8gNDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsSUFBSSxTQUFTLEVBQUUsVUFBVSxFQUFFOztBQUkzQjtFQUNFLCtCQUErQjtFQUMvQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsK0JBQStCO0VBQy9CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQkFBcUI7RUFDckIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFF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LFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DOztFQUVwQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiogeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXZvK0JsYWNrJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tbGlnaHQtYmx1ZTogcmdiKDkwLCAxNzIsIDIwMSk7XFxuICAtLW1lZC1ibHVlOiByZ2IoNTgsIDEzMywgMTcxKTtcXG4gIC0tZGFyay1ibHVlOiByZ2IoNzksIDg1LCA5OSk7XFxuICAtLXRpdGxlLXJlZDogcmdiKDIxMCwgOTksIDEwNSk7XFxuICAtLXNoaXAtZ3JleTogcmdiKDE5NSwgMTkyLCAxOTUpO1xcbiAgLS1vZmYtd2hpdGU6IHJnYigyMjksIDIyMCwgMjAzKTtcXG4gIC0tdGl0bGUtd2hpdGU6IHJnYigyMjQsIDIyNSwgMjE4KTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogJ0FyY2hpdm8gQmxhY2snLCBzYW5zLXNlcmlmO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNjBweCA2MHB4IDYwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5nYW1lLWFyZWEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgYm9yZGVyOiA2cHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbi5wbGF5ZXItYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gIHdpZHRoOiBjYWxjKCgoMzQwcHggKiA4KSAvIDUpICsgMzBweCk7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMzAwcHggLyAxMSAqIDIgKyA2cHgpIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5wLWJvYXJkLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAzMDBweCA0MHB4IDFmcjtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLnAtYm9hcmQtaGVhZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5wLWJvYXJkLXNpZGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnBsYXllci1ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJhY2tncm91bmQ6IFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjE3ZGVnLCB2YXIoLS1saWdodC1ibHVlKSwgdmFyKC0tbWVkLWJsdWUpIDcwLjcxJSksXFxuICAgIGxpbmVhci1ncmFkaWVudCgxMjdkZWcsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1tZWQtYmx1ZSkgNzAuNzElKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDMzNmRlZywgdmFyKC0tZGFyay1ibHVlKSwgdmFyKC0tZGFyay1ibHVlKSA3MC43MSUpO1xcbiAgfVxcblxcbi5zaGlwLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS10aXRsZS13aGl0ZSk7XFxufVxcblxcbi5zaGlwIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IGNhbGMoMzAwcHggLyAxMSAtIDFweCk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLnNoaXAtZG90IHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjIpO1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG59XFxuXFxuLmJsdWUtc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDEzMiwgMTQyLCAxNTEpLCByZ2IoMTY0LCAxODYsIDIwMCkpO1xcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEgKiA1ICsgOHB4KTtcXG59XFxuXFxuLnJpZ2h0LXNoaXAge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig3OSwgOTQsIDEyNSksIHJnYigxNjksIDE4OCwgMjA3KSk7XFxuICBoZWlnaHQ6IGNhbGMoMzAwcHggLyAxMSAqIDQgKyA2cHgpO1xcbn1cXG5cXG4uc3Blcm0tc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDE2OCwgMTY2LCAxNDQpLCByZ2IoMTQ0LCAxNTAsIDEyOSkpO1xcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEgKiAzICsgNHB4KTtcXG59XFxuXFxuLmh1bXBiYWNrLXNoaXAge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDEyNCwgMTM3LCAxNTMpLCByZ2IoMTAxLCAxMDksIDEyMikpO1xcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEgKiAzICsgNHB4KTtcXG59XFxuXFxuLm9yY2Etc2hpcCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDU2LCA2MywgNzUpLCByZ2IoMTA5LCAxMTksIDE1MikpO1xcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEgKiAyICsgMXB4KTtcXG59XFxuXFxuLnJvdGF0ZWQtd2hhbGUge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2FsYygyNi4yN3B4IC8gMikgY2FsYygyNS4yN3B4IC8gMik7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xcbn1cXG5cXG4ucGxheWVyLXNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG59XFxuXFxuLmhpdC1waWVjZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZWQtYmx1ZSk7XFxufVxcblxcbi5oaXQtcGllY2Uge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHotaW5kZXg6IDQ7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5taXNzLXBpZWNlcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDgsIDFmcik7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZWQtYmx1ZSk7XFxufVxcblxcbi5taXNzLXBpZWNlIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG4uY29tcHV0ZXItYXJlYSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGVzbW9rZTtcXG4gIHdpZHRoOiBjYWxjKCgoMzQwcHggKiA4KSAvIDUpICsgMzBweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5jLWJvYXJkLWFyZWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAzMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAzMDBweDtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLmMtYm9hcmQtaGVhZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTEsIDFmcik7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbi5jLWJvYXJkLXNpZGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLmNvbXAtYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYmFja2dyb3VuZDogXFxuICAgIGxpbmVhci1ncmFkaWVudCgyMTdkZWcsIHZhcigtLWxpZ2h0LWJsdWUpLCB2YXIoLS1tZWQtYmx1ZSkgNzAuNzElKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDEyN2RlZywgdmFyKC0tbGlnaHQtYmx1ZSksIHZhcigtLW1lZC1ibHVlKSA3MC43MSUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMzM2ZGVnLCB2YXIoLS1kYXJrLWJsdWUpLCB2YXIoLS1kYXJrLWJsdWUpIDcwLjcxJSk7XFxufVxcblxcbi50aXRsZS1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgdGV4dC1vcmllbnRhdGlvbjogdXByaWdodDtcXG4gIGNvbG9yOiB2YXIoLS10aXRsZS13aGl0ZSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aXRsZS1yZWQpO1xcbn1cXG5cXG4uY29tcC1zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxufVxcblxcbi5maXJlLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW9mZi13aGl0ZSk7XFxufVxcblxcbi5zaGlwcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uY29udHJvbC1hcmVhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTtcXG59XFxuXFxuLnN0YXJ0LWJ1dHRvbiB7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tZWQtYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRpdGxlLXJlZCk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xcbn1cXG5cXG4uYXhpcy1udW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMnB4IGdyb292ZSB2YXIoLS10aXRsZS13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdyaWQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDEwMCwgMTAwLCAwKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLCAyNTAsIDI1MCwgMC4zKTtcXG4gIHdpZHRoOiBjYWxjKDMxMXB4IC8gMTEpO1xcbiAgaGVpZ2h0OiBjYWxjKDMwMHB4IC8gMTEpO1xcbn1cXG5cXG4uY29tcC1ib2FyZCAuZ3JpZC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNSwgMjE4LCAwLjUpO1xcbn1cXG5cXG4ucm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5zaGlwcy10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi53aGFsZS1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLndoYWxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2hhbGUtdGV4dCB7XFxuICBmb250LWZhbWlseTogc2FuLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uc3RhcnQtdGV4dCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4ubWVzc2FnZS1hcmVhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4ubWVzc2FnZS0xIHtcXG4gIGNvbG9yOiBkYXJrYmx1ZTtcXG59XFxuXFxuLm1lc3NhZ2UtMiB7XFxuICBjb2xvcjogc2VhZ3JlZW47XFxufVxcblxcbi5xdW90ZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyOSwgMjIwLCAyMDMsIDAuMyk7XFxuXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ucXVvdGUtZGl2IGgzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcblxcbi5jb3B5LXRleHQsIGEge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmRpc2NsYWltZXIge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IHNtYWxsZXI7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xcbn1cXG5cXG4ubm8taGFybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IC0yNXB4O1xcbiAgbGVmdDogMTVweDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xcbn1cXG5cXG4uYy1ib2FyZC1jYXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDVweDtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xcbn1cXG5cXG4ucC1ib2FyZC1jYXB0aW9uIHtcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tdGl0bGUtd2hpdGUpO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBhdHRlbXB0cyA9IFtdO1xuICBzdW5rID0gW107XG5cbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuYnVpbGRCb2FyZCgpO1xuICB9XG5cbiAgYnVpbGRCb2FyZCgpIHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICByb3cucHVzaChuZXcgU3BhY2UoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBzaGlwcyA9IHtcbiAgICBibHVld2hhbGU6IDUsXG4gICAgcmlnaHR3aGFsZTogNCxcbiAgICBzcGVybXdoYWxlOiAzLFxuICAgIGh1bXBiYWNrd2hhbGU6IDMsXG4gICAgb3JjYXdoYWxlOiAyLFxuICB9O1xuXG4gIHBsYWNlU2hpcCh4LCB5LCBuYW1lLCBkaXJlY3Rpb24pIHtcbiAgICBbeCwgeV0gPSB0aGlzLmNoZWNrQ29vcmRzKHgsIHkpO1xuICAgIGxldCBsZW5ndGggPSB0aGlzLnNoaXBzW25hbWVdO1xuICAgIGxldCBzaGlwSW5UaGVXYXkgPSB0aGlzLmNoZWNrRm9yU2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgaWYgKHNoaXBJblRoZVdheSkgcmV0dXJuIDA7XG4gICAgdGhpcy5ib2FyZFt4XVt5XSA9IG5ldyBTaGlwKG5hbWUsIGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXS5zaGlwID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIFt4LCB5XSA9IHRoaXMuY2hlY2tDb29yZHMoeCwgeSk7XG4gICAgbGV0IHN1bms7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt4XVt5XSBpbnN0YW5jZW9mIFNoaXApIHtcbiAgICAgIGxldCBzaGlwID0gdGhpcy5ib2FyZFt4XVt5XTtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0uaGl0KCk7XG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICB0aGlzLnN1bmsucHVzaChzaGlwKTtcbiAgICAgICAgc3VuayA9IHNoaXAubmFtZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXR0ZW1wdHMucHVzaChbeCwgeV0pO1xuICAgICAgcmV0dXJuIFsnaGl0Jywgc3VuayBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBzaGlwID0gdGhpcy5ib2FyZFt4XVt5XS5zaGlwO1xuICAgICAgICB0aGlzLmJvYXJkW3hdW3ldLnNoaXAuaGl0KCk7XG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgdGhpcy5zdW5rLnB1c2goc2hpcCk7XG4gICAgICAgICAgc3VuayA9IHNoaXAubmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dGVtcHRzLnB1c2goW3gsIHldKTtcbiAgICAgICAgcmV0dXJuIFsnaGl0Jywgc3VuayBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFja01pc3MoeCwgeSk7XG4gICAgICAgIHJldHVybiBbJ21pc3MnLCBzdW5rIF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVwb3J0QWxsU3VuaygpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zdW5rKSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBnZXRMZW5ndGgoYmVnaW4sIGVuZCkge1xuICAgIGlmIChiZWdpblswXSA9PT0gZW5kWzBdKSB7XG4gICAgICByZXR1cm4gZW5kWzFdIC0gYmVnaW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbmRbMF0gLSBiZWdpblswXTtcbiAgICB9XG4gIH1cblxuICB0cmFja01pc3MoeCwgeSkge1xuICAgIHRoaXMuYXR0ZW1wdHMucHVzaChbeCwgeV0pO1xuICB9XG5cbiAgY29udmVydENvb3JkKGNvb3JkKSB7XG4gICAgcmV0dXJuIGNvb3JkWzBdICogMTAgKyBjb29yZFsxXTtcbiAgfVxuXG4gIGNoZWNrQ29vcmRzKHgsIHkpIHtcbiAgICBpZiAoXG4gICAgICB4IDw9IHRoaXMuYm9hcmQubGVuZ3RoIC0gMSAmJlxuICAgICAgeCA+PSAwICYmXG4gICAgICB5IDw9IHRoaXMuYm9hcmQubGVuZ3RoIC0gMSAmJlxuICAgICAgeSA+PSAwXG4gICAgKSB7XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigneCBhbmQgeSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTAnKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0ZvclNoaXAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICBsZXQgZm9yZSA9IHRoaXMuYm9hcmRbeF1beV07XG4gICAgaWYgKGZvcmUgaW5zdGFuY2VvZiBTaGlwKSByZXR1cm4gZm9yZTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIGxldCBpbmNyZW1lbnQgPSB5ICsgaTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNoZWNrQ29vcmRzKHgsIGluY3JlbWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3BhY2UgPSB0aGlzLmJvYXJkW3hdW2luY3JlbWVudF07XG4gICAgICAgIGlmIChzcGFjZSBpbnN0YW5jZW9mIFNwYWNlICYmIHNwYWNlLnNoaXAgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIHNwYWNlLnNoaXA7XG4gICAgICAgIH0gZWxzZSBpZiAoc3BhY2UgaW5zdGFuY2VvZiBTaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIHNwYWNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgaW5jcmVtZW50ID0geCArIGk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhpcy5jaGVja0Nvb3JkcyhpbmNyZW1lbnQsIHkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwYWNlID0gdGhpcy5ib2FyZFtpbmNyZW1lbnRdW3ldO1xuICAgICAgICBpZiAoc3BhY2UgaW5zdGFuY2VvZiBTcGFjZSAmJiBzcGFjZS5zaGlwIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIHJldHVybiBzcGFjZS5zaGlwO1xuICAgICAgICB9IGVsc2UgaWYgKHNwYWNlIGluc3RhbmNlb2YgU2hpcCkge1xuICAgICAgICAgIHJldHVybiBzcGFjZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuY2xhc3MgU3BhY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuc2hpcCA9IG51bGw7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbmV4cG9ydHMuc3RhcnRHYW1lID0gKGdhbWUpID0+IHtcbiAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnV0dG9uJyk7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgJ2NsaWNrJyxcbiAgICAoKSA9PiB7XG4gICAgICBnYW1lLnN0YXJ0KCk7XG4gICAgICBhZGRHcmlkQ2xpY2tzKGdhbWUpO1xuICAgIH0sXG4gICAgeyBvbmNlOiB0cnVlIH0sXG4gICk7XG59O1xuXG5leHBvcnRzLndoYWxlQ2xpY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmx1ZS13aGFsZScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC13aGFsZScpO1xuICBjb25zdCBzcGVybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVybS13aGFsZScpO1xuICBjb25zdCBodW1wYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1wYmFjay13aGFsZScpO1xuICBjb25zdCBvcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yY2Etd2hhbGUnKTtcbiAgY29uc3QgcG9kID0gW2JsdWUsIHJpZ2h0LCBzcGVybSwgaHVtcGJhY2ssIG9yY2FdO1xuXG4gIGZvciAobGV0IHdoYWxlIG9mIHBvZCkge1xuICAgIHdoYWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGVscGVycy5yb3RhdGVXaGFsZSk7XG4gIH1cbn07XG5cbmV4cG9ydHMudW5XaGFsZUNsaWNrID0gKCkgPT4ge1xuICBjb25zdCBibHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsdWUtd2hhbGUnKTtcbiAgY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmlnaHQtd2hhbGUnKTtcbiAgY29uc3Qgc3Blcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Blcm0td2hhbGUnKTtcbiAgY29uc3QgaHVtcGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtcGJhY2std2hhbGUnKTtcbiAgY29uc3Qgb3JjYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcmNhLXdoYWxlJyk7XG4gIGNvbnN0IHBvZCA9IFtibHVlLCByaWdodCwgc3Blcm0sIGh1bXBiYWNrLCBvcmNhXTtcblxuICBmb3IgKGxldCB3aGFsZSBvZiBwb2QpIHtcbiAgICB3aGFsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhlbHBlcnMucm90YXRlV2hhbGUpO1xuICB9XG59O1xuXG5jb25zdCBhZGRHcmlkQ2xpY2tzID0gKGdhbWUpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wdXRlci1zcXVhcmUnKTtcbiAgc3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdjbGljaycsXG4gICAgICAoZSkgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBoZWxwZXJzLnBhcnNlQ29vcmRTdHJpbmcoZS50YXJnZXQuZGF0YXNldC5ncmlkTnVtYmVyKTtcbiAgICAgICAgZ2FtZS5sb29wKHgsIHkpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5yZW1vdmVHcmlkQ2xpY2tzID0gKGJvYXJkKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcHV0ZXItc3F1YXJlJyk7XG4gIHNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IFt4LCB5XSA9IGhlbHBlcnMucGFyc2VDb29yZFN0cmluZyhlLnRhcmdldC5kYXRhc2V0LmdyaWROdW1iZXIpO1xuICAgICAgdGhpcy50YWtlVHVybihib2FyZCwgeCwgeSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsImNvbnN0IGJsdWVXID0gcmVxdWlyZSgnLi9pbWFnZXMvYmx1ZS13aGFsZS5qcGcnKTtcbmNvbnN0IHJpZ2h0VyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3JpZ2h0LXdoYWxlLmpwZycpO1xuY29uc3Qgc3Blcm1XID0gcmVxdWlyZSgnLi9pbWFnZXMvc3Blcm0td2hhbGUuanBnJyk7XG5jb25zdCBodW1wVyA9IHJlcXVpcmUoJy4vaW1hZ2VzL2h1bXBiYWNrLmpwZycpO1xuY29uc3Qgb3JjYVcgPSByZXF1aXJlKCcuL2ltYWdlcy9vcmNhLmpwZycpO1xuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG5jbGFzcyBET00ge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgbWFpbiA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ2dhbWUtYXJlYSddXSk7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncGxheWVyLWFyZWEnXV0pO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnY29tcHV0ZXItYXJlYSddXSk7XG4gICAgY29uc3QgcEJvYXJkQXJlYSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3AtYm9hcmQtYXJlYSddXSk7XG4gICAgY29uc3QgcEJvYXJkQ2FwdGlvbiA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3AtYm9hcmQtY2FwdGlvbiddXSwgJ1BsYXllciBCb2FyZCcpO1xuICAgIFxuICAgIGNvbnN0IGNCb2FyZEFyZWEgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjLWJvYXJkLWFyZWEnXV0pO1xuICAgIGNvbnN0IGNCb2FyZENhcHRpb24gPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjLWJvYXJkLWNhcHRpb24nXV0sICdDb21wdXRlciBCb2FyZCcpO1xuXG4gICAgY29uc3QgcEJvYXJkID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncGxheWVyLWJvYXJkJ10sWydpZCcsICdkcm9wLXRhcmdldCddXSk7XG4gICAgY29uc3QgY0JvYXJkID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnY29tcC1ib2FyZCddXSk7XG4gICAgY0JvYXJkLmFwcGVuZChjQm9hcmRDYXB0aW9uKTtcbiAgICBjb25zdCBwQm9hcmRIZWFkID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAncC1ib2FyZC1oZWFkJ11dKTtcbiAgICBmb3IgKGxldCBuIG9mIFsnJywgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdKSB7XG4gICAgICBsZXQgbnVtID0gdGhpcy5tYWtlRWxlbWVudCgnc3BhbicsIFtbJ2NsYXNzJywgJ2F4aXMtbnVtJ11dLCBuKTtcbiAgICAgIHBCb2FyZEhlYWQuYXBwZW5kKG51bSk7XG4gICAgfVxuICAgIGNvbnN0IGNCb2FyZEhlYWQgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjLWJvYXJkLWhlYWQnXV0pO1xuICAgIGZvciAobGV0IG4gb2YgWycnLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0pIHtcbiAgICAgIGxldCBudW0gPSB0aGlzLm1ha2VFbGVtZW50KCdzcGFuJywgW1snY2xhc3MnLCAnYXhpcy1udW0nXV0sIG4pO1xuICAgICAgY0JvYXJkSGVhZC5hcHBlbmQobnVtKTtcbiAgICB9XG4gICAgY29uc3QgcEJvYXJkU2lkZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3AtYm9hcmQtc2lkZSddXSk7XG4gICAgZm9yIChsZXQgbiBvZiBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onXSkge1xuICAgICAgbGV0IG51bSA9IHRoaXMubWFrZUVsZW1lbnQoJ3NwYW4nLCBbWydjbGFzcycsICdheGlzLW51bSddXSwgbik7XG4gICAgICBwQm9hcmRTaWRlLmFwcGVuZChudW0pO1xuICAgIH1cbiAgICBjb25zdCBjQm9hcmRTaWRlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnYy1ib2FyZC1zaWRlJ11dKTtcbiAgICBmb3IgKGxldCBuIG9mIFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddKSB7XG4gICAgICBsZXQgbnVtID0gdGhpcy5tYWtlRWxlbWVudCgnc3BhbicsIFtbJ2NsYXNzJywgJ2F4aXMtbnVtJ11dLCBuKTtcbiAgICAgIGNCb2FyZFNpZGUuYXBwZW5kKG51bSk7XG4gICAgfVxuICAgIGNvbnN0IGNvbnRyb2xzID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnY29udHJvbC1hcmVhJ11dKTtcbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IHRoaXMubWFrZUVsZW1lbnQoJ2J1dHRvbicsIFtbJ2NsYXNzJywgJ3N0YXJ0LWJ1dHRvbiddXSwgJ1NUQVJUJyk7XG4gICAgY29udHJvbHMuYXBwZW5kKHN0YXJ0QnV0dG9uKTtcbiAgICBwQm9hcmRBcmVhLmFwcGVuZChwQm9hcmRIZWFkLCBwQm9hcmRTaWRlLCBwQm9hcmQsIHBCb2FyZENhcHRpb24sIGNvbnRyb2xzKTtcbiAgICBjQm9hcmRBcmVhLmFwcGVuZChjQm9hcmRIZWFkLCBjQm9hcmRTaWRlLCBjQm9hcmQpO1xuICAgIGNvbnN0IHRpdGxlQXJlYSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3RpdGxlLWFyZWEnXV0pO1xuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5tYWtlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIFtbJ2NsYXNzJywgJ3RpdGxlLXRleHQnXV0sXG4gICAgICAnQkFUVExFV0hBTEUnLFxuICAgICk7XG4gICAgdGl0bGVBcmVhLmFwcGVuZCh0aXRsZSk7XG4gICAgY29uc3QgY29tcFNpZGViYXIgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdjb21wLXNpZGViYXInXV0pO1xuICAgIGNvbnN0IGZpcmVDb250cm9sID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnZmlyZS1jb250cm9sJ11dKTtcbiAgICBjb25zdCBkaXNjbGFpbWVyID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnZGlzY2xhaW1lciddXSwgJ1doYWxlcyBhcmUgbm90IHRvIHNjYWxlJyk7XG4gICAgY29uc3Qgc2hpcHMgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdzaGlwLWNhdGFsb2cnXV0pO1xuICAgIGNvbnN0IHNoaXBzVGl0bGUgPSB0aGlzLm1ha2VFbGVtZW50KCdoMicsIFtbJ2NsYXNzJywgJ3NoaXBzLXRpdGxlJ11dKTtcbiAgICBzaGlwc1RpdGxlLnRleHRDb250ZW50ID0gJ1dIQUxFUyc7XG4gICAgY29uc3QgYmx1ZVdoYWxlRGl2ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnd2hhbGUtZGl2J11dKTtcbiAgICBjb25zdCBibHVlV2hhbGUgPSB0aGlzLm1ha2VFbGVtZW50KCdpbWcnLCBbXG4gICAgICBbJ2NsYXNzJywgJ3doYWxlIGJsdWUtd2hhbGUtaW1nJ10sXG4gICAgICBbJ3NyYycsIGJsdWVXXSxcbiAgICBdKTtcbiAgICBjb25zdCBibHVlV2hhbGVUZXh0ID0gdGhpcy5tYWtlRWxlbWVudCgncCcsIFtbJ2NsYXNzJywgJ3doYWxlLXRleHQnXV0pO1xuICAgIGJsdWVXaGFsZVRleHQudGV4dENvbnRlbnQgPSAnQkxVRSAtLSA1IEhJVFMnO1xuICAgIGJsdWVXaGFsZURpdi5hcHBlbmQoYmx1ZVdoYWxlLCBibHVlV2hhbGVUZXh0KTtcbiAgICBjb25zdCByaWdodFdoYWxlRGl2ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnd2hhbGUtZGl2J11dKTtcblxuICAgIGNvbnN0IHJpZ2h0V2hhbGUgPSB0aGlzLm1ha2VFbGVtZW50KCdpbWcnLCBbXG4gICAgICBbJ2NsYXNzJywgJ3doYWxlJ10sXG4gICAgICBbJ3NyYycsIHJpZ2h0V10sXG4gICAgXSk7XG4gICAgY29uc3QgcmlnaHRXaGFsZVRleHQgPSB0aGlzLm1ha2VFbGVtZW50KCdwJywgW1snY2xhc3MnLCAnd2hhbGUtdGV4dCddXSk7XG4gICAgcmlnaHRXaGFsZVRleHQudGV4dENvbnRlbnQgPSAnUklHSFQgLS0gNCBISVRTJztcbiAgICByaWdodFdoYWxlRGl2LmFwcGVuZChyaWdodFdoYWxlLCByaWdodFdoYWxlVGV4dCk7XG5cbiAgICBjb25zdCBzcGVybVdoYWxlRGl2ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnd2hhbGUtZGl2J11dKTtcblxuICAgIGNvbnN0IHNwZXJtV2hhbGUgPSB0aGlzLm1ha2VFbGVtZW50KCdpbWcnLCBbXG4gICAgICBbJ2NsYXNzJywgJ3doYWxlJ10sXG4gICAgICBbJ3NyYycsIHNwZXJtV10sXG4gICAgXSk7XG4gICAgY29uc3Qgc3Blcm1XaGFsZVRleHQgPSB0aGlzLm1ha2VFbGVtZW50KCdwJywgW1snY2xhc3MnLCAnd2hhbGUtdGV4dCddXSk7XG4gICAgc3Blcm1XaGFsZVRleHQudGV4dENvbnRlbnQgPSAnU1BFUk0gLS0gMyBISVRTJztcbiAgICBzcGVybVdoYWxlRGl2LmFwcGVuZChzcGVybVdoYWxlLCBzcGVybVdoYWxlVGV4dCk7XG5cbiAgICBjb25zdCBodW1wYmFja0RpdiA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3doYWxlLWRpdiddXSk7XG5cbiAgICBjb25zdCBodW1wYmFjayA9IHRoaXMubWFrZUVsZW1lbnQoJ2ltZycsIFtcbiAgICAgIFsnY2xhc3MnLCAnd2hhbGUnXSxcbiAgICAgIFsnc3JjJywgaHVtcFddLFxuICAgIF0pO1xuICAgIGNvbnN0IGh1bXBiYWNrVGV4dCA9IHRoaXMubWFrZUVsZW1lbnQoJ3AnLCBbWydjbGFzcycsICd3aGFsZS10ZXh0J11dKTtcbiAgICBodW1wYmFja1RleHQudGV4dENvbnRlbnQgPSAnSFVNUEJBQ0sgLS0gMyBISVRTJztcblxuICAgIGh1bXBiYWNrRGl2LmFwcGVuZChodW1wYmFjaywgaHVtcGJhY2tUZXh0KTtcbiAgICBjb25zdCBvcmNhRGl2ID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnd2hhbGUtZGl2J11dKTtcblxuICAgIGNvbnN0IG9yY2EgPSB0aGlzLm1ha2VFbGVtZW50KCdpbWcnLCBbXG4gICAgICBbJ2NsYXNzJywgJ3doYWxlJ10sXG4gICAgICBbJ3NyYycsIG9yY2FXXSxcbiAgICBdKTtcbiAgICBjb25zdCBvcmNhVGV4dCA9IHRoaXMubWFrZUVsZW1lbnQoJ3AnLCBbWydjbGFzcycsICd3aGFsZS10ZXh0J11dKTtcbiAgICBvcmNhVGV4dC50ZXh0Q29udGVudCA9ICdPUkNBIC0tIDIgSElUUyc7XG4gICAgb3JjYURpdi5hcHBlbmQob3JjYSwgb3JjYVRleHQpO1xuXG4gICAgc2hpcHMuYXBwZW5kKFxuICAgICAgc2hpcHNUaXRsZSxcbiAgICAgIGJsdWVXaGFsZURpdixcbiAgICAgIHJpZ2h0V2hhbGVEaXYsXG4gICAgICBzcGVybVdoYWxlRGl2LFxuICAgICAgaHVtcGJhY2tEaXYsXG4gICAgICBvcmNhRGl2LFxuICAgICk7XG5cbiAgICBmaXJlQ29udHJvbC5hcHBlbmQoc2hpcHMpO1xuICAgIGNvbXBTaWRlYmFyLmFwcGVuZChmaXJlQ29udHJvbCwgZGlzY2xhaW1lcik7XG4gICAgY29uc3Qgc2hpcEFyZWEgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdzaGlwLWFyZWEnXV0pO1xuICAgIGNvbnN0IGJsdWVQaWVjZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAgYmx1ZS1zaGlwJ10sIFsnaWQnLCAnYmx1ZS13aGFsZSddLCBbJ2RyYWdnYWJsZScsICd0cnVlJ10sIFsnZGF0YS1sZW5ndGgnLCAnNSddXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIGxldCBkb3QgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdzaGlwLWRvdCddXSk7XG4gICAgICBibHVlUGllY2UuYXBwZW5kKGRvdCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRQaWVjZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAgcmlnaHQtc2hpcCddLCBbJ2lkJywgJ3JpZ2h0LXdoYWxlJ10sIFsnZHJhZ2dhYmxlJywgJ3RydWUnXSwgWydkYXRhLWxlbmd0aCcsICc0J11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgbGV0IGRvdCA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtZG90J11dKTtcbiAgICAgIHJpZ2h0UGllY2UuYXBwZW5kKGRvdCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3Blcm1QaWVjZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAgc3Blcm0tc2hpcCddLCBbJ2lkJywgJ3NwZXJtLXdoYWxlJ10sIFsnZHJhZ2dhYmxlJywgJ3RydWUnXSwgWydkYXRhLWxlbmd0aCcsICczJ11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgbGV0IGRvdCA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtZG90J11dKTtcbiAgICAgIHNwZXJtUGllY2UuYXBwZW5kKGRvdCk7XG4gICAgfVxuXG4gICAgY29uc3QgaHVtcGJhY2tQaWVjZSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAgaHVtcGJhY2stc2hpcCddLCBbJ2lkJywgJ2h1bXBiYWNrLXdoYWxlJ10sIFsnZHJhZ2dhYmxlJywgJ3RydWUnXSwgWydkYXRhLWxlbmd0aCcsICczJ11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgbGV0IGRvdCA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtZG90J11dKTtcbiAgICAgIGh1bXBiYWNrUGllY2UuYXBwZW5kKGRvdCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb3JjYVBpZWNlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnc2hpcCBvcmNhLXNoaXAnXSwgWydpZCcsICdvcmNhLXdoYWxlJ10sIFsnZHJhZ2dhYmxlJywgJ3RydWUnXSwgWydkYXRhLWxlbmd0aCcsICcyJ11dKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgbGV0IGRvdCA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3NoaXAtZG90J11dKTtcbiAgICAgIG9yY2FQaWVjZS5hcHBlbmQoZG90KTtcbiAgICB9XG5cbiAgICBzaGlwQXJlYS5hcHBlbmQoYmx1ZVBpZWNlLCByaWdodFBpZWNlLCBzcGVybVBpZWNlLCBodW1wYmFja1BpZWNlLCBvcmNhUGllY2UpO1xuICAgIGNvbnN0IHBsYXllclNpZGViYXIgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbXG4gICAgICBbJ2NsYXNzJywgJ3BsYXllci1zaWRlYmFyJ10sXG4gICAgXSk7XG4gICAgY29uc3QgaGl0UGllY2VzID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnaGl0LXBpZWNlcyddXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNjsgaSsrKSB7XG4gICAgICBsZXQgcGllY2UgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdoaXQtcGllY2UnXV0pO1xuICAgICAgaGl0UGllY2VzLmFwcGVuZChwaWVjZSk7XG4gICAgfVxuICAgIGNvbnN0IG1pc3NQaWVjZXMgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdtaXNzLXBpZWNlcyddXSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3MjsgaSsrKSB7XG4gICAgICBsZXQgcGllY2UgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdtaXNzLXBpZWNlJ11dKTtcbiAgICAgIG1pc3NQaWVjZXMuYXBwZW5kKHBpZWNlKTtcbiAgICB9XG4gICAgY29uc3Qgbm9IYXJtID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCAnbm8taGFybSddXSwgJ05vIHdoYWxlcyB3ZXJlIGhhcm1lZCBpbiB0aGUgbWFraW5nIG9mIHRoaXMgZ2FtZS4nKTtcbiAgICBjb25zdCBtZXNzYWdlQXJlYSA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ21lc3NhZ2UtYXJlYSddXSk7IFxuICAgIGNvbnN0IGxpbmUxID0gdGhpcy5tYWtlRWxlbWVudCgnc3BhbicsIFtbJ2NsYXNzJywgJ21lc3NhZ2UtMSddXSwgJ0RyYWcgeW91ciB3aGFsZXMgb250byB0aGUgUGxheWVyIEJvYXJkIGFuZCBjbGljayBTVEFSVCB0byBzdGFydCB0aGUgZ2FtZS4nKTtcbiAgICBjb25zdCBsaW5lMiA9IHRoaXMubWFrZUVsZW1lbnQoJ3NwYW4nLCBbWydjbGFzcycsICdtZXNzYWdlLTInXV0sICdDbGljayB0aGUgd2hhbGUgdG8gcm90YXRlIGl0LicpO1xuICAgIG1lc3NhZ2VBcmVhLmFwcGVuZChsaW5lMSwgbGluZTIpO1xuXG4gICAgY29uc3QgcXVvdGVEaXYgPSB0aGlzLm1ha2VFbGVtZW50KCdkaXYnLCBbWydjbGFzcycsICdxdW90ZS1kaXYnXV0pO1xuICAgIGNvbnN0IHF1b3RlVGV4dCA9ICdUaGVyZSBpcywgb25lIGtub3dzIG5vdCB3aGF0IHN3ZWV0IG15c3RlcnkgYWJvdXQgdGhpcyBzZWEsIHdob3NlIGdlbnRseSBhd2Z1bCBzdGlycmluZ3Mgc2VlbSB0byBzcGVhayBvZiBzb21lIGhpZGRlbiBzb3VsIGJlbmVhdGguIC0tIEhlcm1hbiBNZWx2aWxsZSc7XG4gICAgY29uc3QgcXVvdGUgPSB0aGlzLm1ha2VFbGVtZW50KCdoMycsIFtbJ2NsYXNzJywgJ3F1b3RlLXRleHQnXV0sIHF1b3RlVGV4dCk7XG4gICAgcXVvdGVEaXYuYXBwZW5kKHF1b3RlKTtcbiAgICBjb25zdCBjb3B5cmlnaHQgPSB0aGlzLm1ha2VFbGVtZW50KCdzcGFuJywgW1snY2xhc3MnLCAnaW1nLWNvcHlyaWdodCddXSk7XG4gICAgY29uc3QgY29weXJpZ2h0TGlua1RleHQgPVxuICAgICAgJ2h0dHBzOi8vb2NlYW4uc2kuZWR1L29jZWFuLWxpZmUvbWFyaW5lLW1hbW1hbHMvd2hhdC1sYXJnZXN0LXdoYWxlLWNldGFjZWEtc2l6ZS1jb21wYXJpc29uLWNoYXJ0JztcbiAgICBjb25zdCBjb3B5cmlnaHRMaW5rID0gdGhpcy5tYWtlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIFtcbiAgICAgICAgW1xuICAgICAgICAgICdocmVmJyxcbiAgICAgICAgICAnaHR0cHM6Ly9vY2Vhbi5zaS5lZHUvb2NlYW4tbGlmZS9tYXJpbmUtbWFtbWFscy93aGF0LWxhcmdlc3Qtd2hhbGUtY2V0YWNlYS1zaXplLWNvbXBhcmlzb24tY2hhcnQnLFxuICAgICAgICBdLFxuICAgICAgXSxcbiAgICAgIGNvcHlyaWdodExpbmtUZXh0LFxuICAgICk7XG4gICAgY29uc3QgY29weXJpZ2h0VGV4dCA9XG4gICAgICAnV2hhbGUgaW1hZ2VzIGFyZSB1c2VkIHN1YmplY3QgdG8gdXNhZ2UgY29uZGl0aW9ucyBmcm9tIHRoZSBTbWl0aHNvbmlhbiBJbnN0aXR1dGlvbjonO1xuICAgIGNvbnN0IGNvcHlUZXh0RGl2ID0gdGhpcy5tYWtlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgW1snY2xhc3MnLCAnY29weS10ZXh0J11dLFxuICAgICAgY29weXJpZ2h0VGV4dCxcbiAgICApO1xuXG4gICAgY29weXJpZ2h0LmFwcGVuZChjb3B5VGV4dERpdiwgY29weXJpZ2h0TGluayk7XG5cbiAgICBwbGF5ZXJTaWRlYmFyLmFwcGVuZChoaXRQaWVjZXMsIG1pc3NQaWVjZXMpO1xuICAgIGNvbXB1dGVyLmFwcGVuZCh0aXRsZUFyZWEsIGNCb2FyZEFyZWEsIGNvbXBTaWRlYmFyKTtcbiAgICBwbGF5ZXIuYXBwZW5kKHNoaXBBcmVhLCBwQm9hcmRBcmVhLCBwbGF5ZXJTaWRlYmFyKTtcblxuICAgIG1haW4uYXBwZW5kKGNvbXB1dGVyLCBwbGF5ZXIsIG5vSGFybSk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKG1haW4sIG1lc3NhZ2VBcmVhLCBxdW90ZURpdiwgY29weXJpZ2h0KTtcbiAgfVxuXG4gIG1ha2VFbGVtZW50KHR5cGUsIGF0dHJpYnV0ZXMsIHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBhdHRyaWJ1dGUgb2YgYXR0cmlidXRlcykge1xuICAgICAgbGV0IFtuYW1lLCB2YWxdID0gYXR0cmlidXRlO1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsKTtcbiAgICB9XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBtYWtlQm9hcmQoYm9hcmQsIGFyZWEpIHtcbiAgICBjb25zdCBib2FyZFNxdWFyZSA9IGAke2JvYXJkLm5hbWUudG9Mb3dlckNhc2UoKX0tc3F1YXJlYDtcbiAgICBmb3IgKGxldCByb3cgb2YgYm9hcmQuYm9hcmQpIHtcbiAgICAgIGNvbnN0IHJvd0RpdiA9IHRoaXMubWFrZUVsZW1lbnQoJ2RpdicsIFtbJ2NsYXNzJywgJ3JvdyddXSk7XG4gICAgICBhcmVhLmFwcGVuZChyb3dEaXYpO1xuICAgICAgZm9yIChsZXQgY29sIG9mIHJvdykge1xuICAgICAgICBjb25zdCBidG4gPSB0aGlzLm1ha2VFbGVtZW50KCdidXR0b24nLCBbWydjbGFzcycsIGBncmlkLWJ1dHRvbiAke2JvYXJkU3F1YXJlfWBdLCBbJ2RhdGEtZ3JpZC1udW1iZXInLCBgWyR7Ym9hcmQuYm9hcmQuaW5kZXhPZihyb3cpfSwke3Jvdy5pbmRleE9mKGNvbCl9XWBdXSk7XG4gICAgICAgIHJvd0Rpdi5hcHBlbmQoYnRuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VNZXNzYWdlKG9uZSwgdHdvKSB7XG4gICAgY29uc3QgbGluZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS0xJyk7XG4gICAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZS0yJyk7XG4gICAgbGluZTEudGV4dENvbnRlbnQgPSBvbmU7XG4gICAgbGluZTIudGV4dENvbnRlbnQgPSB0d287XG4gIH1cblxuICBhcHBlbmREb3QoeCwgeSwgb3V0Y29tZSwgbmFtZSkge1xuICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgYnV0dG9uID0gaGVscGVycy5nZXRCdXR0b24oeCwgeSwgbmFtZSk7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7b3V0Y29tZX0tcGllY2VgO1xuICAgIGNvbnN0IHBpZWNlID0gdGhpcy5tYWtlRWxlbWVudCgnZGl2JywgW1snY2xhc3MnLCBjbGFzc05hbWVdXSk7XG4gICAgaWYgKGJ1dHRvbi5maXJzdENoaWxkICYmIGJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICBidXR0b24uZmlyc3RDaGlsZC5maXJzdENoaWxkLmFwcGVuZChwaWVjZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChwaWVjZSk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRE9NO1xuIiwiZnVuY3Rpb24gRHJhZ0V2ZW50cygpIHtcbiAgY29uc3QgYmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHVlLXdoYWxlJyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0LXdoYWxlJyk7XG4gIGNvbnN0IHNwZXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZXJtLXdoYWxlJyk7XG4gIGNvbnN0IGh1bXBiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bXBiYWNrLXdoYWxlJyk7XG4gIGNvbnN0IG9yY2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JjYS13aGFsZScpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wLXRhcmdldCcpO1xuICBjb25zdCBwb2QgPSBbYmx1ZSwgcmlnaHQsIHNwZXJtLCBodW1wYmFjaywgb3JjYV07XG5cbiAgZnVuY3Rpb24gZHJhZ1N0YXJ0SGFuZGxlcihlKSB7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIGUudGFyZ2V0LmlkKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ2VudGVySGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZHJhZ292ZXJIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyb3BIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZ3JpZC1idXR0b24gcGxheWVyLXNxdWFyZScpIHtcbiAgICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEpKTtcbiAgICB9IFxuICB9XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgZm9yIChsZXQgd2hhbGUgb2YgcG9kKSB7XG4gICAgICB3aGFsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnRIYW5kbGVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdlbnRlckhhbmRsZXIpO1xuICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdvdmVySGFuZGxlcik7XG4gIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wSGFuZGxlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRHJhZ0V2ZW50cztcbiIsImNvbnN0IEdhbWVib2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQnKTtcbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoJy4vcGxheWVyJyk7XG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5jb25zdCBjbGljayA9IHJlcXVpcmUoJy4vY2xpY2snKTtcbmNvbnN0IFJlbW92ZURyYWdnYWJsZSA9IHJlcXVpcmUoJy4vdW5kcmFnJyk7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihkb20pIHtcbiAgICB0aGlzLmRvbSA9IGRvbTtcbiAgfVxuXG4gIHBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItYm9hcmQnKTtcbiAgY0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXAtYm9hcmQnKTtcbiAgY29tcEJvYXJkID0gbmV3IEdhbWVib2FyZCgnQ29tcHV0ZXInKTtcbiAgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCdQbGF5ZXInKTtcbiAgcGxheWVyID0gbmV3IFBsYXllcigncGxheWVyJyk7XG4gIGNvbXB1dGVyID0gbmV3IFBsYXllcignY29tcHV0ZXInKTtcblxuICBpbml0KCkge1xuICAgIHRoaXMuZG9tLm1ha2VCb2FyZCh0aGlzLmNvbXBCb2FyZCwgdGhpcy5jQm9hcmQpO1xuICAgIHRoaXMuZG9tLm1ha2VCb2FyZCh0aGlzLnBsYXllckJvYXJkLCB0aGlzLnBCb2FyZCk7XG4gICAgdGhpcy5jb21wdXRlci5yYW5kb21QbGFjZSh0aGlzLmNvbXBCb2FyZCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCBzaGlwQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWFyZWEnKTtcbiAgICBpZiAoc2hpcEFyZWEuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5kb20uY2hhbmdlTWVzc2FnZShcbiAgICAgICAgJ0FsbCB5b3VyIHdoYWxlcyBoYXZlIG5vdCBiZWVuIHBsYWNlZCEnLFxuICAgICAgICAnUGxlYXNlIHBsYWNlIGFsbCB3aGFsZXMgYmVmb3JlIGNsaWNraW5nIFNUQVJULicsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgd2hhbGVzID0gaGVscGVycy5nZXRXaGFsZXMoKTtcbiAgICAgIGlmIChoZWxwZXJzLmNoZWNrV2hhbGVzT25Cb2FyZCh3aGFsZXMpKSB7XG4gICAgICAgIHRoaXMuZG9tLmNoYW5nZU1lc3NhZ2UoXG4gICAgICAgICAgJ1NvbWUgb2YgeW91ciB3aGFsZXMgYXJlIG9mZiB0aGUgYm9hcmQuJyxcbiAgICAgICAgICAnUGxlYXNlIHJlYXJyYW5nZSB5b3VyIHdoYWxlcyEnLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChoZWxwZXJzLmNoZWNrV2hhbGVzTm90T3ZlcmxhcHBpbmcod2hhbGVzKSkge1xuICAgICAgICB0aGlzLmRvbS5jaGFuZ2VNZXNzYWdlKFxuICAgICAgICAgICdPbmUgb3IgbW9yZSBvZiB5b3VyIHdoYWxlcyBhcmUgb3ZlcmxhcHBpbmcuJyxcbiAgICAgICAgICAnUGxlYXNlIHJlYXJyYW5nZSB5b3VyIHdoYWxlcyEnLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kb20uY2hhbmdlTWVzc2FnZShcbiAgICAgICAgICAnVGhlIGdhbWUgaGFzIG5vdyBiZWd1biEnLFxuICAgICAgICAgICdDbGljayBhIHNxdWFyZSBvbiB0aGUgQ29tcHV0ZXIgQm9hcmQgdG8gYXR0YWNrLicsXG4gICAgICAgICk7XG4gICAgICAgIHdoYWxlcyA9IGhlbHBlcnMuZ2V0V2hhbGVzKCk7XG4gICAgICAgIFJlbW92ZURyYWdnYWJsZSgpO1xuICAgICAgICBjbGljay51bldoYWxlQ2xpY2soKTtcbiAgICAgICAgaGVscGVycy5wbGFjZVBsYXllcldoYWxlcyh0aGlzLnBsYXllckJvYXJkLCB3aGFsZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvb3AoeCwgeSkge1xuICAgIGxldCBvdXRjb21lO1xuICAgIGxldCBzdW5rID0gJyc7XG4gICAgW291dGNvbWUsIHN1bmtdID0gdGhpcy5wbGF5ZXIudGFrZVR1cm4odGhpcy5jb21wQm9hcmQsIHgsIHkpO1xuICAgIHRoaXMuZG9tLmFwcGVuZERvdCh4LCB5LCBvdXRjb21lLCB0aGlzLmNvbXBCb2FyZC5uYW1lKTtcbiAgICBpZiAoc3Vuaykge1xuICAgICAgdGhpcy5kb20uY2hhbmdlTWVzc2FnZShgWW91IHN1bmsgbXkgJHtzdW5rfSFgLCAnJyk7XG4gICAgfVxuICAgIFtvdXRjb21lLCBzdW5rLCB4LCB5XSA9IHRoaXMuY29tcHV0ZXIudGFrZVR1cm4odGhpcy5wbGF5ZXJCb2FyZCwgeCwgeSk7XG4gICAgdGhpcy5kb20uYXBwZW5kRG90KHgsIHksIG91dGNvbWUsIHRoaXMucGxheWVyQm9hcmQubmFtZSk7XG4gICAgaWYgKHN1bmspIHtcbiAgICAgIHRoaXMuZG9tLmNoYW5nZU1lc3NhZ2UoYEkgc3VuayB5b3VyICR7c3Vua30hYCwgJycpO1xuICAgIH1cbiAgICBsZXQgd2lubmVyID0gdGhpcy5jaGVja0Zvcldpbih0aGlzLnBsYXllckJvYXJkLCB0aGlzLmNvbXBCb2FyZCk7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgdGhpcy5kb20uY2hhbmdlTWVzc2FnZShgJHt3aW5uZXJ9IHdpbnMhYCwgJycpO1xuICAgICAgY2xpY2sucmVtb3ZlR3JpZENsaWNrcyh0aGlzLmNvbXBCb2FyZCk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tGb3JXaW4ocGJvYXJkLCBjYm9hcmQpIHtcbiAgICBsZXQgcCA9IHBib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IDUgPyAxIDogMDtcbiAgICBsZXQgYyA9IGNib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IDUgPyAxIDogMDtcblxuICAgIGlmIChwID09PSAxKSB7XG4gICAgICByZXR1cm4gJ0NvbXB1dGVyJztcbiAgICB9IGVsc2UgaWYgKGMgPT09IDEpIHtcbiAgICAgIHJldHVybiAnUGxheWVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWU7XG4iLCJleHBvcnRzLmdldFdoYWxlcyA9ICgpID0+IHtcbiAgY29uc3QgYmx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHVlLXdoYWxlJyk7XG4gIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JpZ2h0LXdoYWxlJyk7XG4gIGNvbnN0IHNwZXJtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwZXJtLXdoYWxlJyk7XG4gIGNvbnN0IGh1bXBiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bXBiYWNrLXdoYWxlJyk7XG4gIGNvbnN0IG9yY2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3JjYS13aGFsZScpO1xuICBjb25zdCBwb2QgPSBbYmx1ZSwgcmlnaHQsIHNwZXJtLCBodW1wYmFjaywgb3JjYV07XG5cbiAgbGV0IHdoYWxlcyA9IFtdO1xuICBmb3IgKGxldCB3aGFsZSBvZiBwb2QpIHtcbiAgICBjb25zdCBuYW1lID0gd2hhbGUuaWQuc3BsaXQoJy0nKS5qb2luKCcnKTtcbiAgICBjb25zdCBmcm9udENvb3JkID0gd2hhbGUucGFyZW50RWxlbWVudC5kYXRhc2V0LmdyaWROdW1iZXI7XG4gICAgY29uc3QgcmVjdCA9IHdoYWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpZHRoID0gTWF0aC5mbG9vcihyZWN0LndpZHRoKTtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLmZsb29yKHJlY3QuaGVpZ2h0KTtcbiAgICBjb25zdCBsZW5ndGggPSB3aGFsZS5kYXRhc2V0Lmxlbmd0aDtcbiAgICBsZXQgY29vcmRzID0gW107XG4gICAgY29uc3QgeCA9IE51bWJlcihmcm9udENvb3JkWzFdKTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGZyb250Q29vcmRbM10pO1xuICAgIGNvb3Jkcy5wdXNoKFt4LCB5XSk7XG4gICAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjdXJyZW50ID0gW3gsIHkgKyBpXTtcbiAgICAgICAgY29vcmRzLnB1c2goY3VycmVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBbeCArIGksIHldO1xuICAgICAgICBjb29yZHMucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2hhbGVzLnB1c2goeyBuYW1lLCBjb29yZHMgfSk7XG4gIH1cbiAgcmV0dXJuIHdoYWxlcztcbn07XG5cbmV4cG9ydHMucGFyc2VDb29yZFN0cmluZyA9IChzdHJpbmcpID0+IHtcbiAgY29uc3QgeCA9IE51bWJlcihzdHJpbmdbMV0pO1xuICBjb25zdCB5ID0gTnVtYmVyKHN0cmluZ1szXSk7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbmV4cG9ydHMuY2hlY2tXaGFsZXNPbkJvYXJkID0gKHdoYWxlcykgPT4ge1xuICBmb3IgKGxldCB3aGFsZSBvZiB3aGFsZXMpIHtcbiAgICBmb3IgKGxldCBwYWlyIG9mIHdoYWxlLmNvb3Jkcykge1xuICAgICAgY29uc3QgeCA9IHBhaXJbMF07XG4gICAgICBjb25zdCB5ID0gcGFpclsxXTtcbiAgICAgIGlmICh4ID4gOSB8fCB4IDwgMCB8fCB5ID4gOSB8fCB5IDwgMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuY2hlY2tXaGFsZXNOb3RPdmVybGFwcGluZyA9ICh3aGFsZXMpID0+IHtcbiAgbGV0IHRlbXAgPSBbXTtcbiAgZm9yIChsZXQgd2hhbGUgb2Ygd2hhbGVzKSB7XG4gICAgZm9yIChsZXQgcGFpciBvZiB3aGFsZS5jb29yZHMpIHtcbiAgICAgIHRlbXAucHVzaChwYWlyLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cbiAgbGV0IHNldCA9IG5ldyBTZXQodGVtcCk7XG4gIGlmICh0ZW1wLmxlbmd0aCA+IHNldC5zaXplKSByZXR1cm4gdHJ1ZTtcbn07XG5cbmV4cG9ydHMucm90YXRlV2hhbGUgPSAoZSkgPT4ge1xuICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncm90YXRlZC13aGFsZScpO1xufTtcblxuY29uc3QgZ2V0RGlyZWN0aW9uID0gKGNvb3JkcykgPT4ge1xuICBsZXQgeHMgPSBbXTtcbiAgbGV0IHlzID0gW107XG4gIGZvciAobGV0IHBhaXIgb2YgY29vcmRzKSB7XG4gICAgeHMucHVzaChwYWlyWzBdKTtcbiAgICB5cy5wdXNoKHBhaXJbMV0pO1xuICB9XG4gIGxldCB4U2V0ID0gbmV3IFNldCh4cyk7XG4gIGxldCB5U2V0ID0gbmV3IFNldCh5cyk7XG5cbiAgcmV0dXJuICh4U2V0LnNpemUgPiB5U2V0LnNpemUpID8gJ2Rvd24nIDogJ3JpZ2h0Jztcbn07XG5cbmV4cG9ydHMucGxhY2VQbGF5ZXJXaGFsZXMgPSAoYm9hcmQsIHdoYWxlcykgPT4ge1xuICBmb3IgKGxldCB3aGFsZSBvZiB3aGFsZXMpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKHdoYWxlLmNvb3Jkcyk7XG4gICAgbGV0IG5hbWUgPSB3aGFsZS5uYW1lO1xuICAgIGxldCB4ID0gd2hhbGUuY29vcmRzWzBdWzBdO1xuICAgIGxldCB5ID0gd2hhbGUuY29vcmRzWzBdWzFdO1xuICAgIGJvYXJkLnBsYWNlU2hpcCh4LCB5LCBuYW1lLCBkaXJlY3Rpb24pO1xuICB9XG59O1xuXG5leHBvcnRzLmdldEJ1dHRvbiA9ICh4LCB5LCBwbGF5ZXIpID0+IHtcbiAgbGV0IGNvb3JkID0gU3RyaW5nKFt4LHldKTtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltkYXRhLWdyaWQtbnVtYmVyPSdbJHtjb29yZH1dJ10uJHtwbGF5ZXJ9LXNxdWFyZWApO1xuICByZXR1cm4gYnV0dG9uO1xufTtcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vZ2FtZScpO1xuY29uc3QgRE9NID0gcmVxdWlyZSgnLi9kb20nKTtcbmNvbnN0IERyYWdFdmVudHMgPSByZXF1aXJlKCcuL2RyYWcnKTtcbmNvbnN0IGNsaWNrID0gcmVxdWlyZSgnLi9jbGljaycpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbnRhaW5lcic7XG5ib2R5LmFwcGVuZChjb250YWluZXIpO1xuXG5jb25zdCBkb20gPSBuZXcgRE9NKGNvbnRhaW5lcik7XG5kb20uaW5pdCgpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGRvbSk7XG5nYW1lLmluaXQoKTtcbkRyYWdFdmVudHMoKTtcbmNsaWNrLnN0YXJ0R2FtZShnYW1lKTtcbmNsaWNrLndoYWxlQ2xpY2soKTtcblxuXG5cblxuXG5cblxuIiwiY2xhc3MgUGxheWVyIHtcblxuICBhdHRlbXB0cyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgdGFrZVR1cm4oYm9hcmQsIHgsIHkpIHtcbiAgICBsZXQgb3V0Y29tZTtcbiAgICBsZXQgc3VuaztcbiAgICBpZiAoYm9hcmQubmFtZSA9PT0gJ0NvbXB1dGVyJykge1xuICAgICAgWyBvdXRjb21lLCBzdW5rIF0gPSBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5hdHRlbXB0cy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gWyBvdXRjb21lLCBzdW5rIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHggPSB0aGlzLmdlblJhbmRvbU51bSgxMCk7XG4gICAgICB5ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgW3gsIHldID0gdGhpcy5yYW5kb21UdXJuKHRoaXMuYXR0ZW1wdHMsIHgsIHkpO1xuICAgICAgWyBvdXRjb21lLCBzdW5rIF0gPSBib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgdGhpcy5hdHRlbXB0cy5wdXNoKFt4LCB5XSk7XG4gICAgICByZXR1cm4gWyBvdXRjb21lLCBzdW5rLCB4LCB5IF07XG4gICAgfVxuICB9XG5cbiAgZ2VuUmFuZG9tTnVtKG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG4gIH1cblxuICByYW5kb21QbGFjZShib2FyZCkge1xuICAgIGZvciAobGV0IHNoaXAgaW4gYm9hcmQuc2hpcHMpIHtcbiAgICAgIGxldCBzdWNjZXNzID0gMDtcbiAgICAgIGxldCBuYW1lID0gc2hpcDtcbiAgICAgIHdoaWxlIChzdWNjZXNzID09PSAwKSB7XG4gICAgICAgIGxldCB4ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgICBsZXQgeSA9IHRoaXMuZ2VuUmFuZG9tTnVtKDEwKTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IFsncmlnaHQnLCAnZG93biddW3RoaXMuZ2VuUmFuZG9tTnVtKDIpXTtcbiAgICAgICAgaWYgKGJvYXJkLnBsYWNlU2hpcCh4LCB5LCBuYW1lLCBkaXJlY3Rpb24pKSBzdWNjZXNzID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByYW5kb21UdXJuKGF0dGVtcHRlZCwgeCwgeSkge1xuICAgIGZvciAobGV0IGF0dGVtcHQgb2YgYXR0ZW1wdGVkKSB7XG4gICAgICBpZiAoU3RyaW5nKGF0dGVtcHQpID09PSBTdHJpbmcoW3gsIHldKSkge1xuICAgICAgICB4ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgICB5ID0gdGhpcy5nZW5SYW5kb21OdW0oMTApO1xuICAgICAgICBbeCwgeV0gPSB0aGlzLnJhbmRvbVR1cm4oYXR0ZW1wdGVkLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuXG4gIHRha2VuX2hpdHMgPSAwO1xuICBzdW5rID0gMDtcblxuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMudGFrZW5faGl0cysrO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICB0aGlzLnRha2VuX2hpdHMgPT09IHRoaXMubGVuZ3RoID8gdGhpcy5zdW5rID0gMSA6IDA7XG4gICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJmdW5jdGlvbiBSZW1vdmVEcmFnZ2FibGUoKSB7XG4gIGNvbnN0IGJsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmx1ZS13aGFsZScpO1xuICBjb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyaWdodC13aGFsZScpO1xuICBjb25zdCBzcGVybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGVybS13aGFsZScpO1xuICBjb25zdCBodW1wYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1wYmFjay13aGFsZScpO1xuICBjb25zdCBvcmNhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29yY2Etd2hhbGUnKTtcbiAgY29uc3QgcG9kID0gW2JsdWUsIHJpZ2h0LCBzcGVybSwgaHVtcGJhY2ssIG9yY2FdO1xuXG4gIGZvciAobGV0IHdoYWxlIG9mIHBvZCkge1xuICAgIHdoYWxlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgZmFsc2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVtb3ZlRHJhZ2dhYmxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9