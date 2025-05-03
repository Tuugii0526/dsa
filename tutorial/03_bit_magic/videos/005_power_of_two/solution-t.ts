export function isPowerOfTwo3(n: number) {
  if (n == 0) return false;
  while (n != 1) {
    if (n % 2 == 0) {
      n /= 2;
    }
  }
  return n == 1;
}
/**
 * logical and will be evaluated to boolean
 * @param n
 * @returns
 */
export function isPowerOfTwo4(n: number) {
  return n && (n & (n - 1)) == 0;
}
