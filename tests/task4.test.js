import { task4 } from "../src/task4";

describe("correct object", () => {
  window.prompt = jest.fn(() => "23")
  const result = task4()
  it("isUser", () => {
    expect(result.user).toBeTruthy()
  })

  it("isCopyUser", () => {
    expect(result.copyUser).toBeTruthy()
  })

  it("is user name", () => {
    expect(typeof result.user.name).toEqual("string")
  })

  it("is age", () => {
    expect(typeof +result.user.age).toEqual("number")
  })
})