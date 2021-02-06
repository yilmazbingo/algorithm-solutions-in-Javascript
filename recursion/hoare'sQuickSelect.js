// this is specifically for finding the kth SMALLEST element in the array.
// quick sort and this was created by the same person-Tony Hoare
// in quick sort after finding the first partitioning, we partition both sides again. but qucikSelect does not care to sort the array. we are trying to find the index of kth smallest number. So we dont partition the left side because we know that everything on the left is already smaller.

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const quickSelect = (array, left, right, idxToFind) => {
  const partitionIndex = partition(array, left, right);
  if (partitionIndex === idxToFind) {
    return array[partitionIndex];
  } else if (idxToFind < partitionIndex) {
    return quickSelect(array, left, partitionIndex - 1, idxToFind);
  } else {
    return quickSelect(array, partitionIndex + 1, right, idxToFind);
  }
};

// time complexity still depends on the partition function. it still scans entire array. O(N)

const partition = (array, left, right) => {
  let i = left;
  for (let j = left; j <= right; j++) {
    if (array[j] <= array[right]) {
      swap(array, i, j);
      i++;
    }
  }
  return i - 1;
};

const getKthSmallest = (array, idx) => {
  quickSelect(array, 0, array.length - 1, idx);
  return array[idx];
};
// Best case scenoria, we find the index as the partition index. n+n/2+n/4..=O(2n)=O(n)
// worst case is descending [6,5,4,3,2,1]. every single time, we searched the entire remaining search space and we did it n times because we are doing for evert single element. O(N**2)
// Unlike quick sort, we are not calling qucikSelect twice. in the original quickSort, second call of quick sort was waiting for the first qucik sort to finish, that means our function was still on call stack
// in quckSelect, we have the optimal situation for tail recursion because both of our base case is all return. there is no toher recursive call that waiting on another. So SPACE COMPLEXITY IS O(1)

A = [3, 42, 21, 23, 33, 4];
b = getKthSmallest(A, 4); // 33
console.log(b);
