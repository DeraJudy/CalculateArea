// Write a function called findMax that takes an array of numbers as input and 
// returns the maximum value in the array.

// My Solution
function findMax(numbers) {
    var findMax = Math.max(...numbers);
    return findMax;
}

var numbers = [1, 8, 4, 9, 15];
var max = findMax(numbers);
console.log("The maximum number is " + max);

// Computer solution
function findMax(numbers) {
    var maxNumber = Math.max(...numbers);
    return maxNumber;
}

var numbers = [8, 3, 12, 5, 9];  // Use square brackets for an array
var max = findMax(numbers);
console.log("The maximum number is " + max);




// Write a function called reverseString that takes a string as input and returns the reverse of that string.
// My solution
function reverseString(inputString) {
    var reverseString = inputString.split("").reduce((acc, char) => char + acc, "");
    return reverseString;
}

var originalString = "Chidera";
var reversedString = reverseString(originalString);
console.log("Original: " + originalString);
console.log("Reversed: " + reversedString);

// Computer own
function reverseString(inputString) {
    var reversedString = inputString.split("").reduce((accumulator, character) => character + accumulator, "");
    return reversedString;
}

var originalString = "Hello";
var reversedString = reverseString(originalString);
console.log("Original: " + originalString);
console.log("Reversed: " + reversedString);


// Calcuting Area
// MY OWN
function calculateArea(radius) {
    var π = Math.PI
    var area = (π * radius ** 2);
    return area;
}

// var radius = prompt("Enter your Value: ");
var radius = 5;
var area = calculateArea(radius);
console.log("The area of the circle with radius " + radius + " is: " + area);

// Chat GPT
function calculateArea(radius) {
    // Calculate the area of the circle using the formula: area = π * r^2
    var area = Math.PI * Math.pow(radius, 2);
    return area;
}

// Example usage:
var radius = 5;
var area = calculateArea(radius);
console.log("The area of the circle with radius " + radius + " is: " + area);
