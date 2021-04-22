// Dfs comes with 3 potential traversal types, preorder, postOrder, inOrder

// Given a binary tree, imagine you are standing to the right of the tree. Return an array of values of nodes you can see ordered from top to bottom.

/* BFS
1- identify the end of the array
2- Add last node to result
*/
// we can see only the last element of the level order.
const rightSideViewBFS = (root) => {
  if (!root) return [];
  const result = [];
  let queue = [root];

  while (queue.length) {
    let length = queue.length,
      count = 0,
      currentNode;
    //  when count=length we are at new level
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
  return result;
};

//--------------------------------DFS SOLUTION----------------
/* If we dfs the right most all the nodes will be in soluiton. BUt the problem is right cannot be as deep as right of left node. So when we search the right of left node, we have to keep track of levels. This level tells uu how deep is the right of right node. After this level, we can add the nodes of right of left node to the solution array.*/
// In our dfs solution we want to "prioritize" the right side. We can change the inorder from LNR->RNL, post order LRN-> RLN, preorder NLR->NRL.
// preorder suits better to solve this. the chellenge is how are we going track which level we are on.
// array size will help us to track if we have seen values or not.

const dfs = (node, currentLevel, result) => {
  if (!node) return;
  if (currentLevel >= result.length) {
    result.push(node.value);
  }
  if (node.right) {
    dfs(node.right, currentLevel + 1, result);
  }
  // currentlevel starts with
  if (node.left) {
    dfs(node.left, currentLevel + 1, result);
  }
};

const rightSideViewDFS = function (root) {
  const result = [];

  dfs(root, 0, result);
  return result;
};
