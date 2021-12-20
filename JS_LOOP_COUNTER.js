
function betterCount() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "BLAST OFF!!!";
            }, 1000 * i);
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "WARNING... less than 1/2 way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            setTimeout(function() {
                document.getElementById("countdownTimer").innerHTML = "the time left is " + currTime
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}