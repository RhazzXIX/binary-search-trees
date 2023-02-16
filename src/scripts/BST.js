import config from "./loggingConfig"
import { prettyPrint } from "./loggingConfig"
import {default as mergeSort2, distinctify} from "./arrayHandler";


const numArray = [5, 75,100, 25, 99, 1, 2, 36 , 1 , 99];

const Tree = function (array) {
  const distinctArray = distinctify(array);
  const sortedArray = (mergeSort2(distinctArray));

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






export default Tree