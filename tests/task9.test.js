import { isRectangular, sAndL } from "../src/task9"

describe("is rectangular", () => {
  it("sides 7, 24, 25", () => {
    expect(isRectangular(7, 24, 25)).toBeTruthy()
  })
  it("sides 8, 22, 13", () => {
    expect(isRectangular(8, 2, 13)).toBeFalsy()
  })
})

describe("s and l", () => {
  it("r = 6", () => {
    const { s, l } = sAndL(6)
    expect(s).toEqual(226.1946710584651)
    expect(l).toEqual(37.69911184307752)
  })
  it("r = 8", () => {
    const { s, l } = sAndL(8)
    expect(s).toEqual(402.1238596594935)
    expect(l).toEqual(50.26548245743669)
  })
  it("r = 1", () => {
    const { s, l } = sAndL(1)
    expect(s).toEqual(6.283185307179586)
    expect(l).toEqual(6.283185307179586)
  })
})