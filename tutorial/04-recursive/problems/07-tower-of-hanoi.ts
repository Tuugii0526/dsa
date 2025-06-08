class SoftP0407 {
  towerOfHanoi(n: number, from: string, aux: string, to: string) {
    if (n == 0) return 0;
    let res1: number = this.towerOfHanoi(n - 1, from, to, aux);
    let res2: number = this.towerOfHanoi(n - 1, aux, from, to);
    return res1 + res2 + 1;
  }
}
