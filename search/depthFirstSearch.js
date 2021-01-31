// the search follows one branch of the tree down as many levels as possible until the target notice found or the end is reached.
// it has lower memory requirement because it is not necessary to store all the child ppinters at each level.
// as the name suggests DEPTH first 
. it can get slow if the tree or graph is deep.
// If the tree is very wide, use DFS.
// If the solutions are frequent but located deep in the tree use DFS.
// determining whether a path exists between two nodes. This is waht DFS is built for.
// inorder,postorder and preorder search.
// inorder gives us everything inorder in binary search tree.
// preorder helps us reacreate the tree.
const BinarySearchTree = require("./binarySearchTree");

// recursion of DFS is easier than iteration
class DepthFirstSearch extends BinarySearchTree {
  constructor(root) {
    super(root);
  }
  DFSInorder() {
    return traverseInOrder(this.root, []);
  }
  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  console.log(list);
}
// with preorder we start from the root. that's why we push it first
function traversePreOrder(node, list) {
  list.push(node.value);
  console.log(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  console.log(list);
}
// as the name suggests "POST" we add it to the list after
function traversePostOrder(node, list) {
  console.log(node.value);
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);

  console.log(list);
}

const tree = new DepthFirstSearch();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.DFSInorder();
