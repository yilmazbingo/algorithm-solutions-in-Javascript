const dublicate = (S) => {
  const arrayOfStrings = S.split("");
  arrayOfStrings.some(function (v, i, a) {
    console.log("currentelement", v);
    console.log("index", i);
    console.log("array that was called upon", a);
    return a.lastIndexOf(v) != i;
  });
};

dublicate("dadajha");

const dublicate2 = (S) => {
  const a = {};
  const b = [];
  for (i in S) {
    console.log(S[i]);
    if (!a[S[i]]) {
      a[S[i]] = 1;
    } else if (a[S[i]] > 1) {
      break;
    } else if ((a[S[i]] = 1)) {
      console.log("xin", S[i]);
      b.push(S[i]);
      a[S[i]] += 1;
    }
  }
  console.log(b);
  console.log(a);
};

dublicate2("araba");
