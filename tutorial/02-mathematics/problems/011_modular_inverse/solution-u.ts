class Solution {
  modInverse(a: number, m: number) {
    for (let i = 1; i <= m; i++) {
      if ((a * i) % m == 1) {
        return i;
      }
    }
    return -1;
  }
}
