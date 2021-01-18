// it makes space complexity from O(N)=>O(1)

function Factorial(x) {
  if (x <= 1) {
    //Base case
    return 1;
  } else {
    return x * Factorial(x - 1);
  }
}
Factorial(4);
4 * Factorial(3);
4 * (3 * Factorial(2));
4 * (3 * (2 * Factorial(1)));
4 * (3 * (2 * 1));
//  since 12 make 4 calculations, space is O(n)

function tailFactorial(x, totalSoFar = 1) {
  if (x === 0) {
    //Base CAse
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
// we should write tail recursion in recursive solutions. but certain languages do not actually support the tail recursion in their engine that compiles the language down. since ecma6, there has been tail recursion that was in the specification. BUt none of the engines that compile js have implemented tail recursion into it. you wont achieve O() in js, because the compiler itself does not know how to implement this tail recursion.
