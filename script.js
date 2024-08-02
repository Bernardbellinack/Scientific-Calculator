// Function to append a value to the display
function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = '';
    }
    display.innerText += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

// Function to calculate and display the result
function calculateResult() {
    let display = document.getElementById('display');
    try {
        // Evaluate the expression and handle potential errors
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

// Function to perform scientific calculations
function calculateScientific(operation) {
    let display = document.getElementById('display');
    let value = parseFloat(display.innerText);
    try {
        switch (operation) {
            case 'sqrt':
                display.innerText = Math.sqrt(value);
                break;
            case 'cbrt':
                display.innerText = Math.cbrt(value);
                break;
            case 'pow':
                // Prompt for the exponent
                let exponent = prompt("Enter the exponent:");
                if (exponent !== null) {
                    display.innerText = Math.pow(value, parseFloat(exponent));
                }
                break;
            case 'factorial':
                display.innerText = factorial(value);
                break;
            case 'log':
                display.innerText = Math.log10(value);
                break;
            case 'ln':
                display.innerText = Math.log(value);
                break;
            case 'exp':
                display.innerText = Math.exp(value);
                break;
            case 'sin':
                display.innerText = Math.sin(value);
                break;
            case 'cos':
                display.innerText = Math.cos(value);
                break;
            case 'tan':
                display.innerText = Math.tan(value);
                break;
            case 'asin':
                display.innerText = Math.asin(value);
                break;
            case 'acos':
                display.innerText = Math.acos(value);
                break;
            case 'atan':
                display.innerText = Math.atan(value);
                break;
            case 'sinh':
                display.innerText = Math.sinh(value);
                break;
            case 'cosh':
                display.innerText = Math.cosh(value);
                break;
            case 'tanh':
                display.innerText = Math.tanh(value);
                break;
            case 'asinh':
                display.innerText = Math.asinh(value);
                break;
            case 'acosh':
                display.innerText = Math.acosh(value);
                break;
            case 'atanh':
                display.innerText = Math.atanh(value);
                break;
            default:
                display.innerText = 'Error';
        }
    } catch {
        display.innerText = 'Error';
    }
}

// Function to calculate factorial
function factorial(n) {
    if (n < 0) return 'Error'; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Convert degrees to radians
function degreesToRadians() {
    let display = document.getElementById('display');
    display.innerText = (parseFloat(display.innerText) * Math.PI) / 180;
}

// Convert radians to degrees
function radiansToDegrees() {
    let display = document.getElementById('display');
    display.innerText = (parseFloat(display.innerText) * 180) / Math.PI;
}

// Calculate combination (nCr)
function calculateCombination() {
    let n = parseFloat(prompt("Enter n:"));
    let r = parseFloat(prompt("Enter r:"));
    if (!isNaN(n) && !isNaN(r) && n >= r && n >= 0 && r >= 0) {
        document.getElementById('display').innerText = combination(n, r);
    } else {
        document.getElementById('display').innerText = 'Error';
    }
}

// Calculate permutation (nPr)
function calculatePermutation() {
    let n = parseFloat(prompt("Enter n:"));
    let r = parseFloat(prompt("Enter r:"));
    if (!isNaN(n) && !isNaN(r) && n >= r && n >= 0 && r >= 0) {
        document.getElementById('display').innerText = permutation(n, r);
    } else {
        document.getElementById('display').innerText = 'Error';
    }
}

// Generate a random number
function generateRandomNumber() {
    document.getElementById('display').innerText = Math.random();
}

// Placeholder functions for matrix and complex operations
function matrixOperation() {
    alert("Matrix operations not yet implemented.");
}

function complexOperation() {
    alert("Complex number operations not yet implemented.");
}

// Placeholder functions for summation and integration
function summation() {
    alert("Summation not yet implemented.");
}

function integration() {
    alert("Integration not yet implemented.");
}

// Helper function to calculate combination (nCr)
function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// Helper function to calculate permutation (nPr)
function permutation(n, r) {
    return factorial(n) / factorial(n - r);
}
