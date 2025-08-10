---
title: Hashing function
date: 2025-08-03
---

Hashing table нь урьдын адил array үүсгэдэг . Үүний гол санаа нь hashing функц ашиглан `key` г `array` ийн `index` болгодог ажээ .
hashing funciton ашиглаж байхад key нь ижил index руу хувиргадах тохиолдол байдаг . Үүнийг `collision table` хэмээдэг ажээ .

hashing table ийн `хэмжээг M ` анхны тоо авах ажээ .

1. Хэрхэн string ийг index болгодог вэ ?
   Үүн дээр string болгоны ascii дээрх утгуудыг аваад тодорхой тоогоор үржээд хооронд нь нэмээд M модул хийн тооцох ажээ .
   Үүнийг `weighted sum` гэх ажээ .
