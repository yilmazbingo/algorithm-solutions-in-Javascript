// In algorithms implemented iteratively, Big-O analysis is simpler because loops clearly define when to stop and how much to increment in each iteration
// Recurrence relations consist of two part analysis. Big-O for base case, Big-O for recursive case
function fibo(n) {
  if (n < 2) return 1;
  else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

// base case Big-O = O(1)
// Recursive case   T(n)=T(n-1) + T(n-2) + O(1)     | replace n=n-1
// T(n-1) = T(n-2) + T(n-3) + O(1)     | rreplace n-1=n-2
// T(n-2) = T(n-3) + T(n-4) + O(1)
// for every call there are 2 more calls for each call. think it like a tree.  this has time complexity O(2 over n).
// What this means is, the time taken to calculate fibo(n) is equal to the sum of time taken to calculate fibo(n-1) and fibo(n-2). This also includes the constant time to perform the previous addition.

/* F(6)                * <-- only once --> fib0(6)=fibo(5)+fibo(4)= fibo(4)+fibo(3) + fibo(3)
   F(5)                *                   fibo(5)=fibo(4)+fibo(3) 
   F(4)                **                  fibo(4)=fibo(3)+fibo(2)
   F(3)               ****
   F(2)             ********
   F(1)         ****************         <-- 16
   F(0) ******************************** <-- 32    */
