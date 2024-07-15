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
    if(c1==c2){
        return -1;
    }
    else{
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
}

let userChoice='';
let computerChoice='';
let humanScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll("button");
const user = document.querySelector(".user");
const comp = document.querySelector(".comp");
const score = document.querySelector(".scoreTable");
const userScore = document.querySelector(".v1");
const compScore = document.querySelector(".v2");

userScore.textContent="0";
compScore.textContent="0";

user.textContent = "Make Your Choice: ";
comp.textContent = "Computer Choice: ";
    btn.forEach((button) => {
        button.addEventListener("click",(e)=>{
            user.textContent = "Make Your Choice: ";
            comp.textContent = "Computer Choice: ";
            userChoice = e.target.textContent.toLowerCase();
            computerChoice = getComputerChoice();
            user.textContent += userChoice;
            comp.textContent += computerChoice;
            let win = whoWins(userChoice,computerChoice);
            if(win==0){
                humanScore++;
                userScore.textContent = humanScore;
            }
        
            else if(win==1){
                computerScore++;
                compScore.textContent = computerScore;
            }

            else{
                /*do nothing*/
            }
        });
    });

    






