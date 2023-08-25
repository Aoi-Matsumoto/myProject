let omikujiButton = document.getElementById("button");
let result = document.getElementById("result");

omikujiButton.onclick = function(){
    let r = Math.random();
    if (r < 0.2) {
        result.textContent = "大吉";
        result.style.color = "red"
    } else if (r < 0.7) {
        result.textContent = "吉"
        result.style.color = "black"
    } else {
        result.textContent = "凶"
        result.style.color = "blue"
    }
}
