const body = document.querySelector("body")

export const createUI = (el) => {
  el.innerHTML = `
  <input class="input-text" />
  <button hidden id="button">Button</button>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore.</p>
`;

  const btn = document.getElementById('button');
  const input = document.querySelector(".input-text")
  input.addEventListener("input", function (e) {
    onChange(e.target.value, btn)
  })

  btn.addEventListener("click", () => {
    addPr(body)
  })
}

let valueInput = '';


export const onChange = (value, btn) => {
  valueInput = value;
  if (value) {
    btn.hidden = false;
  } else {
    btn.hidden = true;
  }
};

export const addPr = (body) => {
  const p = document.createElement('p');
  p.innerText = valueInput;
  body.appendChild(p);
};

createUI(body)