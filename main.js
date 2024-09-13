const body = document.querySelector("body");
const toggleSwitch = document.querySelector(".switch");
const switchCircle = document.querySelector(".switch-circle");

toggleSwitch.addEventListener("click", () => {
  toggleSwitch.classList.toggle("switch-toggle-dark");
  switchCircle.classList.toggle("circle-toggle-dark");
  body.classList.toggle("toggle-dark");
});
