import {
  f37ComputingPower,
  f38ComputingPower,
  f39ComputingPower,
  f40ComputingPower,
} from "./solution-u1";

describe("Computing power", () => {
  it("Test", () => {
    console.log(f37ComputingPower(2, 3));
  });
  it("test improved", () => {
    console.log(f38ComputingPower(2, 3));
  });
  it("logn test", () => {
    console.log(f39ComputingPower(2, 3));
  });
  it("recursive computing power", () => {
    console.log(f40ComputingPower(2, 3));
  });
});
