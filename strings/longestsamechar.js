const firstLengthest = (S) => {
  if (S.length <= 1) {
    return S.length;
  }
  const n = S.length;
  let first = S[0];
  let firstLength = 1;

  let current = "";
  let currentLength = 0;

  let ans = "";

  for (let j = 1; j <= n; j++) {
    if (S[j] === S[j - 1] && current) {
      currentLength++;
      current += S[j];
    } else if (S[j] === S[j - 1]) {
      first += S[j];
      firstLength++;
      ans = first;
    } else {
      if (currentLength >= firstLength) {
        ans = current;
        console.log("ans", ans);
        first = current;
        firstLength = currentLength;
        current = "";
      }
      currentLength = 1;
      current += S[j];
    }
  }
  return ans;
};

// console.log(firstLengthest("aaaaaaaaaaaaacccccccccccccccssssssbbbbbkkkk"));

const optimized = (S) => {
  let str = S[0];
  let strLength = 1;
  let longest = "";

  for (let i = 2; i < S.length; i++) {
    if (S[i] === S[i - 1]) {
      str += S[i];
      strLength++;
      console.log("Str", str);
    } else {
      str = S[i];
      strLength = 1;
    }
    if (strLength > longest.length) {
      longest = str;
    }
  }
  console.log(longest);
};

console.log(optimized("sssscccccccbbbbbbbbbbbbbddd"));
