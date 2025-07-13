---
title: "reverse an array"
date: 2025-07-07
---

# reverse an array

## Асуудал

Өгөгдсөн array г эргүүлж тавиарай . Жишээ нь : [1,2,3,4,4] --> [4,4,3,2,1] болно .

## Шийдэл

```
class ReverseArray {
    public int[] solution(int[] arr,int start,int end ){
int temp;
while(start < end){
temp=arr[start];
arr[start]=arr[end];
arr[end]=temp;
start++;
end--;
}
    }
}
```

## Юу сурсан вэ ?

1. while давталтаар шийдэх
2. temp хувьсагчийг гадна талд зарлаж өгөх
