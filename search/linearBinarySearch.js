const binarySearch = function (A, target) {
  let left = 0,
    right = A.length - 1;
  // when they are equal, it means we are checking the last value that we havent checked
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundValue = A[mid];
    if (foundValue === target) {
      return mid;
    } else if (foundValue < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

// time complexity O(N)
// we just keep track of left,right and mid and they dont scale. So space complexity O(1)

A = [1, 4, 7, 89, 90, 98, 200];
a = binarySearch(A, 200);
console.log(a);
