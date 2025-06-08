class SoftP0406 {
  solution(str: string, currIndex: number, compound: string): string[] {
    if (str.length == currIndex) return [compound];
    const arr1: string[] = this.solution(str, currIndex + 1, compound);
    const arr2: string[] = this.solution(
      str,
      currIndex + 1,
      compound + str[currIndex]
    );
    return [...arr1, ...arr2];
  }
}
