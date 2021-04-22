/* For a given staircase, the i-th step is assigned a non-negative cost indicated by a cost array. Once you pay the cost for a step , you can either climb one or two steps. Find the minimum cost to reach the top of the staircase. Your first step can either be the first or second step.  */

// first step to solve the problem is recognize that this is a dynamic programming question. The moment you see minimum or maximum, you should realize that this is an optimzation question. For this particular question it is asking us for the minumum cost to react the top of the staircase. This implies that there are numerous possible paths that we can take to walk up  this staircase all with different cost values. We want the one with the minumum cost. We need to generate all of the possible paths that we can take and pick the one with the minumum value.

// There are multipe stages in dynamic programming solution. Every subsequeent stage gets more optimized when it comes to space and time complexity. What we are doing is we are working through these stages trying to get the most optimal solution.

// We have to realize that dynamic programming has its basis in recursion. Recursive function is the starting point for figuring out what the first stage for this problem will be. Recursive function receives some arguments and inside there we have a base case. Base case is certain condition that must be satisfied in order for us to return from the function. After base case, we have recursive calls of the function itself but with different arguments. Based on these different arguments that get passed into those recursive function calls is how we diecide whether or not we satisfy the conditions for the base case.

// In order for us to identify what is the base case and what recursvie functions am we are going to make is based on being able to identify the recurrence relation.

// Recurrence Relation is formula that we need to derive that gives us the basis of the recursive function that we are trying to write.
// Is there a way to solve this problem as a repetated problem that we can combine together in order to get this final answer. In this question we can reach the last step

const minCost = function (i, costArray) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return costArray[i];
  console.log("A", costArray);
  return (
    costArray[i] +
    Math.min(minCost(i - 1, costArray), minCost(i - 2, costArray))
  );
};

const minCostClimbing = (costArray) => {
  const n = costArray.length;
  console.log("n", n);
  return Math.min(minCost(n - 1, costArray), minCost(n - 2, costArray));
};

console.log(minCostClimbing([1, 4, 22, 11, 22]));

// ************MEMOIZED SOLUTION**********

const memoMinCostClimbing = (costArray) => {
  const n = costArray.length;
  //   dp stores the calculated values
  const dp = [];
  // we are passing dp to the function.
  return Math.min(minCost(n - 1, costArray, dp), minCost(n - 2, costArray, dp));
};
const memoMinCost = function (i, costArray) {
  if (i < 0) return 0;
  if (i === 0 || i === 1) return costArray[i];
  //   before we run the calculation we need to check if the value exist in dp array already
  if (dp[i] !== undefined) return dp[i];
  dp[i] =
    costArray[i] +
    Math.min(
      memoMinCost((i = 1), costArray, dp),
      memoMinCost(i - 2, costArray, dp)
    );

  return dp[i];
};

// What does this do our performance? if the value exist we do not build out that branch.
// T:O(N) S:O[N]
