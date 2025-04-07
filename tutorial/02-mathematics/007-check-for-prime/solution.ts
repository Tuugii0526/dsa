function f22CheckForPrime(n: number): boolean {
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function f23CheckForPrime(n: number): boolean {
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function f24CheckForPrime(n: number): boolean {
  if (n == 2 || n == 3 || n == 5) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0) {
    return false;
  }
  const limit = Math.sqrt(n);
  for (let i = 7; i <= limit; i += 2) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
function f25CheckForPrime(n: number): boolean {
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  const limit = Math.sqrt(n);
  for (let i = 5; i <= limit; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
// time complexity O(Math.sqrt(n))
