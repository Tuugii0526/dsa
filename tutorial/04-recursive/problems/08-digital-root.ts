export class SoftP0408 {
  digitSum(num: number) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  solution(num: number): number {
    if (num / 10 < 1) return num;
    return this.solution(this.digitSum(num));
  }
}
