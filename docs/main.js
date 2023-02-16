/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/loggingConfig.js":
/*!**************************************!*\
  !*** ./src/scripts/loggingConfig.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "prettyPrint": () => (/* binding */ prettyPrint)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (['log', 'warn', 'error'].forEach((methodName) => {
  const originalMethod = console[methodName];
  console[methodName] = (...args) => {
    let initiator = 'unknown place';
    try {
      throw new Error();
    } catch (e) {
      if (typeof e.stack === 'string') {
        let isFirst = true;
        for (const line of e.stack.split('\n')) {
          const matches = line.match(/^\s+at\s+(.*)/);
          if (matches) {
            if (!isFirst) { // first line - current function
                            // second line - caller (what we are looking for)
              initiator = matches[1];
              break;
            }
            isFirst = false;
          }
        }
      }
    }
    originalMethod.apply(console, [...args, '\n', `  at ${initiator}`]);
  };
}));

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}



/***/ }),

/***/ "./src/scripts/mergeSort.js":
/*!**********************************!*\
  !*** ./src/scripts/mergeSort.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loggingConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggingConfig */ "./src/scripts/loggingConfig.js");


function mergeSort(array) {
  if (array.length === 1) return array;
  const slicer = Math.floor(array.length / 2);
  const array1 = mergeSort(array.slice(0, slicer));
  const array2 = mergeSort(array.slice(slicer));
  const sortedArray = array1.concat(array2).sort((a, b) => a - b);

  return sortedArray;
}

function mergeSort2(array) {
  if (array.length === 1) return array;
  const sortedArray = [];
  const slicer = Math.floor(array.length / 2);
  const array1 = mergeSort2(array.slice(0, slicer));
  const array2 = mergeSort2(array.slice(slicer));
  let j = 0;
  let k = 0;

  while (j < array1.length && k < array2.length) {
    if (array1[j] < array2[k]) {
      sortedArray.push(array1[j]);
      j += 1;
    } else if (array1[j] > array2[k]) {
      sortedArray.push(array2[k]);
      k += 1;
    }
  }
  if (j < array1.length) {
    for (j; j < array1.length; j += 1) {
      sortedArray.push(array1[j]);
    }
  }
  if (k < array2.length) {
    for (k; k < array2.length; k += 1) {
      sortedArray.push(array2[k]);
    }
  }

  return sortedArray;
}

const numArray = [5, 75, 2, 36 , 1 , 99];


console.log(mergeSort2([5, 75, 2, 36 , 1 , 99])) 

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort2);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_mergeSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/mergeSort */ "./src/scripts/mergeSort.js");
/* harmony import */ var _scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/loggingConfig */ "./src/scripts/loggingConfig.js");



console.log((0,_scripts_mergeSort__WEBPACK_IMPORTED_MODULE_0__["default"])([5, 75, 2, 36 , 1 , 99]))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsVUFBVTtBQUNwRTtBQUNBLENBQUMsQ0FBQyxFQUFDOztBQUVIO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTyxFQUFFLHlCQUF5QjtBQUNqRTtBQUNBLGlCQUFpQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUMvRDtBQUNBLDhCQUE4QixPQUFPLEVBQUUseUJBQXlCO0FBQ2hFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7OztVQ2pEekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDRDs7QUFFNUMsWUFBWSw4REFBVSwwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9sb2dnaW5nQ29uZmlnLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgWydsb2cnLCAnd2FybicsICdlcnJvciddLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBjb25zb2xlW21ldGhvZE5hbWVdO1xuICBjb25zb2xlW21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgaW5pdGlhdG9yID0gJ3Vua25vd24gcGxhY2UnO1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAodHlwZW9mIGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGUuc3RhY2suc3BsaXQoJ1xcbicpKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMrYXRcXHMrKC4qKS8pO1xuICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoIWlzRmlyc3QpIHsgLy8gZmlyc3QgbGluZSAtIGN1cnJlbnQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmQgbGluZSAtIGNhbGxlciAod2hhdCB3ZSBhcmUgbG9va2luZyBmb3IpXG4gICAgICAgICAgICAgIGluaXRpYXRvciA9IG1hdGNoZXNbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBvcmlnaW5hbE1ldGhvZC5hcHBseShjb25zb2xlLCBbLi4uYXJncywgJ1xcbicsIGAgIGF0ICR7aW5pdGlhdG9yfWBdKTtcbiAgfTtcbn0pO1xuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCB7cHJldHR5UHJpbnR9IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9sb2dnaW5nQ29uZmlnXCJcblxuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQoYXJyYXkuc2xpY2Uoc2xpY2VyKSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU29ydDIoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuICBjb25zdCBzbGljZXIgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICBjb25zdCBhcnJheTEgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBsZXQgaiA9IDA7XG4gIGxldCBrID0gMDtcblxuICB3aGlsZSAoaiA8IGFycmF5MS5sZW5ndGggJiYgayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBpZiAoYXJyYXkxW2pdIDwgYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChhcnJheTFbal0gPiBhcnJheTJba10pIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICAgIGsgKz0gMTtcbiAgICB9XG4gIH1cbiAgaWYgKGogPCBhcnJheTEubGVuZ3RoKSB7XG4gICAgZm9yIChqOyBqIDwgYXJyYXkxLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgfVxuICB9XG4gIGlmIChrIDwgYXJyYXkyLmxlbmd0aCkge1xuICAgIGZvciAoazsgayA8IGFycmF5Mi5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTJba10pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb3J0ZWRBcnJheTtcbn1cblxuY29uc3QgbnVtQXJyYXkgPSBbNSwgNzUsIDIsIDM2ICwgMSAsIDk5XTtcblxuXG5jb25zb2xlLmxvZyhtZXJnZVNvcnQyKFs1LCA3NSwgMiwgMzYgLCAxICwgOTldKSkgXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU29ydDJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1lcmdlU29ydDIgZnJvbSBcIi4vc2NyaXB0cy9tZXJnZVNvcnRcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4vc2NyaXB0cy9sb2dnaW5nQ29uZmlnXCJcblxuY29uc29sZS5sb2cobWVyZ2VTb3J0MihbNSwgNzUsIDIsIDM2ICwgMSAsIDk5XSkpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9