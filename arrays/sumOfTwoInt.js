// are all those numbers positive
// are there duplicates numbers in the array
// will there always be a solution available. no
// we might also receiv an empty array or array that has 1 value.
// Can there be multipe pairs that add up to the target. no
//-----------STEP 2 WRITE SOME TEST CASES---------
// best case- no solution -empty array
// 1 value array= if [5] and target is 5 it still returns null
// [1,6] t=7
// ----------STEP 3 FIGURE OUT SOLUTION WITHOUT CODE---------
// 2 pointer technique, you hold 1 value and compare it to others

// anything about O(nlog(n)) is bad
// 2 over N is exponential, N over 2 is polynomial. factorial is also exponential
// in nested for loop, the only reason we need the second loop, becasue "numberToFind=target-array[i]" lives only in the instance of first for loop. we dont need to keep this number to find value once i moves on.
// hash map look up is O(1). after avery iteration we store "numberToFind" in hash map: {10,5,1}

// WORST CASE WE calculate all the values so O(N). space will be always O(N) becasue we are holding an obect

function sumOfTwoMapWrong(A, target) {
  // this failed for [3,4,2]
  const store = new Map();
  for (let i = 0; i < A.length; i++) {
    // i should not the set here. becasue in first run, 3=>0 would be set. numberToFind would be 3.
    store.set(A[i], i);
    const numberToFind = target - A[i];
    if (store.has(numberToFind)) {
      // since i set 3=>0 in the first run, it will check and it exist so it will return 0,0. ERROR
      return [store.get(A[i]), store.get(numberToFind)];
    }
  }
  return -1;
}

var twoSum = function (A, target) {
  const store = new Map();
  for (let i = 0; i < A.length; i++) {
    // store.set(A[i], i);
    const numberToFind = target - A[i];
    if (store.has(numberToFind)) {
      return [store.get(numberToFind), i];
    }
    store.set(A[i], i);
  }
  return -1;
};
m = sumOfTwoMap(A, 11);
console.log("m", m);

b = new Map([
  [1, 1],
  [2, 5],
  [3, 2],
  [7, 3],
  [9, 0],
  [15, 4],
]);
console.log(b);

console.log(b.has(9));
console.log(typeof b);

const findTwoSum = function (nums, target) {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]]; // in the first check it is undefined
    console.log("yihua currentmapval", currentMapVal);
    // I m checking if I have correct index.
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
};

// y = findTwoSum(A, 11);
// console.log(y);
const l = [3, 2, 4];

le = sumOfTwoMap(l, 6);
console.log("le", le);
