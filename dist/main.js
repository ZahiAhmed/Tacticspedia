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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/unit */ \"./src/scripts/unit.js\");\n/* harmony import */ var _scripts_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/icon */ \"./src/scripts/icon.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const root = document.querySelector('#root');\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n  fetch(\"https://raw.communitydragon.org/13.1/cdragon/tft/en_us.json\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    const units = data.sets[8].champions.slice(0, -4);\n    console.log(units);\n    for (let i = 0; i < units.length; i++) {\n      const champ = new _scripts_unit__WEBPACK_IMPORTED_MODULE_1__[\"default\"](units[i]);\n      console.log(champ);\n      if (champ.name !== \"Volcanic Sol\" && champ.name !== \"Giant Crabgot\" && champ.name !== \"Hackerim\" && champ.name !== \"Mutant Zac\") {\n        const unitIcon = new _scripts_icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"](champ, 50, 50);\n        root.append(unitIcon.ele);\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNOO0FBQ0Q7QUFDakNHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM1QyxJQUFJTix3REFBTyxDQUFDSyxJQUFJLENBQUM7RUFDakJFLEtBQUssQ0FDRCw2REFBNkQsQ0FDaEUsQ0FDQUMsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtJQUN0QixPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUMxQixDQUFDLENBQUMsQ0FDREYsSUFBSSxDQUFDLFVBQVVHLElBQUksRUFBRTtJQUNsQixNQUFNQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUM7SUFDbEIsS0FBSSxJQUFJTSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUNOLEtBQUssQ0FBQ08sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNoQyxNQUFNRSxLQUFLLEdBQUcsSUFBSW5CLHFEQUFJLENBQUNXLEtBQUssQ0FBQ00sQ0FBQyxDQUFDLENBQUM7TUFDaENGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxLQUFLLENBQUM7TUFDbEIsSUFBR0EsS0FBSyxDQUFDQyxJQUFJLEtBQUssY0FBYyxJQUNoQ0QsS0FBSyxDQUFDQyxJQUFJLEtBQUssZUFBZSxJQUM5QkQsS0FBSyxDQUFDQyxJQUFJLEtBQUssVUFBVSxJQUN6QkQsS0FBSyxDQUFDQyxJQUFJLEtBQUssWUFBWSxFQUFDO1FBQ3hCLE1BQU1DLFFBQVEsR0FBRyxJQUFJcEIscURBQUksQ0FBQ2tCLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3hDZixJQUFJLENBQUNrQixNQUFNLENBQUNELFFBQVEsQ0FBQ0UsR0FBRyxDQUFDO01BQzdCO0lBQ0o7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRfYWNhZGVteV9hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5pbXBvcnQgVW5pdCBmcm9tICcuL3NjcmlwdHMvdW5pdCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL3NjcmlwdHMvaWNvbidcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKTtcbiAgICBuZXcgRXhhbXBsZShyb290KTtcbiAgICBmZXRjaChcbiAgICAgICAgXCJodHRwczovL3Jhdy5jb21tdW5pdHlkcmFnb24ub3JnLzEzLjEvY2RyYWdvbi90ZnQvZW5fdXMuanNvblwiICAgXG4gICAgKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc3QgdW5pdHMgPSBkYXRhLnNldHNbOF0uY2hhbXBpb25zLnNsaWNlKDAsLTQpO1xuICAgICAgICBjb25zb2xlLmxvZyh1bml0cyk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGk8dW5pdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW1wID0gbmV3IFVuaXQodW5pdHNbaV0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2hhbXApO1xuICAgICAgICAgICAgaWYoY2hhbXAubmFtZSAhPT0gXCJWb2xjYW5pYyBTb2xcIiAmJiBcbiAgICAgICAgICAgIGNoYW1wLm5hbWUgIT09IFwiR2lhbnQgQ3JhYmdvdFwiICYmIFxuICAgICAgICAgICAgY2hhbXAubmFtZSAhPT0gXCJIYWNrZXJpbVwiICYmXG4gICAgICAgICAgICBjaGFtcC5uYW1lICE9PSBcIk11dGFudCBaYWNcIil7XG4gICAgICAgICAgICAgICAgY29uc3QgdW5pdEljb24gPSBuZXcgSWNvbihjaGFtcCwgNTAsIDUwKTtcbiAgICAgICAgICAgICAgICByb290LmFwcGVuZCh1bml0SWNvbi5lbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn0pXG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiVW5pdCIsIkljb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwicXVlcnlTZWxlY3RvciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ1bml0cyIsInNldHMiLCJjaGFtcGlvbnMiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiY2hhbXAiLCJuYW1lIiwidW5pdEljb24iLCJhcHBlbmQiLCJlbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass Unit {\n  constructor(data) {\n    this.ability = data.ability.desc;\n    this.cost = data.cost;\n    this.icon = data.icon.slice(31, -3);\n    this.name = data.name;\n    this.hp = data.stats.hp;\n    this.armor = Math.round(100 * data.stats.armor) / 100;\n    this.magicresist = Math.round(100 * data.stats.magicResist) / 100;\n    this.attackspeed = Math.round(100 * data.stats.attackSpeed) / 100;\n    this.critchance = Math.round(100 * data.stats.critChance) / 100;\n    this.attackdamage = Math.round(100 * data.stats.damage) / 100;\n    this.startingmana = Math.round(100 * data.stats.initialMana) / 100;\n    this.totalmana = Math.round(100 * data.stats.mana) / 100;\n    this.range = Math.round(100 * data.stats.range) / 100;\n    this.traits = data.traits;\n  }\n  printData() {\n    document.querySelector(`#name`).innerText = `${this.name}`;\n    document.querySelector(`#ability`).innerText = `${this.ability}`;\n    document.querySelector(`#traits`).innerText = `${this.traits}`;\n    document.querySelector('#hp').innerText = `${this.hp}`;\n    document.querySelector('#armor').innerText = `${this.armor}`;\n    document.querySelector(`#magic_resist`).innerText = `${this.magicresist}`;\n    document.querySelector(`#mana`).innerText = `${this.startingmana}/${this.totalmana}`;\n    document.querySelector(`#ad`).innerText = `${this.attackdamage}`;\n    document.querySelector(`#as`).innerText = `${this.attackspeed}`;\n    document.querySelector(`#range`).innerText = `${this.range}`;\n    document.querySelector(`#cost`).innerText = `${this.cost}`;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Unit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91bml0LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJO0VBQ05DLFdBQVcsQ0FBQ0MsSUFBSSxFQUFDO0lBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdELElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJO0lBQ2hDLElBQUksQ0FBQ0MsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQUk7SUFDckIsSUFBSSxDQUFDQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsSUFBSSxHQUFHTixJQUFJLENBQUNNLElBQUk7SUFDckIsSUFBSSxDQUFDQyxFQUFFLEdBQUdQLElBQUksQ0FBQ1EsS0FBSyxDQUFDRCxFQUFFO0lBQ3ZCLElBQUksQ0FBQ0UsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDQyxLQUFLLENBQUMsR0FBQyxHQUFHO0lBQ2pELElBQUksQ0FBQ0csV0FBVyxHQUFHRixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDSyxXQUFXLENBQUMsR0FBQyxHQUFHO0lBQzdELElBQUksQ0FBQ0MsV0FBVyxHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDTyxXQUFXLENBQUMsR0FBQyxHQUFHO0lBQzdELElBQUksQ0FBQ0MsVUFBVSxHQUFHTixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDUyxVQUFVLENBQUMsR0FBQyxHQUFHO0lBQzNELElBQUksQ0FBQ0MsWUFBWSxHQUFHUixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDVyxNQUFNLENBQUMsR0FBQyxHQUFHO0lBQ3pELElBQUksQ0FBQ0MsWUFBWSxHQUFHVixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDYSxXQUFXLENBQUMsR0FBQyxHQUFHO0lBQzlELElBQUksQ0FBQ0MsU0FBUyxHQUFHWixJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDZSxJQUFJLENBQUMsR0FBQyxHQUFHO0lBQ3BELElBQUksQ0FBQ0MsS0FBSyxHQUFHZCxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLEdBQUNYLElBQUksQ0FBQ1EsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDLEdBQUMsR0FBRztJQUNqRCxJQUFJLENBQUNDLE1BQU0sR0FBR3pCLElBQUksQ0FBQ3lCLE1BQU07RUFDN0I7RUFDQUMsU0FBUyxHQUFFO0lBQ1BDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLE9BQU0sQ0FBQyxDQUFDQyxTQUFTLEdBQUksR0FBRSxJQUFJLENBQUN2QixJQUFLLEVBQUM7SUFDMURxQixRQUFRLENBQUNDLGFBQWEsQ0FBRSxVQUFTLENBQUMsQ0FBQ0MsU0FBUyxHQUFJLEdBQUUsSUFBSSxDQUFDNUIsT0FBUSxFQUFDO0lBQ2hFMEIsUUFBUSxDQUFDQyxhQUFhLENBQUUsU0FBUSxDQUFDLENBQUNDLFNBQVMsR0FBSSxHQUFFLElBQUksQ0FBQ0osTUFBTyxFQUFDO0lBQzlERSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQ0MsU0FBUyxHQUFJLEdBQUUsSUFBSSxDQUFDdEIsRUFBRyxFQUFDO0lBQ3REb0IsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUNDLFNBQVMsR0FBSSxHQUFFLElBQUksQ0FBQ3BCLEtBQU0sRUFBQztJQUM1RGtCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLGVBQWMsQ0FBQyxDQUFDQyxTQUFTLEdBQUksR0FBRSxJQUFJLENBQUNqQixXQUFZLEVBQUM7SUFDekVlLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLE9BQU0sQ0FBQyxDQUFDQyxTQUFTLEdBQUksR0FBRSxJQUFJLENBQUNULFlBQWEsSUFBRyxJQUFJLENBQUNFLFNBQVUsRUFBQztJQUNwRkssUUFBUSxDQUFDQyxhQUFhLENBQUUsS0FBSSxDQUFDLENBQUNDLFNBQVMsR0FBSSxHQUFFLElBQUksQ0FBQ1gsWUFBYSxFQUFDO0lBQ2hFUyxRQUFRLENBQUNDLGFBQWEsQ0FBRSxLQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFJLEdBQUUsSUFBSSxDQUFDZixXQUFZLEVBQUM7SUFDL0RhLFFBQVEsQ0FBQ0MsYUFBYSxDQUFFLFFBQU8sQ0FBQyxDQUFDQyxTQUFTLEdBQUksR0FBRSxJQUFJLENBQUNMLEtBQU0sRUFBQztJQUM1REcsUUFBUSxDQUFDQyxhQUFhLENBQUUsT0FBTSxDQUFDLENBQUNDLFNBQVMsR0FBSSxHQUFFLElBQUksQ0FBQzFCLElBQUssRUFBQztFQUM5RDtBQUNKO0FBQ0EsK0RBQWVMLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRfYWNhZGVteV9hcHAvLi9zcmMvc2NyaXB0cy91bml0LmpzPzk0NDYiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVW5pdHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcbiAgICAgICAgdGhpcy5hYmlsaXR5ID0gZGF0YS5hYmlsaXR5LmRlc2M7XG4gICAgICAgIHRoaXMuY29zdCA9IGRhdGEuY29zdDtcbiAgICAgICAgdGhpcy5pY29uID0gZGF0YS5pY29uLnNsaWNlKDMxLC0zKTtcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmhwID0gZGF0YS5zdGF0cy5ocDtcbiAgICAgICAgdGhpcy5hcm1vciA9IE1hdGgucm91bmQoMTAwKmRhdGEuc3RhdHMuYXJtb3IpLzEwMDtcbiAgICAgICAgdGhpcy5tYWdpY3Jlc2lzdCA9IE1hdGgucm91bmQoMTAwKmRhdGEuc3RhdHMubWFnaWNSZXNpc3QpLzEwMDtcbiAgICAgICAgdGhpcy5hdHRhY2tzcGVlZCA9IE1hdGgucm91bmQoMTAwKmRhdGEuc3RhdHMuYXR0YWNrU3BlZWQpLzEwMDtcbiAgICAgICAgdGhpcy5jcml0Y2hhbmNlID0gTWF0aC5yb3VuZCgxMDAqZGF0YS5zdGF0cy5jcml0Q2hhbmNlKS8xMDA7XG4gICAgICAgIHRoaXMuYXR0YWNrZGFtYWdlID0gTWF0aC5yb3VuZCgxMDAqZGF0YS5zdGF0cy5kYW1hZ2UpLzEwMDtcbiAgICAgICAgdGhpcy5zdGFydGluZ21hbmEgPSBNYXRoLnJvdW5kKDEwMCpkYXRhLnN0YXRzLmluaXRpYWxNYW5hKS8xMDA7XG4gICAgICAgIHRoaXMudG90YWxtYW5hID0gTWF0aC5yb3VuZCgxMDAqZGF0YS5zdGF0cy5tYW5hKS8xMDA7XG4gICAgICAgIHRoaXMucmFuZ2UgPSBNYXRoLnJvdW5kKDEwMCpkYXRhLnN0YXRzLnJhbmdlKS8xMDA7XG4gICAgICAgIHRoaXMudHJhaXRzID0gZGF0YS50cmFpdHM7XG4gICAgfVxuICAgIHByaW50RGF0YSgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmFtZWApLmlubmVyVGV4dCA9IGAke3RoaXMubmFtZX1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWJpbGl0eWApLmlubmVyVGV4dCA9IGAke3RoaXMuYWJpbGl0eX1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdHJhaXRzYCkuaW5uZXJUZXh0ID0gYCR7dGhpcy50cmFpdHN9YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hwJykuaW5uZXJUZXh0ID0gYCR7dGhpcy5ocH1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXJtb3InKS5pbm5lclRleHQgPSBgJHt0aGlzLmFybW9yfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtYWdpY19yZXNpc3RgKS5pbm5lclRleHQgPSBgJHt0aGlzLm1hZ2ljcmVzaXN0fWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNtYW5hYCkuaW5uZXJUZXh0ID0gYCR7dGhpcy5zdGFydGluZ21hbmF9LyR7dGhpcy50b3RhbG1hbmF9YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FkYCkuaW5uZXJUZXh0ID0gYCR7dGhpcy5hdHRhY2tkYW1hZ2V9YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2FzYCkuaW5uZXJUZXh0ID0gYCR7dGhpcy5hdHRhY2tzcGVlZH1gO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcmFuZ2VgKS5pbm5lclRleHQgPSBgJHt0aGlzLnJhbmdlfWA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjb3N0YCkuaW5uZXJUZXh0ID0gYCR7dGhpcy5jb3N0fWA7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVW5pdDsiXSwibmFtZXMiOlsiVW5pdCIsImNvbnN0cnVjdG9yIiwiZGF0YSIsImFiaWxpdHkiLCJkZXNjIiwiY29zdCIsImljb24iLCJzbGljZSIsIm5hbWUiLCJocCIsInN0YXRzIiwiYXJtb3IiLCJNYXRoIiwicm91bmQiLCJtYWdpY3Jlc2lzdCIsIm1hZ2ljUmVzaXN0IiwiYXR0YWNrc3BlZWQiLCJhdHRhY2tTcGVlZCIsImNyaXRjaGFuY2UiLCJjcml0Q2hhbmNlIiwiYXR0YWNrZGFtYWdlIiwiZGFtYWdlIiwic3RhcnRpbmdtYW5hIiwiaW5pdGlhbE1hbmEiLCJ0b3RhbG1hbmEiLCJtYW5hIiwicmFuZ2UiLCJ0cmFpdHMiLCJwcmludERhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/unit.js\n");

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