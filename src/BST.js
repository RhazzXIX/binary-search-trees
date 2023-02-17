import config from "./scripts/loggingConfig";
import { prettyPrint } from "./scripts/loggingConfig";
import { default as mergeSort2, distinctify } from "./scripts/arrayHandler";
import makeRandomNumArray from "./scripts/makeRandomArray";

const numArray = [5, 75, 100, 29, 1, 85, 63, 14, 85, 2, 14, 76, 45, 1 , 25 , 66 , 75 , 36 , 9 , 11];
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
      root = Node(value, null, null)
      return root
    };
    if (value < root.data) {
      root.left = insertRec(value, root.left)
    } else if (value > root.data) {
      root.right = insertRec(value, root.right)
    }
    return root
  }

  const insert = function (value) {
    insertRec(value, this)
  }

  const deleteRec = function(value, root) {
    console.log(value);
    if (value === root.data) {
      root.data = null;
      return
    }
    if (value < root.data) deleteRec(value, root.left)
    else if (value > root.data) deleteRec(value, root.right);
  }

  const deleteRoot = function (value) {
    deleteRec(value, this)
  }

  const find = function (value, root) {
    if (root === undefined) {
      return find(value, this)
    };
    if (root === null) {
      console.log('Data not found')
      return root
    }
    if (value === root.data) return root;
    if (value < root.data) {
      return find(value, root.left)
    } else if (value > root.data) {
      return find(value, root.right)
    }    
  }


  const balancedBinaryTree = buildBalancedTree(sortedArray);

  return Object.assign(balancedBinaryTree, {insert, deleteRoot, find});
};

const random1 = makeRandomNumArray(1155)

const firstTree = Tree(testArray);
// prettyPrint(firstTree);
firstTree.insert(3);
// firstTree.deleteRoot(36);
// prettyPrint(firstTree);
console.log(firstTree.find(99));

export default Tree;
