---
title: digital root
date: 2025-06-08T02:22:18.141Z
---

## Асуудал

Тоонуудаас цифрүүдийн нийлбэрийг олоод үүнээс цифрүүдийн нийлбэрийг олох замаар нэг л оронтой болтол олно уу ? Энэхүү тоог буцаана уу ?
Жишээ нь :
99999 -> 45 -> 9

## Шийдэл

```
export class SoftP0408 {
  digitSum(num: number) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  solution(num: number): number {
    if (num / 10 < 1) return num;
    return this.solution(this.digitSum(num));
  }
}
```

digitSum функц нь тооны цифрүүдийн нийлбэрийг олно .
base case дээр цифрүүдийн нийлбэрийг олох гэж байгаа тоо нэг оронтой эсэхийг шалгаж байгаа .
