// FUNCTION
// Answer No 1
// var date = new Date();
// console.log(date)

// Answer No 2
function greetUserWithPrompt() {
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");

    if (firstName && lastName) {
        var fullName = firstName + " " + lastName;
        alert("Hello, " + fullName + "!");
    } else {
        alert("Please provide both a first name and a last name.");
    }
}
greetUserWithPrompt()

// Answer No 3
function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        return sum;
    } else {
        return "Invalid input. Please enter valid numbers.";
    }
}

const result = addTwoNumbers();
console.log(result);

// Answer No 5
function squareNumber(number) {
    return number * number;
}

const result = squareNumber(5);
console.log(result);

// Answer No 6
function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is: ${result}`); 

// Answer No 7


