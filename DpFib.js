function calculateFibonacciDP(n) {
  if (n < 0) {
      return -1;
  } else if (n == 0) {
      return 0;
  } else if (n == 1) {
      return 1;
  }

  // Create an array to store Fibonacci numbers.
  let fib = new Array(n + 1);
  fib[0] = 0;
  fib[1] = 1;

  // Fill the array using the bottom-up approach.
  for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n];
}

console.log(calculateFibonacciDP(6)); // Output: 120
