// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + "! Welcome!");
//   }
  
//   // Example usage:
//   var firstName = "John";
//   var lastName = "Doe";
  
//   greetUser(firstName, lastName);
// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     return "Hello, " + fullName + "! Welcome!";
//   }
  
//   // Example usage:
//   var firstName = "Makki";
//   var lastName = "Raza";
  
//   var greeting = greetUser(firstName, lastName);
//   console.log(greeting);
  
//   function calculate(num1, num2, operator) {
//     var result;
  
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           return "Division by zero is not allowed.";
//         }
//         break;
//       default:
//         return "Invalid operator. Please use '+', '-', '*', or '/'.";
//     }
  
//     return "Result: " + num1 + " " + operator + " " + num2 + " = " + result;
//   }
  
//   // Example usage:
//   var num1 = 10;
//   var num2 = 5;
//   var operator = "+";
  
//   var result = calculate(num1, num2, operator);
//   console.log(result);
function addNumbers() {
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    var result = num1 + num2;

    
    document.getElementById("result").innerHTML = "The result of addition is: " + result;
}

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Compare characters from the beginning and end
//     for (var i = 0, j = str.length - 1; i < j; i++, j--) {
//       if (str[i] !== str[j]) {
//         return false; // Characters don't match, not a palindrome
//       }
//     }
//     return true; // All characters matched, it's a palindrome
//   }
  
//   // Example usage:
//   var testString1 = "madam";
//   var testString2 = "hello";
  
//   console.log(isPalindrome(testString1)); // true
//   console.log(isPalindrome(testString2)); // false
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the string
    var reversedStr = str.split("").reverse().join("");
  
    // Check if the reversed string is the same as the original string
    return str === reversedStr;
  }
  
  // Example usage:
  var inputString = "madam";
  if (isPalindrome(inputString)) {
    console.log(inputString + " is a palindrome.");
  } else {
    console.log(inputString + " is not a palindrome.");
  }
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return celsius + "°C is " + fahrenheit + "°F";
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5/9;
    return fahrenheit + "°F is " + celsius + "°C";
  }
  
  // Example usage:
  var celsiusTemperature = 25;
  var fahrenheitTemperature = 77;
  
  var celsiusToFahrenheitResult = celsiusToFahrenheit(celsiusTemperature);
  console.log(celsiusToFahrenheitResult); // Output: "25°C is 77°F"
  
  var fahrenheitToCelsiusResult = fahrenheitToCelsius(fahrenheitTemperature);
  console.log(fahrenheitToCelsiusResult); // Output: "77°F is 25°C"
    
  