// subproblem is a problem we have to solve along the way to solving the main problem
// Palindrom is a string that reads the same forwards and backwards. "aba","a","race car","","A man, a plan, a canal:Panama"
// not every technique works on palindrome question
//"raceacar" middle index or starting from ends wont work. we compare the original with the reverse

//---------------------- TWO POINTER TECHNIQUE ----------------------
const valid = (S) => {
  // we are mutating S, not creating a new data structure
  // [] in regex designates the actual group of chars.
  // ^ means Not. We are catching non-alphanumerical chars
  // g, find all matches rather than stopping after the first match
  // we are replacing non-alphanumerical chars with ""
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  left = 0;
  right = S.length - 1;
  while (left < right) {
    if (S[left] === S[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};

a = valid("A man, a plan, a canal:Panama");
console.log("a", a);

// ------------------ TWO POINTERS FROM CENTER -------------------------
const isValid = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = Math.floor(S.length / 2),
    right = left;
  if (S.length % 2 === 0) {
    left--;
  }
  while (left >= 0 && right < S.length) {
    if (S[left] !== S[right]) {
      return false;
    }
    left--;
    right++;
  }
  return true;
};
// --------------- COMPARE TO ORIGNIAL----------
const compare = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reverse = "";
  for (let i = S.length - 1; i >= 0; i--) {
    // reverse.push(S[i]); push() is only for array
    reverse += S[i];
    console.log(reverse);
  }
  return reverse === S;
};

const c = compare("dadadi");
console.log("compare", c);
