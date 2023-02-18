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

const Tree = function (array) {
  const distinctArray = (0,_scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__.distinctify)(array);
  const sortedArray = (0,_scripts_arrayHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(distinctArray);

  const treeData = [];
  const queueArray = [];
  let level = 0;
  let depthEdges = 0;
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
      console.log("Data is already stored");
      return;
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
  };

  const getLevelOrderData = () => {
    if (!queueArray.length) return;
    treeData.push(queueArray[0].data);
    if (queueArray[0].left !== null) queueArray.push(queueArray[0].left);
    if (queueArray[0].right !== null) queueArray.push(queueArray[0].right);
    queueArray.shift();
    if (queueArray.length) getLevelOrderData();
  };

  const levelOrder = function (fn) {
    clearTreeData();
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
    clearTreeData();
    getInorderData(this);
    if (!fn) return treeData;
    treeData.forEach(fn);
  };

  const getPreorderData = (node) => {
    if (node === null) return;
    treeData.push(node.data);
    getPreorderData(node.left);
    getPreorderData(node.right);
  };

  const preorder = function (fn) {
    clearTreeData();
    getPreorderData(this);
    if (!fn) return treeData;
    treeData.forEach(fn);
  };

  const getPostorderData = (node) => {
    if (node === null) return;
    getPostorderData(node.left);
    getPostorderData(node.right);
    treeData.push(node.data);
  };

  const postorder = function (fn) {
    clearTreeData();
    getPostorderData(this);
    if (!fn) return treeData;
    treeData.forEach(fn);
  };

  const countLevel = () => {
    if (!queueArray.length) return;
    queueArray.forEach((node) => {
      levelArray.push(node);
    });
    queueArray.splice(0);
    levelArray.forEach((node) => {
      if (node.left !== null) queueArray.push(node.left);
      if (node.right !== null) queueArray.push(node.right);
    });
    levelArray.splice(0);
    level += 1;
    countLevel();
  };

  const height = function (node) {
    if (!node) return height(this);
    if (queueArray.length) queueArray.splice(0);
    if (levelArray.length) levelArray.splice(0);
    level = 0;
    queueArray.push(node);
    countLevel();
    const edges = level - 1;
    return edges;
  };

  const countDepth = (root, subTree) => {
    if (root === subTree) return;
    if (subTree.data < root.data) {
      depthEdges += 1;
      countDepth(root.left, subTree);
    } else if (subTree.data > root.data) {
      depthEdges += 1;
      countDepth(root.right, subTree);
    }
  };

  const depth = function (node) {
    const root = find(node, this);
    if (root === null) return root;
    depthEdges = 0;
    countDepth(this, root);
    return depthEdges;
  };

  const isBalanced = function ()  {
    const leftSubTreeHeight = height(this.left)
    const rightSubTreeHeight = height(this.right)
    const difference = (leftSubTreeHeight - rightSubTreeHeight)

    if (difference < 1 && difference > -1) return true
    return false
  }

  const rebalance = function () {
    const inorderArray = this.inorder()
    const newTree = Tree(inorderArray);
    this.data = newTree.data;
    this.left = newTree.left;
    this.right = newTree.right;
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
    height,
    depth,
    isBalanced,
    rebalance
  });
};


const testTree = () => {
  const random1 = (0,_scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__["default"])(36);
  const firstTree = Tree(random1);
  const random150 = (0,_scripts_makeRandomArray__WEBPACK_IMPORTED_MODULE_2__["default"])(150);
  console.log(firstTree.isBalanced())
  console.log(firstTree.levelOrder());
  console.log(firstTree.preorder());
  console.log(firstTree.postorder());
  console.log(firstTree.inorder());
  random150.forEach(num => {
    firstTree.insert(num)
  });
  (0,_scripts_loggingConfig__WEBPACK_IMPORTED_MODULE_0__.prettyPrint)(firstTree);
  console.log(firstTree.isBalanced());
  firstTree.rebalance();
  console.log(firstTree.levelOrder());
  console.log(firstTree.preorder());
  console.log(firstTree.postorder());
  console.log(firstTree.inorder());
}


testTree();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0Esa0JBQWtCLG9FQUFrQjtBQUNwQztBQUNBLG9CQUFvQixvRUFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSxtRUFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzLy4vc3JjL3NjcmlwdHMvYXJyYXlIYW5kbGVyLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9sb2dnaW5nQ29uZmlnLmpzIiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvc2NyaXB0cy9tYWtlUmFuZG9tQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iaW5hcnktc2VhcmNoLXRyZWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmluYXJ5LXNlYXJjaC10cmVlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JpbmFyeS1zZWFyY2gtdHJlZXMvLi9zcmMvQlNULmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSBcIi4vbG9nZ2luZ0NvbmZpZ1wiXG5cbmZ1bmN0aW9uIG1lcmdlU29ydChhcnJheSkge1xuICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gIGNvbnN0IHNsaWNlciA9IE1hdGguZmxvb3IoYXJyYXkubGVuZ3RoIC8gMik7XG4gIGNvbnN0IGFycmF5MSA9IG1lcmdlU29ydChhcnJheS5zbGljZSgwLCBzbGljZXIpKTtcbiAgY29uc3QgYXJyYXkyID0gbWVyZ2VTb3J0KGFycmF5LnNsaWNlKHNsaWNlcikpO1xuICBjb25zdCBzb3J0ZWRBcnJheSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBtZXJnZVNvcnQyKGFycmF5KSB7XG4gIGlmIChhcnJheS5sZW5ndGggPT09IDEpIHJldHVybiBhcnJheTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBbXTtcbiAgY29uc3Qgc2xpY2VyID0gTWF0aC5mbG9vcihhcnJheS5sZW5ndGggLyAyKTtcbiAgY29uc3QgYXJyYXkxID0gbWVyZ2VTb3J0MihhcnJheS5zbGljZSgwLCBzbGljZXIpKTtcbiAgY29uc3QgYXJyYXkyID0gbWVyZ2VTb3J0MihhcnJheS5zbGljZShzbGljZXIpKTtcbiAgbGV0IGogPSAwO1xuICBsZXQgayA9IDA7XG5cbiAgd2hpbGUgKGogPCBhcnJheTEubGVuZ3RoICYmIGsgPCBhcnJheTIubGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5MVtqXSA8IGFycmF5MltrXSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTFbal0pO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSBpZiAoYXJyYXkxW2pdID4gYXJyYXkyW2tdKSB7XG4gICAgICBzb3J0ZWRBcnJheS5wdXNoKGFycmF5MltrXSk7XG4gICAgICBrICs9IDE7XG4gICAgfVxuICB9XG4gIGlmIChqIDwgYXJyYXkxLmxlbmd0aCkge1xuICAgIGZvciAoajsgaiA8IGFycmF5MS5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgc29ydGVkQXJyYXkucHVzaChhcnJheTFbal0pO1xuICAgIH1cbiAgfVxuICBpZiAoayA8IGFycmF5Mi5sZW5ndGgpIHtcbiAgICBmb3IgKGs7IGsgPCBhcnJheTIubGVuZ3RoOyBrICs9IDEpIHtcbiAgICAgIHNvcnRlZEFycmF5LnB1c2goYXJyYXkyW2tdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc29ydGVkQXJyYXk7XG59XG5cbmNvbnN0IGRpc3RpbmN0aWZ5ID0gKGFycmF5KSA9PiB7XG4gIGNvbnN0IGRpc3RpbmN0QXJyYXkgPSBbXTtcbiAgXG4gIGFycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgY29uc3QgaGFzQ29weSA9IGRpc3RpbmN0QXJyYXkuaW5jbHVkZXMoZWxlbWVudClcbiAgICBpZiAoaGFzQ29weSkgcmV0dXJuXG4gICAgZGlzdGluY3RBcnJheS5wdXNoKGVsZW1lbnQpO1xuICB9KTtcblxuICByZXR1cm4gZGlzdGluY3RBcnJheTtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0MlxuZXhwb3J0IHtkaXN0aW5jdGlmeX1cbiIsImV4cG9ydCBkZWZhdWx0IFsnbG9nJywgJ3dhcm4nLCAnZXJyb3InXS5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gY29uc29sZVttZXRob2ROYW1lXTtcbiAgY29uc29sZVttZXRob2ROYW1lXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgbGV0IGluaXRpYXRvciA9ICd1bmtub3duIHBsYWNlJztcbiAgICB0cnkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKHR5cGVvZiBlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBlLnN0YWNrLnNwbGl0KCdcXG4nKSkge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsaW5lLm1hdGNoKC9eXFxzK2F0XFxzKyguKikvKTtcbiAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgaWYgKCFpc0ZpcnN0KSB7IC8vIGZpcnN0IGxpbmUgLSBjdXJyZW50IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Vjb25kIGxpbmUgLSBjYWxsZXIgKHdoYXQgd2UgYXJlIGxvb2tpbmcgZm9yKVxuICAgICAgICAgICAgICBpbml0aWF0b3IgPSBtYXRjaGVzWzFdO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgb3JpZ2luYWxNZXRob2QuYXBwbHkoY29uc29sZSwgWy4uLmFyZ3MsICdcXG4nLCBgICBhdCAke2luaXRpYXRvcn1gXSk7XG4gIH07XG59KTtcblxuY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gJycsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAn4pSCICAgJyA6ICcgICAgJ31gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gJ+KUlOKUgOKUgCAnIDogJ+KUjOKUgOKUgCAnfSR7bm9kZS5kYXRhfWApO1xuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyAnICAgICcgOiAn4pSCICAgJ31gLCB0cnVlKTtcbiAgfVxufVxuXG5leHBvcnQge3ByZXR0eVByaW50fSIsImNvbnN0IG1ha2VSYW5kb21OdW1BcnJheSA9IChhcnJheUxlbmd0aCkgPT4ge1xuICBjb25zdCByYW5kb21OdW1BcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5TGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5KSArIDEpXG4gICAgcmFuZG9tTnVtQXJyYXkucHVzaChyYW5kb21OdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIHJhbmRvbU51bUFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSYW5kb21OdW1BcnJheSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9zY3JpcHRzL2xvZ2dpbmdDb25maWdcIjtcbmltcG9ydCB7IHByZXR0eVByaW50IH0gZnJvbSBcIi4vc2NyaXB0cy9sb2dnaW5nQ29uZmlnXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIG1lcmdlU29ydDIsIGRpc3RpbmN0aWZ5IH0gZnJvbSBcIi4vc2NyaXB0cy9hcnJheUhhbmRsZXJcIjtcbmltcG9ydCBtYWtlUmFuZG9tTnVtQXJyYXkgZnJvbSBcIi4vc2NyaXB0cy9tYWtlUmFuZG9tQXJyYXlcIjtcblxuY29uc3QgbnVtQXJyYXkgPSBbXG4gIDUsIDc1LCA5OSwgMTAwLCAyOSwgMSwgODUsIDYzLCAxNCwgODUsIDIsIDE0LCA3NiwgNDUsIDEsIDI1LCA2NiwgNzUsIDM2LCA5LFxuICAxMSxcbl07XG5cbmNvbnN0IFRyZWUgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgY29uc3QgZGlzdGluY3RBcnJheSA9IGRpc3RpbmN0aWZ5KGFycmF5KTtcbiAgY29uc3Qgc29ydGVkQXJyYXkgPSBtZXJnZVNvcnQyKGRpc3RpbmN0QXJyYXkpO1xuXG4gIGNvbnN0IHRyZWVEYXRhID0gW107XG4gIGNvbnN0IHF1ZXVlQXJyYXkgPSBbXTtcbiAgbGV0IGxldmVsID0gMDtcbiAgbGV0IGRlcHRoRWRnZXMgPSAwO1xuICBjb25zdCBsZXZlbEFycmF5ID0gW107XG5cbiAgY29uc3QgTm9kZSA9IChkYXRhLCBsZWZ0RGF0YSwgcmlnaHREYXRhKSA9PiB7XG4gICAgY29uc3QgVHJlZU5vZGUgPSB7XG4gICAgICBkYXRhLFxuICAgICAgbGVmdDogbGVmdERhdGEsXG4gICAgICByaWdodDogcmlnaHREYXRhLFxuICAgIH07XG4gICAgcmV0dXJuIFRyZWVOb2RlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkQmFsYW5jZWRUcmVlID0gKGhhbmRsZWRBcnJheSkgPT4ge1xuICAgIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoaGFuZGxlZEFycmF5Lmxlbmd0aCAvIDIpO1xuICAgIGlmIChoYW5kbGVkQXJyYXkubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBidWlsdFRyZWUgPSBOb2RlKFxuICAgICAgaGFuZGxlZEFycmF5W21pZF0sXG4gICAgICBidWlsZEJhbGFuY2VkVHJlZShoYW5kbGVkQXJyYXkuc2xpY2UoMCwgbWlkKSksXG4gICAgICBidWlsZEJhbGFuY2VkVHJlZShoYW5kbGVkQXJyYXkuc2xpY2UobWlkICsgMSkpXG4gICAgKTtcbiAgICByZXR1cm4gYnVpbHRUcmVlO1xuICB9O1xuXG4gIGNvbnN0IGluc2VydFJlYyA9IGZ1bmN0aW9uICh2YWx1ZSwgcm9vdCkge1xuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICByb290ID0gTm9kZSh2YWx1ZSwgbnVsbCwgbnVsbCk7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByb290LmxlZnQgPSBpbnNlcnRSZWModmFsdWUsIHJvb3QubGVmdCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSA+IHJvb3QuZGF0YSkge1xuICAgICAgcm9vdC5yaWdodCA9IGluc2VydFJlYyh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gICAgfVxuICAgIHJldHVybiByb290O1xuICB9O1xuXG4gIGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWUsIHJvb3QpIHtcbiAgICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmluZCh2YWx1ZSwgdGhpcyk7XG4gICAgfVxuICAgIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgbm90IGZvdW5kXCIpO1xuICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gcm9vdC5kYXRhKSByZXR1cm4gcm9vdDtcbiAgICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAgIHJldHVybiBmaW5kKHZhbHVlLCByb290LmxlZnQpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAgIHJldHVybiBmaW5kKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKGZpbmQodmFsdWUsIHRoaXMpICE9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkRhdGEgaXMgYWxyZWFkeSBzdG9yZWRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGluc2VydFJlYyh2YWx1ZSwgdGhpcyk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJldmlvdXNSb290ID0gZnVuY3Rpb24gKHZhbHVlLCByb290KSB7XG4gICAgaWYgKHJvb3QubGVmdC5kYXRhID09PSB2YWx1ZSB8fCByb290LnJpZ2h0LmRhdGEgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG4gICAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0UHJldmlvdXNSb290KHZhbHVlLCByb290LmxlZnQpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAgIHJldHVybiBnZXRQcmV2aW91c1Jvb3QodmFsdWUsIHJvb3QucmlnaHQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRBcHByb3ByaWF0ZUxlYWYgPSBmdW5jdGlvbiAodmFsdWUsIHJvb3QpIHtcbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsICYmIHJvb3QucmlnaHQgPT09IG51bGwpIHJldHVybiByb290O1xuICAgIGlmICh2YWx1ZSA9PT0gcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0QXBwcm9wcmlhdGVMZWFmKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgICByZXR1cm4gZ2V0QXBwcm9wcmlhdGVMZWFmKHZhbHVlLCByb290LmxlZnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVSb290ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgY29uc3QgdG9CZURlbGV0ZWQgPSBmaW5kKHZhbHVlLCB0aGlzKTtcbiAgICBpZiAodG9CZURlbGV0ZWQgPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBwcmV2aW91c1Jvb3QgPSBnZXRQcmV2aW91c1Jvb3QodmFsdWUsIHRoaXMpO1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSB0b0JlRGVsZXRlZC5sZWZ0ICE9PSBudWxsICYmIHRvQmVEZWxldGVkLnJpZ2h0ID09PSBudWxsOlxuICAgICAgICBpZiAodmFsdWUgPCBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5sZWZ0ID0gdG9CZURlbGV0ZWQubGVmdDtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LnJpZ2h0ID0gdG9CZURlbGV0ZWQubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCA9PT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCAhPT0gbnVsbDpcbiAgICAgICAgaWYgKHZhbHVlIDwgcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QubGVmdCA9IHRvQmVEZWxldGVkLnJpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QucmlnaHQgPSB0b0JlRGVsZXRlZC5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCAhPT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCAhPT0gbnVsbDpcbiAgICAgICAgY29uc3QgYXBwcm9wcmlhdGVMZWFmID0gZ2V0QXBwcm9wcmlhdGVMZWFmKHZhbHVlLCB0b0JlRGVsZXRlZCk7XG4gICAgICAgIGRlbGV0ZVJvb3QuY2FsbCh0aGlzLCBhcHByb3ByaWF0ZUxlYWYuZGF0YSk7XG4gICAgICAgIGFwcHJvcHJpYXRlTGVhZi5sZWZ0ID0gdG9CZURlbGV0ZWQubGVmdDtcbiAgICAgICAgYXBwcm9wcmlhdGVMZWFmLnJpZ2h0ID0gdG9CZURlbGV0ZWQucmlnaHQ7XG4gICAgICAgIGlmICh2YWx1ZSA8IHByZXZpb3VzUm9vdC5kYXRhKSB7XG4gICAgICAgICAgcHJldmlvdXNSb290LmxlZnQgPSBhcHByb3ByaWF0ZUxlYWY7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5yaWdodCA9IGFwcHJvcHJpYXRlTGVhZjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgdG9CZURlbGV0ZWQubGVmdCA9PT0gbnVsbCAmJiB0b0JlRGVsZXRlZC5yaWdodCA9PT0gbnVsbDpcbiAgICAgICAgaWYgKHZhbHVlIDwgcHJldmlvdXNSb290LmRhdGEpIHtcbiAgICAgICAgICBwcmV2aW91c1Jvb3QubGVmdCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBwcmV2aW91c1Jvb3QuZGF0YSkge1xuICAgICAgICAgIHByZXZpb3VzUm9vdC5yaWdodCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgfTtcblxuICBjb25zdCBjbGVhclRyZWVEYXRhID0gKCkgPT4ge1xuICAgIGlmICh0cmVlRGF0YS5sZW5ndGgpIHRyZWVEYXRhLnNwbGljZSgwKTtcbiAgfTtcblxuICBjb25zdCBnZXRMZXZlbE9yZGVyRGF0YSA9ICgpID0+IHtcbiAgICBpZiAoIXF1ZXVlQXJyYXkubGVuZ3RoKSByZXR1cm47XG4gICAgdHJlZURhdGEucHVzaChxdWV1ZUFycmF5WzBdLmRhdGEpO1xuICAgIGlmIChxdWV1ZUFycmF5WzBdLmxlZnQgIT09IG51bGwpIHF1ZXVlQXJyYXkucHVzaChxdWV1ZUFycmF5WzBdLmxlZnQpO1xuICAgIGlmIChxdWV1ZUFycmF5WzBdLnJpZ2h0ICE9PSBudWxsKSBxdWV1ZUFycmF5LnB1c2gocXVldWVBcnJheVswXS5yaWdodCk7XG4gICAgcXVldWVBcnJheS5zaGlmdCgpO1xuICAgIGlmIChxdWV1ZUFycmF5Lmxlbmd0aCkgZ2V0TGV2ZWxPcmRlckRhdGEoKTtcbiAgfTtcblxuICBjb25zdCBsZXZlbE9yZGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgY2xlYXJUcmVlRGF0YSgpO1xuICAgIHF1ZXVlQXJyYXkucHVzaCh0aGlzKTtcbiAgICBnZXRMZXZlbE9yZGVyRGF0YSgpO1xuICAgIGlmICghZm4pIHJldHVybiB0cmVlRGF0YTtcbiAgICB0cmVlRGF0YS5mb3JFYWNoKGZuKTtcbiAgfTtcblxuICBjb25zdCBnZXRJbm9yZGVyRGF0YSA9IChub2RlKSA9PiB7XG4gICAgaWYgKG5vZGUgPT09IG51bGwpIHJldHVybjtcbiAgICBnZXRJbm9yZGVyRGF0YShub2RlLmxlZnQpO1xuICAgIHRyZWVEYXRhLnB1c2gobm9kZS5kYXRhKTtcbiAgICBnZXRJbm9yZGVyRGF0YShub2RlLnJpZ2h0KTtcbiAgfTtcblxuICBjb25zdCBpbm9yZGVyID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgY2xlYXJUcmVlRGF0YSgpO1xuICAgIGdldElub3JkZXJEYXRhKHRoaXMpO1xuICAgIGlmICghZm4pIHJldHVybiB0cmVlRGF0YTtcbiAgICB0cmVlRGF0YS5mb3JFYWNoKGZuKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcmVvcmRlckRhdGEgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgdHJlZURhdGEucHVzaChub2RlLmRhdGEpO1xuICAgIGdldFByZW9yZGVyRGF0YShub2RlLmxlZnQpO1xuICAgIGdldFByZW9yZGVyRGF0YShub2RlLnJpZ2h0KTtcbiAgfTtcblxuICBjb25zdCBwcmVvcmRlciA9IGZ1bmN0aW9uIChmbikge1xuICAgIGNsZWFyVHJlZURhdGEoKTtcbiAgICBnZXRQcmVvcmRlckRhdGEodGhpcyk7XG4gICAgaWYgKCFmbikgcmV0dXJuIHRyZWVEYXRhO1xuICAgIHRyZWVEYXRhLmZvckVhY2goZm4pO1xuICB9O1xuXG4gIGNvbnN0IGdldFBvc3RvcmRlckRhdGEgPSAobm9kZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm47XG4gICAgZ2V0UG9zdG9yZGVyRGF0YShub2RlLmxlZnQpO1xuICAgIGdldFBvc3RvcmRlckRhdGEobm9kZS5yaWdodCk7XG4gICAgdHJlZURhdGEucHVzaChub2RlLmRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHBvc3RvcmRlciA9IGZ1bmN0aW9uIChmbikge1xuICAgIGNsZWFyVHJlZURhdGEoKTtcbiAgICBnZXRQb3N0b3JkZXJEYXRhKHRoaXMpO1xuICAgIGlmICghZm4pIHJldHVybiB0cmVlRGF0YTtcbiAgICB0cmVlRGF0YS5mb3JFYWNoKGZuKTtcbiAgfTtcblxuICBjb25zdCBjb3VudExldmVsID0gKCkgPT4ge1xuICAgIGlmICghcXVldWVBcnJheS5sZW5ndGgpIHJldHVybjtcbiAgICBxdWV1ZUFycmF5LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGxldmVsQXJyYXkucHVzaChub2RlKTtcbiAgICB9KTtcbiAgICBxdWV1ZUFycmF5LnNwbGljZSgwKTtcbiAgICBsZXZlbEFycmF5LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHF1ZXVlQXJyYXkucHVzaChub2RlLmxlZnQpO1xuICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHF1ZXVlQXJyYXkucHVzaChub2RlLnJpZ2h0KTtcbiAgICB9KTtcbiAgICBsZXZlbEFycmF5LnNwbGljZSgwKTtcbiAgICBsZXZlbCArPSAxO1xuICAgIGNvdW50TGV2ZWwoKTtcbiAgfTtcblxuICBjb25zdCBoZWlnaHQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmICghbm9kZSkgcmV0dXJuIGhlaWdodCh0aGlzKTtcbiAgICBpZiAocXVldWVBcnJheS5sZW5ndGgpIHF1ZXVlQXJyYXkuc3BsaWNlKDApO1xuICAgIGlmIChsZXZlbEFycmF5Lmxlbmd0aCkgbGV2ZWxBcnJheS5zcGxpY2UoMCk7XG4gICAgbGV2ZWwgPSAwO1xuICAgIHF1ZXVlQXJyYXkucHVzaChub2RlKTtcbiAgICBjb3VudExldmVsKCk7XG4gICAgY29uc3QgZWRnZXMgPSBsZXZlbCAtIDE7XG4gICAgcmV0dXJuIGVkZ2VzO1xuICB9O1xuXG4gIGNvbnN0IGNvdW50RGVwdGggPSAocm9vdCwgc3ViVHJlZSkgPT4ge1xuICAgIGlmIChyb290ID09PSBzdWJUcmVlKSByZXR1cm47XG4gICAgaWYgKHN1YlRyZWUuZGF0YSA8IHJvb3QuZGF0YSkge1xuICAgICAgZGVwdGhFZGdlcyArPSAxO1xuICAgICAgY291bnREZXB0aChyb290LmxlZnQsIHN1YlRyZWUpO1xuICAgIH0gZWxzZSBpZiAoc3ViVHJlZS5kYXRhID4gcm9vdC5kYXRhKSB7XG4gICAgICBkZXB0aEVkZ2VzICs9IDE7XG4gICAgICBjb3VudERlcHRoKHJvb3QucmlnaHQsIHN1YlRyZWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZXB0aCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgY29uc3Qgcm9vdCA9IGZpbmQobm9kZSwgdGhpcyk7XG4gICAgaWYgKHJvb3QgPT09IG51bGwpIHJldHVybiByb290O1xuICAgIGRlcHRoRWRnZXMgPSAwO1xuICAgIGNvdW50RGVwdGgodGhpcywgcm9vdCk7XG4gICAgcmV0dXJuIGRlcHRoRWRnZXM7XG4gIH07XG5cbiAgY29uc3QgaXNCYWxhbmNlZCA9IGZ1bmN0aW9uICgpICB7XG4gICAgY29uc3QgbGVmdFN1YlRyZWVIZWlnaHQgPSBoZWlnaHQodGhpcy5sZWZ0KVxuICAgIGNvbnN0IHJpZ2h0U3ViVHJlZUhlaWdodCA9IGhlaWdodCh0aGlzLnJpZ2h0KVxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSAobGVmdFN1YlRyZWVIZWlnaHQgLSByaWdodFN1YlRyZWVIZWlnaHQpXG5cbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEgJiYgZGlmZmVyZW5jZSA+IC0xKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgcmViYWxhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGlub3JkZXJBcnJheSA9IHRoaXMuaW5vcmRlcigpXG4gICAgY29uc3QgbmV3VHJlZSA9IFRyZWUoaW5vcmRlckFycmF5KTtcbiAgICB0aGlzLmRhdGEgPSBuZXdUcmVlLmRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbmV3VHJlZS5sZWZ0O1xuICAgIHRoaXMucmlnaHQgPSBuZXdUcmVlLnJpZ2h0O1xuICB9XG5cbiAgY29uc3QgYmFsYW5jZWRCaW5hcnlUcmVlID0gYnVpbGRCYWxhbmNlZFRyZWUoc29ydGVkQXJyYXkpO1xuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGJhbGFuY2VkQmluYXJ5VHJlZSwge1xuICAgIGluc2VydCxcbiAgICBkZWxldGVSb290LFxuICAgIGZpbmQsXG4gICAgbGV2ZWxPcmRlcixcbiAgICBpbm9yZGVyLFxuICAgIHByZW9yZGVyLFxuICAgIHBvc3RvcmRlcixcbiAgICBoZWlnaHQsXG4gICAgZGVwdGgsXG4gICAgaXNCYWxhbmNlZCxcbiAgICByZWJhbGFuY2VcbiAgfSk7XG59O1xuXG5cbmNvbnN0IHRlc3RUcmVlID0gKCkgPT4ge1xuICBjb25zdCByYW5kb20xID0gbWFrZVJhbmRvbU51bUFycmF5KDM2KTtcbiAgY29uc3QgZmlyc3RUcmVlID0gVHJlZShyYW5kb20xKTtcbiAgY29uc3QgcmFuZG9tMTUwID0gbWFrZVJhbmRvbU51bUFycmF5KDE1MCk7XG4gIGNvbnNvbGUubG9nKGZpcnN0VHJlZS5pc0JhbGFuY2VkKCkpXG4gIGNvbnNvbGUubG9nKGZpcnN0VHJlZS5sZXZlbE9yZGVyKCkpO1xuICBjb25zb2xlLmxvZyhmaXJzdFRyZWUucHJlb3JkZXIoKSk7XG4gIGNvbnNvbGUubG9nKGZpcnN0VHJlZS5wb3N0b3JkZXIoKSk7XG4gIGNvbnNvbGUubG9nKGZpcnN0VHJlZS5pbm9yZGVyKCkpO1xuICByYW5kb20xNTAuZm9yRWFjaChudW0gPT4ge1xuICAgIGZpcnN0VHJlZS5pbnNlcnQobnVtKVxuICB9KTtcbiAgcHJldHR5UHJpbnQoZmlyc3RUcmVlKTtcbiAgY29uc29sZS5sb2coZmlyc3RUcmVlLmlzQmFsYW5jZWQoKSk7XG4gIGZpcnN0VHJlZS5yZWJhbGFuY2UoKTtcbiAgY29uc29sZS5sb2coZmlyc3RUcmVlLmxldmVsT3JkZXIoKSk7XG4gIGNvbnNvbGUubG9nKGZpcnN0VHJlZS5wcmVvcmRlcigpKTtcbiAgY29uc29sZS5sb2coZmlyc3RUcmVlLnBvc3RvcmRlcigpKTtcbiAgY29uc29sZS5sb2coZmlyc3RUcmVlLmlub3JkZXIoKSk7XG59XG5cblxudGVzdFRyZWUoKTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==