/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/BST.js":
/*!****************************!*\
  !*** ./src/scripts/BST.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loggingConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loggingConfig */ "./src/scripts/loggingConfig.js");
/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ "./src/scripts/mergeSort.js");





const numArray = [5, 75, 2, 36 , 1 , 99];

const tree = function (array) {
  const sortedArray = ((0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__["default"])(array));

  const Node = (data, leftData, rightData) => {
    const TreeNode = {
      data,
      left: leftData,
      right: rightData,
    }
    return TreeNode;
  }

  const leftData = { 
    data: 'string1',
    left: null,
    right: null
  };

  const rightData = { 
    data: 2564612,
    left: null,
    right: null
  };

  const node1 = Node('test', leftData, rightData)
  console.log(node1);

  return node1
}




;(0,_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(tree(numArray));






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tree);

/***/ }),

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
/* harmony import */ var _scripts_BST__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/BST */ "./src/scripts/BST.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ1M7QUFDUjs7O0FBR3JDOztBQUVBO0FBQ0EsdUJBQXVCLHNEQUFVOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0EsNERBQVc7Ozs7Ozs7QUFPWCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NmLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0EsQ0FBQyxDQUFDLEVBQUM7O0FBRUg7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUseUJBQXlCO0FBQ2pFO0FBQ0EsaUJBQWlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsOEJBQThCLE9BQU8sRUFBRSx5QkFBeUI7QUFDaEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ29DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBLGlFQUFlLFVBQVU7Ozs7Ozs7VUMvQ3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ042QztBQUNEO0FBQ1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvQlNULmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9sb2dnaW5nQ29uZmlnLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9sb2dnaW5nQ29uZmlnXCJcbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vbG9nZ2luZ0NvbmZpZ1wiXG5pbXBvcnQgbWVyZ2VTb3J0MiBmcm9tIFwiLi9tZXJnZVNvcnRcIjtcblxuXG5jb25zdCBudW1BcnJheSA9IFs1LCA3NSwgMiwgMzYgLCAxICwgOTldO1xuXG5jb25zdCB0cmVlID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gKG1lcmdlU29ydDIoYXJyYXkpKTtcblxuICBjb25zdCBOb2RlID0gKGRhdGEsIGxlZnREYXRhLCByaWdodERhdGEpID0+IHtcbiAgICBjb25zdCBUcmVlTm9kZSA9IHtcbiAgICAgIGRhdGEsXG4gICAgICBsZWZ0OiBsZWZ0RGF0YSxcbiAgICAgIHJpZ2h0OiByaWdodERhdGEsXG4gICAgfVxuICAgIHJldHVybiBUcmVlTm9kZTtcbiAgfVxuXG4gIGNvbnN0IGxlZnREYXRhID0geyBcbiAgICBkYXRhOiAnc3RyaW5nMScsXG4gICAgbGVmdDogbnVsbCxcbiAgICByaWdodDogbnVsbFxuICB9O1xuXG4gIGNvbnN0IHJpZ2h0RGF0YSA9IHsgXG4gICAgZGF0YTogMjU2NDYxMixcbiAgICBsZWZ0OiBudWxsLFxuICAgIHJpZ2h0OiBudWxsXG4gIH07XG5cbiAgY29uc3Qgbm9kZTEgPSBOb2RlKCd0ZXN0JywgbGVmdERhdGEsIHJpZ2h0RGF0YSlcbiAgY29uc29sZS5sb2cobm9kZTEpO1xuXG4gIHJldHVybiBub2RlMVxufVxuXG5cblxuXG5wcmV0dHlQcmludCh0cmVlKG51bUFycmF5KSk7XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCB0cmVlIiwiZXhwb3J0IGRlZmF1bHQgWydsb2cnLCAnd2FybicsICdlcnJvciddLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBjb25zb2xlW21ldGhvZE5hbWVdO1xuICBjb25zb2xlW21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgaW5pdGlhdG9yID0gJ3Vua25vd24gcGxhY2UnO1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAodHlwZW9mIGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGUuc3RhY2suc3BsaXQoJ1xcbicpKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMrYXRcXHMrKC4qKS8pO1xuICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoIWlzRmlyc3QpIHsgLy8gZmlyc3QgbGluZSAtIGN1cnJlbnQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmQgbGluZSAtIGNhbGxlciAod2hhdCB3ZSBhcmUgbG9va2luZyBmb3IpXG4gICAgICAgICAgICAgIGluaXRpYXRvciA9IG1hdGNoZXNbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBvcmlnaW5hbE1ldGhvZC5hcHBseShjb25zb2xlLCBbLi4uYXJncywgJ1xcbicsIGAgIGF0ICR7aW5pdGlhdG9yfWBdKTtcbiAgfTtcbn0pO1xuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCB7cHJldHR5UHJpbnR9IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9sb2dnaW5nQ29uZmlnXCJcblxuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQoYXJyYXkuc2xpY2Uoc2xpY2VyKSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU29ydDIoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuICBjb25zdCBzbGljZXIgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICBjb25zdCBhcnJheTEgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBsZXQgaiA9IDA7XG4gIGxldCBrID0gMDtcblxuICB3aGlsZSAoaiA8IGFycmF5MS5sZW5ndGggJiYgayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBpZiAoYXJyYXkxW2pdIDwgYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChhcnJheTFbal0gPiBhcnJheTJba10pIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICAgIGsgKz0gMTtcbiAgICB9XG4gIH1cbiAgaWYgKGogPCBhcnJheTEubGVuZ3RoKSB7XG4gICAgZm9yIChqOyBqIDwgYXJyYXkxLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgfVxuICB9XG4gIGlmIChrIDwgYXJyYXkyLmxlbmd0aCkge1xuICAgIGZvciAoazsgayA8IGFycmF5Mi5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTJba10pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb3J0ZWRBcnJheTtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0MlxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWVyZ2VTb3J0MiBmcm9tIFwiLi9zY3JpcHRzL21lcmdlU29ydFwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9zY3JpcHRzL2xvZ2dpbmdDb25maWdcIlxuaW1wb3J0IEJTVCBmcm9tIFwiLi9zY3JpcHRzL0JTVFwiO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=