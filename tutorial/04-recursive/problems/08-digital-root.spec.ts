import { SoftP0408 } from "./08-digital-root";

describe("Digital root", () => {
  it("test", () => {
    const softp0408 = new SoftP0408();
    expect(softp0408.solution(99999)).toBe(9);
  });
});
