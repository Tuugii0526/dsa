export class Solution51 {
  sumUnderModulo(a: bigint, b: bigint): bigint {
    let M = BigInt(1e9 + 7);
    return ((a % M) + (b % M)) % M;
  }
}
