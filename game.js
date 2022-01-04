let diceSound;
let playerScore
function preload (){
    diceSound = loadSound("images/wuerfelbecher.wav")

}

window.addEventListener( 'DOMContentLoaded', function () {
	
    const buttonRoolDice = document.querySelector( '.dice-roll' );

function rollDice () {
    const diceSide12 = document.getElementById( 'dice-side-12' )
    const diceSide1 = document.getElementById( 'dice-side-1' );
    const diceSide2 = document.getElementById( 'dice-side-2' );
    const status = document.getElementById( 'status' );
         const side12 = Math.floor( Math.random() * 6 ) + 1;
    const side1 = Math.floor( Math.random() * 6 ) + 1;
    const side2 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal = side1 + side2 + side12;

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
    status.innerHTML += 'tripple ! You get won!';
     }
     else if (side12 === side1 && side12 !== side2 ){
      playerScore += side2;
      console.log("match 2")
     }
     else if (side12 === side2 && side12 !== side1){
         playerScore += side1
         console.log("match 2");
     } else if(side1 === side2 && side1 !== side12){
         playerScore += side12;
         console.log("match 2")
     }
     else{
         console.log("roll Again")
     }
    console.log(playerScore)

     //computer roll
     if ( side4 === side5 && side4 === side6) {
        status2.innerHTML += 'tripple ! You get won!';
         }
         else if (side4=== side5 && side4 !== side6 ){
            playerScore += side6;
            console.log("match 2")
           }
           else if (side4 === side6 && side4 !== side5){
               playerScore += side5
               console.log("match 2");
           } else if(side5 === side6 && side5 !== side4){
               playerScore += side4;
               console.log("match 2")
           }
           else(
               console.log("roll again")
           )
    
}


buttonRoolDice.addEventListener( 'click', rollDice, false);

}, false);

