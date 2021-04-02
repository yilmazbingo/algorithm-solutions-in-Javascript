/* resembles to complete binary tree. complete binary trees are ones where every single level is full, except for the very last level. if there are nodes in the last level, it must be as pushed to the left possible.
- Max Heap : it has values in it in such a way that at every single, all of the children of that node are smaller than it. the only thing that we know for certain about a max heap is that the root node has the greatest value. There is no guarantee that the two immediate children of your root node are going to be the second and third greatest value.
 - MIN HEAP ; the root node is the smallest value inside of this heap.
 - heaps can be stored in array with breadth search, level by level. using an array we need to figure out some mathematical formula that helps us define the relationship between nodes that we had before.
   PARENT    : floor((indexOfNode-1)/2) 
   LEFTCHILD : (index * 2)+1
   RIGHTCHILD: (index * 2)+2 */
// the reason why we implemented the max heap in the first place, because we want to say,"I am going to give you values and whenever I want to retrieve value from you you have to gie me the greatest value amongst the values that i have given you". in remove() we are going to remove the greatest value. We are going to take the last element in the binary tree and sift it down.
// In many languages, priority queues ad heaps are part of the default language, in javascript we dont.
class PriorityQueues {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    // return this._heap.length === 0 if we dont use array, and then we need to change here. Instead we use the size() as our single source of truth
    return this.size() === 0;
  }
  peek() {
    return this._heap[0];
  }
  _parent(index) {
    return Math.floor((index - 1) / 2);
  }
  _leftChild(index) {
    return index * 2 + 1;
  }
  _rightChild(index) {
    return index * 2 + 2;
  }
  _swap(a, b) {
    const temp = _this._heap[a];
    _this._heap[a] = _this._heap[b];
    _this._heap[b] = temp;
  }
  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  // O(Log(N)) which is height of the tree
  insert(el) {
    if (this._size === 0) {
      return (this._heap[0] = el);
    }
    this._heap[this.size() + 1] = el;
    for (let i = this.size() - 1; i > 0; i--) {
      let parent = this._parent(i);
      if (this._heap[parent] < el) {
        this._swap(this._heap, el);
      }
    }
  }
  _siftUp(){
      // we are adding the value at the end of the array
      let nodeIndex=this.size()-1
      // if index===0 we cannot swap any more. 
      while(nodeIndex>0 && this._compare(nodeIndex,this._parent(nodeIndex))){
          this._swap(nodeIndex,this._parent(nodeIndex))
          nodeIndex=this._parent(nodeIndex)
      }
  }
  _siftDown(){
      this._heap[0]=this._heap[this.size()-1]
      let nodeIndex=0
      while(this._compare())
  }
  push(value){
      this._heap.push(value)
      this._siftUp()
      return this.size()
  }
  remove(){
      this._heap.shift()
      this._siftDown()
      return this.size()
  }
}
