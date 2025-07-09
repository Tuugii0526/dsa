---
title: "remove duplicates from sorted array"
date: 2025-07-07
---

# remove duplicates from sorted array

## Асуудал

Эрэмбэлэгдсэн array гаас давхцсан элементүүдийг хасах

## Шийдэл

```
class RemoveDuplicate{
    public int solution(int [] arr){
int res=0;
for(int i=1;i<arr.length;i++){
    if(arr[i]!=arr[res])
    {
        arr[res]=arr[i];
        res++;
    }

}
    }
}
```
