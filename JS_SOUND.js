
function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function playOddity() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}

function playChief() {
    mySound = new sound("hail_to_the_chief.mp3");
    mySound.play();
}
function stopplayChief() {
    mySound = new sound("hail_to_the_chief.mp3");
    mySound.stop();
    mySound.currTime = 0;
}


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}

