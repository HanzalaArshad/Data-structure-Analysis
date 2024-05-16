function towerOfHanoi(n, beg, aux, end) {
  if (n === 1) {
      console.log(`Move disk 1 from rod ${beg} to rod ${end}`);
      return;
  }

  towerOfHanoi(n - 1, beg, end, aux);
  console.log(`Move disk ${n} from rod ${beg} to rod ${end}`);
  towerOfHanoi(n - 1, aux, beg, end);
}

// Example usage
towerOfHanoi(4, 'A', 'B', 'C');
