export class Soft0411 {
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
}
