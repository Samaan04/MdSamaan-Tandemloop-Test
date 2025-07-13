function generateSeries(a) {
    const result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    return result.join(', ');
}

// Example usage
console.log(generateSeries(1));
console.log(generateSeries(4)); 
console.log(generateSeries(8));