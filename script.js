
/*
        
        
        click button, corresponding value assigned to playerSelection, compare playerSelection to computerSelection, keep score*/

        

              

        const gameOptions = ["rock", "paper", "scissors"];
        let computerSelection
        let playerSelection
        const rockButton = document.querySelector('#rockButton');     
        const paperButton = document.querySelector('#paperButton');
        const scissorsButton = document.querySelector('#scissorsButton');
        

        
        var computerScore = 0;
        var userScore = 0;     
        
        

        function computerPlay(){

            return gameOptions[Math.floor(Math.random() * gameOptions.length)];
        }
           

        function playRound(playerSelection, computerSelection){  
            
            computerSelection = computerPlay();        


           if (playerSelection == 'rock' && computerSelection == 'paper'){
               computerScore +=1;
               console.log('Sorry, you lose this round, Paper beats Rock')}
               else if(playerSelection == 'scissors' && computerSelection == 'rock'){
                   computerScore +=1;
                   console.log('Sorry, you lose this round, Rock beats Scissors')
               } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
                   computerScore +=1;
                   console.log('Sorry, you lose this round, Scissors beats Paper')
               } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
                   userScore +=1;
                   console.log('Well done you win this round, Rock beats Scissors')
               } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
                   userScore +=1;
                   console.log('Well done you win this round, Scissors beats Paper')
               } else if(playerSelection == 'paper' && computerSelection == 'rock'){
                   userScore +=1;
                   console.log('Well done you win this round, Paper beats Rock')
               } else if(playerSelection == computerSelection){
                   console.log('You both chose the same thing, this round is a draw.')
               }

               return;
            }

        
            

            
            
            function game(){

                rockButton.addEventListener('click', () => {
                    playerSelection = 'rock';
                    playRound(playerSelection, computerSelection);
                    
                });

                paperButton.addEventListener('click', () => {
                    playerSelection = 'paper';  
                    playRound(playerSelection, computerSelection);
                        
                });
                scissorsButton.addEventListener('click', () => {
                    playerSelection = 'scissors';
                    playRound(playerSelection, computerSelection);
                    
                });     

            
            for (let i = 0; i<=5; i++){ 

                       
                

                 if (i == 5 && userScore < computerScore){
                console.log('Unlucky, the computer beat you, the score was:' + userScore + ' to ' + computerScore); 
                i = 0;
                } else if (i == 5 && userScore > computerScore){
                console.log('Well done, you beat the computer, the score was:' + userScore + ' to ' + computerScore);
                i = 0;
                } //using console.log instead of return to see what's happening
                // i no longer reachable/not defined.. so is the for loop nolonger reachable because of the return in playround.
            
                }  

            }
            window.onload = game();