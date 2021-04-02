class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    // return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    // return this;
  }
  search(value) {
    let currentNode = this.head;
    let position = 1;
    while (currentNode) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return { value: currentNode, position };
      }
      position++;
    }
    return -1;
  }
  display() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insertAny(position, value) {
    //Check for proper parameters;
    if (position >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToPosition(position - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToPosition(position) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== position) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  removeFirst() {
    if (this.length === 0) {
      return null;
    }
    // return the removed value

    const deletedValue = this.head.value;
    this.head = this.head.next;
    this.length--;
    return deletedValue;
  }

  removeLast() {
    if (this.length === 0) {
      return null;
    }
    let currentNode = this.head;
    let i = 1;
    // since linked list is not indexed, we have to loop till the last node
    while (i < this.length - 1) {
      currentNode = currentNode.next;
      i++;
    }
    const deletedValue = currentNode.next.value;
    this.tail = currentNode;
    this.tail.next = null;
    this.length--;
    return deletedValue;
  }

  removeAny(position) {
    if (position > 0 && position < this.length) {
      const leader = this.traverseToPosition(position - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return unwantedNode.value;
    }
    return -1;
  }
}

const myLinkedList = new LinkedList();
console.log(myLinkedList);
myLinkedList.append(2);
// myLinkedList.removeFirst();
// console.log(myLinkedList.display());
// console.log("search result", myLinkedList.search(4));

myLinkedList.append(4);
myLinkedList.prepend(21);
console.log("search result", myLinkedList.search(4));

myLinkedList.removeLast();
// console.log("head", myLinkedList.head);
// console.log("tail", myLinkedList.tail);
// console.log(myLinkedList.removeAny(0));

// console.log(myLinkedList.display());

myLinkedList.append(30);
myLinkedList.append(20);
myLinkedList.append(12);
myLinkedList.append(22);
myLinkedList.prepend(45);
console.log(myLinkedList.display());

// a = myLinkedList.removeFirst(1);
// console.log(a);

// console.log(myLinkedList.display());

// console.log(myLinkedList.removeLast());
// console.log(myLinkedList.display());

module.exports = { myLinkedList, LinkedList };
