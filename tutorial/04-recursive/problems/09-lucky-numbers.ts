export class SoftP0409 {
  isLucky(n: number) {
    return this.solution(2, n);
  }
  solution(current: number, n: number): number {
    if (current > n) return 1;
    if (n % current == 0) return 0;
    let occurences = Math.floor(n / current);
    return this.solution(current + 1, n - occurences);
  }
}
