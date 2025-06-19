export class SoftP0410 {
  private numbers = Array.from({ length: 8 }, (_, i: number) => i + 2);
  private lastLetterUnicode = 65;
  private numToLetters: Map<number, string[]> = new Map(
    this.numbers.map((number) => {
      let lettersLength = 3;
      if (number == 7 || number == 9) {
        lettersLength = 4;
      }
      const letters: string[] = Array.from(
        { length: lettersLength },
        (_, i: number) => i + this.lastLetterUnicode
      ).map((unicode) => String.fromCharCode(unicode));
      this.lastLetterUnicode += lettersLength;
      return [number, letters];
    })
  );
  public solution(arr: number[], subStr: string): string[] {
    if (arr.length == subStr.length) return [subStr];
    let result: string[] = [];
    const numLetters = this.numToLetters.get(arr[subStr.length]);
    for (let i = 0; i < (numLetters?.length || 0); i++) {
      const subarr = this.solution(
        arr,
        subStr + (numLetters && numLetters[i]) || ""
      );
      result = [...result, ...subarr];
    }
    return result;
  }
}
