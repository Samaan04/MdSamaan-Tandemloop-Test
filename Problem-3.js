function generateModifiedSeries(a) {
    const termCount = a % 2 === 0 ? a - 1 : a;
    const result = [];
    for (let i = 0; i < termCount; i++) {
        result.push(2 * i + 1);
    }
    return result.join(', ');
}

// Test cases
console.log(generateModifiedSeries(1));
console.log(generateModifiedSeries(2));
console.log(generateModifiedSeries(3)); 
console.log(generateModifiedSeries(4)); 
console.log(generateModifiedSeries(5)); 
console.log(generateModifiedSeries(6)); 
console.log(generateModifiedSeries(7)); 