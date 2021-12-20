function play() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2

    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "YOU ROLLED = " + sum;
   
    if (sum == 7 || sum == 11)

    {document.getElementById("finalRes").innerHTML = "CRAPS - YOU LOSSED!! TRY AGAIN.";
    }
    else if (die1 == die2 && die1%2 == 0) 

    {document.getElementById("finalRes").innerHTML = "DOUBLES - YOU WON!! GREAT JOB!! PLAY AGAIN!!";
    }

    else 
    {document.getElementById("finalRes").innerHTML = "you did not win or lose, PLEASE TRY AGAIN!!";
    }
}
