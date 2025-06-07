class SoftP0402 {
  fib(n: number): number {
    if (n == 1) return 1;
    if (n == 2) return 1;
    return this.fib(n - 1) + this.fib(n - 2);
  }
  fib2(n: number): [number, number] {
    if (n == 1) return [0, 1];
    if (n == 2) return [0, 1];
    if (n == 3) return [1, 1];
    const [a, b] = this.fib2(n - 1);
    return [b, a + b];
  }
}
