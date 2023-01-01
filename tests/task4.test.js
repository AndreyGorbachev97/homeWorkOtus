import { task4, addAdmin, createUser, destructuring } from "../src/task4";

describe("correct object", () => {
  window.prompt = jest.fn(() => "23")
  it("create user", () => {
    const user = createUser("John")
    expect(user.name).toBe("John")
    expect(user.age).toBe("23")
  })
  it("add admin", () => {
    const user = createUser("Ivan")
    addAdmin(user)
    expect(user.name).toBe("Ivan")
    expect(user.age).toBe("23")
    expect(user.role).toBe("admin")
  })
  it("destructuring", () => {
    const logSpy = jest.spyOn(console, "log");
    const logs = [
      ["Ivan"],
      ["23"],
      ["admin"],
    ]
    const user = createUser("Ivan")
    addAdmin(user)
    destructuring(user)
    expect(logSpy.mock.calls[0][0]).toBe(logs[0][0]);
    expect(logSpy.mock.calls[0][1]).toBe(logs[0][1]);
    expect(logSpy.mock.calls[0][2]).toBe(logs[0][2]);
  })
  it("test main function", () => {
    const result = task4()
    expect(result.user).toBeTruthy()
    expect(result.copyUser).toBeTruthy()
    expect(result.copyUser.role).toEqual("admin")
    expect(typeof result.user.name).toEqual("string")
    expect(typeof +result.user.age).toEqual("number")
  })
})