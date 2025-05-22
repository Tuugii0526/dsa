/**
 * non-tail recursive function
 * @param n
 * @returns
 */
function soft0403(n: number): number {
  if (n == 0) return 1;
  return n * soft0403(n - 1);
}

export function soft040301(n: number, acc: number): number {
  if (n == 0) return acc;
  return soft040301(n - 1, acc * n);
}
