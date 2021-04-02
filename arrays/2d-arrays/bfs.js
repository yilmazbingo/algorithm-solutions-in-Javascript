// In breadt first search, we do go up, then right, and then left. we start from a middle value becasue it is easier to see the search patter. once

const m = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13 - C, 14, 15],
  [16, 17, 18, 19, 20],
];
// If we start from 13, we will be taking one space in those 4 directions. we go up to 9, then right to 14, then bottom to 18 and left to 12. [13,8,14,18,12]. in bfs we have two arrays. this one tells you what search pattern is going to look like through breadth first search.
// in the second array, we keep track of which elements we have touched. [8,14,18,12].
// after we are done with 13, we do the same process with 8. we go up to 3. then right to 9, then we do down to 13, which we already explored, then we go left 7. From this process, we touched 4,10,13. so we add those to the second array, and we discard 8 from the array [14,18,12,3,9,7]. in traversal array=[13,8,14,18,12,3,9,7]
// next value in our second array is now 14. we apply the same steps. we go up to 9, we already explored, then to right to 15, and then bottom to 19. our second array, discard 14 [18,12,3,9,7,15,19]. our traversal array [13,8,14,18,12,3,9,7,15,19]
// next step we start from 18. up,right and bottom, we dont need. then we go left to 17. we add this to both arrays. from firstArray discard, 18 and add 17=[12,3,9,7,15,19,17] and add 17 to traversal=[13,8,14,18,12,3,9,7,15,19,17]. now we explore for 12. up,right bottom touched. only left, we add 11. from firstArray discard 12 add 11= [3,9,7,15,19,17,11] and add 11 to traversal=[13,8,14,18,12,3,9,7,15,19,17,11]. check for 3. right 4,left,2 add them
// first=[9,7,15,19,17,11,4,2], traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2]. next element is 9. we take only 10
// first=[7,15,19,17,11,4,2,10], traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2,10] from 8 we add only 6
// first=[15,19,17,11,4,2,10,6], traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6]. next 15, we take 20
// first=[19,17,11,4,2,10,6,20], traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6,20] next 19 we dont take anything
// first=[17,11,4,2,10,6,20]   we take 16 from left
// first=[11,4,2,10,6,20,16]  traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6,20,16] with 11 everything is taken. we  take 4. from 4 we add only 5
// first=[2,10,6,20,16,5]  traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6,20,16,5], from 2 we add 1
// first=[10,6,20,16,5,1]  traversal=[13,8,14,18,12,3,9,7,15,19,17,11,4,2,10,6,20,16,5,1]
// our function will run this till frist array or queue is empty.
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const traversalBFS = function (matrix) {
  const seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const exploredValues = [];
  // we store the coordinate pair here
  const queue = [[0, 0]];
  while (queue.lenth) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col]
    ) {
      // cnstinue skips the current iteration
      continue;
    }
    seen[row][col] = true;
    exploredValues.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const currentDirection = directions[i];
      queue.push([row + currentDirection[0], col + currentDirection[1]]);
    }
  }

  return exploredValues;
};

// O(N) space complexity. time is O(n)
