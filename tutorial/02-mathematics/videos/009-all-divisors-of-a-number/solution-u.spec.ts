import { f30AllDivisors, f31AllDivisors, f32AllDivisors } from "./solution-u";

describe("all divisors", () => {
  it("SHould native implementation work", () => {
    expect(f30AllDivisors(10)).toEqual([1, 2, 5, 10]);
  });
  it("Should optimized implementation work", () => {
    f31AllDivisors(16);
  });
  it("Should sorted divisors work", () => {
    f32AllDivisors(6);
  });
});
