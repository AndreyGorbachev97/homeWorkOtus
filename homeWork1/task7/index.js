const input = document.querySelector(".input-text")

let valueInput = "";

const onChange = (value) => {
  const btn = document.getElementById("button")
  valueInput = value;
  if (value) {
    btn.hidden = false;
  } else {
    btn.hidden = true;
  }
}

const addPr = () => {
  const p = document.createElement("p");
  p.innerText = valueInput;
  console.log("p", p);
  const body = document.querySelector("body");
  body.appendChild(p);
}