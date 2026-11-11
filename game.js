    const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };
        update();
        //  
        let isAutoPlaying = false;
        let intervalId;
        function autoPlay(){
            if (!isAutoPlaying){
                intervalId = setInterval(function(){
                    const playerMove = pickComputerMove();
                    playGame(playerMove);
                }, 1000);
                isAutoPlaying = true;
            } else {
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        }
        function playGame(playerMove){
            pickComputerMove();
            let result;
            if(playerMove === 'scissors'){
                if(computerChoice === 'rock'){
                    result = 'You Lose';
                }
                else if(computerChoice === 'paper'){
                    result = 'You Win';
                }
                else if(computerChoice === 'scissors'){
                    result = 'Tie';
                }
            } else if (playerMove === 'paper'){
                if(computerChoice === 'rock'){
                    result = 'You Win';
                }
                else if(computerChoice === 'paper'){
                    result = 'Tie';
                }
                else if(computerChoice === 'scissors'){
                    result = 'You Lose';
                }
            } else if (playerMove === 'rock'){
                if(computerChoice === 'rock'){
                    result = 'Tie';
                }
                else if(computerChoice === 'paper'){
                    result = 'You Lose';
                }
                else if(computerChoice === 'scissors'){
                    result = 'You Win';
                }
            }
            if(result === 'You Win'){
                score.wins++;
            } else if(result === 'You Lose'){
                score.losses++;
            } else if(result === 'Tie'){
                score.ties++;
            }
            localStorage.setItem('score', JSON.stringify(score));
           update();
           document.querySelector('.js-result').innerHTML = result;
           document.querySelector('.js-choices').innerHTML = ` You <img src="images/${playerMove}-emoji.png" class="move-button"> 
                    <img src="images/${computerChoice}-emoji.png" class="move-button"> 
                    computer`;
          }
        
        let computerChoice;
        function pickComputerMove(){
            const mathNumber =  Math.random();
            if(mathNumber > 0 && mathNumber < 1/3){
                computerChoice = 'rock';
            }
            else if(mathNumber > 1/3 && mathNumber < 2/3){
                computerChoice = 'paper';
            }
            else if(mathNumber > 2/3 && mathNumber < 1){
                computerChoice = 'scissors';
            }
            return computerChoice;
        }

        function update(){
            document.querySelector('.wins-count').innerHTML = score.wins;
            document.querySelector('.losses-count').innerHTML = score.losses;
            document.querySelector('.ties-count').innerHTML = score.ties;
            document.querySelector('.player-score').innerHTML = score.wins;
            document.querySelector('.computer-score').innerHTML = score.losses;
        }


    