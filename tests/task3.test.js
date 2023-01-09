import { arithmeticMean, multiplicationTable, sumOfIntegers } from "../src/task3";

describe("arithmetic mean of even numbers 1 - N", () => {
  it("1 to 3", () => {
    expect(arithmeticMean(3)).toEqual(1)
  })
  it("1 to 7", () => {
    expect(arithmeticMean(7)).toEqual(3)
  })
  it("1 to 2", () => {
    expect(arithmeticMean(1)).toEqual(1)
  })
})

describe("sum of integers 50 - 100", () => {
  it("1 to 3", () => {
    expect(sumOfIntegers()).toEqual(3725)
  })
})

describe("multiplication table for 7", () => {
  it("show table", () => {
    const logSpy = jest.spyOn(console, "log");
    multiplicationTable();
    const logs = "таблица умножения на 7:\n7 * 1 = 7\n7 * 2 = 14\n7 * 3 = 21\n7 * 4 = 28\n7 * 5 = 35\n7 * 6 = 42\n7 * 7 = 49\n7 * 8 = 56";
    expect(logSpy).toHaveBeenCalledWith(logs);
  })
})