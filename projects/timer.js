const seconds = document.getElementById("seconds");
const tens = document.getElementById("tens");

console.log(seconds);
console.log(tens);

/*
? What I have to do ?
TODO : onclick of start button, it should start from 60 to 0, means it will decrease every one second,
* Need three buttons start, stop & reset 
* first make simple for 10s to decrease to 0
! Time should decrease every second, 
*/


function decrease_10() {
  let i = 10;
  for (i; i<50; i++) {
    tens.textContent = i
    console.log(tens)
    // console.log("Done!!")
  }
  
}

function start() {
    // let i
    // time_in = 10
    // for (i=time_in; i<10; i--){
    //   console.log(i)
    //   // tens.textContent = i
    // }
    // console.log("Start")
    setInterval(decrease,1000)
    // let i
    // for (i=0;  i<4; i++){
    //     tens.textContent = i
    // }
    // console.log(tens)
    tens.textContent = i
}

/*
! function reduce() {

//   // alert("Shown!!")
 } */

function decrease() {
  console.log(tens)
  // alert("done!!")
  // let i;
  // let num = 0;
  // for (i=10; i>num; i--) {
  //     tens.textContent = i
  //     // console.log("Done!!")
  // }
  // console.log(tens)
}

