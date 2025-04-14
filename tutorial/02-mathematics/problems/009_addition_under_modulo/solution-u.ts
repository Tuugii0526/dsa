export class Solution50 {
  sumUnderModulo(a: bigint, b: bigint) {
    let sum = a + b;
    return sum % BigInt(Math.pow(10, 9) + 7);
  }
}
