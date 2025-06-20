/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    font-family: \"Fira Sans\", Arial, sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    min-height: 100dvh;\n    width: auto;\n    background-image: linear-gradient(90.2deg, rgba(1, 47, 95, 1) -0.4%, rgba(56, 141, 217, 1) 106.1%);\n}\n\n.page-wrapper {\n    flex: 1;\n    padding-top: 50px;\n}\n\nfooter {\n    width: 100%;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #ececec;\n    background-color: #385170;\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\na:hover {\n    color: green;\n}\n\nh1 {\n    margin: 40px auto 20px auto;\n    text-align: center;\n    font-family: \"Fira Sans\", sans-serif;\n    font-size: 3rem;\n    font-weight: 700;\n    letter-spacing: 1.5px;\n    background: linear-gradient(90deg, #ffffff, #d2f3ff, #ffffff);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6);\n}\n\nh2 {\n    margin: 30px;\n    text-align: center;\n    color: #ececec;\n}\n\n.gameboard-container {\n    display: flex;\n    justify-content: center;\n    gap: 6.25rem;\n}\n\ntable {\n    table-layout: fixed;\n    border-collapse: collapse;\n}\n\nth {\n    padding: 8px;\n    font: 1.2rem \"Fira Sans\", sans-serif;\n    color: #ececec;\n}\n\ntd {\n    height: 40px;\n    width: 40px;\n    border: 1px #9fd3c7 solid;\n    box-sizing: border-box;\n    font-size: 0;\n    line-height: 0;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: center;\n    margin-top: 50px;\n    gap: 4rem;\n}\n\nbutton {\n    height: 40px;\n    width: 80px;\n    background-color: #0077cc;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #005fa3;\n}\n\n.ship {\n    background-color: #142d4c;\n}\n\n.hiddenShip {\n    background-color: transparent;\n}\n\n.water {\n\n    background-color: #8de8fc;\n    border-collapse: collapse;\n    transition: background-color 400ms ease;\n}\n\n.hit {\n    background-color: red;\n    border-collapse: collapse;\n    transition: background-color 400ms ease;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/computer.js":
/*!*********************************!*\
  !*** ./src/classes/computer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Computer)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/classes/player.js\");\n\n\nclass Computer extends _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super();\n        this.name = \"computer\"\n        this.attackedCoords = [];\n        this.availableMoves = [];\n        this.initializeMoves();\n    }\n\n    initializeMoves() {\n        for (let x = 0; x < 10; x++) {\n            for (let y = 0; y < 10; y++) {\n                this.availableMoves.push(`${x},${y}`);\n            }\n        }\n    }\n\n    getRandomCoords() {\n        if (this.availableMoves.length === 0) return null;\n        const item = this.availableMoves[Math.floor(Math.random() * this.availableMoves.length)];\n        this.attackedCoords.push(item);\n        const index = this.availableMoves.indexOf(item);\n        this.availableMoves.splice(index, 1);\n        return item.split(',').map(Number);\n    }\n\n    randomAttack(player) {\n        const [x, y] = this.getRandomCoords();\n        console.log(x, y);\n        player.board.receiveAttack(x, y);\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/computer.js?");

/***/ }),

/***/ "./src/classes/gameboard.js":
/*!**********************************!*\
  !*** ./src/classes/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _utility_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/utils */ \"./src/utility/utils.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/classes/ship.js\");\n\n\n\nclass Gameboard {\n    constructor() {\n        this.board = [\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n            ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],\n        ];\n        this.coordToShip = new Map();\n        this.CELL_TYPES = {\n            SHIP: 's',\n            HIT: 'o',\n            MISS: 'x',\n            WATER: '-'\n        };\n\n        this.playerShips = [\n            'A1-A2',\n            'B6-B9',\n            'C5',\n            'G1-G4',\n            'D10-E10',\n            'J10',\n            'E8-G8',\n            'J1-J4',\n        ];\n    };\n\n    tryPlaceShip(str) {\n        //driver script to place a ship\n        if (!(0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.validateInput)(str)) return false;\n\n        const coords = this.getPlacementCoordinates(str);\n        if (!this.areCoordsFree(coords)) return false;\n\n        const surrounding = this.getAllSurroundingCoordinates(coords);\n        if (!this.areCoordsFree(surrounding)) return false;\n\n        this.placeShipOnBoard(str);\n        this.addToShipMap(coords);\n        return true;\n    }\n\n    addToShipMap(coords) {\n        const len = coords.length;\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](len);\n        for (const [x, y] of coords) {\n            this.coordToShip.set(`${x},${y}`, ship);\n        }\n    }\n\n    areCoordsFree(coords) {\n        for (const [x, y] of coords) {\n            if (this.board[x][y] === this.CELL_TYPES.SHIP) {\n                return false;\n            }\n        }\n        return true;\n    }\n\n\n    getPlacementCoordinates(str) {\n        //returns all coordinates for a ship placement in a 2-Dimensional Array e.g. [[0,1],[0,2],[0,3]]\n        // Single cell, e.g. \"C10\"\n        if (!str.includes(\"-\")) {\n            const [x, y] = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.transCoordinates)(str);\n            return [[x, y]];\n        }\n        // Range input, e.g. \"C5-C8\"\n        const [from, to] = str.split(\"-\");\n        const [x1, y1] = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.transCoordinates)(from);\n        const [x2, y2] = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.transCoordinates)(to);\n\n        if (x1 === x2) {\n            const affectedCoordinates = this.getAllAffectedCoordinates(y1, y2);\n            return affectedCoordinates.map(z => [x1, z]);\n        } else if (y1 === y2) {\n            const affectedCoordinates = this.getAllAffectedCoordinates(x1, x2);\n            return affectedCoordinates.map(z => [z, y1]);\n        } else {\n            throw new Error(\"Nur horizontale oder vertikale Platzierungen erlaubt.\");\n        }\n    }\n\n    getAllAffectedCoordinates(start, end) {\n        //returns the range of the coordinates as an array\n        const min = Math.min(start, end);\n        const max = Math.max(start, end);\n        return Array.from({ length: max - min + 1 }, (_, i) => min + i);\n    }\n\n    getAllSurroundingCoordinates(coords) {\n        const surrounding = []\n        const offsets = [\n            [-1, -1], [-1, 0], [-1, 1],\n            [0, -1], [0, 1],\n            [1, -1], [1, 0], [1, 1]\n        ];\n        for (const [x, y] of coords) {\n            for (const [dx, dy] of offsets) {\n                const nx = x + dx;\n                const ny = y + dy;\n                const key = `${nx},${ny}`;\n                if (this.isWithinBoard([nx, ny])) {\n                    surrounding.push([nx, ny]);\n                }\n            };\n        };\n        const unique = [];\n        const seen = new Set();\n\n        for (const coord of surrounding) {\n            const key = coord.toString();\n            if (!seen.has(key)) {\n                seen.add(key);\n                unique.push(coord);\n            }\n        }\n        return unique;\n    }\n\n\n    isWithinBoard([x, y]) {\n        return x >= 0 && x < 10 && y >= 0 && y < 10;\n    }\n\n\n    placeShipOnBoard(str) {\n        //check if ship has length 1\n        if (str.split(\"-\").length === 1) {\n            const [x, y] = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.transCoordinates)(str);\n            this.board[x][y] = this.CELL_TYPES.SHIP;\n            return;\n        };\n\n        const line = str.split(\"-\");\n        const [x1, y1] = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.transCoordinates)(line[0]);\n        const [x2, y2] = (0,_utility_utils__WEBPACK_IMPORTED_MODULE_0__.transCoordinates)(line[1]);\n\n        if (x1 === x2) {\n            //horizontal ship\n            for (let y = Math.min(y1, y2); y <= Math.max(y1, y2); y++) {\n                this.board[x1][y] = this.CELL_TYPES.SHIP;\n            };\n        } else if (y1 === y2) {\n            //vertical ship\n            for (let x = Math.min(x1, x2); x <= Math.max(x1, x2); x++) {\n                this.board[x][y1] = this.CELL_TYPES.SHIP;\n            };\n        } else {\n            throw new Error(\"Nur horizontale oder vertikale Platzierungen erlaubt.\");\n        };\n    };\n\n    receiveAttack(x, y) {\n        const attackedPos = this.board[x][y];\n        if (attackedPos === '-') {\n            this.board[x][y] = this.CELL_TYPES.MISS;\n            return 'miss';\n        } else if (attackedPos === this.CELL_TYPES.MISS || attackedPos === this.CELL_TYPES.HIT) {\n            return 'repeat';\n        } else if (attackedPos === this.CELL_TYPES.SHIP) {\n            this.board[x][y] = this.CELL_TYPES.HIT;\n            this.receiveShipHit(x, y);\n            return 'hit';\n        };\n    }\n\n    noAttackYet(x, y) {\n        const cell = this.board[x][y]\n        console.log(cell)\n        return (\n            cell !== this.CELL_TYPES.HIT &&\n            cell !== this.CELL_TYPES.MISS\n        );\n    }\n\n    receiveShipHit(x, y) {\n        const ship = this.coordToShip.get(`${x},${y}`);\n        ship.hit();\n    };\n\n    allShipsSunk() {\n        const uniqueShips = new Set(this.coordToShip.values());\n        for (const ship of uniqueShips) {\n            if (!ship.isSunk()) {\n                return false;\n            };\n        };\n        return true;\n    };\n\n    createEmptyBoard() {\n        return Array.from({ length: 10 }, () => Array(10).fill(this.CELL_TYPES.WATER));\n    }\n\n    resetBoard() {\n        this.board = this.createEmptyBoard();\n        this.coordToShip.clear();\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/gameboard.js?");

/***/ }),

/***/ "./src/classes/player.js":
/*!*******************************!*\
  !*** ./src/classes/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/classes/gameboard.js\");\n/* harmony import */ var _utility_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/utils.js */ \"./src/utility/utils.js\");\n\n\n\nclass Player {\n    constructor() {\n        this.name = \"player\";\n        this.board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        this.placedShips = [];\n        this.availableShips = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\n    }\n\n    //create random coordinates for ships on the board\n    createRandomShipPlacement() {\n        const placements = [];\n        for (const length of this.availableShips) {\n            let placed = false;\n\n            while (!placed) {\n                const startX = (0,_utility_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(10);\n                const startY = (0,_utility_utils_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(10);\n                const isHorizontal = Math.random() < 0.5;\n\n                const coords = this.createShipRange(startX, startY, length, isHorizontal);\n                if (!coords) continue;\n\n                const notation = (0,_utility_utils_js__WEBPACK_IMPORTED_MODULE_1__.coordsToNotation)(coords);\n                if (this.board.tryPlaceShip(notation)) {\n                    placed = true;\n                    placements.push(notation);\n                }\n            }\n        }\n        return placements;\n    }\n\n    createShipRange(startX, startY, length, isHorizontal) {\n        const coords = [];\n\n        for (let i = 0; i < length; i++) {\n            const x = isHorizontal ? startX + i : startX;\n            const y = isHorizontal ? startY : startY + i;\n\n            if (x >= 10 || y >= 10) return null;\n            coords.push([x, y]);\n        }\n        return coords;\n    }\n}\n\n//# sourceURL=webpack:///./src/classes/player.js?");

/***/ }),

/***/ "./src/classes/ship.js":
/*!*****************************!*\
  !*** ./src/classes/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n    constructor(len) {\n\n        this.len = len;\n        this.hitCount = 0;\n        this.sunk = false;\n    };\n\n    hit() {\n        this.hitCount += 1;\n        this.isSunk();\n    };\n\n    isSunk() {\n        return this.hitCount >= this.len;\n    };\n};\n\n//# sourceURL=webpack:///./src/classes/ship.js?");

/***/ }),

/***/ "./src/domAction.js":
/*!**************************!*\
  !*** ./src/domAction.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst domHandler = (player, computer) => {\n\n    const playerBoard = document.querySelector('.player-board')\n    const computerBoard = document.querySelector('.computer-board')\n\n    function annotateBoardCells(boardSelector) {\n        const board = document.querySelector(`${boardSelector} tbody`);\n        const rows = board.querySelectorAll('tr');\n\n        rows.forEach((row, y) => {\n            const cells = row.querySelectorAll('td');\n            cells.forEach((cell, x) => {\n                cell.dataset.x = x;\n                cell.dataset.y = y;\n            });\n        });\n    };\n\n    annotateBoardCells('.player-board');\n    annotateBoardCells('.computer-board');\n\n    const updateGameboard = (person, visible = true) => {\n        const board = person.board.board;\n        const boardType = person.name;\n\n        for (let y = 0; y < 10; y++) { // y = Zeile\n            for (let x = 0; x < 10; x++) { // x = Spalte\n                const cellValue = board[y][x]; // korrekt: [zeile][spalte]\n\n                const selectedCell = document.querySelector(\n                    `.${boardType}-board tbody tr:nth-child(${y + 1}) td:nth-child(${x + 2})`\n                );\n\n                if (!selectedCell) continue;\n\n                if (cellValue === 's') {\n                    if (visible) {\n                        selectedCell.classList.add('ship');\n                    } else {\n                        selectedCell.classList.add('hiddenShip');\n                    }\n                } else if (cellValue === 'o') {\n                    selectedCell.classList.add('hit');\n                } else if (cellValue === 'x') {\n                    selectedCell.classList.add('water');\n                }\n            }\n        }\n    };\n\n    const resetBoardsInDom = () => {\n        for (let y = 0; y < 10; y++) {\n            for (let x = 0; x < 10; x++) {\n                const cellComputer = document.querySelector(\n                    `.computer-board tbody tr:nth-child(${y + 1}) td:nth-child(${x + 2}`\n                );\n                const cellPlayer = document.querySelector(\n                    `.player-board tbody tr:nth-child(${y + 1}) td:nth-child(${x + 2})`\n                );\n                if (cellComputer) cellComputer.classList.remove('ship', 'hit', 'water', 'hiddenShip');\n                if (cellPlayer) cellPlayer.classList.remove('ship', 'hit', 'water', 'hiddenShip');\n            }\n        }\n    }\n\n\n    return { updateGameboard, resetBoardsInDom };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domHandler);\n\n//# sourceURL=webpack:///./src/domAction.js?");

/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\nclass GameController {\n    constructor(player, computer, domHandler) {\n        this.player = player;\n        this.computer = computer;\n        this.dom = domHandler;\n\n        this.currentPlayer = 'player';\n        this.gameStarted = false;\n        this.gameOver = false;\n        this.playerShips = [];\n        this.computerShips = this.computer.createRandomShipPlacement();\n\n        this.initEventListeners();\n    }\n\n    initEventListeners() {\n        const startBtn = document.querySelector('.start-game');\n        const resetBtn = document.querySelector('.reset-game');\n        const randomBtn = document.querySelector('.random-position')\n        const computerBoard = document.querySelector('.computer-board');\n        startBtn.addEventListener('click', () => this.placeShips());\n        resetBtn.addEventListener('click', () => this.resetGame());\n        randomBtn.addEventListener('click', () => this.randomizePlayerBoard());\n\n        computerBoard.addEventListener('click', (e) => {\n            if (this.gameOver || this.currentPlayer !== 'player') return;\n\n            const cell = e.target.closest('td');\n            if (!cell) return;\n\n            const [boardY, boardX] = this.getBoardCoordinatesFromCell(cell);\n\n            if (!this.computer.board.noAttackYet(boardY, boardX)) return;\n\n            this.handlePlayerMove(boardY, boardX);\n        });\n    }\n\n    // necessary transition of the coordinates\n    // data-x = Spalte → muss zu board[ZEILE][SPALTE] → board[y][x]\n    getBoardCoordinatesFromCell(cell) {\n        const x = parseInt(cell.dataset.x); // Spalte\n        const y = parseInt(cell.dataset.y); // Zeile\n        return [y, x]; // board[y][x]\n    }\n\n    handlePlayerMove(y, x) {\n        if (!this.gameStarted) return;\n\n        const result = this.computer.board.receiveAttack(y, x); // board[y][x]\n        console.log(`Spieler greift an bei [${y}, ${x}]: ${result}`);\n        this.dom.updateGameboard(this.computer, false);\n\n        if (this.checkGameOver(this.computer)) {\n            this.endGame('Spieler');\n            return;\n        }\n\n        this.currentPlayer = 'computer';\n\n        setTimeout(() => {\n            this.handleComputerMove();\n        }, 500);\n    }\n\n    handleComputerMove() {\n        const [x, y] = this.computer.getRandomCoords();\n        this.player.board.receiveAttack(y, x);\n        this.dom.updateGameboard(this.player, true);\n\n        if (this.checkGameOver(this.player)) {\n            this.endGame('Computer');\n            return;\n        }\n\n        this.currentPlayer = 'player';\n    }\n\n    placeShips() {\n        for (const ship of this.playerShips) {\n            this.player.board.tryPlaceShip(ship);\n        }\n        for (const ship of this.computerShips) {\n            this.computer.board.tryPlaceShip(ship);\n        }\n        this.dom.updateGameboard(this.player, true);\n        this.dom.updateGameboard(this.computer, false);\n        console.table(this.computer.board.board);\n        this.gameStarted = true;\n    }\n\n    checkGameOver(playerObj) {\n        return playerObj.board.allShipsSunk();\n    }\n\n    endGame(winner) {\n        this.gameOver = true;\n        alert(`${winner} hat gewonnen!`);\n    }\n\n    randomizePlayerBoard() {\n        if (this.gameStarted) return;\n        this.player.board.resetBoard();\n        this.dom.resetBoardsInDom();\n        this.player.placedShips = this.player.createRandomShipPlacement();\n        this.dom.updateGameboard(this.player, true);\n    }\n\n    resetGame() {\n        this.gameStarted = false;\n        this.gameOver = false;\n        this.player.board.resetBoard();\n        this.computer.board.resetBoard();\n        this.computer.attackedCoords = [];\n        this.computer.availableMoves = [];\n        this.computer.initializeMoves();\n        this.computerShips = [];\n        this.computerShips = this.computer.createRandomShipPlacement();\n        this.playerShips = this.player.createRandomShipPlacement();\n        this.currentPlayer = 'player';\n        this.dom.resetBoardsInDom();\n        this.dom.updateGameboard(this.player, true);\n        this.dom.updateGameboard(this.computer, false);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/gameController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _classes_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/player.js */ \"./src/classes/player.js\");\n/* harmony import */ var _classes_computer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/computer.js */ \"./src/classes/computer.js\");\n/* harmony import */ var _domAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domAction.js */ \"./src/domAction.js\");\n/* harmony import */ var _gameController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameController.js */ \"./src/gameController.js\");\n\n\n\n\n\n\n//Bug-shiff kann nicht diagonal angrenzen\n\nconst player = new _classes_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst computer = new _classes_computer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nconst dom = (0,_domAction_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player, computer);\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const gameState = new _gameController_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](player, computer, dom);\n    gameState.randomizePlayerBoard();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/utility/utils.js":
/*!******************************!*\
  !*** ./src/utility/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   coordsToNotation: () => (/* binding */ coordsToNotation),\n/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),\n/* harmony export */   transCoordinates: () => (/* binding */ transCoordinates),\n/* harmony export */   validateInput: () => (/* binding */ validateInput)\n/* harmony export */ });\nconst LETTERS = 'ABCDEFGHIJ';\n\nfunction transCoordinates(str) {\n    //translates the input string to match the gameboard index format;\n    const x = LETTERS.indexOf(str.charAt(0).toUpperCase());\n    const y = parseInt(str.slice(1)) - 1;\n    return [x, y];\n}\n\n\nfunction validateInput(str) {\n    //checks the input string can be placed on the gameboard\n    const single = /^[A-J](10|[1-9])$/;\n    const range = /^[A-J](10|[1-9])-[A-J](10|[1-9])$/;\n\n    if (!(single.test(str) || range.test(str))) return false;\n\n    if (range.test(str)) {\n        const [from, to] = str.split(\"-\");\n        const [x1, y1] = transCoordinates(from);\n        const [x2, y2] = transCoordinates(to);\n\n        const isStraight = x1 === x2 || y1 === y2;\n        const inBounds = [x1, x2, y1, y2].every((val) => val >= 0 && val < 10);\n        const maxLength = Math.abs(x1 - x2) <= 5 && Math.abs(y1 - y2) <= 5;\n        return isStraight && inBounds && maxLength;\n    }\n\n    // single field\n    const [x, y] = transCoordinates(str);\n    return x >= 0 && x < 10 && y >= 0 && y < 10;\n};\n\nfunction coordsToNotation(coords) {\n    //translate coords e.g. [1,1] to [B2]\n    const toAlpha = (y) => LETTERS[y];       // 0 → A\n    const toNum = (x) => (x + 1).toString(); // 0 → 1\n\n    const start = coords[0];\n    const end = coords[coords.length - 1];\n\n    return `${toAlpha(start[1])}${toNum(start[0])}-${toAlpha(end[1])}${toNum(end[0])}`;\n}\n\nfunction getRandomInt(max) {\n    return Math.floor(Math.random() * max);\n}\n\n//# sourceURL=webpack:///./src/utility/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;