// given a string containing only paranthesis determine if it is valid. the string is valid if all parantheses close.
// "{([])}" valid "{([)]}" invalid {[]()} valid
// return true if we get empty strings

// we need some way to determine when we see a right bracket that we know what the corresponding left bracket should be
// only end parantheses (right) can determine if the paranthesis is valid
// hashmap will keep track of what these paranthesis will look like
const parents = { "(": ")", "[": "]", "{": "}" };
const isValidParanthesis = function (s) {
  if (s.length === 0) return true;
  const stack = [];
  // if we see a left bracket we store it in stack. If a see a right bracket, pop the latest item inside the stack and compare it against our stack. if they match, we keep forward.
  for (let i = 0; i < s.length; i++) {
    // we are checking if it is a left bracket
    if (parents[s[i]]) {
      stack.push(s[i]);
    } else {
      // if it is not left parant then it is right. if we see a right bracket we compare it against the correct corresponding left bracket to see if it is correct right bracket that we are looking for.
      const leftBracket = stack.pop();
      const correctBracket = parents[leftBracket]; // we are looking for this
      if (s[i] !== correctBracket) return false;
    }
  }
  return stack.length === 0; // so we know we compared all the brackets
};
// space O(N) , time O(N)
