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
  let level = 0;
  const levelArray = [];

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
  
  const insert = function (value) {
    if (find(value, this) !== null) {
      console.log('Data is already stored');
      return
    }
    insertRec(value, this);
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

  const clearTreeData = () => {
    if (treeData.length) treeData.splice(0);
  }

  const getLevelOrderData = () => {
    if (!queueArray.length) return;
    treeData.push(queueArray[0].data);
    if (queueArray[0].left !== null) queueArray.push(queueArray[0].left);
    if (queueArray[0].right !== null) queueArray.push(queueArray[0].right);
    queueArray.shift();
    if (queueArray.length) getLevelOrderData();
  };

  const levelOrder = function (fn) {
    clearTreeData()
    queueArray.push(this);
    getLevelOrderData();
    if (!fn) return treeData;
    treeData.forEach(fn);
  };

  const getInorderData = (node) => {
    if (node === null) return;
    getInorderData(node.left);
    treeData.push(node.data);
    getInorderData(node.right);
  };

  const inorder = function (fn) {
    clearTreeData()
    getInorderData(this);
    if (!fn) return treeData;
    treeData.forEach(fn);
  };

  const getPreorderData = (node) => {
    if (node === null) return;
    treeData.push(node.data);
    getPreorderData(node.left);
    getPreorderData(node.right);
  }

  const preorder = function (fn) {
    clearTreeData()
    getPreorderData(this);
    if (!fn) return treeData;
    treeData.forEach(fn);
  }

  const getPostorderData = (node) => {
    if (node === null) return;
    getPostorderData(node.left);
    getPostorderData(node.right);
    treeData.push(node.data);
  }

  const postorder = function (fn) {
    clearTreeData();
    getPostorderData(this);
    if (!fn) return treeData;
    treeData.forEach(fn);
  }

  const countLevel = () => {
    if (!queueArray.length) return
    queueArray.forEach(node => {
      levelArray.push(node);
    });
    queueArray.splice(0)
    levelArray.forEach(node => {
      if (node.left !== null) queueArray.push(node.left);
      if (node.right !== null) queueArray.push(node.right);
    })
    levelArray.splice(0);
    level += 1;
    countLevel();
  }

  const height = function (node) {
    const root = find(node, this);
    if (queueArray.length) queueArray.splice(0);
    if (levelArray.length) levelArray.splice(0);
    level = 0;
    queueArray.push(root);
    countLevel();
    level -= 1
    return level
  }

  const balancedBinaryTree = buildBalancedTree(sortedArray);

  return Object.assign(balancedBinaryTree, {
    insert,
    deleteRoot,
    find,
    levelOrder,
    inorder,
    preorder,
    postorder,
    height
  });
};

const random1 = (0,_scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__["default"])(36);

const firstTree = Tree(numArray);
// prettyPrint(firstTree);
// firstTree.deleteRoot(random1[1]);
(0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(firstTree);

const logger = (arg) => {
  console.log(arg);
};

console.log(firstTree.inorder());
// console.log(firstTree.preorder());
// console.log(firstTree.postorder());
firstTree.insert(51);
firstTree.insert(52);
firstTree.insert(53);
firstTree.insert(54);

(0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(firstTree);
console.log(firstTree.height(36));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7QUFLQSxpRUFBZSxVQUFVO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRHBCLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0EsQ0FBQyxDQUFDLEVBQUM7O0FBRUg7QUFDQTtBQUNBLCtCQUErQixPQUFPLEVBQUUseUJBQXlCO0FBQ2pFO0FBQ0EsaUJBQWlCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQy9EO0FBQ0EsOEJBQThCLE9BQU8sRUFBRSx5QkFBeUI7QUFDaEU7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDVmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ1M7QUFDc0I7QUFDakI7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isa0VBQVc7QUFDbkMsc0JBQXNCLGlFQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsZ0JBQWdCLG9FQUFrQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsbUVBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1FQUFXO0FBQ1g7O0FBRUEsaUVBQWUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy8uL3NyYy9zY3JpcHRzL2FycmF5SGFuZGxlci5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvbG9nZ2luZ0NvbmZpZy5qcyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvbWFrZVJhbmRvbUFycmF5LmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL0JTVC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gXCIuL2xvZ2dpbmdDb25maWdcIlxuXG5mdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpIHtcbiAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMSkgcmV0dXJuIGFycmF5O1xuICBjb25zdCBzbGljZXIgPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aCAvIDIpO1xuICBjb25zdCBhcnJheTEgPSBtZXJnZVNvcnQoYXJyYXkuc2xpY2UoMCwgc2xpY2VyKSk7XG4gIGNvbnN0IGFycmF5MiA9IG1lcmdlU29ydChhcnJheS5zbGljZShzbGljZXIpKTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBhcnJheTEuY29uY2F0KGFycmF5Mikuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gIHJldHVybiBzb3J0ZWRBcnJheTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VTb3J0MihhcnJheSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gW107XG4gIGNvbnN0IHNsaWNlciA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gIGNvbnN0IGFycmF5MSA9IG1lcmdlU29ydDIoYXJyYXkuc2xpY2UoMCwgc2xpY2VyKSk7XG4gIGNvbnN0IGFycmF5MiA9IG1lcmdlU29ydDIoYXJyYXkuc2xpY2Uoc2xpY2VyKSk7XG4gIGxldCBqID0gMDtcbiAgbGV0IGsgPSAwO1xuXG4gIHdoaWxlIChqIDwgYXJyYXkxLmxlbmd0aCAmJiBrIDwgYXJyYXkyLmxlbmd0aCkge1xuICAgIGlmIChhcnJheTFbal0gPCBhcnJheTJba10pIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkxW2pdKTtcbiAgICAgIGogKz0gMTtcbiAgICB9IGVsc2UgaWYgKGFycmF5MVtqXSA+IGFycmF5MltrXSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTJba10pO1xuICAgICAgayArPSAxO1xuICAgIH1cbiAgfVxuICBpZiAoaiA8IGFycmF5MS5sZW5ndGgpIHtcbiAgICBmb3IgKGo7IGogPCBhcnJheTEubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkxW2pdKTtcbiAgICB9XG4gIH1cbiAgaWYgKGsgPCBhcnJheTIubGVuZ3RoKSB7XG4gICAgZm9yIChrOyBrIDwgYXJyYXkyLmxlbmd0aDsgayArPSAxKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MltrXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5jb25zdCBkaXN0aW5jdGlmeSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBkaXN0aW5jdEFycmF5ID0gW107XG4gIGNvbnN0IGFycmF5Q29weSA9IFtdO1xuICBsZXQgdmFsdWVDb3VudGVyID0gMDtcblxuXG4gIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgaGFzQ29weSA9IGRpc3RpbmN0QXJyYXkuaW5jbHVkZXMoZWxlbWVudClcbiAgICBpZiAoaGFzQ29weSkgcmV0dXJuXG4gICAgZGlzdGluY3RBcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gZGlzdGluY3RBcnJheTtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0MlxuZXhwb3J0IHtkaXN0aW5jdGlmeX1cbiIsImV4cG9ydCBkZWZhdWx0IFsnbG9nJywgJ3dhcm4nLCAnZXJyb3InXS5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gY29uc29sZVttZXRob2ROYW1lXTtcbiAgY29uc29sZVttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgbGV0IGluaXRpYXRvciA9ICd1bmtub3duIHBsYWNlJztcbiAgICB0cnkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiBlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBlLnN0YWNrLnNwbGl0KCdcXG4nKSkge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsaW5lLm1hdGNoKC9eXFxzK2F0XFxzKyguKikvKTtcbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgaWYgKCFpc0ZpcnN0KSB7IC8vIGZpcnN0IGxpbmUgLSBjdXJyZW50IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kIGxpbmUgLSBjYWxsZXIgKHdoYXQgd2UgYXJlIGxvb2tpbmcgZm9yKVxuICAgICAgICAgICAgICBpbml0aWF0b3IgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb3JpZ2luYWxNZXRob2QuYXBwbHkoY29uc29sZSwgWy4uLmFyZ3MsICdcXG4nLCBgICBhdCAke2luaXRpYXRvcn1gXSk7XG4gIH07XG59KTtcblxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgfVxufVxuXG5leHBvcnQge3ByZXR0eVByaW50fSIsImNvbnN0IG1ha2VSYW5kb21OdW1BcnJheSA9IChhcnJheUxlbmd0aCkgPT4ge1xuICBjb25zdCByYW5kb21OdW1BcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5KSArIDEpXG4gICAgcmFuZG9tTnVtQXJyYXkucHVzaChyYW5kb21OdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIHJhbmRvbU51bUFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSYW5kb21OdW1BcnJheSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9zY3JpcHRzL2xvZ2dpbmdDb25maWdcIjtcbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc2NyaXB0cy9sb2dnaW5nQ29uZmlnXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlU29ydDIsIGRpc3RpbmN0aWZ5IH0gZnJvbSBcIi4vc2NyaXB0cy9hcnJheUhhbmRsZXJcIjtcbmltcG9ydCBtYWtlUmFuZG9tTnVtQXJyYXkgZnJvbSBcIi4vc2NyaXB0cy9tYWtlUmFuZG9tQXJyYXlcIjtcblxuY29uc3QgbnVtQXJyYXkgPSBbXG4gIDUsIDc1LCA5OSwgMTAwLCAyOSwgMSwgODUsIDYzLCAxNCwgODUsIDIsIDE0LCA3NiwgNDUsIDEsIDI1LCA2NiwgNzUsIDM2LCA5LFxuICAxMSxcbl07XG5jb25zdCB0ZXN0QXJyYXkgPSBbNSwgMSwgMjVdO1xuXG5jb25zdCBUcmVlID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gIGNvbnN0IGRpc3RpbmN0QXJyYXkgPSBkaXN0aW5jdGlmeShhcnJheSk7XG4gIGNvbnN0IHNvcnRlZEFycmF5ID0gbWVyZ2VTb3J0MihkaXN0aW5jdEFycmF5KTtcblxuICBjb25zdCB0cmVlRGF0YSA9IFtdO1xuICBjb25zdCBxdWV1ZUFycmF5ID0gW107XG4gIGxldCBsZXZlbCA9IDA7XG4gIGNvbnN0IGxldmVsQXJyYXkgPSBbXTtcblxuICBjb25zdCBOb2RlID0gKGRhdGEsIGxlZnREYXRhLCByaWdodERhdGEpID0+IHtcbiAgICBjb25zdCBUcmVlTm9kZSA9IHtcbiAgICAgIGRhdGEsXG4gICAgICBsZWZ0OiBsZWZ0RGF0YSxcbiAgICAgIHJpZ2h0OiByaWdodERhdGEsXG4gICAgfTtcbiAgICByZXR1cm4gVHJlZU5vZGU7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRCYWxhbmNlZFRyZWUgPSAoaGFuZGxlZEFycmF5KSA9PiB7XG4gICAgY29uc3QgbWlkID0gTWF0aC5mbG9vcihoYW5kbGVkQXJyYXkubGVuZ3RoIC8gMik7XG4gICAgaWYgKGhhbmRsZWRBcnJheS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGJ1aWx0VHJlZSA9IE5vZGUoXG4gICAgICBoYW5kbGVkQXJyYXlbbWlkXSxcbiAgICAgIGJ1aWxkQmFsYW5jZWRUcmVlKGhhbmRsZWRBcnJheS5zbGljZSgwLCBtaWQpKSxcbiAgICAgIGJ1aWxkQmFsYW5jZWRUcmVlKGhhbmRsZWRBcnJheS5zbGljZShtaWQgKyAxKSlcbiAgICApO1xuICAgIHJldHVybiBidWlsdFRyZWU7XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0UmVjID0gZnVuY3Rpb24gKHZhbHVlLCByb290KSB7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIHJvb3QgPSBOb2RlKHZhbHVlLCBudWxsLCBudWxsKTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH1cbiAgICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAgIHJvb3QubGVmdCA9IGluc2VydFJlYyh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgICByb290LnJpZ2h0ID0gaW5zZXJ0UmVjKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH07XG5cbiAgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZSwgcm9vdCkge1xuICAgIGlmIChyb290ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmaW5kKHZhbHVlLCB0aGlzKTtcbiAgICB9XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRGF0YSBub3QgZm91bmRcIik7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSByb290LmRhdGEpIHJldHVybiByb290O1xuICAgIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgICAgcmV0dXJuIGZpbmQodmFsdWUsIHJvb3QubGVmdCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IHJvb3QuZGF0YSkge1xuICAgICAgcmV0dXJuIGZpbmQodmFsdWUsIHJvb3QucmlnaHQpO1xuICAgIH1cbiAgfTtcbiAgXG4gIGNvbnN0IGluc2VydCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChmaW5kKHZhbHVlLCB0aGlzKSAhPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEgaXMgYWxyZWFkeSBzdG9yZWQnKTtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpbnNlcnRSZWModmFsdWUsIHRoaXMpO1xuICB9O1xuICBcbiAgY29uc3QgZ2V0UHJldmlvdXNSb290ID0gZnVuY3Rpb24gKHZhbHVlLCByb290KSB7XG4gICAgaWYgKHJvb3QubGVmdC5kYXRhID09PSB2YWx1ZSB8fCByb290LnJpZ2h0LmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNSb290KHZhbHVlLCByb290LmxlZnQpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c1Jvb3QodmFsdWUsIHJvb3QucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRBcHByb3ByaWF0ZUxlYWYgPSBmdW5jdGlvbiAodmFsdWUsIHJvb3QpIHtcbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsICYmIHJvb3QucmlnaHQgPT09IG51bGwpIHJldHVybiByb290O1xuICAgIGlmICh2YWx1ZSA9PT0gcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0QXBwcm9wcmlhdGVMZWFmKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0QXBwcm9wcmlhdGVMZWFmKHZhbHVlLCByb290LmxlZnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVSb290ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY29uc3QgdG9CZURlbGV0ZWQgPSBmaW5kKHZhbHVlLCB0aGlzKTtcbiAgICBpZiAodG9CZURlbGV0ZWQgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBwcmV2aW91c1Jvb3QgPSBnZXRQcmV2aW91c1Jvb3QodmFsdWUsIHRoaXMpO1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0b0JlRGVsZXRlZC5sZWZ0ICE9PSBudWxsICYmIHRvQmVEZWxldGVkLnJpZ2h0ID09PSBudWxsOlxuICAgICAgICBpZiAodmFsdWUgPCBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5sZWZ0ID0gdG9CZURlbGV0ZWQubGVmdDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LnJpZ2h0ID0gdG9CZURlbGV0ZWQubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCA9PT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCAhPT0gbnVsbDpcbiAgICAgICAgaWYgKHZhbHVlIDwgcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QubGVmdCA9IHRvQmVEZWxldGVkLnJpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QucmlnaHQgPSB0b0JlRGVsZXRlZC5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCAhPT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCAhPT0gbnVsbDpcbiAgICAgICAgY29uc3QgYXBwcm9wcmlhdGVMZWFmID0gZ2V0QXBwcm9wcmlhdGVMZWFmKHZhbHVlLCB0b0JlRGVsZXRlZCk7XG4gICAgICAgIGRlbGV0ZVJvb3QuY2FsbCh0aGlzLCBhcHByb3ByaWF0ZUxlYWYuZGF0YSk7XG4gICAgICAgIGFwcHJvcHJpYXRlTGVhZi5sZWZ0ID0gdG9CZURlbGV0ZWQubGVmdDtcbiAgICAgICAgYXBwcm9wcmlhdGVMZWFmLnJpZ2h0ID0gdG9CZURlbGV0ZWQucmlnaHQ7XG4gICAgICAgIGlmICh2YWx1ZSA8IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LmxlZnQgPSBhcHByb3ByaWF0ZUxlYWY7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5yaWdodCA9IGFwcHJvcHJpYXRlTGVhZjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCA9PT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCA9PT0gbnVsbDpcbiAgICAgICAgaWYgKHZhbHVlIDwgcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QubGVmdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5yaWdodCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhclRyZWVEYXRhID0gKCkgPT4ge1xuICAgIGlmICh0cmVlRGF0YS5sZW5ndGgpIHRyZWVEYXRhLnNwbGljZSgwKTtcbiAgfVxuXG4gIGNvbnN0IGdldExldmVsT3JkZXJEYXRhID0gKCkgPT4ge1xuICAgIGlmICghcXVldWVBcnJheS5sZW5ndGgpIHJldHVybjtcbiAgICB0cmVlRGF0YS5wdXNoKHF1ZXVlQXJyYXlbMF0uZGF0YSk7XG4gICAgaWYgKHF1ZXVlQXJyYXlbMF0ubGVmdCAhPT0gbnVsbCkgcXVldWVBcnJheS5wdXNoKHF1ZXVlQXJyYXlbMF0ubGVmdCk7XG4gICAgaWYgKHF1ZXVlQXJyYXlbMF0ucmlnaHQgIT09IG51bGwpIHF1ZXVlQXJyYXkucHVzaChxdWV1ZUFycmF5WzBdLnJpZ2h0KTtcbiAgICBxdWV1ZUFycmF5LnNoaWZ0KCk7XG4gICAgaWYgKHF1ZXVlQXJyYXkubGVuZ3RoKSBnZXRMZXZlbE9yZGVyRGF0YSgpO1xuICB9O1xuXG4gIGNvbnN0IGxldmVsT3JkZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBjbGVhclRyZWVEYXRhKClcbiAgICBxdWV1ZUFycmF5LnB1c2godGhpcyk7XG4gICAgZ2V0TGV2ZWxPcmRlckRhdGEoKTtcbiAgICBpZiAoIWZuKSByZXR1cm4gdHJlZURhdGE7XG4gICAgdHJlZURhdGEuZm9yRWFjaChmbik7XG4gIH07XG5cbiAgY29uc3QgZ2V0SW5vcmRlckRhdGEgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgZ2V0SW5vcmRlckRhdGEobm9kZS5sZWZ0KTtcbiAgICB0cmVlRGF0YS5wdXNoKG5vZGUuZGF0YSk7XG4gICAgZ2V0SW5vcmRlckRhdGEobm9kZS5yaWdodCk7XG4gIH07XG5cbiAgY29uc3QgaW5vcmRlciA9IGZ1bmN0aW9uIChmbikge1xuICAgIGNsZWFyVHJlZURhdGEoKVxuICAgIGdldElub3JkZXJEYXRhKHRoaXMpO1xuICAgIGlmICghZm4pIHJldHVybiB0cmVlRGF0YTtcbiAgICB0cmVlRGF0YS5mb3JFYWNoKGZuKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcmVvcmRlckRhdGEgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgdHJlZURhdGEucHVzaChub2RlLmRhdGEpO1xuICAgIGdldFByZW9yZGVyRGF0YShub2RlLmxlZnQpO1xuICAgIGdldFByZW9yZGVyRGF0YShub2RlLnJpZ2h0KTtcbiAgfVxuXG4gIGNvbnN0IHByZW9yZGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgY2xlYXJUcmVlRGF0YSgpXG4gICAgZ2V0UHJlb3JkZXJEYXRhKHRoaXMpO1xuICAgIGlmICghZm4pIHJldHVybiB0cmVlRGF0YTtcbiAgICB0cmVlRGF0YS5mb3JFYWNoKGZuKTtcbiAgfVxuXG4gIGNvbnN0IGdldFBvc3RvcmRlckRhdGEgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgZ2V0UG9zdG9yZGVyRGF0YShub2RlLmxlZnQpO1xuICAgIGdldFBvc3RvcmRlckRhdGEobm9kZS5yaWdodCk7XG4gICAgdHJlZURhdGEucHVzaChub2RlLmRhdGEpO1xuICB9XG5cbiAgY29uc3QgcG9zdG9yZGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgY2xlYXJUcmVlRGF0YSgpO1xuICAgIGdldFBvc3RvcmRlckRhdGEodGhpcyk7XG4gICAgaWYgKCFmbikgcmV0dXJuIHRyZWVEYXRhO1xuICAgIHRyZWVEYXRhLmZvckVhY2goZm4pO1xuICB9XG5cbiAgY29uc3QgY291bnRMZXZlbCA9ICgpID0+IHtcbiAgICBpZiAoIXF1ZXVlQXJyYXkubGVuZ3RoKSByZXR1cm5cbiAgICBxdWV1ZUFycmF5LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBsZXZlbEFycmF5LnB1c2gobm9kZSk7XG4gICAgfSk7XG4gICAgcXVldWVBcnJheS5zcGxpY2UoMClcbiAgICBsZXZlbEFycmF5LmZvckVhY2gobm9kZSA9PiB7XG4gICAgICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSBxdWV1ZUFycmF5LnB1c2gobm9kZS5sZWZ0KTtcbiAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSBxdWV1ZUFycmF5LnB1c2gobm9kZS5yaWdodCk7XG4gICAgfSlcbiAgICBsZXZlbEFycmF5LnNwbGljZSgwKTtcbiAgICBsZXZlbCArPSAxO1xuICAgIGNvdW50TGV2ZWwoKTtcbiAgfVxuXG4gIGNvbnN0IGhlaWdodCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgY29uc3Qgcm9vdCA9IGZpbmQobm9kZSwgdGhpcyk7XG4gICAgaWYgKHF1ZXVlQXJyYXkubGVuZ3RoKSBxdWV1ZUFycmF5LnNwbGljZSgwKTtcbiAgICBpZiAobGV2ZWxBcnJheS5sZW5ndGgpIGxldmVsQXJyYXkuc3BsaWNlKDApO1xuICAgIGxldmVsID0gMDtcbiAgICBxdWV1ZUFycmF5LnB1c2gocm9vdCk7XG4gICAgY291bnRMZXZlbCgpO1xuICAgIGxldmVsIC09IDFcbiAgICByZXR1cm4gbGV2ZWxcbiAgfVxuXG4gIGNvbnN0IGJhbGFuY2VkQmluYXJ5VHJlZSA9IGJ1aWxkQmFsYW5jZWRUcmVlKHNvcnRlZEFycmF5KTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihiYWxhbmNlZEJpbmFyeVRyZWUsIHtcbiAgICBpbnNlcnQsXG4gICAgZGVsZXRlUm9vdCxcbiAgICBmaW5kLFxuICAgIGxldmVsT3JkZXIsXG4gICAgaW5vcmRlcixcbiAgICBwcmVvcmRlcixcbiAgICBwb3N0b3JkZXIsXG4gICAgaGVpZ2h0XG4gIH0pO1xufTtcblxuY29uc3QgcmFuZG9tMSA9IG1ha2VSYW5kb21OdW1BcnJheSgzNik7XG5cbmNvbnN0IGZpcnN0VHJlZSA9IFRyZWUobnVtQXJyYXkpO1xuLy8gcHJldHR5UHJpbnQoZmlyc3RUcmVlKTtcbi8vIGZpcnN0VHJlZS5kZWxldGVSb290KHJhbmRvbTFbMV0pO1xucHJldHR5UHJpbnQoZmlyc3RUcmVlKTtcblxuY29uc3QgbG9nZ2VyID0gKGFyZykgPT4ge1xuICBjb25zb2xlLmxvZyhhcmcpO1xufTtcblxuY29uc29sZS5sb2coZmlyc3RUcmVlLmlub3JkZXIoKSk7XG4vLyBjb25zb2xlLmxvZyhmaXJzdFRyZWUucHJlb3JkZXIoKSk7XG4vLyBjb25zb2xlLmxvZyhmaXJzdFRyZWUucG9zdG9yZGVyKCkpO1xuZmlyc3RUcmVlLmluc2VydCg1MSk7XG5maXJzdFRyZWUuaW5zZXJ0KDUyKTtcbmZpcnN0VHJlZS5pbnNlcnQoNTMpO1xuZmlyc3RUcmVlLmluc2VydCg1NCk7XG5cbnByZXR0eVByaW50KGZpcnN0VHJlZSk7XG5jb25zb2xlLmxvZyhmaXJzdFRyZWUuaGVpZ2h0KDM2KSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=