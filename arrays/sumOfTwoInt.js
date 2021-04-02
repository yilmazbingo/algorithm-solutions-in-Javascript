// Given an array of integers, return the indices of the two numbers that add up to a given target
// --------ALWAYS VERIFY THE CONSTRAINS.

//are all those numbers positive
// are there duplicates numbers in the array. unique
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
// we use 2 pointer technique. we initialize one pointer that points at some value. let say first item in the array p1. I want to test every possible combination that involves p1. p1 number that we are testing. now we need second pointer p2. p2 is the other number that we are trying out so that we can ensure that all possible combinations that involve p1 are fully tested. How do we know whether or not we have correct pair. this is where we have to come up with some kind of formula.
// numberTofind=target-nums[p1]
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

const unoptimized = function (nums, target) {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    for (p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null;
};

// in this problem, nums array only argument that will scale. If this array gets really big, how much time and space resources is our code going to take. what is the relationship between the size of this nums array and the amount of resources that our code needs to consume.
// Think about how many more iterations does your code have to run if this nums array gets larger. main par of iterations is 2 for loops. first for loop has timecomplexity on N. inside we have another for loop. o(N2)

const findTwoSum = function (nums, target) {
  // dont forget. hash map look up is O(1)
  const numsMap = {};
  for (let p1 = 0; p1 < nums.length; p1++) {
    const currentMapVal = numsMap[nums[p1]]; // in the first check it is undefined
    // I m checking if I have correct index.
    if (currentMapVal >= 0) {
      return [currentMapVal, p1];
    } else {
      const numberToFind = target - nums[p1];
      numsMap[numberToFind] = p1;
    }
  }

  return null;
};
const myArray = [2, 5, 6, 8, 12];
console.log(findTwoSum(myArray, 20));
console.log(unoptimized(myArray, 20));

const find = function (nums, target) {
  const numsMap = {};
  for (p = 0; p < nums.length; p++) {
    const goal = target - nums[p];
    if (numsMap[goal]) {
      return [numsMap[goal], p];
    } else {
      numsMap[nums[p]] = p;
    }
  }
};
console.log(find(myArray, 20));
