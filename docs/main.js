/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/arrayHandler.js":
/*!*************************************!*\
  !*** ./src/scripts/arrayHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "distinctify": () => (/* binding */ distinctify)
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

const distinctify = (array) => {
  const distinctArray = [];
  const arrayCopy = [];
  let valueCounter = 0;


  array.forEach(element => {
    const hasCopy = distinctArray.includes(element)
    if (hasCopy) return
    distinctArray.push(element);
  });

  return distinctArray;
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort2);



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

/***/ "./src/scripts/makeRandomArray.js":
/*!****************************************!*\
  !*** ./src/scripts/makeRandomArray.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeRandomNumArray = (arrayLength) => {
  const randomNumArray = [];
  for (let i = 0; i < arrayLength; i += 1) {
    const randomNumber = (Math.floor(Math.random() * 999) + 1)
    randomNumArray.push(randomNumber);
  }

  return randomNumArray
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeRandomNumArray);

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
/*!********************!*\
  !*** ./src/BST.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/loggingConfig */ "./src/scripts/loggingConfig.js");
/* harmony import */ var _scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/arrayHandler */ "./src/scripts/arrayHandler.js");
/* harmony import */ var _scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/makeRandomArray */ "./src/scripts/makeRandomArray.js");





const numArray = [5, 75, 100, 29, 1, 85, 63, 14, 85, 2, 14, 76, 45, 1 , 25 , 66 , 75 , 36 , 9 , 11];
const testArray = [5, 1];

const Tree = function (array) {
  const distinctArray = (0,_scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__.distinctify)(array);
  const sortedArray = (0,_scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(distinctArray);

  const Node = (data, leftData, rightData) => {
    const TreeNode = {
      data,
      left: leftData,
      right: rightData,
    };
    return TreeNode;
  };

  const buildBalancedTree = (handledArray) => {
    const mid = Math.floor(handledArray.length / 2);
    if (handledArray.length === 0) return null;
    const builtTree = Node(
      handledArray[mid],
      buildBalancedTree(handledArray.slice(0, mid)),
      buildBalancedTree(handledArray.slice(mid + 1))
    );
    return builtTree;
  };

  const balancedBinaryTree = buildBalancedTree(sortedArray);

  return balancedBinaryTree;
};

(0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(Tree((0,_scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__["default"])(87)));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7QUFLQSxpRUFBZSxVQUFVO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRHBCLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0EsQ0FBQyxDQUFDLEVBQUM7O0FBRUg7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUseUJBQXlCO0FBQ2pFO0FBQ0EsaUJBQWlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsOEJBQThCLE9BQU8sRUFBRSx5QkFBeUI7QUFDaEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDVmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1M7QUFDc0I7QUFDakI7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0VBQVc7QUFDbkMsc0JBQXNCLGlFQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUVBQVcsTUFBTSxvRUFBa0I7O0FBRW5DLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9hcnJheUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9zY3JpcHRzL2xvZ2dpbmdDb25maWcuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9zY3JpcHRzL21ha2VSYW5kb21BcnJheS5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9CU1QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9sb2dnaW5nQ29uZmlnXCJcblxuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQoYXJyYXkuc2xpY2Uoc2xpY2VyKSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU29ydDIoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuICBjb25zdCBzbGljZXIgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICBjb25zdCBhcnJheTEgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBsZXQgaiA9IDA7XG4gIGxldCBrID0gMDtcblxuICB3aGlsZSAoaiA8IGFycmF5MS5sZW5ndGggJiYgayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBpZiAoYXJyYXkxW2pdIDwgYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChhcnJheTFbal0gPiBhcnJheTJba10pIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICAgIGsgKz0gMTtcbiAgICB9XG4gIH1cbiAgaWYgKGogPCBhcnJheTEubGVuZ3RoKSB7XG4gICAgZm9yIChqOyBqIDwgYXJyYXkxLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgfVxuICB9XG4gIGlmIChrIDwgYXJyYXkyLmxlbmd0aCkge1xuICAgIGZvciAoazsgayA8IGFycmF5Mi5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTJba10pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb3J0ZWRBcnJheTtcbn1cblxuY29uc3QgZGlzdGluY3RpZnkgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgZGlzdGluY3RBcnJheSA9IFtdO1xuICBjb25zdCBhcnJheUNvcHkgPSBbXTtcbiAgbGV0IHZhbHVlQ291bnRlciA9IDA7XG5cblxuICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGhhc0NvcHkgPSBkaXN0aW5jdEFycmF5LmluY2x1ZGVzKGVsZW1lbnQpXG4gICAgaWYgKGhhc0NvcHkpIHJldHVyblxuICAgIGRpc3RpbmN0QXJyYXkucHVzaChlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpc3RpbmN0QXJyYXk7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU29ydDJcbmV4cG9ydCB7ZGlzdGluY3RpZnl9XG4iLCJleHBvcnQgZGVmYXVsdCBbJ2xvZycsICd3YXJuJywgJ2Vycm9yJ10uZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGNvbnNvbGVbbWV0aG9kTmFtZV07XG4gIGNvbnNvbGVbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgIGxldCBpbml0aWF0b3IgPSAndW5rbm93biBwbGFjZSc7XG4gICAgdHJ5IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0eXBlb2YgZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgZS5zdGFjay5zcGxpdCgnXFxuJykpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGluZS5tYXRjaCgvXlxccythdFxccysoLiopLyk7XG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIGlmICghaXNGaXJzdCkgeyAvLyBmaXJzdCBsaW5lIC0gY3VycmVudCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlY29uZCBsaW5lIC0gY2FsbGVyICh3aGF0IHdlIGFyZSBsb29raW5nIGZvcilcbiAgICAgICAgICAgICAgaW5pdGlhdG9yID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG9yaWdpbmFsTWV0aG9kLmFwcGx5KGNvbnNvbGUsIFsuLi5hcmdzLCAnXFxuJywgYCAgYXQgJHtpbml0aWF0b3J9YF0pO1xuICB9O1xufSk7XG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IHtwcmV0dHlQcmludH0iLCJjb25zdCBtYWtlUmFuZG9tTnVtQXJyYXkgPSAoYXJyYXlMZW5ndGgpID0+IHtcbiAgY29uc3QgcmFuZG9tTnVtQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OSkgKyAxKVxuICAgIHJhbmRvbU51bUFycmF5LnB1c2gocmFuZG9tTnVtYmVyKTtcbiAgfVxuXG4gIHJldHVybiByYW5kb21OdW1BcnJheVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUmFuZG9tTnVtQXJyYXkiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb25maWcgZnJvbSBcIi4vc2NyaXB0cy9sb2dnaW5nQ29uZmlnXCI7XG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3NjcmlwdHMvbG9nZ2luZ0NvbmZpZ1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBtZXJnZVNvcnQyLCBkaXN0aW5jdGlmeSB9IGZyb20gXCIuL3NjcmlwdHMvYXJyYXlIYW5kbGVyXCI7XG5pbXBvcnQgbWFrZVJhbmRvbU51bUFycmF5IGZyb20gXCIuL3NjcmlwdHMvbWFrZVJhbmRvbUFycmF5XCI7XG5cbmNvbnN0IG51bUFycmF5ID0gWzUsIDc1LCAxMDAsIDI5LCAxLCA4NSwgNjMsIDE0LCA4NSwgMiwgMTQsIDc2LCA0NSwgMSAsIDI1ICwgNjYgLCA3NSAsIDM2ICwgOSAsIDExXTtcbmNvbnN0IHRlc3RBcnJheSA9IFs1LCAxXTtcblxuY29uc3QgVHJlZSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICBjb25zdCBkaXN0aW5jdEFycmF5ID0gZGlzdGluY3RpZnkoYXJyYXkpO1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IG1lcmdlU29ydDIoZGlzdGluY3RBcnJheSk7XG5cbiAgY29uc3QgTm9kZSA9IChkYXRhLCBsZWZ0RGF0YSwgcmlnaHREYXRhKSA9PiB7XG4gICAgY29uc3QgVHJlZU5vZGUgPSB7XG4gICAgICBkYXRhLFxuICAgICAgbGVmdDogbGVmdERhdGEsXG4gICAgICByaWdodDogcmlnaHREYXRhLFxuICAgIH07XG4gICAgcmV0dXJuIFRyZWVOb2RlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkQmFsYW5jZWRUcmVlID0gKGhhbmRsZWRBcnJheSkgPT4ge1xuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoaGFuZGxlZEFycmF5Lmxlbmd0aCAvIDIpO1xuICAgIGlmIChoYW5kbGVkQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBidWlsdFRyZWUgPSBOb2RlKFxuICAgICAgaGFuZGxlZEFycmF5W21pZF0sXG4gICAgICBidWlsZEJhbGFuY2VkVHJlZShoYW5kbGVkQXJyYXkuc2xpY2UoMCwgbWlkKSksXG4gICAgICBidWlsZEJhbGFuY2VkVHJlZShoYW5kbGVkQXJyYXkuc2xpY2UobWlkICsgMSkpXG4gICAgKTtcbiAgICByZXR1cm4gYnVpbHRUcmVlO1xuICB9O1xuXG4gIGNvbnN0IGJhbGFuY2VkQmluYXJ5VHJlZSA9IGJ1aWxkQmFsYW5jZWRUcmVlKHNvcnRlZEFycmF5KTtcblxuICByZXR1cm4gYmFsYW5jZWRCaW5hcnlUcmVlO1xufTtcblxucHJldHR5UHJpbnQoVHJlZShtYWtlUmFuZG9tTnVtQXJyYXkoODcpKSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=