// tail recursion makes space complexity from O(N)=>O(1).
// divide-and-conquer method is when a problem is solved by solving all of its smaller components.

function Factorial(x) {
  //Base case x<=1
  if (x <= 1) {
    return 1;
  } else {
    // x is waiting for the return value of Factorial(x-1)
    return x * Factorial(x - 1);
  }
}

Factorial(4); // waiting in the memory for Factorial(3)
4 * Factorial(3); //  waiting in the memory for Factorial(2)
4 * (3 * Factorial(2)); //  waiting in the memory for Factorial(1)
4 * (3 * (2 * Factorial(1)));
4 * (3 * (2 * 1));
//  We are making 4 Factorial() calls, space is O(n)

//--------------------------    TAIL RECURSION ----------------------------

// Tail Recursive Function is a recursive function in which recursive call is the last executed thing in the function.
// Tail call optimization means that it is possible to call a function from another function without growing the call stack.
function tailFactorial(x, totalSoFar = 1) {
  //Base Case: x===0. In recursion there must be base case. Otherwise they will never stop
  if (x === 0) {
    return totalSoFar;
  } else {
    return tailFactorial(x - 1, totalSoFar * x);
  }
}
// there is nothing waiting for tailFactorial to complete. we are returning another instance of tailFactorial()
// we are returning a new function call even though it is nested recursively.
tailFactorial(4); // default totalSoFar=1
tailFactorial(4, 1);
tailFactorial(3, 4);
tailFactorial(2, 12);
tailFactorial(1, 24);
tailFactorial(0, 24);
24;
// here it is not waiting so no function is written in the memeory.
// Good engine will know to optimize that and remove the original call from the call stack.

// we should write tail recursion in recursive solutions. but certain languages do not actually support the tail recursion in their engine that compiles the language down. since ecma6, there has been tail recursion that was in the specification. BUt none of the engines that compile js have implemented tail recursion into it. you wont achieve O(1) in js, because the compiler itself does not know how to implement this tail recursion.

// Update: As of January 1, 2020 Safari is the only browser that supports tail call optimization.
