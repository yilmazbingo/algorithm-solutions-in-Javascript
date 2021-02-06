// assume an answer is always available
// by default most languages implement quciksort or merge sort because they are the two most optimzied sorts.

// Quick sort will sort the array in place. it wont give us back a new array.just like merge sort, quicksort is recursive.
// if we take a number, first or last, called PIVOT NUMBER which we find the final resting place or final index that this number should be in once the array is sorted.
// pivot elements are partitioning element. After we partition the array, we are going to apply the same to each array
// Some algorithms choose the first item as pivot, some choose the last item when it starts

// "i","j" starts from the fromt the first elememnt. "i" keeps track of where the final place of pivot. "j" is going to scan the array, compare the element at j, with the pivot to figure out if it greater or less than pivot. if the element at j is smaller than pivot, we are going to swap j with "i" and move the "i" and "j" forward
// the hint is, every element on the left of PIVOT is less, and on the right is greater than pivot.
// we are sorting one element at a time.
/* merge and quicksort perfect examples of divide and conquer algirithms
   1- if we call function itself multipe times
   2- breaks a problem into multipe smaller but same sub-problems
   3 combines the solutions of subproblems into the solution for the original problem. */

const quickSort = function (array, left, right) {
  // if left=right, it means we have only one item, it is already sorted
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
};

// partition=pivot
// const partition = function (array, left, right) {
//   let i = left;
//   for (let j = left; j <= right; j++) {
//     // right is the pivot element j scans entire array in worst case. O(n)
//     if (array[j] <= array[right]) {
//       swap(array, i, j);
//       i++;
//     }
//   }
//   return i - 1;
// };

const partition = function (array, left, right) {
  const pivotElement = array[right];
  let partitionIndex = left;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }
  swap(array, partitionIndex, right);
  return partitionIndex;
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
b = getKthLargest(A, 4);
console.log("4 th largest eleement", b);
console.log(A);

// How many times do we do the partition call.
//  space depends on how many recursive calls we have. Inside of quick sort, we have 2 quick sorts are running.
// Bubble sort and selection are only used for educational purposes. it is not very efficient.
// MergeSort is better for worst case scnerois. O(nLog(n)). space complexity O(n)
// most popular sort is QuickSort. its downsied is worst case is O(n**2)
