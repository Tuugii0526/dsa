import { bitSetsDictionary, countSetBits, countSetBits1 } from "./solution-u";

describe("004_count_set_bits", () => {
  it("test", () => {
    expect(countSetBits(4)).toBe(1);
    expect(countSetBits(3)).toBe(2);
  });
  it("count set left shift", () => {
    // expect(countSetBits(4)).toBe(1);
    countSetBits1(16);
  });
  it("set bits dictionary for 0 to 255", () => {
    bitSetsDictionary();
  });
});
