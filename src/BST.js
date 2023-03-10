import config from "./scripts/loggingConfig";
import { prettyPrint } from "./scripts/loggingConfig";
import { default as mergeSort2, distinctify } from "./scripts/arrayHandler";
import makeRandomNumArray from "./scripts/makeRandomArray";

const numArray = [
  5, 75, 99, 100, 29, 1, 85, 63, 14, 85, 2, 14, 76, 45, 1, 25, 66, 75, 36, 9,
  11,
];

const Tree = function (array) {
  const distinctArray = distinctify(array);
  const sortedArray = mergeSort2(distinctArray);

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
  const random1 = makeRandomNumArray(36);
  const firstTree = Tree(random1);
  const random150 = makeRandomNumArray(150);
  console.log(firstTree.isBalanced())
  console.log(firstTree.levelOrder());
  console.log(firstTree.preorder());
  console.log(firstTree.postorder());
  console.log(firstTree.inorder());
  random150.forEach(num => {
    firstTree.insert(num)
  });
  prettyPrint(firstTree);
  console.log(firstTree.isBalanced());
  firstTree.rebalance();
  console.log(firstTree.levelOrder());
  console.log(firstTree.preorder());
  console.log(firstTree.postorder());
  console.log(firstTree.inorder());
}


testTree();

export default Tree;
