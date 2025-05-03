export function isPowerOfTwo(n: number) {
  if (n == 0) return false;
  while (n % 2 == 0) {
    n /= 2;
  }
  return n == 1;
}
export function isPowerTwo2(n: number) {
  if (n == 0) return false;
  return (n & (n - 1)) == 0;
}
