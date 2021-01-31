const BinarySearchTree = require("../search/binarySearchTree");

class LevelOrder extends BinarySearchTree {
  constructor(root) {
    super(root);
  }
  levelOrder(root) {
    if (!root) {
      return [];
    }
    const result = [];
    const queue = [root];
    while (queue.length) {
      const currentLevelValues = [];
      let length = queue.length,
        count = 0;
      while (count < length) {
        const currentNode = queue.shift();
        currentLevelValues.push(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
        count++;
      }
      result.push(currentLevelValues);
    }
    return result;
  }
}

const tree = new LevelOrder();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
tree.levelOrder();
console.log(tree.levelOrder(tree.root));
