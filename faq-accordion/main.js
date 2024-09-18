const icons = document.querySelectorAll(".label2");
const contents = document.querySelectorAll(".content");
const mainContainer = document.querySelector(".main-content");

// ONE WAY TO DO IT
// icons.forEach(function (icon, offset) {
//   icon.addEventListener("click", () => {
//     icon.classList.toggle("active");
//     contents[offset].classList.toggle("active-content");
//   });
// });

// SECOND WAY TO DO IT
// icons.forEach(function (icon, offset) {
//   icon.addEventListener("click", () => {
//     icon.classList.toggle("active");

//     icon.offsetParent
//       .querySelector(".content")
//       .classList.toggle("active-content");
//     // icon.nextElementSibling.classList.toggle(
//     //   "active-content"
//     // );
//   });
// });

// icons.forEach(function (icon, offset) {
//   icon.addEventListener("click", () => {
//     icon.classList.toggle("active");
//     contents.forEach(function (content) {
//       content.classList.toggle("active-content");
//     });
//   });
// });

// nested loop

// const myfunc = contents.forEach((content) => {
//   content.classList.toggle("active");
// });
// iconPlus.addEventListener("click", () => {
//   content.classList.toggle("active");
// });

// MOST EFFICIENT.....

icons.forEach(function (icon, offset) {
  icon.addEventListener("click", () => {
    if (icon.getAttribute("src") === "./assets/icon-plus.svg") {
      icon.setAttribute("src", "./assets/icon-minus.svg");
    } else {
      icon.setAttribute("src", "./assets/icon-plus.svg");
    }
  });
});

mainContainer.onclick = (e) => {
  let clickedElement = e.target;
  if (clickedElement.classList.contains("label2")) {
    clickedElement.offsetParent
      .querySelector(".content")
      .classList.toggle("active-content");
  }
};
