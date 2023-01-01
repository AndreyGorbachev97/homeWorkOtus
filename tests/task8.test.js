import { dayOfWeek, diffDate, getDate, getDay } from "../src/task8"

// beforeAll(() => {
//   jest.useFakeTimers('modern');
//   jest.setSystemTime(new Date(2022, 3, 1));
// });

// afterAll(() => {
//   jest.useRealTimers();
// });

describe("working date", () => {
  const date = new Date("2022-12-20")
  const currentDate = new Date("2022-12-21")
  const inputDate = getDate("20.12.2022")
  it("get 20.12.2022", () => {
    expect(inputDate).toEqual(date)
  })
  it("get day 20", () => {
    expect(getDay(inputDate)).toEqual(2)
  })
  it("get day of week", () => {
    expect(dayOfWeek(2)).toEqual("Вторник")
    expect(dayOfWeek(3)).toEqual("Среда")
    expect(dayOfWeek(5)).toEqual("Пятница")
  })
  it("diff date", () => {
    const mockDate = new Date(1672572182193)
    const spy = jest
    .spyOn(global, 'Date')
    .mockImplementation(() => mockDate)
    // 1672572182193
    // jest.spyOn(Date, "now").mockImplementation(() => 1660850523095);
    expect(diffDate()).toEqual(1440)
  })
})