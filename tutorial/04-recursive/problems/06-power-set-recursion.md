---
title: Дэд олонлогыг хэрхэн олох вэ ?
date: 2025-06-07T16:21:04.326Z
---

## Асуудал

Танд {a,b,c} хэмээх үсэгнүүд байя .Та эдгээрийг хэдэн янзаар сонгож болох вэ ?
Жишээ нь : {} , {a},{b},{c},{a,b},{a,c},{a,b,c}

## Шийдэл

Танд `index` хэмээх хувьсагч байгаа . Энэ хувьсагч таны хаана явж байгааг илтгэнэ .Тухайн `index` дээрх утгыг оруулж болно , оруулахгүй ч байж болно .Ийм байдлаар `index` дээрх утга анхны урттай тэнцүү тэнцэхэд өөр боломжит үсэг үлдээгүйг илтгэнэ .

```
solution(str: string, currIndex: number, compound: string): string[] {
    if (str.length == currIndex) return [compound];
    const arr1: string[] = this.solution(str, currIndex + 1, compound);
    const arr2: string[] = this.solution(
      str,
      currIndex + 1,
      compound + str[currIndex]
    );
    return [...arr1, ...arr2];
  }
```
