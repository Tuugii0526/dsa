import { LeastSignificantBitMagic } from "./002-least-significant-bit";
import {
  ConsecutiveBits,
  CountTotalSetBits,
  CountTotalSetBits2,
  CountTotalSetBitsEfficient,
  FlipBits,
  MaxAnd,
} from "./003-count-total-set-bit";

describe("least significant", () => {
  it("least set bit", () => {
    console.log(LeastSignificantBitMagic.getFirstSetBit(12));
  });
  it("bit count", () => {
    const countBit = new CountTotalSetBits();
    console.log(countBit.countSetBits(4));
  });
  it("bit count 2 ", () => {
    console.log(CountTotalSetBits2.countSetBits(4));
  });
  it("count bits efficient", () => {
    const efficient = new CountTotalSetBitsEfficient();
    expect(efficient.countSetBits(4)).toBe(5);
    expect(efficient.countSetBits(17)).toBe(35);
    expect(efficient.countSetBitsSecond(17)).toBe(35);
  });
  it("flip bits", () => {
    const flip = new FlipBits();
    expect(flip.solution(20, 25)).toBe(3);
  });
  it("consecutive bits", () => {
    const conse = new ConsecutiveBits();
    console.log(conse.maxConsecutiveOnes(5));
  });
  it("max and", () => {
    const maxAnd = new MaxAnd();
    const arr = [
      32, 711, 4221, 5906, 7691, 9614, 9392, 3639, 8271, 9422, 7668, 7830, 2672,
      6181, 8744, 9096, 3900, 3025, 7089, 9155, 2387, 570, 8233, 9970, 5711,
      2374, 31, 8434, 9664, 2588, 7280, 95, 9650,
    ];
    console.log(maxAnd.maxAND(arr, arr.length));
  });
});
