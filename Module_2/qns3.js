 function collectDogNames() {
    let dogNames = [];
    for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter the name of dog ${i + 1}:`);
        if (name == null) {
            alert("Error. Reload the page");
            return;
        }
        if (name.trim() !== "") {
            dogNames.push(`<li>${name}</li>`);
        } else {
            alert("Please enter a valid name");
        }
    }
    dogNames.sort();
    dogNames.reverse();
    document.write(dogNames.join('\n'));
}
collectDogNames();
