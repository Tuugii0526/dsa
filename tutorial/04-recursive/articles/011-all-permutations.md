## all permutations

1. Асуудалаа ойлгоё
   'abc' хэмээх string өгсөн үед үүний бүх боломжит хувилбарыг олох бодлого . Жишээ нь: 'abc' өгөгдсөн гэж үзье .
   Үүний хувилбарууд нь:
   1. 'abc'
   2. 'acb'
   3. 'bac'
   4. 'bca'
   5. 'cba'
   6. 'cab'
2. `Шийдэл`
   `шийдэл нэг`:

   ```
   solution(subStr: string, remainingStr: string[]) {
    if (remainingStr.length == 0) {
      console.log(subStr);
      return;
    }
    for (let i = 0; i < remainingStr.length; i++) {
      let newSubstr = subStr + remainingStr[i];
      const remaining = remainingStr.filter((str) => str !== remainingStr[i]);
      this.solution(newSubstr, remaining);
    }
   }
   ```

   `шийдэл нэг тайлбар:`
   solution функцын параметрууд:
   subStr: хувилбар
   remainingStr: анхны боломжтой хувилбарууд
   Боломжтой хувилбаруудаас давталтаар яван орж ирсэн хувилбар дээр нэмэх байдлаар тооцологдоно . Боломжтой хувилбар байхгүй тохиолдолд хувилбарыг хэвлэж байгаа .
   `шийдэл хоёр`:

   ```
   solutionTwo(str: string, index: number) {
    if (index == str.length - 1) {
      console.log(str);
      return;
    } else {
      for (let i = index; i < str.length; i++) {
        str = this.swap(str, i, index);
        this.solutionTwo(str, index + 1);
        str = this.swap(str, i, index);
      }
    }
   }
   private swap(str: string, i: number, j: number): string {
    const charArray = str.split("");
    const temp = charArray[j];
    charArray[j] = charArray[i];
    charArray[i] = temp;
    return charArray.join("");
   }
   ```

   `шийдэл хоёр тайлбар:`
   параметрууд:
   str: хувилбар тоолох string.
   index: аль хүртэл тооцоолсон байгааг илтгэх тоо.
   index нь шинээр хувилбар тооцоолох байршилийн эхлэлийг хэлнэ . Эндээс эхлэн шинэ хувилбаруудыг нэг нэгээр тооцно.
