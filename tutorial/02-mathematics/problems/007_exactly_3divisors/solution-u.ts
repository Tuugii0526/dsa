export class Solution48 {
  isPrime(N: number) {
    if (N == 1) return false;
    if (N == 2 || N == 3) return true;
    if (N % 2 == 0 || N % 3 == 0) return false;
    for (let i = 5; i * i <= N; i += 6) {
      if (N % i == 0) return false;
      if (N % (i + 2) == 0) return false;
    }
    return true;
  }
  exactly3Divisors(N: number) {
    let sqrt = Math.floor(Math.sqrt(N));
    if (sqrt == 1) return 0;
    if (sqrt == 2) return 1;
    if (sqrt == 3) return 2;
    if (sqrt == 4) return 2;
    let count = 2;
    const threes = [2, 3];
    for (let i = 5; i * i <= N; i += 6) {
      if (this.isPrime(i)) {
        count++;
        threes.push(i);
      }
      if (Math.pow(i + 2, 2) <= N) {
        if (this.isPrime(i + 2)) count++;
      }
    }
    return count;
  }
}
