function knapsackProblem(profits, weights, capacity) {
  const n = profits.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
      for (let w = 1; w <= capacity; w++) {
          if (weights[i - 1] <= w) {
              dp[i][w] = Math.max(profits[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
          } else {
              dp[i][w] = dp[i - 1][w];
          }
      }
  }

  return dp[n][capacity];
}

function knapsack() {
  const itemProfits = [150, 70, 80];
  const itemWeights = [40, 10, 5];
  const knapsackCapacity = 50;

  console.log("Maximum value:", knapsackProblem(itemProfits, itemWeights, knapsackCapacity));
}

knapsack();
