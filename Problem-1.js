class Calculator {
    calculate(a, b, operation) {
        switch(operation) {
            case 'Addition':
                return a + b;
            case 'Subtraction':
                return a - b;
            case 'Multiplication':
                return a * b;
            case 'Division':
                return b !== 0 ? a / b : Infinity;
            default:
                throw new Error('Invalid operation');
        }
    }
}

// Example usage
const calc = new Calculator();
console.log(calc.calculate(5, 3, 'Addition'));
console.log(calc.calculate(5, 3, 'Subtraction'));
console.log(calc.calculate(5, 3, 'Multiplication'));
console.log(calc.calculate(5, 3, 'Division'));
console.log("5 ÷ 0 =", calc.calculate(5, 0, 'Division'));