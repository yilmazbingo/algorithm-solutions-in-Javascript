function mergeSort(A) {
  if (A.length === 1) return A;
  const length = A.length;
  const middle = Math.floor(length / 2);
  const left = A.slice(0, middle);
  const right = A.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const A = [32, 322, 11, 112, 0, 23];
const answer = mergeSort(A);
console.log(answer);
