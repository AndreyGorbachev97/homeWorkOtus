import { task10 } from "../src/task10"

describe("test string type", () => {
  it("type = email", () => {
    window.prompt = jest.fn(() => "aa@mail.ru")
    const { isData, isEmail, isPhone } = task10()
    expect(isData).toBeFalsy()
    expect(isEmail).toBeTruthy()
    expect(isPhone).toBeFalsy()
  })
  it("type = date", () => {
    window.prompt = jest.fn(() => "20.08.2012")
    const { isData, isEmail, isPhone } = task10()
    expect(isData).toBeTruthy()
    expect(isEmail).toBeFalsy()
    expect(isPhone).toBeFalsy()
  })
  it("type = phone", () => {
    window.prompt = jest.fn(() => "+79061116778")
    const { isData, isEmail, isPhone } = task10()
    expect(isData).toBeFalsy()
    expect(isEmail).toBeFalsy()
    expect(isPhone).toBeTruthy()
  })
})