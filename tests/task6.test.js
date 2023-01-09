import { diff, isWord, pow } from "../src/task6";

describe("difference between numbers", () => {
  it("5 and 8", () => {
    expect(diff(5, 8)).toEqual(3)
  })
  it("4 and 2", () => {
    expect(diff(4, 2)).toEqual(2)
  })
  it("1 and 1", () => {
    expect(diff(1, 1)).toEqual(0)
  })
  it("5 and -5", () => {
    expect(diff(5, -5)).toEqual(10)
  })
})

describe("is word", () => {
  it("word: test", () => {
    expect(isWord(" test dfgd ghhf ")).toEqual(false);
  })
  it("word: qw", () => {
    expect(isWord("   qw ")).toEqual(true);
  })
  it("word: ", () => {
    expect(isWord("")).toEqual(false);
  })
  it("word: q", () => {
    expect(isWord("q")).toEqual(true);
  })
})

describe("pow", () => {
  it("2^2", () => {
    expect(pow(2, 2)).toEqual(4)
  })
  it("3^3", () => {
    expect(pow(3, 3)).toEqual(27)
  })
  it("5^2", () => {
    expect(pow(5, 2)).toEqual(25)
  })
})