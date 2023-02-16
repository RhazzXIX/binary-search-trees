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

const random1 = makeRandomNumArray(1)

const firstTree = Tree(numArray);
prettyPrint(firstTree);
firstTree.insert(3);
prettyPrint(firstTree);

export default Tree;
