import { twoOddOccuring, twoOddOccuring2 } from "./solution-u";

describe("007_two_odd_occuring", () => {
  it("test", () => {
    expect(twoOddOccuring([1, 2, 3, 3])).toEqual([1, 2]);
  });
  it("test2", () => {
    console.log(twoOddOccuring2([11, 2, 3, 3]));
  });
});
