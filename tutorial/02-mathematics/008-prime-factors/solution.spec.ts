import { f26PrimeFactors, f28PrimeFactors } from "./solution";

describe("Prime factors", () => {
  it("SHould work", () => {
    expect(f26PrimeFactors(5)).toEqual([5]);
    f28PrimeFactors(10);
  });
});
