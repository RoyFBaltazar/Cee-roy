


let diceSound = new Audio('images/rollDiceSound.mp3');


window.addEventListener( 'DOMContentLoaded', function () {
	
   
    const buttonRoolDice = document.querySelector( '.dice-roll' );
    const buttonReset = document.querySelector('.resetButton')

function rollDice () {
    let playerScore=[];
    let BankScore= [];
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
    const diceSide4 = document.getElementById( 'dice-side-4' )
    const diceSide5 = document.getElementById( 'dice-side-5' );
    const diceSide6 = document.getElementById( 'dice-side-6' );
    const status2 = document.getElementById( 'status2' );
    //computer roll     
    const side4 = Math.floor( Math.random() * 6 ) + 1;
    const side5 = Math.floor( Math.random() * 6 ) + 1;
    const side6 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal2 = side4 + side5 + side6;

    diceSide4.innerHTML = side4;
    diceSide5.innerHTML = side5;
        diceSide6.innerHTML = side6;
        status2.innerHTML = ' Bank rolled ' + diceTotal2 + '.';
     if ( side1 === side2 && side1 === side12) {
    status.innerHTML += ' Tripple ! You won!';
     }
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
         console.log("roll Again")}
        //  alert("roll Again")}
    // console.log(playerScore)

     //computer roll
     if ( side4 === side5 && side4 === side6) {
        status2.innerHTML += 'tripple ! You get won!';
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
               console.log("roll again")
           }
           
if (playerScore > BankScore){
    console.log("Player Wins")
}
if (BankScore > playerScore){
    console.log("Bank wins")
}           
      
    
}
function resetfunction(){
    document.getElementById('status').textContent = 'Roll Dice Again';
     document.getElementById( 'dice-side-4' ).textContent ='-';
    document.getElementById( 'dice-side-5' ).textContent ='L';
     document.getElementById( 'dice-side-6' ).textContent ='O';
     document.getElementById( 'dice-side-12' ).textContent ='C';
     document.getElementById( 'dice-side-1' ).textContent ='E';
     document.getElementById( 'dice-side-2' ).textContent ='E';
     document.getElementById('status2').textContent = 'Bank Always Wins';
}

buttonRoolDice.addEventListener( 'click', rollDice, false);
buttonReset.addEventListener('click', resetfunction)
}, false);

