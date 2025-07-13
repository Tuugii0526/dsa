---
title: "check if array is sorted"
date: 2025-07-05
---

# check if array is sorted

## Асуудал

Өгөгдсөн array г өсөх дарааллаар эрэмбэлэгдсэн эсэхийг шалгаарай . Дараалсан тэнцүү элементүүд байвал үүнийг эрэмбэлэгдсэн хэмээнэ . Жишээ нь: [1,1,2]

## Шийдэл

```
class Solution{
    public  boolean  solution(int []arr){
        int length=arr.length;
        if(length==1 || length==0)return true;
        for(int i=1;i<length;i++){
            if (arr[i-1]>arr[i]){
                return false
            }
        }
        return true
    }
}
```
