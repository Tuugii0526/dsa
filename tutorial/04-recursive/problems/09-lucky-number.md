---
title: Азтай тоо мөнүү ?
date: 2025-06-08T15:53:05.944Z
---

## Асуудал

1,2,3,4 .. гэх мэтчилэн танд хязгааргүй тоо байя хэмээх төсөөлөё .Та эхлээд `2` дахь тоо болгоныг хасаад , дараа нь `3` дахь тоо болгоныг хасаад , дараа нь `4` дахь тоо болгоныг хасах гэх мэт явах бол та дурын нэг тоо сонгож авахад тэр тоо чины хасагдах бол уу, хасагдахгүй бол уу ?
Хэрвээ хасагдах бол 0 , үгүй бол 1 ийг буцаана уу ?

## Шийдэл

```
export class SoftP0409 {
  isLucky(n: number) {
    return this.solution(2, n);
  }
  solution(current: number, n: number): number {
    if (current > n) return 1;
    if (n % current == 0) return 0;
    let occurences = Math.floor(n / current);
    return this.solution(current + 1, n - occurences);
  }
}
```

Энд solution хэмээх функц асуудлыг шийдэж байгаа .
Юуны түрүүнд параметрүүдийг тайлбарлая.
`current` : Хэд дэхь ээлжин дээр байгааг хадгалах хувьсагч
`n`: азтай эсэхийг шалгах тоо
`if (current > n) return 1 ` нь одоо байгаа ээлж тухайн тооноос их байна уу гэдгийг шалгаж байна . Хэрвээ их байвал манай тоо азтай гэсэн үг.
`if (n % current == 0) return 0` нь тухайн ээлжин дээр манай тоо таарж байгаа эсэхийг харж байна . Хэрвээ таарвал 0 ийг буцаана .
` let occurences = Math.floor(n / current);` нь тухайн ээлжин дээр хэдэн тоо хасагдахыг тооцоолж байна .
`return this.solution(current + 1, n - occurences);` нь ээлжийг нэгээр нэмэн , хасагдах тохиолдолуудыг хасан рекурсиваар дуудаж байна .
