function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById("input1").value);
    let num2 = parseInt(document.getElementById("input2").value);
    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);
        displayResult = (result);
    } else {
        displayResult("Please enter valid numbers.");
    }
}

function multiply(a, b) {
    debugger;
    return a * b;
}

function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `The result is: ${result}`;
}