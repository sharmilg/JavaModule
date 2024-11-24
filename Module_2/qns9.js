function even(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
const originalArray = [2, 7, 4,9,10,3];
const evenArray = even(originalArray);
console.log("Original array:",originalArray);
console.log("Array of even numbers:",evenArray);
