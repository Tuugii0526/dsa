---
title: Давталтын анализууд
date: 2025-06-13T04:38:33.214Z
---

1. ```
   class Soft {
       public void solution(int n,int c){
         for(int i=0;i<n;i+=c){
           System.out.println(i);
         }
       }
   }
   ```

````

Энэхүү solution функцийн цаг нь [n/c] буюу `theta(n)` байна .

2. ```
   class Soft {
   public void solution(int n,int c){
   for(int i=0;i<n;i-=c){
   System.out.println(i);
   }
   }
   }
````

Энэхүү solution функцийн ажиллах цаг нь [n/c] буюу `theta(n)` байна .

3. ```
      class Soft {
        public void solution(int n,int c){
        for(int i=0;i<n;i*=c){
        System.out.println(i);
        }
        }
        }
   ```
   time/complexity: logn/c буюу `theta(logn)` байна .
4. ```class Soft {
      public void solution(int n,int c){
      for(int i=0;i<n;i=Math.pow(i,2)){
      System.out.println(i);
      }
      }
      }
   ```
   time /complexity: loglogn
