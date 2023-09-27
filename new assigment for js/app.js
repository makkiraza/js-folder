var table = prompt('Enter Table Number')
 for(var i=1; i <= 10; i++){
  document.write(table + " x " + i + ' = ' + table*i + "<br>")}

  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];


// Loop through the array and print each item
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
var userInput = prompt("Enter an item to search:");

// Flag to check if the item is found
var isFound = false;

// Loop through the array to search for the user input
for (var i = 0; i < A.length; i++) {
    if (A[i] === userInput) {
        isFound = true;
        break; // Item found, no need to continue searching
    }
}

// Check if the item was found and display a message
if (isFound) {
    console.log(userInput + " is found in the list.");
} else {
    console.log(userInput + " is not found in the list.");
}
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// var studentScores = {}; // Initialize an empty object

// // Loop through the students array and assign scores to the corresponding students
// for (var i = 0; i < students.length; i++) {
//     studentScores[students[i]] = scores[i];
// }

// // Now, studentScores is an object where keys are student names and values are their scores
// (studentScores);
// Sample data
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

// Create a table element
var table = document.createElement("table");

// Create the table header
var thead = document.createElement("thead");
var headerRow = document.createElement("tr");

var th1 = document.createElement("th");
th1.textContent = "Student Name";
headerRow.appendChild(th1);

var th2 = document.createElement("th");
th2.textContent = "Score";
headerRow.appendChild(th2);

thead.appendChild(headerRow);
table.appendChild(thead);

// Create the table body
var tbody = document.createElement("tbody");

for (var i = 0; i < students.length; i++) {
    var row = document.createElement("tr");

    var cell1 = document.createElement("td");
    cell1.textContent = students[i];
    row.appendChild(cell1);

    var cell2 = document.createElement("td");
    cell2.textContent = scores[i];
    row.appendChild(cell2);

    tbody.appendChild(row);
}

table.appendChild(tbody);

// Append the table to the body of the HTML document
document.body.appendChild(table);
var A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Nested loops to iterate through the elements of the array
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
      console.log(A[i][j]);
    }
  }
  