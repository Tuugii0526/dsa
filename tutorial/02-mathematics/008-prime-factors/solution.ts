export function f26PrimeFactors(n: number): number[] {
  if (f27IsPrime(n)) {
    return [n];
  }
  const primeFactors = [];
  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i++) {
    if (f27IsPrime(i)) {
      while (n % i == 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  }
  console.log("Primefactors:", primeFactors);
  return primeFactors;
}
export function f28PrimeFactors(n: number): number[] {
  if (f27IsPrime(n)) {
    return [n];
  }
  const primeFactors = [];
  for (let i = 2; i <= n; i++) {
    if (f27IsPrime(i)) {
      while (n % i == 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  }
  console.log("28 primeFactors:", primeFactors);

  return primeFactors;
}
/**
 * Бид үүнийг сайн ойлгохгүй л байна . Бид ойлгохгүй байгаагаа ойлгохгүй байгаагаар нь хүлээн зөвшөөрөе .
 * @param {number} n
 * @returns
 */
export function f29PrimeFactors(n: number): number[] {
  if (f27IsPrime(n)) {
    return [n];
  }
  const primeFactors = [];
  for (let i = 2; i * i <= n; i++) {
    if (f27IsPrime(i)) {
      while (n % i == 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  }
  if (n > 1) {
    primeFactors.push(n);
  }
  console.log("29 primeFactors:", primeFactors);

  return primeFactors;
}

function f27IsPrime(n: number): boolean {
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
