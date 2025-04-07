export function f30AllDivisors(n: number): number[] {
  const divisors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
export function f31AllDivisors(n: number): number[] {
  const divisors = [];
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      divisors.push(i);
      divisors.push(n / i);
    }
  }
  const square = Math.sqrt(n);
  const mathFloorSquare = Math.floor(square);
  if (square - mathFloorSquare == 0) {
    divisors.push(square);
  }
  console.log("divisors:", divisors);
  return divisors;
}
export function f32AllDivisors(n: number): number[] {
  return [];
}
