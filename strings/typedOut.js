// strings questions are ARRAY questions
// given 2 strings, return if they equal when both are typed out. any # counsts as backspace(deletes last char)
// what happens when 2 # appear beside each other? delete the two values before the first #
// what happens to # where there is no character to remove? deletes nothing
// are two empthy strings equal
// DOES CASE SENSIVITY MATTER. yes it does. if it did not matter, i would just convert them lower case.
//Array.from(A)   A.split("")   Object.assign({},A)  [...A]

const buildString = (string) => {
  const buildString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      buildString.push(string[p]);
    } else {
      buildString.pop();
    }
  }
};

const backspaceCompare = (S, T) => {
  const finalS = buildString(S); // O(a=sizeOfS)  ==> worst case here means no "#". so we iterate over all chars
  const finalT = buildString(T); // O(b=sizeOfT) ==>O(a+b)=O(n)
  if (finalS.length !== finalT.length) {
    // O(1) only 1 check
    return false;
  } else {
    for (let p = 0; p < finalT.length; p++) {
      // O(a) or O(b)
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
  return true;
};
// total O(2a+b) or O(a+2b) drop the constants so O(a+b)
// we are generating only 2 arrays and their size is O(a+b) as space complexity
// time complexity is good but we can optimize the space complexity
// use 2 pointer technique to optimize. the main logic is, deciding when to move the pointers and what to do on each iteration
// start from the end of the strings

const compare = (S, T) => {
  let p1 = S.length - 1,
    p2 = T.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    // we dont compare the hash  values.
    if (S[p1] === "#" || T[p2] === "#") {
      if (S[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (T[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

console.log(compare("a#b#c", "c"));
