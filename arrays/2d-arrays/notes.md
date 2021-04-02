- each of the internal arrays are same size
- "row" references the index values contained in the outer array. it is the position of internal array. "col" points to the index of the internal values in every single one of the inner arrays. 
- traversals in 2D arrays are similar to traversals inside of binary trees. we can traverse from a specific point to "up","down","left" and "right". When u traverse, you want to traverse one element at a time
  up    : -1,  0   => minus 1 from row, same col value
  down  : +1,  0   => plus  1 from row, same col value
  left  :  0, -1   => row same, minus 1 from col
  right :  0, +1   => row same, plus one from col

### Depth First Search in 2D arrays
- in binary tree, we start from root element, in 2D array, we can start from any element. Most of the time, we start from [0,0]
- we start from [0,0]. we go up but there is nothing, so we go right. we do this till we hit the end of the row. when we reach the end, we check up again, there is nothing, so we go down .
  [1 2 3 4 5]
  [        10-curren]
  explored values=[1,2,3,4,5,10]
  now from current-10 point, we go up, but we already explored that, we go right but we have wall so we go down. we reach end
    [1 2 3 4 5]
    [        10]
    [        15]
    [        20-current]
   explored values=[1,2,3,4,5,10,15,20]

  now from current-20, we go up, but we already explored that, we left it is wall, we down nothing is there so we go left.
    [1 2 3 4    5]
    [          10]
    [          15]
    [      19-current  20]
  explored values=[1,2,3,4,5,10,15,20,19]

 now we are at current-19 and we go up 14, from 14 we go up again 9
    [1 2 3 4       5]
    [      9-Cur   10]
    [      14      15]
    [      19      20]
  explored values=[1,2,3,4,5,10,15,20,19,14,9-cur]
now we are at 9-cur. We go up, we alredy explored that. we go right, we been there, we do down, we been there so we go left-8. 

    [1 2 3 4 5]
    [    8-C  9 10]
    [    13  14 15]
    [    18-C  19 20]
Now we are at 8-C. we go up, we explored up, right and down so we down to 13. same for 13 so we hit 18

  explored values=[1,2,3,4,5,10,15,20,19,14,9,8,13,18-C]
