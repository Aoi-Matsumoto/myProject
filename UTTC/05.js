const fibo = (N) => {
  let f = [0, 1];
  for (i = 2; i <= N; i++) {
    f.push(f[i - 1] + f[i - 2]);
  }
  return f;
};
