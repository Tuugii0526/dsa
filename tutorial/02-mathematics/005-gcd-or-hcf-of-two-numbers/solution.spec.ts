import { f15GCD, f16GCD } from "./solution";

describe("GCD ", () => {
  it("Should work", () => {
    expect(f15GCD(9, 2)).toBe(1);
  });
  it("should Teacher function should work", () => {
    expect(f16GCD(9, 2)).toBe(1);
  });
});
