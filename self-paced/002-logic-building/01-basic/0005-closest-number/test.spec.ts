import { getClosest } from "./01-app";

describe("get closest", () => {
  it("Should return number", () => {
    expect(getClosest(3, 2)).toBeDefined();
  });
});
