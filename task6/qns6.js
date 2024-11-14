function rollDice(){
    return Math.floor(Math.random()*6)+1;

}
function rolluntillsix(){
    const rolls=[];
    let roll;
    do{
        roll= rollDice();
        rolls.push(roll);
        console.log(`Rolled: ${roll}`);

    } while(roll!=6);
    console.log("final rolls",rolls);
}
rolluntillsix();