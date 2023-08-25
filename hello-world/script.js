"use strict";

let element = document.querySelector("#greeting");
element.textContent = "DOMによりテキストが変更されました";

let flag = true;

document.querySelector("#greet-button").onclick = function () {
  if (flag == true) {
    element.style.backgroundColor = "skyblue";
    flag = false;
  } else {
    element.style.backgroundColor = "red";
    flag = true;
  }
};

// function clicked() {
//     if(flag == true){
//         element.style.backgroundColor = "skyblue";
//         flag = false;
//     }else{
//         element.style.backgroundColor = "red";
//         flag = true;
//     }
// }
// let greetButton = document.getElementById("greet-button");
// greetButton.onclick = clicked;

console.log("hello world");
