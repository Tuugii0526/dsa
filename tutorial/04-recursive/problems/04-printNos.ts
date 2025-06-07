class Soft0404 {
  printNos(n: number) {
    if (n == 0) return;
    this.printNos(n - 1);
    console.log(n);
  }
}
