export class Solution45 {
  getFactorial(N: number) {
    let factorial = 1;
    for (let i = 2; i <= N; i++) {
      factorial *= i;
    }
    return factorial;
  }

  digitsInFactorial(N: number) {
    let factorial = this.getFactorial(N);
    let digitsCount = 0;
    while (factorial > 0) {
      factorial = Math.floor(factorial / 10);
      digitsCount++;
    }
    return digitsCount;
  }
}
export class Solution46 {}
