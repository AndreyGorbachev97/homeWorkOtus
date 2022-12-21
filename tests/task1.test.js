import { sum, sumStrLen, sumStrNum } from '../src/task1';

describe('sum number', () => {
  it('sum number 1 + 2', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('sum length string', () => {
  it("sum length string: test + test1", () => {
    expect(sumStrLen("test", "test1")).toEqual(9)
  })
  it("sum length string: qwerty + string", () => {
    expect(sumStrLen("qwerty", "string")).toEqual(12)
  })
  it("sum length string: + ", () => {
    expect(sumStrLen("", "")).toEqual(0)
  })
})

describe('the sum of the numbers of a three-digit number', () => {
  it('sum number 321', () => {
    expect(sumStrNum('321')).toEqual(6);
  });
  it('sum number 678', () => {
    expect(sumStrNum('678')).toEqual(21);
  });
  it('sum number 111', () => {
    expect(sumStrNum('111')).toEqual(3);
  });
  it('sum number 0', () => {
    expect(sumStrNum('0')).toEqual(0);
  });
  it('sum number 10', () => {
    expect(sumStrNum('10')).toEqual(1);
  });
});
