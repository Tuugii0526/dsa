//least common multipiers
export function f18LCM(a: number, b: number): number {
  const divisibleByBoth = a * b;
  const max = Math.max(a, b);
  for (let i = max; i < divisibleByBoth; i++) {
    if (i % a == 0 && i % b == 0) {
      return i;
    }
  }
  return divisibleByBoth;
}
export function f19LCM(a: number, b: number): number {
  let max = Math.max(a, b);
  while (true) {
    if (max % a == 0 && max % b == 0) {
      return max;
    }
    max++;
  }
  return max;
}
// a*b=gcd(a,b)*lcm(a,b)
//lcm(a,b)=(a*b)/gcd(a,b)
export function f20LCM(a: number, b: number): number {
  return (a * b) / f21GCD(a, b);
}
export function f21GCD(a: number, b: number): number {
  if (b == 0) return a;
  return f21GCD(b, a % b);
}
