const dup = (A) => {
  const s = new Set();
  for (i in A) {
    s.add(A[i]);
  }
  if (s.size !== A.length) {
    console.log("this contains duplicaat");
  } else {
    console.log("does not contain duplicate value");
  }
};

dup([1, 3, 32, 2, 2]);
