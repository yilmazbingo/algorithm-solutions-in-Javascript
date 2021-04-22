const secondBiggest = (A) => {
  let biggest = Math.max(A[0], A[1]);
  let second = Math.min(A[0], A[1]);
  for (let i = 2; i < A.length; i++) {
    if (biggest < A[i]) {
      second = biggest;
      biggest = A[i];
    } else if (second < A[i] && biggest !== A[i]) {
      second = A[i];
    }
  }
  console.log(second);
};

secondBiggest([2, 9, 3, 5, 44, 65, 1, 33, 2223]);
