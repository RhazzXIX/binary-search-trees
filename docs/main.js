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
const testArray = [5, 1, 25];

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

  const insertRec = function (num, root) {
    if (root === null) {
      root = Node(num, null, null)
      return root
    };
    if (num < root.data) {
      root.left = insertRec(num, root.left)
    } else if (num > root.data) {
      root.right = insertRec(num, root.right)
    }
    return root
  }

  const insert = function (num) {
    insertRec(num, this)
  }

  const balancedBinaryTree = buildBalancedTree(sortedArray);

  return Object.assign(balancedBinaryTree, {insert});
};

const random1 = (0,_scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__["default"])(1)

const firstTree = Tree(numArray);
(0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(firstTree);
firstTree.insert(3);
(0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(firstTree);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7QUFLQSxpRUFBZSxVQUFVO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRHBCLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0EsQ0FBQyxDQUFDLEVBQUM7O0FBRUg7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUseUJBQXlCO0FBQ2pFO0FBQ0EsaUJBQWlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsOEJBQThCLE9BQU8sRUFBRSx5QkFBeUI7QUFDaEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDVmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1M7QUFDc0I7QUFDakI7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0VBQVc7QUFDbkMsc0JBQXNCLGlFQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0Q0FBNEMsT0FBTztBQUNuRDs7QUFFQSxnQkFBZ0Isb0VBQWtCOztBQUVsQztBQUNBLG1FQUFXO0FBQ1g7QUFDQSxtRUFBVzs7QUFFWCxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvYXJyYXlIYW5kbGVyLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9sb2dnaW5nQ29uZmlnLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9tYWtlUmFuZG9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvQlNULmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4vbG9nZ2luZ0NvbmZpZ1wiXG5cbmZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gIGNvbnN0IHNsaWNlciA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gIGNvbnN0IGFycmF5MSA9IG1lcmdlU29ydChhcnJheS5zbGljZSgwLCBzbGljZXIpKTtcbiAgY29uc3QgYXJyYXkyID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBtZXJnZVNvcnQyKGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBbXTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0MihhcnJheS5zbGljZSgwLCBzbGljZXIpKTtcbiAgY29uc3QgYXJyYXkyID0gbWVyZ2VTb3J0MihhcnJheS5zbGljZShzbGljZXIpKTtcbiAgbGV0IGogPSAwO1xuICBsZXQgayA9IDA7XG5cbiAgd2hpbGUgKGogPCBhcnJheTEubGVuZ3RoICYmIGsgPCBhcnJheTIubGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5MVtqXSA8IGFycmF5MltrXSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTFbal0pO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSBpZiAoYXJyYXkxW2pdID4gYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MltrXSk7XG4gICAgICBrICs9IDE7XG4gICAgfVxuICB9XG4gIGlmIChqIDwgYXJyYXkxLmxlbmd0aCkge1xuICAgIGZvciAoajsgaiA8IGFycmF5MS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTFbal0pO1xuICAgIH1cbiAgfVxuICBpZiAoayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBmb3IgKGs7IGsgPCBhcnJheTIubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmNvbnN0IGRpc3RpbmN0aWZ5ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGRpc3RpbmN0QXJyYXkgPSBbXTtcbiAgY29uc3QgYXJyYXlDb3B5ID0gW107XG4gIGxldCB2YWx1ZUNvdW50ZXIgPSAwO1xuXG5cbiAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBoYXNDb3B5ID0gZGlzdGluY3RBcnJheS5pbmNsdWRlcyhlbGVtZW50KVxuICAgIGlmIChoYXNDb3B5KSByZXR1cm5cbiAgICBkaXN0aW5jdEFycmF5LnB1c2goZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBkaXN0aW5jdEFycmF5O1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZVNvcnQyXG5leHBvcnQge2Rpc3RpbmN0aWZ5fVxuIiwiZXhwb3J0IGRlZmF1bHQgWydsb2cnLCAnd2FybicsICdlcnJvciddLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBjb25zb2xlW21ldGhvZE5hbWVdO1xuICBjb25zb2xlW21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgaW5pdGlhdG9yID0gJ3Vua25vd24gcGxhY2UnO1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAodHlwZW9mIGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGUuc3RhY2suc3BsaXQoJ1xcbicpKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMrYXRcXHMrKC4qKS8pO1xuICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoIWlzRmlyc3QpIHsgLy8gZmlyc3QgbGluZSAtIGN1cnJlbnQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmQgbGluZSAtIGNhbGxlciAod2hhdCB3ZSBhcmUgbG9va2luZyBmb3IpXG4gICAgICAgICAgICAgIGluaXRpYXRvciA9IG1hdGNoZXNbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBvcmlnaW5hbE1ldGhvZC5hcHBseShjb25zb2xlLCBbLi4uYXJncywgJ1xcbicsIGAgIGF0ICR7aW5pdGlhdG9yfWBdKTtcbiAgfTtcbn0pO1xuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCB7cHJldHR5UHJpbnR9IiwiY29uc3QgbWFrZVJhbmRvbU51bUFycmF5ID0gKGFycmF5TGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbU51bUFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTkpICsgMSlcbiAgICByYW5kb21OdW1BcnJheS5wdXNoKHJhbmRvbU51bWJlcik7XG4gIH1cblxuICByZXR1cm4gcmFuZG9tTnVtQXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJhbmRvbU51bUFycmF5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuL3NjcmlwdHMvbG9nZ2luZ0NvbmZpZ1wiO1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9zY3JpcHRzL2xvZ2dpbmdDb25maWdcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VTb3J0MiwgZGlzdGluY3RpZnkgfSBmcm9tIFwiLi9zY3JpcHRzL2FycmF5SGFuZGxlclwiO1xuaW1wb3J0IG1ha2VSYW5kb21OdW1BcnJheSBmcm9tIFwiLi9zY3JpcHRzL21ha2VSYW5kb21BcnJheVwiO1xuXG5jb25zdCBudW1BcnJheSA9IFs1LCA3NSwgMTAwLCAyOSwgMSwgODUsIDYzLCAxNCwgODUsIDIsIDE0LCA3NiwgNDUsIDEgLCAyNSAsIDY2ICwgNzUgLCAzNiAsIDkgLCAxMV07XG5jb25zdCB0ZXN0QXJyYXkgPSBbNSwgMSwgMjVdO1xuXG5jb25zdCBUcmVlID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGNvbnN0IGRpc3RpbmN0QXJyYXkgPSBkaXN0aW5jdGlmeShhcnJheSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gbWVyZ2VTb3J0MihkaXN0aW5jdEFycmF5KTtcblxuICBjb25zdCBOb2RlID0gKGRhdGEsIGxlZnREYXRhLCByaWdodERhdGEpID0+IHtcbiAgICBjb25zdCBUcmVlTm9kZSA9IHtcbiAgICAgIGRhdGEsXG4gICAgICBsZWZ0OiBsZWZ0RGF0YSxcbiAgICAgIHJpZ2h0OiByaWdodERhdGEsXG4gICAgfTtcbiAgICByZXR1cm4gVHJlZU5vZGU7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRCYWxhbmNlZFRyZWUgPSAoaGFuZGxlZEFycmF5KSA9PiB7XG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihoYW5kbGVkQXJyYXkubGVuZ3RoIC8gMik7XG4gICAgaWYgKGhhbmRsZWRBcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGJ1aWx0VHJlZSA9IE5vZGUoXG4gICAgICBoYW5kbGVkQXJyYXlbbWlkXSxcbiAgICAgIGJ1aWxkQmFsYW5jZWRUcmVlKGhhbmRsZWRBcnJheS5zbGljZSgwLCBtaWQpKSxcbiAgICAgIGJ1aWxkQmFsYW5jZWRUcmVlKGhhbmRsZWRBcnJheS5zbGljZShtaWQgKyAxKSlcbiAgICApO1xuICAgIHJldHVybiBidWlsdFRyZWU7XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0UmVjID0gZnVuY3Rpb24gKG51bSwgcm9vdCkge1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByb290ID0gTm9kZShudW0sIG51bGwsIG51bGwpXG4gICAgICByZXR1cm4gcm9vdFxuICAgIH07XG4gICAgaWYgKG51bSA8IHJvb3QuZGF0YSkge1xuICAgICAgcm9vdC5sZWZ0ID0gaW5zZXJ0UmVjKG51bSwgcm9vdC5sZWZ0KVxuICAgIH0gZWxzZSBpZiAobnVtID4gcm9vdC5kYXRhKSB7XG4gICAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKG51bSwgcm9vdC5yaWdodClcbiAgICB9XG4gICAgcmV0dXJuIHJvb3RcbiAgfVxuXG4gIGNvbnN0IGluc2VydCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICBpbnNlcnRSZWMobnVtLCB0aGlzKVxuICB9XG5cbiAgY29uc3QgYmFsYW5jZWRCaW5hcnlUcmVlID0gYnVpbGRCYWxhbmNlZFRyZWUoc29ydGVkQXJyYXkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGJhbGFuY2VkQmluYXJ5VHJlZSwge2luc2VydH0pO1xufTtcblxuY29uc3QgcmFuZG9tMSA9IG1ha2VSYW5kb21OdW1BcnJheSgxKVxuXG5jb25zdCBmaXJzdFRyZWUgPSBUcmVlKG51bUFycmF5KTtcbnByZXR0eVByaW50KGZpcnN0VHJlZSk7XG5maXJzdFRyZWUuaW5zZXJ0KDMpO1xucHJldHR5UHJpbnQoZmlyc3RUcmVlKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==