// Breadth First Search uses additional memory because it is necessary to track the child nodes of all the nodes on a given
// it is very good for finding the shortest path between a starting point and any other reachable node.
// If the tree is very deep and solutions are rare we use BFS. DFS would take a long time
// For finding the shortest path, use BFS
const BinarySearchTree = require("./binarySearchTree");

class BreadthFirstSearch extends BinarySearchTree {
  constructor(root) {
    super(root);
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; // we insert numbers into
    let queue = []; // keep track of level we are at
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.value);
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  recursiveBreadthFirstSearch(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    console.log(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.recursiveBreadthFirstSearch(queue, list);
  }
}

const tree = new BreadthFirstSearch();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);
// tree.breadthFirstSearch();
tree.recursiveBreadthFirstSearch([tree.root], []);
