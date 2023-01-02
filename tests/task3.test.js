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
    multiplicationTable()
    const logs = [
      ["таблица умножения на 7: "],
      ["7 * 1 = 7"],
      ["7 * 2 = 14"],
      ["7 * 3 = 21"],
      ["7 * 4 = 28"],
      ["7 * 5 = 35"],
      ["7 * 6 = 42"],
      ["7 * 7 = 49"],
      ["7 * 8 = 56"]
    ]
    expect(logSpy.mock.calls[0][0]).toBe(logs[0][0]);
    expect(logSpy.mock.calls[0][1]).toBe(logs[0][1]);
    expect(logSpy.mock.calls[0][2]).toBe(logs[0][2]);
    expect(logSpy.mock.calls[0][3]).toBe(logs[0][3]);
    expect(logSpy.mock.calls[0][4]).toBe(logs[0][4]);
    expect(logSpy.mock.calls[0][5]).toBe(logs[0][5]);
    expect(logSpy.mock.calls[0][6]).toBe(logs[0][6]);
    expect(logSpy.mock.calls[0][7]).toBe(logs[0][7]);
    expect(logSpy.mock.calls[0][8]).toBe(logs[0][8]);
  })
})