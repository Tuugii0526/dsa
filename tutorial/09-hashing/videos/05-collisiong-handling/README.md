---
title: collision handling
date: 2025-08-03
---

# solutions

1. Chaining
   Ижил index тай болвол `linked list` ээр холбоод явна .

   Үүнийг хадгалах дата төрлүүд :

   1. Linked list
      `Time complexity:`
      search: O(l),
      delete: O(l),
      insert: O(l)
      cache-friendly биш юм байна .
   2. Dynamic sized arrays
      `Time complexity`:
      search: O(l),
      delete: O(l),
      insert: O(l)
      cache-friendly юм байна .
   3. Self balancing BST
      `Time complexity`:
      search: O(logl)
      delete: O(logl)
      insert: O(logl)
      cache-friendly биш юм байна . java8 аас эхлэн bst ийг ашиглаж ирсэн ажээ .

2. Open address
   hash table ийн хэмжээ key тэй тэнцүү байх ёстой ажээ .
   key collision байх үед `linear probing` хэмээх арга ашигладаг ажээ . Энэ нь энгийн үгээр дараагийн хоосон зайг хайдаг ажээ .

Бид сайн яг clustering problem хэмээхийг ойлгосонгүй .
