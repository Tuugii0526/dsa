import {
  f10howManyTwoAndFive,
  f10TrailingZeros,
  f11ConditionCheck,
  f12FormulaBasedComputing,
  f9TrailingZeros,
} from "./04-trailing-zeros-in-factorial";

describe("Trailing zeros", () => {
  it("Should work", () => {
    expect(f9TrailingZeros(5)).toBe(1);
    expect(f9TrailingZeros(20)).toBe(4);
  });
});
describe("How many two and five", () => {
  it("Should work", () => {
    expect(f10howManyTwoAndFive(0)).toEqual({
      "2": 0,
      "5": 0,
    });
    expect(f10howManyTwoAndFive(15)).toEqual({
      "2": 0,
      "5": 1,
    });
  });
  it("4", () => {
    expect(f10howManyTwoAndFive(4)).toEqual({
      "2": 2,
      "5": 0,
    });
  });
  it("5", () => {
    expect(f10howManyTwoAndFive(5)).toEqual({
      "2": 0,
      "5": 1,
    });
  });
});
describe("Trailing zero formula check", () => {
  it("SHould work", () => {
    expect(f12FormulaBasedComputing(5)).toBe(1);
    expect(f12FormulaBasedComputing(100)).toBe(24);
  });
});
test("Trailing zeros", () => {
  expect(f10TrailingZeros(5)).toBe(1);
  expect(f10TrailingZeros(100)).toBe(24);
});
test("Condition check", () => {
  console.log(f11ConditionCheck(9));
});
