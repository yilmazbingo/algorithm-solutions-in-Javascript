const PriorityQueue = require("../../heaps-priorityQueues/heaps");

// console.log(PriorityQueue);

const networkDelay = (times, N, k) => {
  // this is actually a priority queue
  const distances = new Array(N).fill(Infinity);
  const adjList = distances.map(() => []);
  // k is the starting point
  // distance k->k is 0.
  distances[k - 1] = 0;
  const heap = new PriorityQueue((a, b) => distances[a] < distances[b]);
  heap.push(k - 1);
  // creating the adjList
  for (let i = 0; i < times.length; i++) {
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    // souce starts from 1. adjlist[1-1]=adjList[0]
    adjList[source - 1].push([target - 1, weight]);
  }
  while (heap.isEmpty()) {
    const currentVertex = heap.pop();
    const adjacent = adjList[currentVertex];
    // looping through all neighbors
    for (let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      if (distances[currentVertex] + distance[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
        heap.push(neighboringVertex);
      }
    }
  }
  console.log("AdjList", adjList);
  const ans = Math.max(...distances);
  return ans === Infinity ? -1 : ans;
};

const t = [
  [1, 2, 9],
  [1, 4, 2],
  [2, 5, 1],
  [4, 2, 4],
  [4, 5, 6],
  [3, 2, 3],
  [5, 3, 7],
  [3, 1, 5],
];

console.log(networkDelay(t, 5, 1));
