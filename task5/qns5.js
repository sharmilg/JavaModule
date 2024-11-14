let numbers = [];
let enteredNumber = new Set();

function askNum() {
    const input = prompt('Enter a number (enter a previously entered number to stop): ');

    const number = parseFloat(input);

    if (isNaN(number)) {
        console.log("The number is not valid. Please try again.");
        askNum();
        return;
    }
    if (enteredNumber.has(number)) {
        console.log(`The number ${number} already exists.`);
        numbers.sort((a, b) => a - b);  // Sort the array in ascending order
        console.log('Given numbers in ascending order:', numbers);
    } else {
        numbers.push(number);
        enteredNumber.add(number);
        askNum();
    }
}
askNum();
