// Given a number N, the task is to return the count of digits in this number.
export function f4CountDigits(n: number): number {
  const stringNumber = `${n}`;
  console.log(stringNumber);
  return stringNumber.length;
}
export function f5CountDigits(n: number): number {
  let count = 0;
  let copyOriginal = n;
  while (copyOriginal >= 1) {
    copyOriginal /= 10;
    Math.floor(copyOriginal);
    count++;
  }
  return count;
}
export function f6CountDigits(n: number): number {
  let count = 0;
  while (n > 0) {
    n /= 10;
    count++;
  }
  return count;
}
//theta(logn)
