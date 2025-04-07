export function f8Factorial(n: number) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
export function f9Factorial(n: number): number {
  if (n <= 1) {
    return 1;
  }
  return n * f9Factorial(n - 1);
}
