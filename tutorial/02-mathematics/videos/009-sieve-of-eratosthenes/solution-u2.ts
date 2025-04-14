export function f36IsPrimeNumber(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return true;
  }
  if (n % 2 == 0 || n % 3 == 0) {
    return false;
  }
  // Анхны тоо нь 6n-1 болон 6n+1 хэлбэртэй байдаг ажээ . Бид давталтаа 5 аас эхлүүлнэ
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}
export function f35Sieve(n: number) {
  const numbers = [false, false, ...Array.from({ length: n - 1 }, (_) => true)];
  for (let i = 2; i * i <= n; i++) {
    if (f36IsPrimeNumber(i)) {
      let copyI = i * i;
      while (copyI <= n) {
        numbers[copyI] = false;
        copyI += i;
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    if (numbers[i]) {
      console.log(i);
    }
  }
}
