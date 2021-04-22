## Heaps

we impleent priority queues with heaps.
Resembles to complete binary tree. Complete binary trees are ones where every single level is full, except for the very last level. if there are nodes in the last level, it must be as pushed to the left possible.

**Max Heap**
it has values in it in such a way that at every single, all of the children of that node are smaller than it. The only thing that we know for certain about a max heap is that the root node has the greatest value. There is no guarantee that the two immediate children of your root node are going to be the second and third greatest value.

**MIN HEAP**
the root node is the smallest value inside of this heap.

- heaps can be stored in array with breadth search, level by level. using an array we need to figure out some mathematical formula that helps us define the relationship between nodes that we had before.

  PARENT : floor((indexOfNode-1)/2)
  LEFTCHILD : (index _ 2)+1
  RIGHTCHILD: (index _ 2)+2 \*/
  // the reason why we implemented the max heap in the first place, because we want to say,"I am going to give you values and whenever I want to retrieve value from you you have to gie me the greatest value amongst the values that i have given you". in remove() we are going to remove the greatest value. We are going to take the last element in the binary tree and sift it down.

- In many languages, priority queues ad heaps are part of the default language, in javascript we dont.
