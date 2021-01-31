// given an array of integers sorted in ascending order, return the starting and ending index of a given target value in an array.
// sorted array means we use binary search. time complexity should O(Log(N))
// [1,3,3,5,5,5,8,9] if target=5, startingInd=3,endingInd=5

// we could start with binary search. till we find the mid element. if midElement=target, the we initializse left and right pointers to find other target values around the mid value. with this approach we would have O(N) time complexity. searching with pointers is a linear search which has O(N) time complexity

const binarySearch = function (A, left, right, target) {
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

const searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1];
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  console.log("first", firstPos);
  // If first position does not exist it means it does not exist
  if (firstPos === -1) return [-1, -1];
  let startPosition = firstPos,
    endPosition = firstPos,
    temp1,
    temp2;
  while (startPosition !== -1) {
    temp1 = startPosition;
    console.log("temp1", temp1);
    startPosition = binarySearch(nums, 0, startPosition - 1, target);
  }
  //   startPosition = temp1;
  while (endPosition !== -1) {
    temp2 = endPosition;
    endPosition = binarySearch(nums, endPosition + 1, nums.length - 1, target);
  }
  //   endPosition = temp2;
  //   return [startPosition, endPosition];
  return [temp1, temp2];
};

A = [1, 3, 3, 5, 5, 5, 8, 9, 54];
const a = searchRange(A, 5);
console.log(a);
