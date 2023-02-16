import config from "./loggingConfig"
import { prettyPrint } from "./loggingConfig"
import mergeSort2 from "./mergeSort";


const numArray = [5, 75, 2, 36 , 1 , 99];

const tree = function (array) {
  const sortedArray = (mergeSort2(array));

  const Node = (data, leftData, rightData) => {
    const TreeNode = {
      data,
      left: leftData,
      right: rightData,
    }
    return TreeNode;
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

  return node1
}




prettyPrint(tree(numArray));






export default tree