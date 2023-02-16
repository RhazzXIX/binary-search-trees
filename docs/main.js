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
/* harmony import */ var _arrayHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrayHandler */ "./src/scripts/arrayHandler.js");





const numArray = [5, 75,100, 25, 99, 1, 2, 36 , 1 , 99];

const Tree = function (array) {
  const distinctArray = (0,_arrayHandler__WEBPACK_IMPORTED_MODULE_1__.distinctify)(array);
  const sortedArray = ((0,_arrayHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(distinctArray));

  const Node = (data, leftData, rightData) => {
    const TreeNode = {
      data,
      left: leftData,
      right: rightData,
    }
    return TreeNode;
  }

  const buildTree = () => {
    return sortedArray;
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

  return buildTree()
}




console.log(Tree(numArray));






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

/***/ }),

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
/* harmony import */ var _scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/loggingConfig */ "./src/scripts/loggingConfig.js");
/* harmony import */ var _scripts_BST__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/BST */ "./src/scripts/BST.js");




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ1M7QUFDcUI7OztBQUdsRTs7QUFFQTtBQUNBLHdCQUF3QiwwREFBVztBQUNuQyx1QkFBdUIseURBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7Ozs7Ozs7QUFPQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEcUI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7OztBQUtBLGlFQUFlLFVBQVU7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQy9EcEIsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFVBQVU7QUFDcEU7QUFDQSxDQUFDLENBQUMsRUFBQzs7QUFFSDtBQUNBO0FBQ0EsK0JBQStCLE9BQU8sRUFBRSx5QkFBeUI7QUFDakU7QUFDQSxpQkFBaUIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQVU7QUFDL0Q7QUFDQSw4QkFBOEIsT0FBTyxFQUFFLHlCQUF5QjtBQUNoRTtBQUNBOzs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9zY3JpcHRzL0JTVC5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvYXJyYXlIYW5kbGVyLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9sb2dnaW5nQ29uZmlnLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4vbG9nZ2luZ0NvbmZpZ1wiXG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL2xvZ2dpbmdDb25maWdcIlxuaW1wb3J0IHtkZWZhdWx0IGFzIG1lcmdlU29ydDIsIGRpc3RpbmN0aWZ5fSBmcm9tIFwiLi9hcnJheUhhbmRsZXJcIjtcblxuXG5jb25zdCBudW1BcnJheSA9IFs1LCA3NSwxMDAsIDI1LCA5OSwgMSwgMiwgMzYgLCAxICwgOTldO1xuXG5jb25zdCBUcmVlID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGNvbnN0IGRpc3RpbmN0QXJyYXkgPSBkaXN0aW5jdGlmeShhcnJheSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gKG1lcmdlU29ydDIoZGlzdGluY3RBcnJheSkpO1xuXG4gIGNvbnN0IE5vZGUgPSAoZGF0YSwgbGVmdERhdGEsIHJpZ2h0RGF0YSkgPT4ge1xuICAgIGNvbnN0IFRyZWVOb2RlID0ge1xuICAgICAgZGF0YSxcbiAgICAgIGxlZnQ6IGxlZnREYXRhLFxuICAgICAgcmlnaHQ6IHJpZ2h0RGF0YSxcbiAgICB9XG4gICAgcmV0dXJuIFRyZWVOb2RlO1xuICB9XG5cbiAgY29uc3QgYnVpbGRUcmVlID0gKCkgPT4ge1xuICAgIHJldHVybiBzb3J0ZWRBcnJheTtcbiAgfVxuXG4gIGNvbnN0IGxlZnREYXRhID0geyBcbiAgICBkYXRhOiAnc3RyaW5nMScsXG4gICAgbGVmdDogbnVsbCxcbiAgICByaWdodDogbnVsbFxuICB9O1xuXG4gIGNvbnN0IHJpZ2h0RGF0YSA9IHsgXG4gICAgZGF0YTogMjU2NDYxMixcbiAgICBsZWZ0OiBudWxsLFxuICAgIHJpZ2h0OiBudWxsXG4gIH07XG5cbiAgY29uc3Qgbm9kZTEgPSBOb2RlKCd0ZXN0JywgbGVmdERhdGEsIHJpZ2h0RGF0YSlcbiAgY29uc29sZS5sb2cobm9kZTEpO1xuXG4gIHJldHVybiBidWlsZFRyZWUoKVxufVxuXG5cblxuXG5jb25zb2xlLmxvZyhUcmVlKG51bUFycmF5KSk7XG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBUcmVlIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9sb2dnaW5nQ29uZmlnXCJcblxuZnVuY3Rpb24gbWVyZ2VTb3J0KGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQoYXJyYXkuc2xpY2Uoc2xpY2VyKSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU29ydDIoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IFtdO1xuICBjb25zdCBzbGljZXIgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICBjb25zdCBhcnJheTEgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKDAsIHNsaWNlcikpO1xuICBjb25zdCBhcnJheTIgPSBtZXJnZVNvcnQyKGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBsZXQgaiA9IDA7XG4gIGxldCBrID0gMDtcblxuICB3aGlsZSAoaiA8IGFycmF5MS5sZW5ndGggJiYgayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBpZiAoYXJyYXkxW2pdIDwgYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChhcnJheTFbal0gPiBhcnJheTJba10pIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICAgIGsgKz0gMTtcbiAgICB9XG4gIH1cbiAgaWYgKGogPCBhcnJheTEubGVuZ3RoKSB7XG4gICAgZm9yIChqOyBqIDwgYXJyYXkxLmxlbmd0aDsgaiArPSAxKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MVtqXSk7XG4gICAgfVxuICB9XG4gIGlmIChrIDwgYXJyYXkyLmxlbmd0aCkge1xuICAgIGZvciAoazsgayA8IGFycmF5Mi5sZW5ndGg7IGsgKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTJba10pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb3J0ZWRBcnJheTtcbn1cblxuY29uc3QgZGlzdGluY3RpZnkgPSAoYXJyYXkpID0+IHtcbiAgY29uc3QgZGlzdGluY3RBcnJheSA9IFtdO1xuICBjb25zdCBhcnJheUNvcHkgPSBbXTtcbiAgbGV0IHZhbHVlQ291bnRlciA9IDA7XG5cblxuICBhcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGNvbnN0IGhhc0NvcHkgPSBkaXN0aW5jdEFycmF5LmluY2x1ZGVzKGVsZW1lbnQpXG4gICAgaWYgKGhhc0NvcHkpIHJldHVyblxuICAgIGRpc3RpbmN0QXJyYXkucHVzaChlbGVtZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpc3RpbmN0QXJyYXk7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlU29ydDJcbmV4cG9ydCB7ZGlzdGluY3RpZnl9XG4iLCJleHBvcnQgZGVmYXVsdCBbJ2xvZycsICd3YXJuJywgJ2Vycm9yJ10uZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGNvbnNvbGVbbWV0aG9kTmFtZV07XG4gIGNvbnNvbGVbbWV0aG9kTmFtZV0gPSAoLi4uYXJncykgPT4ge1xuICAgIGxldCBpbml0aWF0b3IgPSAndW5rbm93biBwbGFjZSc7XG4gICAgdHJ5IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0eXBlb2YgZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IGlzRmlyc3QgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgZS5zdGFjay5zcGxpdCgnXFxuJykpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGluZS5tYXRjaCgvXlxccythdFxccysoLiopLyk7XG4gICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgIGlmICghaXNGaXJzdCkgeyAvLyBmaXJzdCBsaW5lIC0gY3VycmVudCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlY29uZCBsaW5lIC0gY2FsbGVyICh3aGF0IHdlIGFyZSBsb29raW5nIGZvcilcbiAgICAgICAgICAgICAgaW5pdGlhdG9yID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIG9yaWdpbmFsTWV0aG9kLmFwcGx5KGNvbnNvbGUsIFsuLi5hcmdzLCAnXFxuJywgYCAgYXQgJHtpbml0aWF0b3J9YF0pO1xuICB9O1xufSk7XG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9ICcnLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUgiAgICcgOiAnICAgICd9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilJTilIDilIAgJyA6ICfilIzilIDilIAgJ30ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gJyAgICAnIDogJ+KUgiAgICd9YCwgdHJ1ZSk7XG4gIH1cbn1cblxuZXhwb3J0IHtwcmV0dHlQcmludH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjb25maWcgZnJvbSBcIi4vc2NyaXB0cy9sb2dnaW5nQ29uZmlnXCJcbmltcG9ydCBCU1QgZnJvbSBcIi4vc2NyaXB0cy9CU1RcIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9