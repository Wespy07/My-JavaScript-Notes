
// function currying - Question 1
// const multiply = (a) => (b) => a * b;

// // Example usage:
// const multiplyBy2 = multiply(2);  // Partially applies 2
// const result = multiplyBy2(5);    // Applies 5, result should be 10
// console.log(result);  // Output: 10

// // Directly apply both arguments
// const directResult = multiply(3)(4); // result should be 12
// console.log(directResult);  // Output: 12

// answer 1
function multiply(a) {
    return function (b) {
        return a * b
    }
}

const multiplyBy2 = multiply(2)
console.log(multiplyBy2(5));

const directResult = multiply(3)(4)
console.log(directResult);


// function currying - question 2
// Currying with Multiple Functions
// Write a curried function calculate that can perform different arithmetic operations based on a provided operator. The function should first accept an operator (e.g., "add", "subtract", "multiply", "divide"), and then accept two numbers to perform the operation on.

// const add = calculate('add');          // Partially applies 'add' operator
// const result1 = add(3)(4);             // Applies numbers 3 and 4, result should be 7
// console.log(result1);                 // Output: 7

// const subtract = calculate('subtract'); // Partially applies 'subtract' operator
// const result2 = subtract(10)(4);       // Applies numbers 10 and 4, result should be 6
// console.log(result2);                 // Output: 6

// const multiply = calculate('multiply'); // Partially applies 'multiply' operator
// const result3 = multiply(6)(7);        // Applies numbers 6 and 7, result should be 42
// console.log(result3);                 // Output: 42

// const divide = calculate('divide');    // Partially applies 'divide' operator
// const result4 = divide(8)(2);         // Applies numbers 8 and 2, result should be 4
// console.log(result4);                 // Output: 4

// answer 2
function calculate(a) {
    const lowerCaseOperator = a.toLowerCase()
    if (lowerCaseOperator === 'add') {
        return function (b) {
            return function (c) {
                return b + c
            }
        }
    } else if (lowerCaseOperator === 'subtract') {
        return function (b) {
            return function (c) {
                return b - c
            }
        }
    } else if (lowerCaseOperator === 'multiply') {
        return function (b) {
            return function (c) {
                return b * c
            }
        }
    } else if (lowerCaseOperator === 'divide') {
        return function (b) {
            return function (c) {
                return b / c
            }
        }
    } else {
        throw new Error('invalid operator')
    }
}

const add = calculate('aDd');
const result1 = add(3)(4);
console.log(result1);

const subtract = calculate('subtract');
const result2 = subtract(10)(4);
console.log(result2);

const multiply2 = calculate('mulTiply');
const result3 = multiply2(6)(7);
console.log(result3);

const divide = calculate('divide');
const result4 = divide(8)(2);
console.log(result4); 
