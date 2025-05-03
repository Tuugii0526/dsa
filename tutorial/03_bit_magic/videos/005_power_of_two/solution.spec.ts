import { isPowerOfTwo, isPowerTwo2 } from "./solution-u";

describe("005_power_of_two", () => {
  it("naive", () => {
    console.log(isPowerOfTwo(4));
  });
  it("efficient", () => {
    console.log(isPowerTwo2(4));
  });
});
