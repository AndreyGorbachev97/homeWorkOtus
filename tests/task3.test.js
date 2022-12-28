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
    jest.spyOn(console, "log");
    multiplicationTable()
    expect(console.log).toHaveBeenCalledWith("таблица умножения на 7: ", `7 * 1 = ", 7`);
  })
})