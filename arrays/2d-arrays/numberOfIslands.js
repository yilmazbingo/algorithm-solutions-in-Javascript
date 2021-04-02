/* Given a 2 d array containing only 1's(land) and 0's(water), count the number of island. an island is land connected horizontally or vertically */
//     1  1  1  1  0
//     1  1  0  1  0
//     1  1  0  0  1
//     0  0  0  1  1
// diagonal connection does not count as an island
// we asuume that everything outside the 2d array is water.
// we check items in sequential order. the reason why sequential order is important, becasue sometimes the order of breadth first search or depth first search as your exploration pattern for the eleemnts in a 2D is not going to actually get you to the correct answer. Sometimes breadth first and depth first search is part of solving the sub problem not the main traversal pattern. Sequential order guarentees tha tyou touch each element. in sequential order we have space comsumption of O(1)

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const numberOfIslands = function (matrix) {
  if (matrix.length === 0) {
    return 0;
  }
  let islandCount = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1) {
        islandCount++;
        // after we see value is 1, we make it 0, so we wont double count
        matrix[row][col] === 0;
        // javascript we dont have native queue implmentation. we use queue for breadth first search to flip the 1's to 0
        const queue = [];
        queue.push([row, col]);
        while (queue.length) {
          // breadth first search will start from first value.
          const currentPos = queue.shift();
          const currentRow = currentPos[0];
          const currentCol = currentPos[1];
          for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = currentRow + currentDir[0];
            const nextCol = currentCol + currentDir[1];
            if (
              nextRow < 0 ||
              nextRow >= matrix.length ||
              nextCol < 0 ||
              nextCol >= matrix.length
            ) {
              continue;
            }
            if(matrix[nextRow][nextCol]===1){
                queue.push([nextRow,nextCol])
                matrix[nextRow][nextCol]=0
            }
          }
        }
      }
    }
  }
  return islandCount
};
