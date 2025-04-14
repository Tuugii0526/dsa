import { f4CountDigits, f5CountDigits, f6CountDigits } from "./count-digits";
const testNumbers = Array.from({ length: 50 }, (_, index) => index + 1);

describe("Count digit function 3", () => {
  it("Should array have correc length", () => {
    expect(testNumbers).toHaveLength(50);
    expect(testNumbers[testNumbers.length - 1]).toBe(50);
  });
  it("Should work correct until 25", () => {
    const slicedArray = testNumbers.slice(0, 20);
    expect(slicedArray.length).toBe(20);
    console.log(slicedArray);
    for (const testNumber of slicedArray) {
      expect(f4CountDigits(Math.pow(10, testNumber))).toBe(testNumber + 1);
    }
  });
  it("Should test 10^20 ", () => {
    expect(f4CountDigits(Math.pow(10, 20))).toBe(21);
  });
  it("Should test 10^21 ", () => {
    expect(f4CountDigits(Math.pow(10, 21))).toBe(22);
    //the error reason :  1e+21
  });
});
describe("Count digit function 4", () => {
  it("Should simply work", () => {
    expect(f5CountDigits(1)).toBe(1);
    expect(f5CountDigits(9)).toBe(1);
    expect(f5CountDigits(10)).toBe(2);
  });
  it("Should work correct until 20", () => {
    const slicedArray = testNumbers.slice(0, 100);
    expect(slicedArray.length).toBe(50);
    for (const testNumber of slicedArray) {
      expect(f5CountDigits(Math.pow(10, testNumber))).toBe(testNumber + 1);
    }
  });
});

describe("Count digit function 4", () => {
  it("Should simply work", () => {
    expect(f5CountDigits(1)).toBe(1);
    expect(f5CountDigits(9)).toBe(1);
    expect(f5CountDigits(10)).toBe(2);
  });
  it("Should work correct until 20", () => {
    const slicedArray = testNumbers.slice(0, 100);
    expect(slicedArray.length).toBe(50);
    for (const testNumber of slicedArray) {
      expect(f6CountDigits(Math.pow(10, testNumber))).toBe(testNumber + 1);
    }
  });
});
