export class Solution52 {
  multiplicationUnderModulo(a: bigint, b: bigint) {
    const result = a * b;
    return result % BigInt(1e9 + 7);
  }
}
