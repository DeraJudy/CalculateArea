// MY OWN
function calculateArea(radius) {
    var π = Math.PI
    var area = (π * radius ** 2);
    return area;
}

var radius = prompt("Enter your Value: ");
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
