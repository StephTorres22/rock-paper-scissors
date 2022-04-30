
        const gameOptions = ["rock", "paper", "scissors"];
        let computerSelection
        let playerSelection
        const rockButton = document.querySelector('#rockButton');     
        const paperButton = document.querySelector('#paperButton');
        const scissorsButton = document.querySelector('#scissorsButton');

        const results = document.querySelector('.results');
        const resultText = document.createElement('p');
        results.appendChild(resultText);
        resultText.textContent = '';

        const scoreText = document.createElement('p');
        results.appendChild(scoreText);
        scoreText.textContent = '';

        const playAgain = document.createElement('p');
        results.appendChild(playAgain);
        playAgain.textContent = '';
        

        
        var computerScore = 0;
        var userScore = 0;     
        
        

        function computerPlay(){

            return gameOptions[Math.floor(Math.random() * gameOptions.length)];
        }
           

        function playRound(playerSelection, computerSelection){  

           
            
            computerSelection = computerPlay();           


           if (playerSelection == 'rock' && computerSelection == 'paper'){
               computerScore +=1;
               resultText.textContent = 'Sorry you lose this round, Paper beats Rock.';
           }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
                   computerScore +=1;
                   resultText.textContent = 'Sorry, you lose this round, Rock beats Scissors';
               } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
                   computerScore +=1;
                   resultText.textContent = 'Sorry, you lose this round, Scissors beats Paper'
               } else if(playerSelection == 'rock' && computerSelection == 'scissors'){
                   userScore +=1;
                   resultText.textContent = 'Well done you win this round, Rock beats Scissors';
               } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
                   userScore +=1;
                   resultText.textContent = 'Well done you win this round, Scissors beats Paper';
               } else if(playerSelection == 'paper' && computerSelection == 'rock'){
                   userScore +=1;
                   resultText.textContent = 'Well done you win this round, Paper beats Rock';
               } else if(playerSelection == computerSelection){
                   resultText.textContent = 'You both chose the same thing, this round is a draw.';
               }

               return;
            }

        
            
            function game(){
                

                rockButton.addEventListener('click', () => {
                    clearResultText();
                    playerSelection = 'rock';
                    playRound(playerSelection, computerSelection);
                    updateScore();
                    declareWinner();
                    
                });

                paperButton.addEventListener('click', () => {
                    clearResultText();
                    playerSelection = 'paper';  
                    playRound(playerSelection, computerSelection);
                    updateScore();
                    declareWinner();
                        
                });
                scissorsButton.addEventListener('click', () => {
                    clearResultText();
                    playerSelection = 'scissors';
                    playRound(playerSelection, computerSelection);
                    updateScore();
                    declareWinner();
                    
                });     

            }

            function clearResultText(){

                resultText.textContent = '';
                scoreText.textContent = '';
                
            }

            function declareWinner(){

                
                
                if (userScore == 5){
                    resultText.textContent = 'Well done, you beat the computer, first to five.';
                    scoreText.textContent = 'The final score is: Player ' + userScore + ', Computer ' + computerScore;
                    playAgain.textContent = 'Would you like to play again?'
                    //removerClickListener();
                    resetScore();
                    
                    
                } else if (computerScore == 5){
                    resultText.textContent = 'Unlucky, the computer beat you this game.';
                    scoreText.textContent = 'The final score is: Player ' + userScore + ', Computer ' + computerScore;
                    playAgain.textContent = 'Would you like to play again?';
                    //removerClickListener();
                    resetScore();
                }

            }

            function resetScore(){

                const resetButton = document.createElement('button');
                results.appendChild(resetButton);
                resetButton.textContent = 'Clear scores, play again!';
                resetButton.addEventListener('click', () =>{

                userScore = 0;
                computerScore = 0;
                resultText.textContent = '';
                scoreText.textContent = '';
                playAgain.textContent = '';
                playerSelection = '';
                computerSelection = '';
                results.removeChild(resetButton);
                 
                })
            }


            function updateScore(){               

                scoreText.textContent = 'The current score is: Player ' + userScore + ', Computer ' + computerScore;
                
            }

            /*function removerClickListener(){
                rockButton.removeEventListener('click', playRound);
                paperButton.removeEventListener('click', playRound);
                scissorsButton.removeEventListener('click', playRound);

            }
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
               */  
            window.onload = game();