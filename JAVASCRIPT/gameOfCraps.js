

function rollDie(){
    die1 = Math.floor(Math.random() * 6) + 1
    die2 = Math.floor(Math.random() * 6) + 1
      total = die1 + die2

      return total

    }

function displayDie(dice){
    dice = rollDie()

    console.log("Player played" + die1 + "and" + die2 + "sum is" + dice)


SumOfDieValues = rollDie()
displayDie(SumOfDieValues)

if (SumOfDieValues == 7 | 11){

    gameStatus = "WON"
    console.log("YOU" + gameStatus + "!")

}else if (sumOfDieValues == 2 | 3 | 12){

    gameStatus = "LOST"
    console.log("YOU" + gameStatus + "!")

}else{

gameStatus = "CONTINUE"
myPoint = sumOfDieValues
console.log("Your point is " + myPoint)

}
while (gameStatus == "CONTINUE"){

    sumOfDieValues = rollDie()
    if(sumOfDieValues == myPoint){
        console.log("YOU WON!")
    }else if(sumOfDieValues == 7){
        console.log("YOU LOST!")
    }
if (gameStatus == "WON"){
       console.log("YOU WON!")
}else{
       console.log("YOU LOST!")
   }
}
    
}



