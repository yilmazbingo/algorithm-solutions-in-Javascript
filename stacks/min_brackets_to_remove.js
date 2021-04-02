// Given s string only containing round brackets and lowercase characters ('and'), remove the least amount of brackets so the string is valid. A string is considered valid if it is empty or if there are brackets, they all close
// 'a)bc(d)' will be valid 'abc(d)', "(ab(c)a" either "ab(c)a" or '(abc)a', "))((" only way is remove all
// we return a valid string with the fewest brackets removed
// there is no space in the strings
// if string containing only lowercase characters, it is valid

function removeBrackets(S) {
  const stack = []; // O(N) space complexity
  const res = S.split(""); //O(N) space complexity
  for (let i = 0; i < res.length; i++) {
    // WE ARE PUSHING INDEX not values
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
      // it will reach here only if the stack is empty
    } else if (res[i] === ")") {
      // we want to remove this value
      res[i] = "";
    }
  }
  while (stack.length) {
    const currentIndex = stack.pop();
    res[currentIndex] = "";
  }
  return res.join("");
}

// time complexity of split() is O(N). for loop is always O(N), while loop also O(N)

const a = "krek((()wdsd";
console.log(removeBrackets(a));
