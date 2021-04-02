const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const m = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
const traversalDFS = function (matrix) {
  // how are we going to keep track of all of the elements inside 2D array, we already seen before. To do so, once we touched an element, we convert it to true. Initially everything wull have F value.
  // we fill it with something so we could call map().
  const seen = new Array(matrix.length)
    .fill(0) //[0,0]
    .map(() => new Array(matrix[0].length).fill(false));
  const exploredValues = [];
  dfs(matrix, 0, 0, seen, exploredValues);

  return exploredValues;
};
const dfs = function (matrix, row, col, seen, exploredValues) {
  if (
    row < 0 ||
    col < 0 ||
    row >= matrix.length ||
    col >= matrix[0].length ||
    seen[row][col]
  )
    return;
  exploredValues.push(matrix[row][col]);
  seen[row][col] = true;
  // next we have to figure out how to write recursive function calls in 4 directions we can possibly traverse from [0,0]

  for (let i = 0; i < directions.length; i++) {
    const currentDirection = directions[i];
    // we are going to add the first value to the row, second value to the col
    dfs(
      matrix,
      row + currentDirection[0],
      col + currentDirection[1],
      seen,
      exploredValues
    );
  }
};
// becasue we are tracking values we have seen before inside of matrix, time O(N) and space complexity O[N]
console.log(traversalDFS(m));
