// do the left and right sides of graph count as walls? No
//will there be negative intergers? No
const getMaxWater = (heights) => {
  if (!Array.isArray(heights)) {
    throw new Error("Please enter an array of number ");
  }
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;
    //leftP and rightP are indices. leftP decrease cause it goes to the beginning, right goes to the end.
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights(leftP));
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};
// two pointer technique, we initialize pointers in each side
// identify pointer with the lesser value
// is this pointer value greater than or equal to the max value on that side. if it is, we are going to update the max on that side otherwise we are going to get the water and add it to the total.
// move pointer inwards
// repeat this for other pointer.
const optimized = (heights) => {
  if (!Array.isArray(heights)) {
    throw new Error("ebter a vaid array");
  }
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;
  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right--;
    }
  }
  console.log(totalWater);
};

const ele = [0, 1, 0, 2, , 1, 0, 3, 1, 0, 1, 2];
optimized(ele);
