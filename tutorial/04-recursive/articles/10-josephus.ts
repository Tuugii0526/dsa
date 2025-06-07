export class Soft0410 {
  jos(numbers: number[], n: number, k: number): number {
    if (numbers.length == 1) return numbers[0];
    let index;
    if (k > n) {
      index = (k % n) - 1;
    } else {
      index = k - 1;
    }
    const partOne = numbers.slice(0, index);
    const partTwo = numbers.slice(index + 1, numbers.length);

    const newNumbers = [...partTwo, ...partOne];
    return this.jos(newNumbers, n - 1, k);
  }
  usingWhile(n: number, k: number) {
    if (n == 1) return 1;
    let numbers = Array.from({ length: n }, (_: any, i: number) => i);
    while (n > 1) {
      let index;
      console.log("n:", n);

      if (k > n) {
        index = (k % n) - 1;
      } else {
        index = k - 1;
      }

      const partOne = numbers.slice(0, index);
      const partTwo = numbers.slice(index + 1, numbers.length);
      console.log("partONE;", partOne);
      console.log("partTwo:", partTwo);

      numbers = [...partTwo, ...partOne];
      n--;
    }
    return numbers[0] + 1;
  }
  getZeroToN(limit: number) {
    return Array.from({ length: limit }, (_: any, i: number) => i);
  }
  josTwo(n: number, k: number): number {
    if (n == 1) return 0;
    let tobeKilled = (k % n) - 1;
    return (this.josTwo(n - 1, k) + tobeKilled) % n;
  }
  josThree(n: number, k: number): number {
    // code here
    if (n == 1) return 1;
    let index;
    if (k > n) {
      index = (k % n) - 1;
    } else {
      index = k - 1;
    }
    return ((this.josThree(n - 1, k) + index) % n) + 1;
  }
  josFour(n: number, k: number): number {
    // code here
    if (n == 1) return 1;
    let index;
    if (k > n) {
      index = k % n;
    } else {
      index = k;
    }
    console.log("kill index:", index);
    console.log("n is :", 2);

    return (this.josFour(n - 1, k) + index) % n;
  }
  /**
   * Шийдлээ олсон ч тайлбарлаж чадахгүй байна . Логикоо тэмдэглээд явах нь зөв ажээ . Бид бусдад тайлбарлаж чадахгүй бол ойлгоогүй гэсэн үг ажээ .
   * (k%n)-1 нь өмнөх index , энэ index дээр үндэслэн тооцоолно.
   * @param n
   * @param k
   * @returns
   */
  solution(n: number, k: number): number {
    if (n == 1) return 1;
    return ((this.solution(n - 1, k) + (k % n) - 1) % n) + 1;
  }
  /**
   * @param n
   * @param k
   * @returns
   *
   * 1. Асуудалаа ойлгоё .
   */
  solutionOne(n: number, k: number): number {
    return 0;
  }
}
