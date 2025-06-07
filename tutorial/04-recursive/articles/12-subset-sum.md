---
title: subset ийн нийлбэр
date: "2025-06-02"
---

## Асуудал

Дэд олонлогийн нийлбэр нь тодорхой тоотой тэнцэх хэдэн дэд олонлог байгаа вэ ?
`Жишээ нь` : Танд {1,2,3} олонлог байг .Тэгвэл дэд олонлогийн нийлбэр 1 байх хэдэн дэд олонлог байгаа вэ ? Нийлбэр нь 1 байх дэд олонлог бол зөвхөн {1} хэмээх олонлог байна .
Тиймд хариу нь `1` .

## Шийдэл

1.

```
  solution(numbers: number[], index: number, sum: number): number {
    if (index == 0) {
      let setSum = numbers.reduce((acc, curr) => acc + curr, 0);
      if (sum == setSum) return 1;
      return 0;
    }
    const res1 = this.solution(numbers, index - 1, sum + numbers[index - 1]);
    const res2 = this.solution(numbers, index - 1, sum);
    return res1 + res2;
  }
```

2.

```
solution2(numbers: number[], index: number, sum: number): number {
    if (index == 0) {
      return sum == 0 ? 1 : 0;
    }
    return (
      this.solution2(numbers, index - 1, sum - numbers[index - 1]) +
      this.solution2(numbers, index - 1, sum)
    );
  }
```

## Дүгнэлт

Нэг дэхь шийдэлд бид нийлбэрийг олоод зорилгот нийлбэртэй харьцуулж байсан .
Харин үүний оронд илүү ухаалгаар зорилгот нийлбэрээс хасах байдлаар эцэст нь `0 тэй ` тэнцүүлж байгаа .
Нийлбэрийг хасах байдлаар тэнцүүлж болох ажээ .
