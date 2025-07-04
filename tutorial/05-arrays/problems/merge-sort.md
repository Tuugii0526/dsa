---
title: merge sort
where: "narnii horoolol , ulaanbaatar mongolia"
date: 2025-07-04T00:25:33.063Z
---

## Яагаад

Танд өгөгдсөн тоонуудын медианыг олох даалгавар байлаа хэмээн төсөөлөе.Тэгвэл та юу хийх вэ ? Юуны түрүүнд бид медиан гэж юу хэмээх асуултанд хариулцгаая .
`Медиан` : n ширхэг багаас их рүү эрэмбэлэгдсэн тоо байна хэмээн төсөөлөе . Хэрвээ сондгой ширхэг n тоо байгаа бол яг голын тоо нь медиан болно . Хэрвээ тэгш ширхэг n тоо байгаа бол яг голын 2 тооны дундаж нь медиан болно .
Тэгвэл медиан олохын тулд ямар дэс дараалалтай олох вэ ?

1. Хэрвээ өгөгдсөн тоо замбараагүй бол багаас их рүү эрэмбэлнэ .
2. Өгөгдсөн тооны ширхэг тэгш эсвэл сондгой эсэхийг тогтооно .
3. Хэрвээ тэгш бол голын хоёр тооны дундаж нь медиан . Хэрвээ сондгой бол голын тоо нь медиан болно .

## Хэнд тустай вэ ?

Том датаг үр дүнтэй эрэмбэлэхэд ашигладаг . Divide and conquer тул external sorting , parallel-processing хийх боломжтой .

## Зорилго

merge sort алгоритмыг java ашиглан бичсэн арга техникээ хуваалцах зорилготой .

## Хэзээ болон хаана

Нарны хороолол , Улаанбаатар

## Өмнөх мэдлэг

рекурсив болон хуваагаад нэгтгэ аргыг мэдэх шаардлагатай .

**`Бодолт`**

```
class SoftMergeSort{
    public void merge(int []arr , int left, int right,int mid){

   int i=0, j=0 ,current=left;
   int temp1Length=mid-left+1;
int temp2Length=right-mid;
int [ ] temp1=new int [temp1Length];
int [] temp2=new int[temp2Length];
 for (int m=0; m<temp1Length;m++)
 {
temp1[m]=arr[m+left];
 }
 for(int m=0;m<temp2Length;m++){
temp2[m]=arr[mid+m+1];
 }
 while (i < temp1Length && j < temp2Length){
    if(temp1[i]<temp2[j]){
        arr[current]=temp1[i];
        i++;
    }else {
        arr[current]=temp2[j];
        j++;
    }
    current++;
 }
 while (i < temp1Length){
    arr[left+i+1]=temp1[i];
    i++;
 }
 while(j<temp2Length){
    arr[mid+1+j]=temp2[j];
    j++;
 }
    }
    public void sort(int []arr, int left,int right){
        if (left < right) {
            int mid= left + (right-left)/2;
            this.sort(arr, left, mid);
            this.sort(arr, mid+1, right);
            this.merge(arr, left, right,mid);
        }
    }
    public static void main(String[] args) {
        SoftMergeSort soft= new SoftMergeSort();
        int [] arr=new int []{4,2,5,21,1};
        soft.sort(arr, 0, arr.length-1);
        System.out.println("sorted:"+Arrays.toString(arr));
    }
}
```

1.  Нэг том асуудлыг жижиг асуудлуудад хуваан нэгэн ижил шийдлээр шийдэн хариултуудыг нэгтгэн том асуудлын шийдэл болно . Бид энэхүү аргаар merge sort хийнэ .
2.  Эрэмбэлэх элементүүдийг 2 хэсэгт хуваан явсаар байна . Эцэст зөвхөн нэг л элемент үлдэх үед буцаан элементүүдийг нэгтгэнэ.
3.  Бид sort болон merge хэмээх хоёр method тодорхойлсон. sort нь өөрөө өөрийгөө дууддаг рекурсив функц юм . Асуудлыг жижиг жижиг болон дараа нь жижиг жижиг асуудлуудын шийдлийг нэгтгэх үүрэгтэй .
    merge нь шийдлийг нэгтгэх үүрэгтэй .
    ## Merge Sort Visualization

![Merge Sort Example](public/IMG_0815.HEIC)
