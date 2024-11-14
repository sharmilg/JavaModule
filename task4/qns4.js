function SmallestToBiggest() {
    let numbers = [];
    let result;

    do {
        result = parseFloat(prompt("Enter a number or (enter 0 to stop):"));
        if (isNaN(result)) {
            alert("Please enter a valid number");
        } else if (result !== 0) {
            numbers.push(result);
        }
    } while (result !== 0);
    numbers.sort((a, b) => b - a);
    console.log("Numbers from largest to smallest:");
    console.log(numbers.join('\n'));
}

SmallestToBiggest();
