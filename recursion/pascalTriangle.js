// Pascal Triangle is a triangle whose element value is the summation of its top two
// 1
// 1   1
// 1   2   1
// 1   3   3    1
// 1   4   6    4    1
// 1   5  10  10   5   1
// 1   6  15  20  15  6   1

// If the column=1 return 1, if the row=0, return 0

function pascalTriangle(row, col) {
  if (col === 0) return 1;
  if (row === 0) return 0;
  else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}
a = pascalTriangle(5, 2);
b = pascalTriangle(3, 2);
console.log(a); //10
console.log(b); //3
