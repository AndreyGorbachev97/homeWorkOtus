import { max, getMonth, monthMap, isIncluded } from "../src/task2";

describe("max number", () => {
  it("max 6 or 7", () => {
    expect(max(6, 7)).toEqual(7)
  })
  it("max 10 or 1", () => {
    expect(max(10, 1)).toEqual(10)
  })
  it("max 2 or 2", () => {
    expect(max(2, 2)).toEqual(2)
  })
  it("max 0 or -1", () => {
    expect(max(0, -1)).toEqual(0)
  })
})

describe("get month by index", () => {
  it("index 12", () => {
    expect(getMonth(12)).toEqual('Декабрь')
  })
  it("index 1", () => {
    expect(getMonth(1)).toEqual('Январь')
  })
  it("index 0", () => {
    expect(getMonth(0)).toEqual('Введено не корректное число')
  })
  it("index 13", () => {
    expect(getMonth(13)).toEqual('Введено не корректное число')
  })
})

describe("Does a circle fit in a square?", () => {
  it("4 - circle, 4 - square", () => {
    expect(isIncluded(4, 4)).toBe(false)
  })
  it("10 - circle, 5 - square", () => {
    expect(isIncluded(10, 5)).toBe(false)
  })
  it("4 - circle, 10 - square", () => {
    expect(isIncluded(4, 10)).toBe(true)
  })
  it("2 - circle, 3 - square", () => {
    expect(isIncluded(2, 3)).toBe(true)
  })
})