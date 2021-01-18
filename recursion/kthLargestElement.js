// 1- Verify the constraints
// Can we ever get an array where k is larger than the array length? assume an answer is always available
// by default most languages implement quciksort or merge sort because they are the two most optimzied sorts.

// Quick sort will sort the array in place. it wont give us back a new array.
// just like merge sort, quicksort is recursive.
// if we take a number, first or last, called PIVOT NUMBER which is all left is less, right is greater than it.
// pivot elements are partitioning element
// we are trying to find the final place of the PIVOT NUMBER
// "i" keeps track of where the final place of pivot. "j" is going to scan the array, compare the element at j, with the pivot to figure out if it greater or less than pivot. if the element at j is smaller than pivot, we are going to swap j with "i" and move the "i" forward
// the hint is, ever element on the left of PIVOT is less, and on the right is greater than pivot.
// we are sorting one element at a time.
// merge and quicksort perfect examples of divide and conquer algirithms
// 1- if we call function itself multipe times
// 2- breaks a problem into multipe smaller but same sub-problems
// 3 combines the solutions of subproblems into the solution for the original problem.
const quickSort = function (array, left, right) {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
};

const partition = function (array, left, right) {
  let i = left;
  for (let j = left; j <= right; j++) {
    // right is the pivot element j scans entire array in worst case. O(n)
    if (array[j] <= array[right]) {
      swap(array, i, j);
      i++;
    }
  }
  return i - 1;
};

const swap = function (array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getKthLargest = function (array, k) {
  const indexToFind = array.length - k; // O(1)
  quickSort(array, 0, array.length - 1); // time O(nLogn) space O(logn)
  return array[indexToFind]; // O(1)
};
A = [2, 32, 12, 3, 78, 99, 898, 8, 1];
quickSort(A, 0, A.length - 1);

console.log(A);

// How many times do we do the partition call.
//  space depends on how many recursive calls we have. Inside of quick sort, we have 2 quick sorts are running.
// Bubble sort and selection are only used for educational purposes. it is not very efficient.
// MergeSort is better for worst case scnerois. O(nLog(n)). space complexity O(n)
// most popular sort is QuickSort. its downsied is worst case is O(n**2)
