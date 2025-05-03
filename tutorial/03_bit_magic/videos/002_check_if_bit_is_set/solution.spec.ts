import { isSet2, isSet3 } from "./solution-u";

describe("002_check_if_bit_is_set", () => {
  it("test", () => {
    expect(isSet2(4, 3)).toBe(true);
  });
  it("right shift operator", () => {
    expect(isSet3(4, 3)).toBe(true);
  });
});
