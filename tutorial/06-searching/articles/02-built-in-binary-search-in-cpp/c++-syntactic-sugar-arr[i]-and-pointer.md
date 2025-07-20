---
title: "c++ syntactic sugar arr[i] and pointer"
date: 2025-07-14
---

# c++ syntactic sugar arr[i] and pointer

1. arr[i] is syntactic sugar for pointer arithmetic . arr[i] is `the same as ` \*(arr+i). When the compiler sees `arr[i]` , it will do behind this : `*(arr+i)`.

- `arr+i` will calculate the memory address by adding `i*sizeof(int)` to the memory address arr .
