// there are a total of n courses to take, labeled from 0 to n-1. Some courses have prerequisite courses. This is expressed as a pair [1,0 ] which indicates you must take course 0 before taking course 1.
//Given the total number of courses and an array of prerequise pairs, return if it is possible to finish all courses

// we have to figure out if there is a graph structure here.
// 0-->1 this is a directed edge.
// [[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]]
// 0 --> 1  --> 2

// we cannot finish courses if we have cycle. If there is a cycle, it is impossible to take the courses in the cycle.
// if we find a cycle, we cannot finish the course
// CAn we have courses unconnected to other courses. yes, account for separate course chains.
// if oyu hear there is some type of relationship between pairs of somehing inside of a question, it is most likely they are defining the relationship between two vertices because that relationship is dictated as an edge.

// during traversal if we ever make it back to a node that we have seen before, then we have a cycle.
// if we had 2 disconnected graphs, How will we figure out that there is another graph. for this, we have to perform traversal in every singel node. because we have no idea which nodes are connected or not connected.

const canFinish = (n, prerequisites) => {
  const adjList = new Array(n).fill(0).map(() => []);

  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }
  for (let v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }

    while (queue.length) {
      const current = queue.shift();
      seen[current] = true;

      if (current === v) return false;
      const adjacent = adjList[current];
      for (let i = 0; i < adjacent.length; i++) {
        const next = adjacent[i];
        if (!seen[next]) {
          queue.push(next);
        }
      }
    }
  }
};
