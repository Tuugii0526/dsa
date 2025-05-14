import { isPowerOfTwo } from "../../videos/005_power_of_two/solution-u";
import {
  brianKernighan,
  countSetBitsUsingHashTable,
  divideByTwo,
  getOddOccuring,
  getTwoOddOccuring,
  isBitSet,
  log2,
  maxAnd,
  multiplyByTwo,
  powerSet,
  setBit,
  swapTwoNumber,
  toggleBit,
  unsetBit,
} from "./typescript";

describe("Bitwise Tactic testing", () => {
  it("Set a bit at specific position", () => {
    const num: number = 8;
    console.log("first binary:", num.toString(2));
    const bitSetNumber = setBit(num, 1);
    console.log("second binary:", bitSetNumber.toString(2));
  });
  it("Unset a bit at specific position", () => {
    const num: number = 3;
    expect(unsetBit(num, 1)).toBe(2);
  });
  it("Toggle a bit at specific position", () => {
    const num: number = 3;
    expect(toggleBit(num, 1)).toBe(2);
  });
  it("Is bit set", () => {
    const num: number = 3;
    expect(isBitSet(2, 1)).toBe(false);
    expect(isBitSet(2, 2)).toBe(true);
  });
  it("Divide by two", () => {
    const num: number = 4;
    expect(divideByTwo(num, 1)).toBe(2);
    console.log("edge case 1:", divideByTwo(-2, 2));
    console.log("edge case 2:", divideByTwo(-2, -2));
  });
  it("Multiply by two", () => {
    const num: number = 4;
    expect(multiplyByTwo(4, 2)).toBe(16);
  });
  it("log of two", () => {
    expect(log2(4)).toBe(2);
  });
  it("swap two numbers", () => {
    swapTwoNumber(0, -90);
  });
  it("is power of two", () => {
    expect(isPowerOfTwo(32)).toBe(true);
  });
  it("Count set bits using brian kerninghan", () => {
    expect(brianKernighan(3)).toBe(2);
  });
  it("Count set bits using hash table", () => {
    expect(countSetBitsUsingHashTable(3)).toBe(2);
  });
  it("Odd occuring", () => {
    expect(getOddOccuring([2, 3, 2, 90, 3, 4, 8, 8, 4, 90, 80])).toBe(80);
  });
  it("two odd occuring ", () => {
    console.log(getTwoOddOccuring([1, 1, 2, 2, 3, 4]));
  });
  it("Power set using bits", () => {
    console.log(powerSet("god"));
  });
  it("Max and", () => {
    console.log(maxAnd([4, 8, 6, 2]));
  });
});
