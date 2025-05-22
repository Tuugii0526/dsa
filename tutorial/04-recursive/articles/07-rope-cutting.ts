/**
 * time - O(3^n)
 * space- O(n)
 * @param length
 * @param a
 * @param b
 * @param c
 * @returns
 */
export function soft0407(
  length: number,
  a: number,
  b: number,
  c: number
): number {
  if (length == 0) return 0;
  if (length <= -1) return -1;
  let res = Math.max(
    soft0407(length - a, a, b, c),
    Math.max(soft0407(length - b, a, b, c), soft0407(length - c, a, b, c))
  );
  if (res == -1) {
    return -1;
  }
  return res + 1;
}
