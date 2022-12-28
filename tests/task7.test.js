import { addPr, onChange, createUI } from "../src/task7";

describe("onChange", () => {

  let el;
  beforeEach(() => {
    el = document.createElement("div");
    createUI(el)
  });

  it("value = null", () => {
    const btn = el.querySelector('button');
    expect(btn.hidden).toBeTruthy()
  })
  it("value = text", () => {
    const btn = el.querySelector('button');
    onChange("text", btn)
    expect(btn.hidden).toBeFalsy()
  })
  it("value = \"\"", () => {
    const btn = el.querySelector('button');
    onChange("", btn)
    expect(btn.hidden).toBeTruthy()
  })
  it("adding a paragraph", () => {
    addPr(el)
    expect(el.querySelector("p")).toBeTruthy();
  })
})
