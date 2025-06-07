export class SoftP0401 {
  solution(n: number): number {
    return n ** this.getReverse(n);
  }
  solutionTwo(num: number, power: number) {
    if (power == 1) return num;
    const result: number = this.solutionTwo(num, power >> 1);
    if ((power & 1) == 0) {
      return result * result;
    }
    return result * result * num;
  }
  getReverse(n: number): number {
    let reverse = 0;
    while (n > 0) {
      reverse *= 10;
      reverse += n % 10;
      n = Math.floor(n / 10);
    }
    return reverse;
  }
  solutionThree(power: number, num: number) {
    let res = 1;
    while (power > 0) {
      if (power & 1) {
        res *= num;
      }
      power >>= 1;
      num *= num;
    }
    return res;
  }
}
