// what do we return if we get null or a single node? return null or node
// at any given point, we actually dont know the full length of our linked list. in string and array we could have "length"
// we traverse with starting from head. we cannot afford to lose references

// 1 -> 2 -> 3 -> 4 ->5
const reverse = (head) => {
  let prev = null; // this is the complete node list
  let current = head;
  while (current) {
    let next = current.next; //  currently 2 // then 3
    current.next = prev; // null // 1
    prev = current; // 1->null // 2 -> 1 -> null
    current = next; // 2 // 3
  }
  return prev;
};

// we are returning a reversed linked list but not a new one. SPACE COMPLEXITY O(1)
