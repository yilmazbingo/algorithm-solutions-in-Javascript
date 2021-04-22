console.log(process.argv);
const inhabitants = (Arr) => {
  let day = 0;
  let A = Arr;
  const final = new Array(A.length).fill(0);
  console.log(final);

  while (day < 9) {
    let indices = [];

    for (let i = 0; i < A.length; i++) {
      if (A[i] === 0) {
        indices.push(i);
      }
    }
    for (let j = 0; j < indices.length; j++) {
      if (indices[j] > 0) {
        A[indices[j] - 1] = Math.floor(A[indices[j] - 1] / 2);
      }
      if (indices[j] + 1 < A.length) {
        A[indices[j] + 1] = Math.floor(A[indices[j] + 1] / 2);
      }
    }

    day++;
    console.log(`population on day ${day}`, A);
  }
};
console.log(inhabitants([3, 6, 0, 4, 3, 2, 7, 0]));
