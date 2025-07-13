---
title: "prefix sum"
date: 2025-07-12
---

# prefix sum

## solution

left , right гэсэн array байна . Энэхүү хоёр array дотроос хамгийн их урттай элемент дээр нэмэх нэг урттай `frequencyStore` array үүсгэе . Энд бид индексээр тухайн элементийг танин хэд давхцаж байгааг олно.  
left талын элементүүдийг frequencyStore[leftElement]+1 , right талын элементүүдийг frequencyStore[rigthElement+1]-1 гэж хадгалаад frequencyStore дээр prefix sum хийнэ .prefix sum хийснээр тухайн range нийт range ээс хэд давхцаж байгааг харуулна .
