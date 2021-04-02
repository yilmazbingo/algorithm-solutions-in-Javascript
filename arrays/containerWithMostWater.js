// maximal value question
// min(a,b) * (bi-ai)
const getMaxWater = (heights) => {
  if (!Array.isArray(heights)) {
    throw new Error("has to be an array");
  }
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    //   if I enter 1 item array, it wont get in this for loop
    for (let j = i + 1; j < heights.length; j++) {
      const height = Math.min(heights[i], heights[j]);
      const width = j - i;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};
// space complexity we are not storing any scaling thing in our memory. O(1)

const heightsArray =  ;
console.log(getMaxWater(heightsArray));

// we have to implement shifting technique.
const optimal = (heights) => {
  if (!Array.isArray(heights)) {
    throw new Error("input must be an array");
  }
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};
// const height = [4, 3, 1, 2, 11, 12];
console.log("optimal", optimal(heightsArray));
