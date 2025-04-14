export class Solution46 {
  digitsInFactorial(N: number) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
      sum += Math.log10(i);
    }
    return 1 + Math.floor(sum);
  }
}
