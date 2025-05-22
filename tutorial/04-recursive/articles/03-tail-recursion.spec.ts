import { soft040301 } from "./03-tail-recursion";

describe("Tail or non-tail recursion", () => {
  it("tail recursion", () => {
    expect(soft040301(4, 1)).toBe(24);
  });
});
