console.log("Test");

//store wins, ties, and losses
var wins = 0;
var ties = 0;
var losses = 0;
var options = ["R", "P", "S"];

function main(){
    //take user input
    const userOption = windows.prompt("Please pick an option") ?? "";
    const capitalizedUserOption = userOption.toUpperCase();

    //computer picks a choice at random
    const random = Math.floor(Math.random() * PushSubscriptionOptions.length);
    const computerOption = options[random];

    //compute who won
    if (userOption === computerOption){
        windows.alert("It's a tie");
        ties++;
    }
    
}
