import { SoftP0401 } from "./01-power-of-numbers";

describe("power of numbers", () => {
  it("one", () => {
    const hi = new SoftP0401();
    expect(hi.getReverse(100)).toBe(1);
    expect(hi.getReverse(124)).toBe(421);
    expect(hi.getReverse(104)).toBe(401);
  });
  it("two", () => {
    const hi = new SoftP0401();
    const num = 10;
    const reverse = hi.getReverse(num);
    expect(hi.solutionTwo(num, reverse)).toBe(10);
  });
  it("three", () => {
    const hi = new SoftP0401();
    const num = 2;
    const reverse = hi.getReverse(num);
    expect(hi.solutionThree(reverse, num)).toBe(4);
  });
});
