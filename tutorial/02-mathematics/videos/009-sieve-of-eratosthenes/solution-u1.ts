export function f34IsPrimeNumber(n: number): boolean {
  if (n <= 1) {
    return false;
  }
  if (n == 2 || n == 3) {
    return false;
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
export function f33Sieve(n: number) {
  if (n <= 1) {
    console.log("nothing");
    return;
  }
  if (n == 2) {
    console.log("2");
    return;
  }
  if (n == 3) {
    console.log("2,3");
    return;
  }
  console.log("2,3");
  for (let i = 5; i <= n; i += 6) {
    if (f34IsPrimeNumber(i)) {
      console.log(i);
    }
    if (i + 2 <= n) {
      if (f34IsPrimeNumber(i + 2)) {
        console.log(i + 2);
      }
    }
  }
}
