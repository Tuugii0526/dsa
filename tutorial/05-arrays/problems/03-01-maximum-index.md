---
title: Хамгийн их индексийн зөрөө
date: 2025-06-13T22:27:53.228Z
---

## Better approach 1. Using decreasing array and binary search - O(nlogn) time and O(n) space

```
The idea is to maintain a list of indices in decreasing order of their corresponding array values and use binary search to efficiently find the smallest index i such that arr[i]<= arr[j] for each j, thereby maximizing j-i.
```

Step by step approach:

1. Maintain a list of indices where values are in decreasing order
2. For each element , if it is smaller than the last element in the list , add its index to the list .
3. Otherwise , use binary search to find the smallest index in the list where the value is less than or equal to the current element .
4. Calculate the difference between the current index and the found index , and update the maximum difference if this difference is larger .

## Бидний шийдэл , юу ухаарсан вэ ?

1. Бид тухайн элементээс түүнээс index ээрээ их , утгаараа ихийг олох гээд байсан , харин үүнийг өөр харах өнцөгөөс харан тухайн элементээс доошоо ямар элемент байж болох вэ гэдгээс харлаа. Бид өөр харах өнцөгөөс харах ажээ .
2. Бидэнд 2 асуудал байсан .Эхний асуудал бол i болон j индексүүдийн хувьд i < j байх явдал . Хоёр дахь асуудал бол arr[i]<arr[j]
   байх явдал .
   Эхний асуудлыг яаж шийдсэн вэ гэвэл бид давталтаар явахдаа тухайн элементээс бага нөхцөл хангаж болох тоог хайсан .
   Хоёр дахь асуудал нь өмнөх элементүүдээс түүнтэй ойролцоох утгатай элементийг олох байсан . Индексүүд дээрх утгууд буурах дарааллаар байх индексүүд хадгалах array үүсгэсэн . Үүн дотор хэрвээ тухайн элемент хамгийн бага элементээс бага байх бол хамгийн сүүлд нь элементийн индексийг л нэмнэ . Эсрэг тохиолдолд түүнтэй ойролцоох хамгийн бага элементийг `binary search` ашиглан олж байгаа.

## better approach 2. Using sorting -

The idea is to maximize the difference between two elements(j-i) where arr[i]<=arr[j] by sorting the array along with their original indices , then finding the maximum valid difference in sorted order . Since sorting guarantees the value constraint (arr[i]<=arr[j]), we only need to find index pairs that maximize j-i while maintaining the original positional relationship .

Step by step approach

1. Sort the array elements along with their original indices to ensure the value condition is always satisfied .
2. Track the minimum index seen so far while iterating through the sorted array
3. For each position in the sorted array , calculate the difference between current index and minimum index . Update the answer with maximum difference found .
   **_binary search_**

**_Юуг шийддэг вэ ?_**

Эрэмбэлэгдсэн array дотроос элемент хайхад ашигладаг.
Элементийг хайхдаа хоёр хувааж олно . Нэг хэсэгт нь байхгүй бол нөгөө хэсгийг хайх зарчимаар олдог . Та энэхүү [зурагнаас](https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40imanshu822%2Fbinary-search-and-its-powerful-applications-39ae7d7bca69&psig=AOvVaw38IEJyfNNcvrmRqTznAQK_&ust=1749947140352000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLiwxaPT740DFQAAAAAdAAAAABAf) харж болно.

```
static boolean binarySearch(int[] arr,int n){
        int start =0,  end=arr.length-1;
        while(start<=end){
        int mid=start+(end-start)/2;
if(arr[mid]==n)
{
    return true;
}
if(arr[mid]>n)
{
    end=mid-1;
}
else {
    start=mid+1;
}
        }
        return false;
    }
```
