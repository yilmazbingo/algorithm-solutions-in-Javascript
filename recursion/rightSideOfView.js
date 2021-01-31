// we are standing on the right side. From our view which nodes we can see. we cant see the nodes that blocked by right side of root node.
const BinarySearchTree = require("../search/binarySearchTree");

class RightSideViewBFS extends BinarySearchTree {
  constructor(root) {
    super(root);
  }
  rightSideView(root) {
    if (!root) return [];
    const result = [];
    let queue = [root];
    while (queue.length) {
      let length = queue.length,
        count = 0,
        currentNode;
      while (count < length) {
        currentNode = queue.shift();
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
        count++;
      }
      result.push(currentNode.value);
    }
    console.log("result", result);
    return result;
  }
}

const tree = new RightSideViewBFS();
tree.insert(9);
tree.insert(8);
tree.insert(7);
tree.insert(5);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

tree.rightSideView(tree.root);
console.log(tree.rightSideView(tree.node));
