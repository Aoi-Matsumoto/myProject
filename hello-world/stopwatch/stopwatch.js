let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let timebox = document.getElementById("timebox");

let counter = 0;

let p = true;

startButton.onclick = function(){
    if(p == true){
        timerID = setInterval(count , 1000);
    }
    p = false;
}

stopButton.onclick = function(){
    clearInterval(timerID);
    p = true;
}
resetButton.onclick = function(){
    clearInterval(timerID);
    counter = 0;
    timebox.textContent = ("0");
    p = true;
}

function count(){
    counter++;
    timebox.textContent = (counter);
}