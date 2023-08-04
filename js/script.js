const input = document.querySelector("#searchinput");
const searchList = document.querySelector(".searchitems");
const body = document.querySelector("body");
input.addEventListener("keyup", updateList);
async function updateList() {
  const response = await fetch("./data/data.json");
  const dataKeyword = await response.json();
  let suggest = [];
  let inputKey = input.value.trim().toLowerCase();
  suggest = dataKeyword.filter((keyword) => {
    return keyword.search.toLowerCase().includes(inputKey);
  });
  const content = suggest.map((list) => {
    const textToSearch = list.search;
    return `<li onclick="updateinput('${textToSearch}')">${highLight(
      textToSearch
    )}</li>`;
  });
  searchList.innerHTML = content.join("");
  if (inputKey.length < 1 || !suggest.length) {
    searchList.innerHTML = "";
  }
  document.addEventListener("click", () => {
    searchList.innerHTML = "";
  });
}
input.addEventListener("click", (e) => {
  input.select();
});
function updateinput(textToSearch) {
  input.value = textToSearch;
}
function highLight(textToSearch) {
  const searchInput = input.value.toLowerCase();
  const startIndex = textToSearch.toLowerCase().indexOf(searchInput);
  const highLightedText =
    textToSearch.substring(0, startIndex) +
    "<mark>" +
    searchInput +
    "</mark>" +
    textToSearch.substring(startIndex + searchInput.length);
  return highLightedText;
}
/******  form validation****** */
// custom password viewer
const form = document.querySelector("#form");
const eyes = document.querySelectorAll(".eye");
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const cpassword = document.querySelector(".cpassword");
const mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const passwordPattern = /^[a-zA-Z0-9]*$/;
const allInputs = document.querySelectorAll("input");
const p = document.querySelectorAll("p");
const modal = document.querySelector(".modal");
// toggling password eyes
eyes.forEach((eye) => {
  let checkPassword = true;
  eye.addEventListener("click", (e) => {
    eye.classList.toggle("show");
    if (checkPassword) {
      e.target.parentNode.querySelector("input").setAttribute("type", "text");
      checkPassword = false;
    } else {
      e.target.parentNode
        .querySelector("input")
        .setAttribute("type", "password");
      checkPassword = true;
    }
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs([username, email, password, cpassword]);
  checkLength(username, 6, 10);
  checkMail(email);
  checkPasswordChar(password);
  checkPassword(password, cpassword);
  displaySuccess();
});
// manipulating label
function forLabel() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    if (input.value.trim() == "") {
      input.classList.remove("valid");
    } else {
      input.classList.add("valid");
    }
  });
}
forLabel();
setInterval(forLabel, 100);
//validating inputs
function checkInputs(inputs) {
  inputs.forEach((input) => {
    let inputData = input.getAttribute("data-input");
    if (input.value.trim() === "") {
      errorInput(input, `${inputData} is required`);
    } else {
      sucessInput(input);
    }
  });
}
function errorInput(input, message) {
  const parentElement = input.parentElement;
  const p = parentElement.querySelector("p");
  p.classList.add("error");
  p.innerHTML = message;
  input.classList.add("error");
  input.classList.remove("success");
}
function sucessInput(input) {
  input.classList.add("success");
  input.classList.remove("error");
  const parentElement = input.parentElement;
  const p = parentElement.querySelector("p");
  p.classList.remove("error");
  p.innerHTML = "";
}
function checkLength(input, min, max) {
  let inputLength = input.value.trim().length;
  let inputData = input.getAttribute("data-input");
  if (inputLength == 0) {
    errorInput(input, `${inputData} is required`);
  } else {
    if (inputLength <= min) {
      errorInput(input, `${inputData} should be more than ${min} characters`);
    } else {
      if (inputLength >= max) {
        errorInput(input, `${inputData} should be less than ${max} characters`);
      } else {
        sucessInput(input);
      }
    }
  }
}
function checkMail(input) {
  let inputData = input.getAttribute("data-input");
  if (input.value.trim() == "") {
    errorInput(input, `${inputData} is required`);
  } else {
    if (!input.value.match(mailPattern)) {
      errorInput(input, `Entered email is invalid`);
    }
  }
}
function checkPasswordChar(input) {
  let inputData = input.getAttribute("data-input");
  if (input.value.trim() == "") {
    errorInput(input, `${inputData} is required`);
  } else {
    if (!input.value.match(passwordPattern)) {
      errorInput(input, `symbols & special characters are not allowed`);
    }
  }
}
function checkPassword(pass1, pass2) {
  if (pass1.value.trim() != pass2.value.trim()) {
    errorInput(pass1, `entered password mismatch`);
    errorInput(pass2, `entered password mismatch`);
  }
}
function displaySuccess() {
  let allText = 0;
  p.forEach((eachP) => {
    let pText = eachP.innerText.length;
    let dummy = 0;
    if (!pText < 1) {
      dummy++;
      allText += dummy;
    }
  });
  if (allText < 1) {
    modal.classList.add("display");
    setTimeout(() => {
      modal.classList.remove("display");
      allInputs.forEach((input) => {
        input.value = "";
      });
      eyes.forEach((eye) => eye.classList.remove("show"));
    }, 3000);
  } else {
    modal.classList.remove("display");
  }
}
document.addEventListener("click", () => {
  modal.classList.remove("display");
});
