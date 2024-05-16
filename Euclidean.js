function euclideanAlgorithm(a, b) {
    // Ensure a is greater than or equal to b
    if (b > a) {
        [a, b] = [b, a];
    }

    // Iterate until b becomes 0
    while (b !== 0) {
        // Calculate the remainder of a divided by b
        const remainder = a % b;
        
        // Replace a with b and b with the remainder
        a = b;
        b = remainder;
    }
    
    // Return the GCD, which is stored in a
    return a;
}

console.log(euclideanAlgorithm(12,33));