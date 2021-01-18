// given a linked list and numbers m and n, returns it back with only positions m to n in reverse.
// will m and n always be in the bounds of the linked list? yes
// we can receive m=1 and n=lengthOfLinkedList
// we are actually working on the secetin m < partOfLinkedList < n. so we are creating a mini linked list

const reverse = (head, m, n) => {
  let currentPos = 1,
    currentNode = head;
  let start = head; // this will be the head of m<--<n partion
  // keep reference of m-1 th which is "start"
  while (currentPos < m) {
    start = currentNode; // start=m-1th
    currentNode = currentNode.next; // currentNode is the m th
    currentPos++;
  }
  // when we reverse m and n, m would be tail and n will be head
  let newList = null,
    tail = currentNode;

  while (currentPos >= m && currentPos <= n) {
    const next = currentNode.next; // we are iterating with this
    // currentNode starts with mth
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
