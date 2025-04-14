/**
 *
 * @param x
 * @param n
 * @returns
 */
export function f37ComputingPower(x: number, n: number) {
  if (n == 0) {
    return 1;
  }
  let copyX = x;
  for (let i = 2; i <= n; i++) {
    x *= copyX;
  }
  return x;
}
/**
 *
 * @param x
 * @param n
 * @returns
 */
export function f38ComputingPower(x: number, n: number): number {
  let computingPower = 1;
  for (let i = 0; i < n; i += 2) {
    computingPower *= x;
  }
  return computingPower;
}
/**
 *
 * @param x
 * @param n
 * @returns
 */
export function f39ComputingPower(x: number, n: number) {
  let start = n % 2 == 0 ? 0 : 1;
  let computingPower = n % 2 == 0 ? 1 : x;
  for (let i = start; i < n; i += 2) {
    computingPower *= x;
    computingPower *= x;
  }
  return computingPower;
}
/**
 *
 * @param x
 * @param n
 * @returns
 */
export function f40ComputingPower(x: number, n: number): number {
  if (n == 0) {
    return 1;
  }
  if (n % 2 == 0) {
    let temp = f40ComputingPower(x, Math.floor(n / 2));
    return temp * temp;
  } else {
    let temp = f40ComputingPower(x, Math.floor(n / 2));
    return x * temp * temp;
  }
}
