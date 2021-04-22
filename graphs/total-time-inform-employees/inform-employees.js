const numOfMinutes = function (n, headID, managers, informTime) {
  // creating the adjaceny list.
  const adjList = managers.map(() => []);

  for (let employee = 0; employee < n; employee++) {
    const manager = managers[employee];
    // this is the head of the company
    if (manager === -1) continue;
    adjList[manager].push(employee);
  }
  console.log(adjList);
  return dfs(headID, adjList, informTime);
};

// currentId of employee
const dfs = function (currentId, adjList, informTime) {
  // this is where we reach leaves. they do not have subordinate
  // in recursion always define a base case
  if (adjList[currentId].length === 0) {
    return 0;
  }
  let max = 0;
  const subordinates = adjList[currentId];
  for (let i = 0; i < subordinates.length; i++) {
    max = Math.max(max, dfs(subordinates[i], adjList, informTime));
  }
  return max + informTime[currentId];
};

const managersArray = [2, 2, 4, 6, -1, 4, 4, 5];
const informTimeArray = [0, 0, 4, 0, 7, 3, 6, 0];

// 4 is the headId
console.log(numOfMinutes(8, 4, managersArray, informTimeArray));
