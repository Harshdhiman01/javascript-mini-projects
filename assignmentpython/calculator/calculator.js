// Calculator function
function calculator() {
    // Get the input values
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
  
    // Perform the calculation
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2!== 0) {
          result = num1 / num2;
        } else {
          result = "Error: Division by zero!";
        }
        break;
      default:
        result = "Error: Invalid operator!";
    }
  
    // Display the result
    document.getElementById("result").value = result;
  }
  
  // Add an event listener to the calculate button
  document.getElementById("calculate").addEventListener("click", calculator);