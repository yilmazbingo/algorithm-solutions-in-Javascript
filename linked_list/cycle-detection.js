const findCycle = function (head) {
  let currentNode = head;
  const seenNodes = new Set();
  while (!seenNodes.has(currentNode)) {
    if (currentNode.next === null) {
      return false;
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
};
// time: O(N), space:O(N)

//------------- FLOYD'S TORTOISE AND HARE ---------------
const hare = function (head) {
  let hare = head,
    tortoise = head;
  while (true) {
    hare = hare.next;
    tortoise = tortoise.next;
    // since hare is faster, it will reach tail before
    if (hare === null || hare.next === null) {
      return false;
    } else {
      // with this we advance the hare 2 steps
      hare = hare.next;
    }
    if (tortoise === hare) break;
  }
  // now we reached the meeting point. we need to traverse to find the cycle
  let p1 = head,
    p2 = tortoise;
  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
};
// time=O(N) and space O(1)
