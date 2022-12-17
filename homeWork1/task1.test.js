import { sum } from "./task1";

describe("sum", () => {
  it("sum number", () => {
    expect(sum(1, 2)).toEqual(3);
  })
})