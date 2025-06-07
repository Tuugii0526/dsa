export class Soft0412 {
  solution(numbers: number[], index: number, sum: number): number {
    if (index == 0) {
      let setSum = numbers.reduce((acc, curr) => acc + curr, 0);
      if (sum == setSum) return 1;
      return 0;
    }
    const res1 = this.solution(numbers, index - 1, sum + numbers[index - 1]);
    const res2 = this.solution(numbers, index - 1, sum);
    return res1 + res2;
  }
  solution2(numbers: number[], index: number, sum: number): number {
    if (index == 0) {
      return sum == 0 ? 1 : 0;
    }
    return (
      this.solution2(numbers, index - 1, sum - numbers[index - 1]) +
      this.solution2(numbers, index - 1, sum)
    );
  }
}
