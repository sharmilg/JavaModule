'use strict';
let numParticipants = parseInt(prompt('Enter the number of participants:'));
let participants = [];
for (let i = 0; i < numParticipants; i++) {
    participants.push(`<li>${prompt('Enter the name of participant:')}</li>`);
}
participants.sort();
document.write(participants.join('\n'));


