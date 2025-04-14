export function f41IterativePower(x: number, n: number) {
  let res = 1;
  while (n > 0) {
    if (n % 2 != 0) {
      res *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return res;
}
export function f42IterativePowerOptimized(x: number, n: number) {
  let res = 1;
  while (n > 0) {
    if (n & 1) {
      res *= x;
    }
    x *= x;
    n >>= 1;
  }
  return res;
}
