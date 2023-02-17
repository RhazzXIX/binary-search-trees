import config from "./scripts/loggingConfig";
import { prettyPrint } from "./scripts/loggingConfig";
import { default as mergeSort2, distinctify } from "./scripts/arrayHandler";
import makeRandomNumArray from "./scripts/makeRandomArray";

const numArray = [
  5, 75, 99, 100, 29, 1, 85, 63, 14, 85, 2, 14, 76, 45, 1, 25, 66, 75, 36, 9,
  11,
];
const testArray = [5, 1, 25];

const Tree = function (array) {
  const distinctArray = distinctify(array);
  const sortedArray = mergeSort2(distinctArray);

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
    console.log(value);
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
        console.log(appropriateLeaf);
        deleteRoot.call(this, appropriateLeaf.data);
        if (value < previousRoot.data) {
          previousRoot.left = Node(
            appropriateLeaf.data,
            toBeDeleted.left,
            toBeDeleted.right
          );
        } else if (value > previousRoot.data) {
          previousRoot.right = Node(
            appropriateLeaf.data,
            toBeDeleted.left,
            toBeDeleted.right
          );
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

  const balancedBinaryTree = buildBalancedTree(sortedArray);

  return Object.assign(balancedBinaryTree, { insert, deleteRoot, find });
};

const random1 = makeRandomNumArray(352);

const firstTree = Tree(random1);
prettyPrint(firstTree);
firstTree.deleteRoot(random1[1]);
prettyPrint(firstTree);

export default Tree;
