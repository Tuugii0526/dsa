export class Solution53 {
  multipicationUnderModulo(a: bigint, b: bigint): bigint {
    let M = BigInt("1e9+7");
    a = a % M;
    b = b % M;
    return (a * b) % M;
  }
}
