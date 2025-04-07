export function f7Palindrome(n: number): boolean {
  let copyN = n;
  let rev = 0;
  while (copyN >= 1) {
    let remainder = copyN % 10;
    copyN /= 10;
    copyN = Math.floor(copyN);
    rev = rev * 10 + remainder;
  }

  return rev == n;
}
