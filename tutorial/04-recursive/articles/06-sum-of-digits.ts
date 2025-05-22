export function soft0406(n: number, acc: number): number {
  if (n == 0) return acc;
  return soft0406(Math.floor(n / 10), acc + (n % 10));
}
