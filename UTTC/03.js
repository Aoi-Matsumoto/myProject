const N = Number(window.prompt("自然数を入力してください"));

ans1 = (N * (N + 1)) / 2;
console.log(ans1);

let ans2 = 0;
for (i = 1; i <= N; i++) {
  ans2 += i;
}

document.write(ans1 == ans2 ? ans2 : "Failed to compute");
