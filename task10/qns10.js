'use strict';
function votingProgram() {
    const numCandidates = parseInt(prompt("Enter the number of candidates:"), 10);
    if (isNaN(numCandidates) || numCandidates <= 0) {
        console.log("Please enter a valid positive number of candidates.");
        return;
    }
    const candidates = [];
    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Enter name for candidate ${i + 1}:`);
        const candidate = {
            name: name,
            votes: 0
        };
        candidates.push(candidate);
    }
    const numVoters = parseInt(prompt("Enter the number of voters:"), 10);
    if (isNaN(numVoters) || numVoters <= 0) {
        console.log("Please enter a valid positive number of voters.");
        return;
    }
    for (let i = 0; i < numVoters; i++) {
        const vote = prompt(`Voter ${i + 1}, who do you vote for? (Enter candidate's name or leave blank for an empty vote)`);
        if (vote === "") {
            console.log("Empty vote recorded.");
            continue;
        }
        let found = false;
        for (let j = 0; j < candidates.length; j++) {
            if (candidates[j].name.toLowerCase() === vote.toLowerCase()) {
                candidates[j].votes += 1;
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(`Candidate "${vote}" not found. Vote not counted.`);
        }
    }
    candidates.sort((a, b) => b.votes - a.votes);
    const winner = candidates[0];
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    for (let i = 0; i < candidates.length; i++) {
        console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
    }
}
votingProgram();
