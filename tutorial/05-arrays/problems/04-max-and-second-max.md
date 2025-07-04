---
title: "Max болон max ийн дүү"
date: 2025-06-26T07:59:05.027Z
---

## Problem

Өгөгдсөн array гаас хамгийн их болон түүний удаах их элементийг олоорой .

## Solution

```
   public static ArrayList<Integer> solution(int sizeOfArray,
                                                             int arr[]) {
        // code here.
        ArrayList<Integer> result=new ArrayList<>();
        int max=arr[0],secMax=-1;
        for(int i=0;i<sizeOfArray;i++){
        if(max<arr[i]){
            secMax=max;
            max=arr[i];
        }
        else {
            if(arr[i]!=max)
            {
                secMax=Math.max(secMax,arr[i]);
            }

        }
        }
        result.add(max);
        result.add(secMax);
        return result;
    }
```

max болон secMax хэмээх хоёр хувьсагч зарлана . Array гаар давталт гүйнэ . Хэрвээ тухайн элемент хамгийн их утгаас их бол max ийн утгыг secMax өгөн , max утгыг шинжилнэ . Эсрэг тохиолдолд тухайн элемент нь max ялгаатай тохиолдолд л secMax болон тухайн элементийн ихийг secMax -д хадгална .
