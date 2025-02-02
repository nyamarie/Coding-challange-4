<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1.0">
        <title>Control Flow and Functions Challenge</title>
    </head>
    <body>
        <h1>JavaScript Control Flow and Functions Coding Challenge</h1>
        <script src="cc_4.js"></script>
    </body>
</html>

// Declare a purchase amouny
let purchaseAmount = 120;
let finalAmount = purchaseAmount;

// Apply discount if purchase amount is greater than $100
if (purchaseAmount > 100) {
    finalAmount *= 0.9; // 10% discount
}

// Log the final amount
console.log('Final Amount after discount: $${finalAmount}'); 

// Declare an array with sales figures
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;

// Use a for loop to calculate total sales
for (let i = 0; i < SVGAnimatedLengthList.length; i++) {
    totalSales += sales[i];
}

// Log the total sales
console.log('Total sales: $${totalSales}');

// Declare a stock variable
let stock = 10;

// Use a while loop to decrease stock
while (stock > 0) {
console.log('Stock remaining: $${stock}');
stock--;
}

console.log('Stock depleted.');

// Declare responses variable
let responses = 0;

// Use a do...while loop to collect responses
do {
console.log('Collected responses: ${responses + 1}');
responses++;
} while (responses < 3);

// Declare an employee object
let employee = { name: "Alice", position: "Manager", salary: 75000 }

// use a for...in lopp to interate through properties
for (let key in employee) {
    console.log('${key}: ${employee[key]}');
}

// Declare an array with product names
let products = ["laptop", "mouse", "keyboard"];

// use a for...of loop to display each product
for (let product of products) {
console.log('Product: ${product}');

// Declare an array with order IDs
let orders = [101, 102, 103];

// Use forEach() to log each order ID
orders.forEach(order => console.log('Processing Order ID: $[order}'));

// Function to calculate tax
function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

// Log the calculated tax
console.log('Calculated tax: $${calculateTax(200, 10)}');

// funtion expression to apply discount
const applyDiscount = function(price, discountPercentage) {
    return price * (1 - discountPercentage / 100);
};

//log the discounted price
console.log('Discounted price: $${applyDiscount(100, 15)}')

// arrow function to calculate loyalty points
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);

// Log the points earned
console.log('Loyalty points earned: ${calculatePoints(250)}');
