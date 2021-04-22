// in order to implement bfs, we need to initialize QUEUE and answers array will hold all of the values as we explore them in traversal.
// the process is immediate neighbors first as we traverse through the graph.
// arg graph is an adjaceny list
// in order to traversal first,we need to reperesent the graph into adjacency list
const traversalBFS = (graph) => {
  // 0 is the initial point
  const queue = [0];
  const values = [];
  const seen = {};
  while (queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return values;
};

const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];
console.log(traversalBFS(adjacencyList));
