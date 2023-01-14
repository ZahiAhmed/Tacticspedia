/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/unit */ \"./src/scripts/unit.js\");\n/* harmony import */ var _scripts_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/icon */ \"./src/scripts/icon.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const root = document.querySelector('#root');\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n  fetch(\"https://raw.communitydragon.org/13.1/cdragon/tft/en_us.json\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    const units = data.sets[8].champions.slice(0, -4);\n    console.log(data);\n    for (let i = 0; i < units.length; i++) {\n      const champ = new _scripts_unit__WEBPACK_IMPORTED_MODULE_1__[\"default\"](units[i]);\n      console.log(champ);\n      if (champ.name !== \"Volcanic Sol\" && champ.name !== \"Giant Crabgot\" && champ.name !== \"Hackerim\" && champ.name !== \"Mutant Zac\") {\n        const unitIcon = new _scripts_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](champ, 50, 50);\n        root.append(unitIcon.ele);\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNOO0FBQ0Q7QUFDakNHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM1QyxJQUFJTix3REFBTyxDQUFDSyxJQUFJLENBQUM7RUFDakJFLEtBQUssQ0FDRCw2REFBNkQsQ0FDaEUsQ0FDQUMsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtJQUN0QixPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUMxQixDQUFDLENBQUMsQ0FDREYsSUFBSSxDQUFDLFVBQVVHLElBQUksRUFBRTtJQUNsQixNQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUM7SUFDakIsS0FBSSxJQUFJTyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUNOLEtBQUssQ0FBQ08sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNoQyxNQUFNRSxLQUFLLEdBQUcsSUFBSW5CLHFEQUFJLENBQUNXLEtBQUssQ0FBQ00sQ0FBQyxDQUFDLENBQUM7TUFDaENGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxLQUFLLENBQUM7TUFDbEIsSUFBR0EsS0FBSyxDQUFDQyxJQUFJLEtBQUssY0FBYyxJQUNoQ0QsS0FBSyxDQUFDQyxJQUFJLEtBQUssZUFBZSxJQUM5QkQsS0FBSyxDQUFDQyxJQUFJLEtBQUssVUFBVSxJQUN6QkQsS0FBSyxDQUFDQyxJQUFJLEtBQUssWUFBWSxFQUFDO1FBQ3hCLE1BQU1DLFFBQVEsR0FBRyxJQUFJcEIscURBQUksQ0FBQ2tCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hDZixJQUFJLENBQUNrQixNQUFNLENBQUNELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDO01BQzdCO0lBQ0o7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRfYWNhZGVteV9hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuL3NjcmlwdHMvdW5pdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL3NjcmlwdHMvaWNvbidcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBuZXcgRXhhbXBsZShyb290KTtcbiAgICBmZXRjaChcbiAgICAgICAgXCJodHRwczovL3Jhdy5jb21tdW5pdHlkcmFnb24ub3JnLzEzLjEvY2RyYWdvbi90ZnQvZW5fdXMuanNvblwiICAgXG4gICAgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdW5pdHMgPSBkYXRhLnNldHNbOF0uY2hhbXBpb25zLnNsaWNlKDAsLTQpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx1bml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hhbXAgPSBuZXcgVW5pdCh1bml0c1tpXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFtcCk7XG4gICAgICAgICAgICBpZihjaGFtcC5uYW1lICE9PSBcIlZvbGNhbmljIFNvbFwiICYmIFxuICAgICAgICAgICAgY2hhbXAubmFtZSAhPT0gXCJHaWFudCBDcmFiZ290XCIgJiYgXG4gICAgICAgICAgICBjaGFtcC5uYW1lICE9PSBcIkhhY2tlcmltXCIgJiZcbiAgICAgICAgICAgIGNoYW1wLm5hbWUgIT09IFwiTXV0YW50IFphY1wiKXtcbiAgICAgICAgICAgICAgICBjb25zdCB1bml0SWNvbiA9IG5ldyBJY29uKGNoYW1wLCA1MCwgNTApO1xuICAgICAgICAgICAgICAgIHJvb3QuYXBwZW5kKHVuaXRJY29uLmVsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJVbml0IiwiSWNvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInVuaXRzIiwic2V0cyIsImNoYW1waW9ucyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsImkiLCJsZW5ndGgiLCJjaGFtcCIsIm5hbWUiLCJ1bml0SWNvbiIsImFwcGVuZCIsImVsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1> TFT-Aa </h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener('click', this.handleClick);\n  }\n  handleClick(e) {\n    e.preventDefault();\n    this.ele.children[0].innerText = '...in development';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0VBQ1RDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQjtJQUN4QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBRUFBLFdBQVcsQ0FBQ0csQ0FBQyxFQUFFO0lBQ1hBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxtQkFBbUI7RUFDeEQ7QUFDSjtBQUVBLCtEQUFlVixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGZ0X2FjYWRlbXlfYXBwLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGV7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT4gVEZULUFhIDwvaDE+XCJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJy4uLmluIGRldmVsb3BtZW50J1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/icon.js":
/*!*****************************!*\
  !*** ./src/scripts/icon.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Icon {\n  constructor(champ, width, height) {\n    this.champ = champ;\n    this.ele = document.createElement(\"img\");\n    this.ele.setAttribute(\"src\", `https://ddragon.leagueoflegends.com/cdn/13.1.1/img/tft-hero-augment/${champ.icon}png`);\n    this.ele.setAttribute('width', `${width}`);\n    this.ele.setAttribute('height', `${height}`);\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener('click', this.handleClick);\n  }\n  handleClick(e) {\n    e.preventDefault();\n    this.champ.printData();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Icon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pY29uLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBVyxDQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFO0lBQzlCLElBQUksQ0FBQ0YsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0csR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeEMsSUFBSSxDQUFDRixHQUFHLENBQUNHLFlBQVksQ0FBQyxLQUFLLEVBQUcsdUVBQXNFTixLQUFLLENBQUNPLElBQUssS0FBSSxDQUFDO0lBQ3BILElBQUksQ0FBQ0osR0FBRyxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFHLEdBQUVMLEtBQU0sRUFBQyxDQUFDO0lBQzFDLElBQUksQ0FBQ0UsR0FBRyxDQUFDRyxZQUFZLENBQUMsUUFBUSxFQUFHLEdBQUVKLE1BQU8sRUFBQyxDQUFDO0lBQzVDLElBQUksQ0FBQ00sV0FBVyxHQUFHLElBQUksQ0FBQ0EsV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlDLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRixXQUFXLENBQUM7RUFDeEQ7RUFFQUEsV0FBVyxDQUFDRyxDQUFDLEVBQUU7SUFDWEEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7SUFDbEIsSUFBSSxDQUFDWixLQUFLLENBQUNhLFNBQVMsRUFBRTtFQUMxQjtBQUNKO0FBRUEsK0RBQWVmLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRfYWNhZGVteV9hcHAvLi9zcmMvc2NyaXB0cy9pY29uLmpzPzRkNWIiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSWNvbiB7XG4gICAgY29uc3RydWN0b3IoY2hhbXAsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jaGFtcCA9IGNoYW1wO1xuICAgICAgICB0aGlzLmVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHRoaXMuZWxlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgaHR0cHM6Ly9kZHJhZ29uLmxlYWd1ZW9mbGVnZW5kcy5jb20vY2RuLzEzLjEuMS9pbWcvdGZ0LWhlcm8tYXVnbWVudC8ke2NoYW1wLmljb259cG5nYCk7XG4gICAgICAgIHRoaXMuZWxlLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCBgJHt3aWR0aH1gKVxuICAgICAgICB0aGlzLmVsZS5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGAke2hlaWdodH1gKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jaGFtcC5wcmludERhdGEoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb247Il0sIm5hbWVzIjpbIkljb24iLCJjb25zdHJ1Y3RvciIsImNoYW1wIiwid2lkdGgiLCJoZWlnaHQiLCJlbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpY29uIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByaW50RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/icon.js\n");

/***/ }),

/***/ "./src/scripts/unit.js":
/*!*****************************!*\
  !*** ./src/scripts/unit.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Unit {\n  constructor(data) {\n    this.ability = data.ability.desc; //abilities have name & icon too\n    this.cost = data.cost;\n    this.icon = data.icon.slice(31, -3);\n    this.name = data.name;\n    this.hp = data.stats.hp;\n    this.armor = Math.round(100 * data.stats.armor) / 100;\n    this.magicresist = Math.round(100 * data.stats.magicResist) / 100;\n    this.attackspeed = Math.round(100 * data.stats.attackSpeed) / 100;\n    this.critchance = Math.round(100 * data.stats.critChance) / 100;\n    this.attackdamage = Math.round(100 * data.stats.damage) / 100;\n    this.startingmana = Math.round(100 * data.stats.initialMana) / 100;\n    this.totalmana = Math.round(100 * data.stats.mana) / 100;\n    this.range = Math.round(100 * data.stats.range) / 100;\n    this.traits = data.traits;\n  }\n  printData() {\n    document.querySelector(`#name`).innerText = `${this.name}`;\n    document.querySelector(`#ability`).innerText = `${this.ability}`;\n    document.querySelector(`#traits`).innerText = `${this.traits}`;\n    document.querySelector('#hp').innerText = `HP: ${this.hp}`;\n    document.querySelector('#armor').innerText = `Armor: ${this.armor}`;\n    document.querySelector(`#magic_resist`).innerText = `Magic Resist: ${this.magicresist}`;\n    document.querySelector(`#mana`).innerText = `Mana: ${this.startingmana}/${this.totalmana}`;\n    document.querySelector(`#ad`).innerText = `AD: ${this.attackdamage}`;\n    document.querySelector(`#as`).innerText = `AS: ${this.attackspeed}`;\n    document.querySelector(`#range`).innerText = `Attack Range: ${this.range}`;\n    document.querySelector(`#cost`).innerText = `Cost: ${this.cost}`;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Unit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQyxDQUFDQyxTQUFTLEdBQUksU0FBUSxJQUFJLENBQUNULFlBQWEsSUFBRyxJQUFJLENBQUNFLFNBQVUsRUFBQztJQUMxRkssUUFBUSxDQUFDQyxhQUFhLENBQUUsS0FBSSxDQUFDLENBQUNDLFNBQVMsR0FBSSxPQUFNLElBQUksQ0FBQ1gsWUFBYSxFQUFDO0lBQ3BFUyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxLQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFJLE9BQU0sSUFBSSxDQUFDZixXQUFZLEVBQUM7SUFDbkVhLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLFFBQU8sQ0FBQyxDQUFDQyxTQUFTLEdBQUksaUJBQWdCLElBQUksQ0FBQ0wsS0FBTSxFQUFDO0lBQzFFRyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxPQUFNLENBQUMsQ0FBQ0MsU0FBUyxHQUFJLFNBQVEsSUFBSSxDQUFDMUIsSUFBSyxFQUFDO0VBQ3BFO0FBQ0o7QUFDQSwrREFBZUwsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RmdF9hY2FkZW15X2FwcC8uL3NyYy9zY3JpcHRzL3VuaXQuanM/OTQ0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBVbml0e1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xuICAgICAgICB0aGlzLmFiaWxpdHkgPSBkYXRhLmFiaWxpdHkuZGVzYzsgLy9hYmlsaXRpZXMgaGF2ZSBuYW1lICYgaWNvbiB0b29cbiAgICAgICAgdGhpcy5jb3N0ID0gZGF0YS5jb3N0O1xuICAgICAgICB0aGlzLmljb24gPSBkYXRhLmljb24uc2xpY2UoMzEsLTMpO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMuaHAgPSBkYXRhLnN0YXRzLmhwO1xuICAgICAgICB0aGlzLmFybW9yID0gTWF0aC5yb3VuZCgxMDAqZGF0YS5zdGF0cy5hcm1vcikvMTAwO1xuICAgICAgICB0aGlzLm1hZ2ljcmVzaXN0ID0gTWF0aC5yb3VuZCgxMDAqZGF0YS5zdGF0cy5tYWdpY1Jlc2lzdCkvMTAwO1xuICAgICAgICB0aGlzLmF0dGFja3NwZWVkID0gTWF0aC5yb3VuZCgxMDAqZGF0YS5zdGF0cy5hdHRhY2tTcGVlZCkvMTAwO1xuICAgICAgICB0aGlzLmNyaXRjaGFuY2UgPSBNYXRoLnJvdW5kKDEwMCpkYXRhLnN0YXRzLmNyaXRDaGFuY2UpLzEwMDtcbiAgICAgICAgdGhpcy5hdHRhY2tkYW1hZ2UgPSBNYXRoLnJvdW5kKDEwMCpkYXRhLnN0YXRzLmRhbWFnZSkvMTAwO1xuICAgICAgICB0aGlzLnN0YXJ0aW5nbWFuYSA9IE1hdGgucm91bmQoMTAwKmRhdGEuc3RhdHMuaW5pdGlhbE1hbmEpLzEwMDtcbiAgICAgICAgdGhpcy50b3RhbG1hbmEgPSBNYXRoLnJvdW5kKDEwMCpkYXRhLnN0YXRzLm1hbmEpLzEwMDtcbiAgICAgICAgdGhpcy5yYW5nZSA9IE1hdGgucm91bmQoMTAwKmRhdGEuc3RhdHMucmFuZ2UpLzEwMDtcbiAgICAgICAgdGhpcy50cmFpdHMgPSBkYXRhLnRyYWl0cztcbiAgICB9XG4gICAgcHJpbnREYXRhKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNuYW1lYCkuaW5uZXJUZXh0ID0gYCR7dGhpcy5uYW1lfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhYmlsaXR5YCkuaW5uZXJUZXh0ID0gYCR7dGhpcy5hYmlsaXR5fWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0cmFpdHNgKS5pbm5lclRleHQgPSBgJHt0aGlzLnRyYWl0c31gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHAnKS5pbm5lclRleHQgPSBgSFA6ICR7dGhpcy5ocH1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJtb3InKS5pbm5lclRleHQgPSBgQXJtb3I6ICR7dGhpcy5hcm1vcn1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbWFnaWNfcmVzaXN0YCkuaW5uZXJUZXh0ID0gYE1hZ2ljIFJlc2lzdDogJHt0aGlzLm1hZ2ljcmVzaXN0fWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtYW5hYCkuaW5uZXJUZXh0ID0gYE1hbmE6ICR7dGhpcy5zdGFydGluZ21hbmF9LyR7dGhpcy50b3RhbG1hbmF9YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkYCkuaW5uZXJUZXh0ID0gYEFEOiAke3RoaXMuYXR0YWNrZGFtYWdlfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhc2ApLmlubmVyVGV4dCA9IGBBUzogJHt0aGlzLmF0dGFja3NwZWVkfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNyYW5nZWApLmlubmVyVGV4dCA9IGBBdHRhY2sgUmFuZ2U6ICR7dGhpcy5yYW5nZX1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY29zdGApLmlubmVyVGV4dCA9IGBDb3N0OiAke3RoaXMuY29zdH1gO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFVuaXQ7Il0sIm5hbWVzIjpbIlVuaXQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJhYmlsaXR5IiwiZGVzYyIsImNvc3QiLCJpY29uIiwic2xpY2UiLCJuYW1lIiwiaHAiLCJzdGF0cyIsImFybW9yIiwiTWF0aCIsInJvdW5kIiwibWFnaWNyZXNpc3QiLCJtYWdpY1Jlc2lzdCIsImF0dGFja3NwZWVkIiwiYXR0YWNrU3BlZWQiLCJjcml0Y2hhbmNlIiwiY3JpdENoYW5jZSIsImF0dGFja2RhbWFnZSIsImRhbWFnZSIsInN0YXJ0aW5nbWFuYSIsImluaXRpYWxNYW5hIiwidG90YWxtYW5hIiwibWFuYSIsInJhbmdlIiwidHJhaXRzIiwicHJpbnREYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/unit.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRfYWNhZGVteV9hcHAvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;