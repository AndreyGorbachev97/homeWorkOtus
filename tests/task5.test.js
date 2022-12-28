import { maxMinArr, arrX2, sumAllElArr } from "../src/task5"

describe("arr transform x2", () => {
  it("[1, 3, 6, 9]", () => {
    expect(arrX2([1, 3, 6, 9])).toEqual([2, 6, 12, 18])
  })
  it("[0, 1, 11, 2]", () => {
    expect(arrX2([0, 1, 11, 2])).toEqual([0, 2, 22, 4])
  })
})

describe('min and max element in array', () => {
  it("min/max [1, 3, 6, 9]", () => {
    const { max, min } = maxMinArr([1, 3, 6, 9])
    expect(min).toEqual(1)
    expect(max).toEqual(9)
  })
  it("min/max [0, 1, 11, 2]", () => {
    const { max, min } = maxMinArr([0, 1, 11, 2])
    expect(min).toEqual(0)
    expect(max).toEqual(11)
  })
  it("min/max [33, 6, 24, 14]", () => {
    const { max, min } = maxMinArr([33, 6, 24, 14])
    expect(min).toEqual(6)
    expect(max).toEqual(33)
  })
})

describe("sum elements arr", () => {
  it("sum [0, 1, 11, 2]", () => {
    expect(sumAllElArr([0, 1, 11, 2])).toEqual(14)
  })
  it("sum [0, 1, 2, 3]", () => {
    expect(sumAllElArr([0, 1, 2, 3])).toEqual(6)
  })
  it("sum []", () => {
    expect(sumAllElArr([])).toEqual(0)
  })
})