function getComputerChoice(){
        let choice  =  Math.floor(Math.random()*3);
        switch(choice){
            case 0: return "rock";
                    
            case 1: return "paper";
            
            case 2: return "scissors";
        }
        
}
function getUserChoice(){
    let choice = prompt("Type your choice");
    return choice.toLowerCase();
}
function whoWins(c1,c2){
    switch(c1){
        case "rock": if(c2==="scissors")
                        return 0;
                     else
                        return 1;
                     
        case "paper": if(c2==="rock")
                        return 0;
                     else
                        return 1;
        case "scissors": if(c2==="paper")
                        return 0;
                     else
                        return 1;
    }
}
let round = prompt("choose the number of rounds");
let humanScore=0;
let computerScore=0;
let count=1;
while(round!=0){
    
    alert("round "+count);
    let humanChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    alert("your choice:"+humanChoice);
    alert("computer choice:"+computerChoice);

    if(humanChoice===computerChoice){
        alert("round "+count+" is draw");
    }
    else{
        
        if(whoWins(humanChoice,computerChoice)==0){
            humanScore++;
            alert("user wins round"+count+"\nscore is "+humanScore);
        }
        else{
            computerScore++;
            alert("computer wins round"+count+"\nscore is "+computerScore);
        }
    }
    round--;
    count++;
}

if(humanScore>computerScore)
    alert("human wins");
else if(computerScore>humanScore)
    alert("computer wins");
else
    alert("Draw!");