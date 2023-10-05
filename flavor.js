// Get references to the HTML elements
const inputElement = document.getElementById('flavorsInput');
const countButton = document.getElementById('countButton');
const tableBody = document.querySelector('#flavorTable tbody');

// Add an event listener to the button
countButton.addEventListener('click', countFlavors);

function countFlavors() {
    const flavors = inputElement.value.split(',').map(flavor => flavor.trim());
    const flavorCounts = {};

    // Count the flavors
    flavors.forEach(flavor => {
        if (flavor in flavorCounts) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    });

    // Display the flavor counts in the table
    tableBody.innerHTML = '';

    for (const flavor in flavorCounts) {
        const row = tableBody.insertRow();
        const flavorCell = row.insertCell(0);
        const countCell = row.insertCell(1);
        flavorCell.textContent = flavor;
        countCell.textContent = flavorCounts[flavor];
    }
}
