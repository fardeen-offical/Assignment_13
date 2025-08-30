// =======================
// Chapter 1: Variables
// =======================
document.writeln("<h2>Chapter 1: Variables</h2>");

// Declare variables
let name = "Fardeen";
let age = 22;
document.writeln("Name: " + name + "<br>");
document.writeln("Age: " + age + "<br><br>");

// =======================
// Chapter 2: Data Types
// =======================
document.writeln("<h2>Chapter 2: Data Types</h2>");

let isStudent = true; // Boolean
let grade; // Undefined
let score = null; // Null
document.writeln("isStudent: " + isStudent + "<br>");
document.writeln("grade: " + grade + "<br>");
document.writeln("score: " + score + "<br><br>");

// =======================
// Chapter 3: Operators
// =======================
document.writeln("<h2>Chapter 3: Operators</h2>");

let a = 10, b = 5;
document.writeln("a + b = " + (a + b) + "<br>");
document.writeln("a - b = " + (a - b) + "<br>");
document.writeln("a * b = " + (a * b) + "<br>");
document.writeln("a / b = " + (a / b) + "<br>");
document.writeln("a % b = " + (a % b) + "<br><br>");

// =======================
// Chapter 4: Alerts
// =======================
document.writeln("<h2>Chapter 4: Alerts</h2>");
// alert("Hello Fardeen! This is an alert box."); // Uncomment to test

// =======================
// Chapter 5: If-Else
// =======================
document.writeln("<h2>Chapter 5: If-Else</h2>");

let marks = 85;
if (marks >= 90) {
    document.writeln("Grade: A<br>");
} else if (marks >= 75) {
    document.writeln("Grade: B<br>");
} else {
    document.writeln("Grade: C<br>");
}
document.writeln("<br>");

// =======================
// Chapter 6: Switch
// =======================
document.writeln("<h2>Chapter 6: Switch Statements</h2>");

let day = "Monday";
switch (day) {
    case "Monday":
        document.writeln("Start of the week<br>");
        break;
    case "Friday":
        document.writeln("Weekend is coming!<br>");
        break;
    default:
        document.writeln("Midweek day<br>");
}
document.writeln("<br>");

// =======================
// Chapter 7: Loops
// =======================
document.writeln("<h2>Chapter 7: Loops</h2>");

document.writeln("For Loop: ");
for (let i = 1; i <= 5; i++) {
    document.writeln(i + " ");
}
document.writeln("<br>");

document.writeln("While Loop: ");
let j = 1;
while (j <= 5) {
    document.writeln(j + " ");
    j++;
}
document.writeln("<br><br>");

// =======================
// Chapter 8: Functions
// =======================
document.writeln("<h2>Chapter 8: Functions</h2>");

function greet(user) {
    return "Hello, " + user + "!";
}
document.writeln(greet("Fardeen") + "<br><br>");

// =======================
// Chapter 9: Arrays
// =======================
document.writeln("<h2>Chapter 9: Arrays</h2>");

let colors = ["Red", "Green", "Blue"];
document.writeln("Colors: " + colors + "<br>");
colors.push("Yellow");
document.writeln("After push: " + colors + "<br><br>");

// =======================
// Chapter 10: Objects
// =======================
document.writeln("<h2>Chapter 10: Objects</h2>");

let student = { name: "Ali", age: 21, course: "Web Dev" };
document.writeln("Student Name: " + student.name + "<br>");
document.writeln("Student Age: " + student.age + "<br><br>");

// =======================
// Chapter 11: Alerts and Prompt
// =======================
document.writeln("<h2>Chapter 11: Alerts and Prompt</h2>");

// alert("Welcome to JS Learning!"); // Uncomment to test
// let favoriteColor = prompt("Enter your favorite color:");
// document.writeln("Favorite Color: " + favoriteColor + "<br>");
