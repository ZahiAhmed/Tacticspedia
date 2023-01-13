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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const root = document.querySelector('#root');\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](root);\n  fetch(\"https://raw.communitydragon.org/13.1/cdragon/tft/en_us.json\").then(function (response) {\n    return response.json();\n  }).then(function (data) {\n    let units = data.sets[8].champions.slice(0, -4);\n    console.log(units);\n    units = units.sort((a, b) => {\n      if (a.name < b.name) return -1;\n      return 1;\n    });\n    // units = units.sort();\n    for (let i = 0; i < units.length; i++) {\n      const li = document.createElement('li');\n      // const icon = document.createElement(\"img\");\n      // icon.setAttribute  (\"src\", units[i].)\n      li.innerHTML = `<a> ${units[i].name} </a>`;\n      root.append(li);\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBd0M7QUFDeENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRCxNQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLE9BQU8sQ0FBQztFQUM1QyxJQUFJSix3REFBTyxDQUFDRyxJQUFJLENBQUM7RUFDakJFLEtBQUssQ0FDRCw2REFBNkQsQ0FDaEUsQ0FDQUMsSUFBSSxDQUFDLFVBQVVDLFFBQVEsRUFBRTtJQUN0QixPQUFPQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUMxQixDQUFDLENBQUMsQ0FDREYsSUFBSSxDQUFDLFVBQVVHLElBQUksRUFBRTtJQUNsQixJQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxLQUFLLENBQUM7SUFDbEJBLEtBQUssR0FBR0EsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQ0MsQ0FBQyxFQUFDQyxDQUFDLEtBQUs7TUFDeEIsSUFBR0QsQ0FBQyxDQUFDRSxJQUFJLEdBQUNELENBQUMsQ0FBQ0MsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO01BQzNCLE9BQU8sQ0FBQztJQUNaLENBQUMsQ0FBQztJQUNGO0lBQ0EsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUNWLEtBQUssQ0FBQ1csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNoQyxNQUFNRSxFQUFFLEdBQUdyQixRQUFRLENBQUNzQixhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3ZDO01BQ0E7TUFDQUQsRUFBRSxDQUFDRSxTQUFTLEdBQUksT0FBTWQsS0FBSyxDQUFDVSxDQUFDLENBQUMsQ0FBQ0QsSUFBSyxPQUFNO01BQzFDaEIsSUFBSSxDQUFDc0IsTUFBTSxDQUFDSCxFQUFFLENBQUM7SUFDbkI7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZnRfYWNhZGVteV9hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jyk7XG4gICAgbmV3IEV4YW1wbGUocm9vdCk7XG4gICAgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9yYXcuY29tbXVuaXR5ZHJhZ29uLm9yZy8xMy4xL2NkcmFnb24vdGZ0L2VuX3VzLmpzb25cIiAgIFxuICAgIClcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGxldCB1bml0cyA9IGRhdGEuc2V0c1s4XS5jaGFtcGlvbnMuc2xpY2UoMCwtNCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHVuaXRzKTtcbiAgICAgICAgdW5pdHMgPSB1bml0cy5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgICAgIGlmKGEubmFtZTxiLm5hbWUpIHJldHVybiAtMVxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB1bml0cyA9IHVuaXRzLnNvcnQoKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTx1bml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgLy8gY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICAvLyBpY29uLnNldEF0dHJpYnV0ZSAgKFwic3JjXCIsIHVuaXRzW2ldLilcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8YT4gJHt1bml0c1tpXS5uYW1lfSA8L2E+YFxuICAgICAgICAgICAgcm9vdC5hcHBlbmQobGkpO1xuICAgICAgICB9XG4gICAgfSk7XG59KVxuXG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvb3QiLCJxdWVyeVNlbGVjdG9yIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInVuaXRzIiwic2V0cyIsImNoYW1waW9ucyIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInNvcnQiLCJhIiwiYiIsIm5hbWUiLCJpIiwibGVuZ3RoIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1> TFT-Aa </h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener('click', this.handleClick);\n  }\n  handleClick(e) {\n    e.preventDefault();\n    this.ele.children[0].innerText = '...in develpoment';\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPO0VBQ1RDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLG1CQUFtQjtJQUN4QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBRUFBLFdBQVcsQ0FBQ0csQ0FBQyxFQUFFO0lBQ1hBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0lBQ2xCLElBQUksQ0FBQ04sR0FBRyxDQUFDTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxtQkFBbUI7RUFDeEQ7QUFDSjtBQUVBLCtEQUFlVixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGZ0X2FjYWRlbXlfYXBwLy4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEV4YW1wbGV7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMT4gVEZULUFhIDwvaDE+XCJcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gJy4uLmluIGRldmVscG9tZW50J1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

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