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





const numArray = [
  5, 75, 99, 100, 29, 1, 85, 63, 14, 85, 2, 14, 76, 45, 1, 25, 66, 75, 36, 9,
  11,
];
const testArray = [5, 1, 25];

const Tree = function (array) {
  const distinctArray = (0,_scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__.distinctify)(array);
  const sortedArray = (0,_scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(distinctArray);

  const treeData = [];
  const queueArray = [];

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

  const insertRec = function (value, root) {
    if (root === null) {
      root = Node(value, null, null);
      return root;
    }
    if (value < root.data) {
      root.left = insertRec(value, root.left);
    } else if (value > root.data) {
      root.right = insertRec(value, root.right);
    }
    return root;
  };

  const insert = function (value) {
    insertRec(value, this);
  };

  const find = function (value, root) {
    if (root === undefined) {
      return find(value, this);
    }
    if (root === null) {
      console.log("Data not found");
      return root;
    }
    if (value === root.data) return root;
    if (value < root.data) {
      return find(value, root.left);
    } else if (value > root.data) {
      return find(value, root.right);
    }
  };

  const getPreviousRoot = function (value, root) {
    if (root.left.data === value || root.right.data === value) {
      return root;
    }
    if (value < root.data) {
      return getPreviousRoot(value, root.left);
    } else if (value > root.data) {
      return getPreviousRoot(value, root.right);
    }
  };

  const getAppropriateLeaf = function (value, root) {
    if (root.left === null && root.right === null) return root;
    if (value === root.data) {
      return getAppropriateLeaf(value, root.right);
    } else if (value < root.data) {
      return getAppropriateLeaf(value, root.left);
    }
  };

  const deleteRoot = function (value) {
    const toBeDeleted = find(value, this);
    if (toBeDeleted === null) return;
    const previousRoot = getPreviousRoot(value, this);
    switch (true) {
      case toBeDeleted.left !== null && toBeDeleted.right === null:
        if (value < previousRoot.data) {
          previousRoot.left = toBeDeleted.left;
        } else if (value > previousRoot.data) {
          previousRoot.right = toBeDeleted.left;
        }
        break;
      case toBeDeleted.left === null && toBeDeleted.right !== null:
        if (value < previousRoot.data) {
          previousRoot.left = toBeDeleted.right;
        } else if (value > previousRoot.data) {
          previousRoot.right = toBeDeleted.right;
        }
        break;
      case toBeDeleted.left !== null && toBeDeleted.right !== null:
        const appropriateLeaf = getAppropriateLeaf(value, toBeDeleted);
        deleteRoot.call(this, appropriateLeaf.data);
        appropriateLeaf.left = toBeDeleted.left;
        appropriateLeaf.right = toBeDeleted.right;
        if (value < previousRoot.data) {
          previousRoot.left = appropriateLeaf;
        } else if (value > previousRoot.data) {
          previousRoot.right = appropriateLeaf;
        }
        break;
      case toBeDeleted.left === null && toBeDeleted.right === null:
        if (value < previousRoot.data) {
          previousRoot.left = null;
        } else if (value > previousRoot.data) {
          previousRoot.right = null;
        }
        break;
      default:
    }
  };

  const getLevelOrderData = () => {
    if(!queueArray.length) return
    treeData.push(queueArray[0].data);
    if (queueArray[0].left !== null) queueArray.push(queueArray[0].left);
    if (queueArray[0].right!== null) queueArray.push(queueArray[0].right);
    queueArray.shift();
    if(queueArray.length) getLevelOrderData();
  }

  const levelOrder = function(fn) {
    if (treeData.length) treeData.splice(0);
    queueArray.push(this)
    getLevelOrderData()
    if (!fn) return treeData
    treeData.forEach(fn);
  }

  const balancedBinaryTree = buildBalancedTree(sortedArray);

  return Object.assign(balancedBinaryTree, { insert, deleteRoot, find, levelOrder });
};

const random1 = (0,_scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__["default"])(352);

const firstTree = Tree(numArray);
// prettyPrint(firstTree);
// firstTree.deleteRoot(random1[1]);
(0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(firstTree);

const logger = (arg) => {
  console.log(arg);
}

console.log(firstTree.levelOrder())

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTs7QUFFQSw2Q0FBNkMsc0NBQXNDO0FBQ25GOztBQUVBLGdCQUFnQixvRUFBa0I7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLG1FQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvYXJyYXlIYW5kbGVyLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9sb2dnaW5nQ29uZmlnLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9tYWtlUmFuZG9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvQlNULmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4vbG9nZ2luZ0NvbmZpZ1wiXG5cbmZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gIGNvbnN0IHNsaWNlciA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gIGNvbnN0IGFycmF5MSA9IG1lcmdlU29ydChhcnJheS5zbGljZSgwLCBzbGljZXIpKTtcbiAgY29uc3QgYXJyYXkyID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBtZXJnZVNvcnQyKGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBbXTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0MihhcnJheS5zbGljZSgwLCBzbGljZXIpKTtcbiAgY29uc3QgYXJyYXkyID0gbWVyZ2VTb3J0MihhcnJheS5zbGljZShzbGljZXIpKTtcbiAgbGV0IGogPSAwO1xuICBsZXQgayA9IDA7XG5cbiAgd2hpbGUgKGogPCBhcnJheTEubGVuZ3RoICYmIGsgPCBhcnJheTIubGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5MVtqXSA8IGFycmF5MltrXSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTFbal0pO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSBpZiAoYXJyYXkxW2pdID4gYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MltrXSk7XG4gICAgICBrICs9IDE7XG4gICAgfVxuICB9XG4gIGlmIChqIDwgYXJyYXkxLmxlbmd0aCkge1xuICAgIGZvciAoajsgaiA8IGFycmF5MS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTFbal0pO1xuICAgIH1cbiAgfVxuICBpZiAoayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBmb3IgKGs7IGsgPCBhcnJheTIubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmNvbnN0IGRpc3RpbmN0aWZ5ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGRpc3RpbmN0QXJyYXkgPSBbXTtcbiAgY29uc3QgYXJyYXlDb3B5ID0gW107XG4gIGxldCB2YWx1ZUNvdW50ZXIgPSAwO1xuXG5cbiAgYXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBjb25zdCBoYXNDb3B5ID0gZGlzdGluY3RBcnJheS5pbmNsdWRlcyhlbGVtZW50KVxuICAgIGlmIChoYXNDb3B5KSByZXR1cm5cbiAgICBkaXN0aW5jdEFycmF5LnB1c2goZWxlbWVudCk7XG4gIH0pO1xuXG4gIHJldHVybiBkaXN0aW5jdEFycmF5O1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBtZXJnZVNvcnQyXG5leHBvcnQge2Rpc3RpbmN0aWZ5fVxuIiwiZXhwb3J0IGRlZmF1bHQgWydsb2cnLCAnd2FybicsICdlcnJvciddLmZvckVhY2goKG1ldGhvZE5hbWUpID0+IHtcbiAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBjb25zb2xlW21ldGhvZE5hbWVdO1xuICBjb25zb2xlW21ldGhvZE5hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgaW5pdGlhdG9yID0gJ3Vua25vd24gcGxhY2UnO1xuICAgIHRyeSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAodHlwZW9mIGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGUuc3RhY2suc3BsaXQoJ1xcbicpKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxpbmUubWF0Y2goL15cXHMrYXRcXHMrKC4qKS8pO1xuICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICBpZiAoIWlzRmlyc3QpIHsgLy8gZmlyc3QgbGluZSAtIGN1cnJlbnQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWNvbmQgbGluZSAtIGNhbGxlciAod2hhdCB3ZSBhcmUgbG9va2luZyBmb3IpXG4gICAgICAgICAgICAgIGluaXRpYXRvciA9IG1hdGNoZXNbMV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBvcmlnaW5hbE1ldGhvZC5hcHBseShjb25zb2xlLCBbLi4uYXJncywgJ1xcbicsIGAgIGF0ICR7aW5pdGlhdG9yfWBdKTtcbiAgfTtcbn0pO1xuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSAnJywgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICfilIIgICAnIDogJyAgICAnfWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSU4pSA4pSAICcgOiAn4pSM4pSA4pSAICd9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/ICcgICAgJyA6ICfilIIgICAnfWAsIHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCB7cHJldHR5UHJpbnR9IiwiY29uc3QgbWFrZVJhbmRvbU51bUFycmF5ID0gKGFycmF5TGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbU51bUFycmF5ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTkpICsgMSlcbiAgICByYW5kb21OdW1BcnJheS5wdXNoKHJhbmRvbU51bWJlcik7XG4gIH1cblxuICByZXR1cm4gcmFuZG9tTnVtQXJyYXlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJhbmRvbU51bUFycmF5IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY29uZmlnIGZyb20gXCIuL3NjcmlwdHMvbG9nZ2luZ0NvbmZpZ1wiO1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9zY3JpcHRzL2xvZ2dpbmdDb25maWdcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgbWVyZ2VTb3J0MiwgZGlzdGluY3RpZnkgfSBmcm9tIFwiLi9zY3JpcHRzL2FycmF5SGFuZGxlclwiO1xuaW1wb3J0IG1ha2VSYW5kb21OdW1BcnJheSBmcm9tIFwiLi9zY3JpcHRzL21ha2VSYW5kb21BcnJheVwiO1xuXG5jb25zdCBudW1BcnJheSA9IFtcbiAgNSwgNzUsIDk5LCAxMDAsIDI5LCAxLCA4NSwgNjMsIDE0LCA4NSwgMiwgMTQsIDc2LCA0NSwgMSwgMjUsIDY2LCA3NSwgMzYsIDksXG4gIDExLFxuXTtcbmNvbnN0IHRlc3RBcnJheSA9IFs1LCAxLCAyNV07XG5cbmNvbnN0IFRyZWUgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgY29uc3QgZGlzdGluY3RBcnJheSA9IGRpc3RpbmN0aWZ5KGFycmF5KTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBtZXJnZVNvcnQyKGRpc3RpbmN0QXJyYXkpO1xuXG4gIGNvbnN0IHRyZWVEYXRhID0gW107XG4gIGNvbnN0IHF1ZXVlQXJyYXkgPSBbXTtcblxuICBjb25zdCBOb2RlID0gKGRhdGEsIGxlZnREYXRhLCByaWdodERhdGEpID0+IHtcbiAgICBjb25zdCBUcmVlTm9kZSA9IHtcbiAgICAgIGRhdGEsXG4gICAgICBsZWZ0OiBsZWZ0RGF0YSxcbiAgICAgIHJpZ2h0OiByaWdodERhdGEsXG4gICAgfTtcbiAgICByZXR1cm4gVHJlZU5vZGU7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRCYWxhbmNlZFRyZWUgPSAoaGFuZGxlZEFycmF5KSA9PiB7XG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihoYW5kbGVkQXJyYXkubGVuZ3RoIC8gMik7XG4gICAgaWYgKGhhbmRsZWRBcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGJ1aWx0VHJlZSA9IE5vZGUoXG4gICAgICBoYW5kbGVkQXJyYXlbbWlkXSxcbiAgICAgIGJ1aWxkQmFsYW5jZWRUcmVlKGhhbmRsZWRBcnJheS5zbGljZSgwLCBtaWQpKSxcbiAgICAgIGJ1aWxkQmFsYW5jZWRUcmVlKGhhbmRsZWRBcnJheS5zbGljZShtaWQgKyAxKSlcbiAgICApO1xuICAgIHJldHVybiBidWlsdFRyZWU7XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0UmVjID0gZnVuY3Rpb24gKHZhbHVlLCByb290KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJvb3QgPSBOb2RlKHZhbHVlLCBudWxsLCBudWxsKTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaW5zZXJ0UmVjKHZhbHVlLCB0aGlzKTtcbiAgfTtcblxuICBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlLCByb290KSB7XG4gICAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZpbmQodmFsdWUsIHRoaXMpO1xuICAgIH1cbiAgICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coXCJEYXRhIG5vdCBmb3VuZFwiKTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IHJvb3QuZGF0YSkgcmV0dXJuIHJvb3Q7XG4gICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZmluZCh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZmluZCh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFByZXZpb3VzUm9vdCA9IGZ1bmN0aW9uICh2YWx1ZSwgcm9vdCkge1xuICAgIGlmIChyb290LmxlZnQuZGF0YSA9PT0gdmFsdWUgfHwgcm9vdC5yaWdodC5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgICAgcmV0dXJuIGdldFByZXZpb3VzUm9vdCh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNSb290KHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0QXBwcm9wcmlhdGVMZWFmID0gZnVuY3Rpb24gKHZhbHVlLCByb290KSB7XG4gICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCAmJiByb290LnJpZ2h0ID09PSBudWxsKSByZXR1cm4gcm9vdDtcbiAgICBpZiAodmFsdWUgPT09IHJvb3QuZGF0YSkge1xuICAgICAgcmV0dXJuIGdldEFwcHJvcHJpYXRlTGVhZih2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgICAgcmV0dXJuIGdldEFwcHJvcHJpYXRlTGVhZih2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlUm9vdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGNvbnN0IHRvQmVEZWxldGVkID0gZmluZCh2YWx1ZSwgdGhpcyk7XG4gICAgaWYgKHRvQmVEZWxldGVkID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgcHJldmlvdXNSb290ID0gZ2V0UHJldmlvdXNSb290KHZhbHVlLCB0aGlzKTtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCAhPT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCA9PT0gbnVsbDpcbiAgICAgICAgaWYgKHZhbHVlIDwgcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QubGVmdCA9IHRvQmVEZWxldGVkLmxlZnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5yaWdodCA9IHRvQmVEZWxldGVkLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvQmVEZWxldGVkLmxlZnQgPT09IG51bGwgJiYgdG9CZURlbGV0ZWQucmlnaHQgIT09IG51bGw6XG4gICAgICAgIGlmICh2YWx1ZSA8IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LmxlZnQgPSB0b0JlRGVsZXRlZC5yaWdodDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LnJpZ2h0ID0gdG9CZURlbGV0ZWQucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvQmVEZWxldGVkLmxlZnQgIT09IG51bGwgJiYgdG9CZURlbGV0ZWQucmlnaHQgIT09IG51bGw6XG4gICAgICAgIGNvbnN0IGFwcHJvcHJpYXRlTGVhZiA9IGdldEFwcHJvcHJpYXRlTGVhZih2YWx1ZSwgdG9CZURlbGV0ZWQpO1xuICAgICAgICBkZWxldGVSb290LmNhbGwodGhpcywgYXBwcm9wcmlhdGVMZWFmLmRhdGEpO1xuICAgICAgICBhcHByb3ByaWF0ZUxlYWYubGVmdCA9IHRvQmVEZWxldGVkLmxlZnQ7XG4gICAgICAgIGFwcHJvcHJpYXRlTGVhZi5yaWdodCA9IHRvQmVEZWxldGVkLnJpZ2h0O1xuICAgICAgICBpZiAodmFsdWUgPCBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5sZWZ0ID0gYXBwcm9wcmlhdGVMZWFmO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QucmlnaHQgPSBhcHByb3ByaWF0ZUxlYWY7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRvQmVEZWxldGVkLmxlZnQgPT09IG51bGwgJiYgdG9CZURlbGV0ZWQucmlnaHQgPT09IG51bGw6XG4gICAgICAgIGlmICh2YWx1ZSA8IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LmxlZnQgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QucmlnaHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0TGV2ZWxPcmRlckRhdGEgPSAoKSA9PiB7XG4gICAgaWYoIXF1ZXVlQXJyYXkubGVuZ3RoKSByZXR1cm5cbiAgICB0cmVlRGF0YS5wdXNoKHF1ZXVlQXJyYXlbMF0uZGF0YSk7XG4gICAgaWYgKHF1ZXVlQXJyYXlbMF0ubGVmdCAhPT0gbnVsbCkgcXVldWVBcnJheS5wdXNoKHF1ZXVlQXJyYXlbMF0ubGVmdCk7XG4gICAgaWYgKHF1ZXVlQXJyYXlbMF0ucmlnaHQhPT0gbnVsbCkgcXVldWVBcnJheS5wdXNoKHF1ZXVlQXJyYXlbMF0ucmlnaHQpO1xuICAgIHF1ZXVlQXJyYXkuc2hpZnQoKTtcbiAgICBpZihxdWV1ZUFycmF5Lmxlbmd0aCkgZ2V0TGV2ZWxPcmRlckRhdGEoKTtcbiAgfVxuXG4gIGNvbnN0IGxldmVsT3JkZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0cmVlRGF0YS5sZW5ndGgpIHRyZWVEYXRhLnNwbGljZSgwKTtcbiAgICBxdWV1ZUFycmF5LnB1c2godGhpcylcbiAgICBnZXRMZXZlbE9yZGVyRGF0YSgpXG4gICAgaWYgKCFmbikgcmV0dXJuIHRyZWVEYXRhXG4gICAgdHJlZURhdGEuZm9yRWFjaChmbik7XG4gIH1cblxuICBjb25zdCBiYWxhbmNlZEJpbmFyeVRyZWUgPSBidWlsZEJhbGFuY2VkVHJlZShzb3J0ZWRBcnJheSk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFsYW5jZWRCaW5hcnlUcmVlLCB7IGluc2VydCwgZGVsZXRlUm9vdCwgZmluZCwgbGV2ZWxPcmRlciB9KTtcbn07XG5cbmNvbnN0IHJhbmRvbTEgPSBtYWtlUmFuZG9tTnVtQXJyYXkoMzUyKTtcblxuY29uc3QgZmlyc3RUcmVlID0gVHJlZShudW1BcnJheSk7XG4vLyBwcmV0dHlQcmludChmaXJzdFRyZWUpO1xuLy8gZmlyc3RUcmVlLmRlbGV0ZVJvb3QocmFuZG9tMVsxXSk7XG5wcmV0dHlQcmludChmaXJzdFRyZWUpO1xuXG5jb25zdCBsb2dnZXIgPSAoYXJnKSA9PiB7XG4gIGNvbnNvbGUubG9nKGFyZyk7XG59XG5cbmNvbnNvbGUubG9nKGZpcnN0VHJlZS5sZXZlbE9yZGVyKCkpXG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=