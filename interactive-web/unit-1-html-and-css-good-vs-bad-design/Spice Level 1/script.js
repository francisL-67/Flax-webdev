// Initialize the counter variable
let count = 0;

// Get references to the HTML elements
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');

// Add an event listener to the button
incrementButton.addEventListener('mousedown', () => {
    // Increment the count
    count++;
    // Update the display with the new count
    countDisplay.textContent = count;
});