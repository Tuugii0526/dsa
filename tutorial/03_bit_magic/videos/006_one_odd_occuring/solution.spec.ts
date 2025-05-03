import { oneOddOccuring, oneOddOccuring2 } from "./solution-u";

describe("006_one_odd_occuring", () => {
  it("test", () => {
    expect(oneOddOccuring([1, 1, 2, 2, 3, 3, 3])).toBe(3);
  });
  it("efficient", () => {
    expect(oneOddOccuring2([1, 1, 2, 2, 3, 3, 3])).toBe(3);
  });
});
