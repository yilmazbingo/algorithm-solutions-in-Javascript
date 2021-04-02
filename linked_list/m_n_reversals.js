// given a linked list and numbers m and n, returns it back with only positions m to n in reverse.
// will m and n always be in the bounds of the linked list? yes
// we can receive m=1 and n=lengthOfLinkedList
// we are actually working on the secetin m < partOfLinkedList < n. so we are creating a mini linked list
const a = require("./linked-list");
// console.log(a.myLinkedList.display());

// const reversePart = (head, m, n) => {
//   let currentPos = 1,
//     currentNode = head;
//   // this will be the previous node before mth node
//   let start = head;
//   while (currentPos < m) {
//     start = currentNode;
//     currentNode = currentNode.next;
//     currentPos++;
//   }
//   let newList = new a.LinkedList();
//   while (currentPos >= m && currentPos <= n) {
//     newList.prepend(currentNode);
//     currentNode = currentNode.next;
//     currentPos++;
//   }
//   return newList;
// };

// console.log("result", reversePart(a.myLinkedList.head, 2, 4));

const reverse = (head, m, n) => {
  let currentPos = 1,
    currentNode = head;
  let start = head; //   // "start" will be the m-1 th node
  // keep reference of m-1 th which is "start"
  while (currentPos < m) {
    start = currentNode; // start=m-1th
    currentNode = currentNode.next; // currentNode is the m th
    currentPos++;
    // console.log("start", start);
  }
  // when we reverse m and n, m would be tail and n will be head
  let newList = null,
    tail = currentNode;

  // m is the beginning of our portion
  while (currentPos >= m && currentPos <= n) {
    let next = currentNode.next; // we are iterating with this

    currentNode.next = newList;
    newList = currentNode; // currentNode is going to represent the head of the head of the list that we built so far
    currentNode = next;
    currentPos++;
  }
  start.next = newList;
  tail.next = currentNode;
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};

console.log("newlist", reverse(a.myLinkedList.head, 3, 5));
console.log(a.myLinkedList.display());
