function print(n: number) {
  if (n == 1) return;
  console.log(n);
  print(n - 1);
}
