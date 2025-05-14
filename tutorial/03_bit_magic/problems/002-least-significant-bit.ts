export class LeastSignificantBitMagic {
  // Function to find position of first set bit in the given number.
  static getFirstSetBit(n: number) {
    // code here
    for (let i = 0; i < 32; i++) {
      if ((1 & (n >> i)) == 1) {
        return i + 1;
      }
    }
    return 0;
  }
}
