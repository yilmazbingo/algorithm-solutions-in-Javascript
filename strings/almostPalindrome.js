// A string is almost a palindrome if it becoems a palindrome by removing 1 letter. consider only alphanumeric chars
// "race a car" ==> "race car" or remove "e" "rac a car"
const valid = (S) => {
  S = S.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let x = 0;
  left = 0;
  right = S.length - 1;
  while (left < right) {
    if (S[left] !== S[right]) {
      x += 1;
    }
    if (x > 1) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
const a = valid("abadfg");
console.log(a);
