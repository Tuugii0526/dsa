import { f18LCM, f19LCM } from "./solution";

describe("LCM", () => {
  it("SHould first solution work", () => {
    expect(f18LCM(12, 20)).toBe(60);
  });
  it("Should second while solution work", () => {
    expect(f19LCM(12, 20)).toBe(60);
  });
});
