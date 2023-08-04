const password = document.querySelector("#pwd");
const show = document.querySelector("#check");
show.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  console.log(type);
});
