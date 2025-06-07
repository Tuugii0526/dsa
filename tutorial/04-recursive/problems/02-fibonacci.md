---
title: fibonacci
date: 2025-06-06T23:30:05.165Z
---

## Асуудалаа ойлгоё

Фибоначчийн дараалалийн n дэхь гишүүнийг ол ?
fib(n)=fib(n-1)+fib(n-2)
fib(1)=1,fib(2)=1

## Шийдэл

1.  Рекурсив байдлаар дуудан оллоо

```
 fib(n: number): number {
    if (n == 1) return 1;
    if (n == 2) return 1;
    return this.fib(n - 1) + this.fib(n - 2);
  }
```

2. Рекурсив байдлаар дуудан түүний өмнөх гишүүдийг буцааж байна .

```
fib2(n: number): [number, number] {
    if (n == 1) return [0, 1];
    if (n == 2) return [0, 1];
    if (n == 3) return [1, 1];
    const [a, b] = this.fib2(n - 1);
    return [b, a + b];
  }
```
