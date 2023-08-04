const outputElement = document.querySelector("#output");
const copyBtn = document.querySelector("#copy");
const generateBtn = document.querySelector("#generate");
const lenghtElement = document.querySelector("#length");
const numberElement = document.querySelector("#number");
const capitalElement = document.querySelector("#capital");
const smallElement = document.querySelector("#small");
const symbolElement = document.querySelector("#symbol");
const formElemnt = document.querySelector("#frm");

copyBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const password = outputElement.value;
  if (password) {
    await navigator.clipboard.writeText(password);
    alert("password copied");
  } else {
    alert("no password generated");
  }
});

function generateRandomChar(min, max) {
  const n = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * n) + min);
}
function numberValue() {
  return generateRandomChar(48, 57);
}
function capitalValue() {
  return generateRandomChar(65, 90);
}
function smallValue() {
  return generateRandomChar(97, 122);
}
function symbolValue() {
  let symbol = "!@#$%^&/*-+.*()_+{}:";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
const functionArray = [
  {
    ele: numberElement,
    fun: numberValue,
  },
  {
    ele: capitalElement,
    fun: capitalValue,
  },
  {
    ele: smallElement,
    fun: smallValue,
  },
  {
    ele: symbolElement,
    fun: symbolValue,
  },
];

formElemnt.addEventListener("submit", (e) => {
  e.preventDefault();
  const limit = lenghtElement.value;
  const funarray = functionArray.filter(({ ele }) => ele.checked);
  let generatedPassword = "";
  for (i = 0; i < limit; i++) {
    let checkarray = Math.floor(Math.random() * funarray.length);
    let passwordletter = funarray[checkarray].fun();
    generatedPassword += passwordletter;
  }
  outputElement.value = generatedPassword;
});
