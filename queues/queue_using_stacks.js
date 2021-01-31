// insertion order is same in queue and stack
// we pop the first element in queue, but last element in stack. so if values in stack are placed in reverse as a different stack, popping items from queue and stack will be same item
// we push the elements from the first stack to second stack. When we want to pop elements, we pop from the second but if we push elements, we push it to the first stack. when we consume all the elements in second stack, we push the elements from the first to second stack.
class QueueWithStack {
  constructor() {
    // space complexity is O(N)
    this.in = []; // we push new elements here
    this.out = []; // w epop from this stack
  }
  enqueue(val) {
    this.in.push(val); //O(1)
  }
  dequeue() {
    // O(N)
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out.pop();
  }
  peek() {
    // O(N)
    if (this.out.length === 0) {
      while (this.in.length) {
        this.out.push(this.in.pop());
      }
    }
    return this.out[this.out.length - 1];
  }
  empty() {
    // O(1)
    return this.in.length === 0 && this.out.length === 0;
  }
}
