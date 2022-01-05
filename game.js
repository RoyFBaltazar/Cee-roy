

//dice sound rings everytime you dice are rolled
let diceSound = new Audio('images/rollDiceSound.mp3');
let gameOverSound = new Audio('images/Game-over.wav')
let winSound= new Audio('images/win-sound.wav')


window.addEventListener( 'DOMContentLoaded', function () {
	
   
    const buttonRoolDice = document.querySelector( '.dice-roll' );
    const buttonReset = document.querySelector('.resetButton')
    //tallies game wins      
    let playerTally=0;
    let bankTally=0;
    let totalMoneyBet = 0;
function rollDice () {
    let  playerBet = prompt("how much do you want to bet?")
    let playerScore=[];
    let BankScore= [];
    if(playerBet >0){
        totalMoneyBet = totalMoneyBet + Number(playerBet)
    }
    else{
        console.log("only cash")
    }
    const diceSide12 = document.getElementById( 'dice-side-12' )
    const diceSide1 = document.getElementById( 'dice-side-1' );
    const diceSide2 = document.getElementById( 'dice-side-2' );
    const status = document.getElementById( 'status' );
         const side12 = Math.floor( Math.random() * 6 ) + 1;
    const side1 = Math.floor( Math.random() * 6 ) + 1;
    const side2 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal = side1 + side2 + side12;
diceSound.play()
    diceSide12.innerHTML = side12;
    diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

    status.innerHTML = 'You rolled ' + diceTotal + '.';
    //Banks dice
    const diceSide4 = document.getElementById( 'dice-side-4' )
    const diceSide5 = document.getElementById( 'dice-side-5' );
    const diceSide6 = document.getElementById( 'dice-side-6' );
    const status2 = document.getElementById( 'status2' );
    //bank rolls     
    const side4 = Math.floor( Math.random() * 6 ) + 1;
    const side5 = Math.floor( Math.random() * 6 ) + 1;
    const side6 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal2 = side4 + side5 + side6;
//updates dice on screen for bank
    diceSide4.innerHTML = side4;
    diceSide5.innerHTML = side5;
    diceSide6.innerHTML = side6;
    status2.innerHTML = ' Bank rolled ' + diceTotal2 + '.';
    //game details if player get 3 of the same player wins
     if ( side1 === side2 && side1 === side12) {
    status.innerHTML += ' Tripple ! You won!';
    winSound.play()
    alert("You won with side1 + side12 + side2")
    resetfunction()
     }
     //filters and adds number to player score
     else if (side12 === side1 && side12 !== side2 ){
      playerScore= playerScore + side2;
      console.log("match 2 " + playerScore)
     }
     else if (side12 === side2 && side12 !== side1){
        playerScore= playerScore + side1;
        console.log("match 2 " + playerScore)
     } else if(side1 === side2 && side1 !== side12){
        playerScore= playerScore + side12;;
         console.log("match 2 " + playerScore)
     }
     else if (side12 !== side1 && side12 !== side2){
         console.log("player roll Again")
        status.innerHTML += " Roll Again!"}
        //  alert("roll Again")}
    // console.log(playerScore)

     //Bank roll outcomes
     if ( side4 === side5 && side4 === side6) {
        status2.innerHTML += 'Triple! Player Wins!';
        gameOverSound.play()
        alert("The Bank Won")
        resetfunction()
         }
         else if (side4 === side5 && side4 !== side6 ){
            BankScore= BankScore + side6;
            console.log("match 2 " + BankScore)
           }
           else if (side4 === side6 && side4 !== side5){
            BankScore= BankScore + side5
               console.log("match 2 " + BankScore);
           } else if(side5 === side6 && side5 !== side4){
            BankScore= BankScore + side4;
               console.log("match 2 " + BankScore)
           }
           else if(side4 !== side5 && side4 !== side6){
               console.log("Bank roll again")
               status2.innerHTML += " Roll again!"
           }
    //  //tallies game wins      
    //        let playerTally=0;
    //        let bankTally=0;
    // game outcomes
if (playerScore > BankScore){
   playerTally = playerTally + 1;
   console.log("Player rounds won: " + playerTally)
   status.innerHTML += " Player wins this round "
   winSound.play()
}
if (BankScore > playerScore){
    bankTally= bankTally + 1;
    console.log("Bank rounds won: " + bankTally)
    status2.innerHTML += " Bank wins this round"
    gameOverSound.play()
}           
 if(BankScore === playerScore){
     console.log("Tie")
     gameOverSound.play()
 }   
 // tallies game   
 if (bankTally >= 3){
     alert("Game over, you lost " + totalMoneyBet + " Dollars")
     resetfunction()
 }
    if (playerTally >= 3){
        let winningS= totalMoneyBet *=2;
        alert("You won " + winningS + " Dollars")
        resetfunction()
    }
}
// reset function add a message to dice
function resetfunction(){
    document.getElementById('status').textContent = 'Roll Dice Again';
     document.getElementById( 'dice-side-4' ).textContent ='-';
    document.getElementById( 'dice-side-5' ).textContent ='L';
     document.getElementById( 'dice-side-6' ).textContent ='O';
     document.getElementById( 'dice-side-12' ).textContent ='C';
     document.getElementById( 'dice-side-1' ).textContent ='E';
     document.getElementById( 'dice-side-2' ).textContent ='E';
     document.getElementById('status2').textContent = 'Bank Always Wins';
     playerTally = 0;
     bankTally = 0;
     playerBet = 0;
     totalMoneyBet = 0;
     
}
//two buttons
buttonRoolDice.addEventListener( 'click', rollDice, false);
buttonReset.addEventListener('click', resetfunction)
}, false);

