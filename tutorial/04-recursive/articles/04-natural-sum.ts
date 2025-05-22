/**
 * time- O(n)
 * space- O(n)
 * @param n
 * @returns
 */
function soft0404(n: number): number {
  if (n <= 1) return n;
  return n + soft0404(n - 1);
}
