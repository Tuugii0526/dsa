function simple(n: number) {
  if (n == 0) return;
  simple(Math.floor(n / 2));
  console.log(n % 2);
}
