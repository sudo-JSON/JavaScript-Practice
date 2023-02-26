const seconds = document.getElementById("seconds");
const tens = document.getElementById("tens");
let num;
// console.log(seconds);
// console.log(tens);

/*
? What I have to do ?
TODO : onclick of start button, it should start from 60 to 0, means it will decrease every one second,
* Need three buttons start, stop & reset 
* first make simple for 10s to decrease to 0
! Time should decrease every second, 
*/

function start() {
    num = prompt("Enter a Positive Number");
    seconds.textContent = num;
    if (num > 0) {
        setInterval(decrease,1000);
    }
    else {
        alert("Try Again!!")
    }
}

function decrease() {
    num = num - 1;
    if (num > 0) {
        if (num < 10) {
            seconds.textContent = "0" + num;
        }
        else {
            seconds.textContent = num;
        }
    }
    else if (num == 0) {
        seconds.textContent = "0" + num;
    }
    else {
        console.log();
    }
}

function stop() {
    console.log("Stop is working!!");
}
function reset() {
    num = 0 + "0";
    seconds.textContent = num;
    console.log("Reset is working!!");
}
