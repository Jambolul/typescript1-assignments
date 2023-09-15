"use strict";
// TODO: Write interface Item
// Create an empty array named 'cart' to store the items
const cart = [];
// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    const itemName = prompt("Enter item name: ");
    // Break the loop if an empty item name is entered
    if (itemName === "" || itemName === null) {
        break;
    }
    const itemPrice = Number(prompt("Enter item price: "));
    if (itemPrice === 0 || itemPrice === null) {
        break;
    }
    const itemQuantity = Number(prompt("Enter item quantity: "));
    if (itemQuantity === 0 || itemQuantity === null) {
        break;
    }
    // Create an item object and add it to the 'cart' array
    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
