---
title: Урвуу тооны зэрэг
date: 2025-06-03T23:01:50.262Z
---

## Асуудал

Танд n хэмээх тоо байгаа . n-ийн эсрэг тоог m гэе . Тэгвэл n^m хэд вэ ?
эсрэг тоо : тоог эргүүлж харуулж бичнэ . 0 ийн цифрүүдийг алгасна. 10 ийн эсрэг тоо 01 , үүнээс 1 болно .

## Шийдэл

1. Тухайн хэлний тооны зэрэг олдог бэлэн функц ашиглан олсон.
   Энэхүү функц нь recursive байдлаар n тоог m удаа хооронд нь үржинэ .

```
export class SoftP0401 {
  solution(n: number): number {
    return n ** this.getReverse(n);
  }
  getReverse(n: number): number {
    let reverse = 0;
    while (n > 0) {
      reverse *= 10;
      reverse += n % 10;
      n = Math.floor(n / 10);
    }
    return reverse;
  }
}
```

2. Дээрх шийдлээр нэг нэг үржүүлэн олохгүйгээр давхцах тоонуудыг хооронд нь үржин олж байна .

```
export class SoftP0401 {
  solutionTwo(num: number, power: number) {
    if (power == 1) return num;
    const result: number = this.solutionTwo(num, power >> 1);
    if ((power & 1) == 0) {
      return result * result;
    }
    return result * result * num;
  }
  getReverse(n: number): number {
    let reverse = 0;
    while (n > 0) {
      reverse *= 10;
      reverse += n % 10;
      n = Math.floor(n / 10);
    }
    return reverse;
  }
}

```

3. Давталтаар маш энгийнээр амархан олсон шийдэл
   Жишээ харж үзье.
   Энэхүү шийдлийг `Sandeep jain` багш зааж өгсөн билээ .

```
export function f42IterativePowerOptimized(x: number, power: number) {
  let res = 1;
  while (power > 0) {
    if (power & 1) {
      res *= x;
    }
    x *= x;
    power >>= 1;
  }
  return res;
}
```
