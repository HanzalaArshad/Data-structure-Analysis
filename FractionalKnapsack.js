function fractionalKnapsackProblem(profits, weights, capacity) {
  const n = profits.length;
  const ratio = new Array(n);

  for (let i = 0; i < n; i++) {
      ratio[i] = [i, profits[i] / weights[i]];
  }

  ratio.sort((a, b) => b[1] - a[1]);

  let remainingCapacity = capacity;
  let finalValue = 0;

  for (let i = 0; i < n; i++) {
      const idx = ratio[i][0];
      if (remainingCapacity >= weights[idx]) {
          finalValue += profits[idx];
          remainingCapacity -= weights[idx];
      } else {
          finalValue += ratio[i][1] * remainingCapacity;
          break;
      }
  }

  return finalValue;
}

function fractionalKnapsackProblem() {
  const itemProfits = [40, 70, 120];
  const itemWeights = [40, 10, 30];
  const knapsackCapacity = 50;

  console.log(fractionalKnapsackProblem(itemProfits, itemWeights, knapsackCapacity));
}

fractionalKnapsackProblem();
