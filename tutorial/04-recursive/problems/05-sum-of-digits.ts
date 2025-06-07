class SoftP0405 {
  solution(n: number): number {
    if (n <= 0) return 0;
    return this.solution(Math.floor(n / 10)) + (n % 10);
  }
}
