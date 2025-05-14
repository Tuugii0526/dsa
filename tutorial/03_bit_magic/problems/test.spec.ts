import { LeastSignificantBitMagic } from "./002-least-significant-bit";
import {
  CountTotalSetBits,
  CountTotalSetBits2,
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
});
