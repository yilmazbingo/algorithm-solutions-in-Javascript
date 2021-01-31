// Maximum depth is the number of nodes along the longest path from the root node to the furthest leaf node.
// Breadth First Search assumes that the node we are looking for is closer to the root node rather than further. the reason for this is because Breadth First Search wants to explore the nodes that are closest to the root node first before exploring the ones that are further but it is still always goes by the order of searching for the ones that are closest to the root node
// Depth Search wants to thorougly explore a single path all the way down before it exlores the another path. It is prioritizing by thinking that the node that it is looking for is probably at the very end of the path that it could explore.
// Traversal types apply only to Breadth First Search. These orders care about the order in which it stores and touches the values inside of the tree nodes as it goes deep. You need one of those traversals  when u care about the actual values in the tree nodes. In this problem, we dont care. So traversal type does not matter to us. the only thing we care about is the depth-first search.
// DFS is rescursive in nature. Iterative solution is complex. In interviews they ask for recusrsion.

const maxDepth = function (node, currentDepth) {
  if (!node) {
    return currentDepth;
  }
  currentDepth++;
  return Math.max(
    maxDepth(maxDepth(node.left, currentDepth)),
    maxDepth(node.right, currentDepth)
  );
};
// time complexity is O(N) because we explore every single element in the tree
// Space complexity is the size of the recursion. height of the tree is the size of the recursion. in perfectly balanced tree is the best case, O(LogN). worst case is a tree that left or right skewed tree and it's size is O(N)
