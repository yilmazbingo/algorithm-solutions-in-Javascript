// is the substring contiguous? contigous means chars are sequentials, no break between them.
// subsequence measn you can have break
// does case sensitivity matter?

// main problem is find length of longest unique substring
// subproblem: pattern matching-unique substring

const longest = (S) => {
  if (S.length <= 1) {
    return S.length;
  }
  // left pointer will keep track of character that we are beginning with
  // right pointer will checks if the current character is already seen before. it also moves over and accumulates the actual length of the substring. when it sees the recurring char, it will reset and then left pointer will move forward
  let longest = 0;
  const n = S.length;
  // hash map will keep track of right pointer touches upon here.
  for (let left = 0; left <= n; left++) {
    let seenChars = {};
    let currentLength = 0;
    // this is the time to initialize the right pointer
    for (let right = left; right < n; right++) {
      // we need to keep track of char tha the right pointer is on
      let currentChar = S[right];
      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break; // this will exist us out of the second for loop
      }
    }
  }
  return longest;
};

a = longest("adjaheuwewwi");
console.log(a);

// main difference between sliding and 2 pointer technique is when and how we apply them. sliding has more requirements than two pointer.
// form a window over some portion of sequential data, then move that window throughout the data to capture different parts.
// sequential date means where the order in which the data appears is important.

const sliding = (S) => {
  if (S.length <= 1) {
    return S.length;
  }
  // abcbdaac when righ pointer hits second b, first b and before it will be discarded
  const seenChars = {}; // char:index
  const n = S.length;
  let left = 0,
    longest = 0;
  // right pointer will scan entire string forward
  for (let right = 0; right < n; right++) {
    const currentChar = S[rigth];
    // we want to check if prevSeenChar>=left,
    const prevSeenChar = seenChars[currentChar];
    // to initialize a new substring, if there is a seen value, new substring will start right after seen value
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

b = longest("adjaheuwewwi");
console.log("b", b);
