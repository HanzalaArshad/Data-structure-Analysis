function fib(n) {
  if (n < 2) // Change to n <= 1
    return n; // Change to return n

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // Output: 2
