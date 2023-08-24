import { recoverData, saveData } from "./manageData.js";
import { deletePageDataOnSkip } from "./clearDataOnSkip.js";
const textarea = document.getElementById("custom-textarea");
const charCounter = document.getElementById("char-counter");
const nextLink = document.getElementById("next-link");
nextLink === null || nextLink === void 0
  ? void 0
  : nextLink.addEventListener("click", finishForm);
recoverTextarea();
checkTextarea();
deletePageDataOnSkip("fourthStep");
if (!textarea.value.length) {
  nextLink === null || nextLink === void 0
    ? void 0
    : nextLink.classList.add("button--disabled");
} else {
  nextLink === null || nextLink === void 0
    ? void 0
    : nextLink.classList.remove("button--disabled");
}
textarea === null || textarea === void 0
  ? void 0
  : textarea.addEventListener("keyup", (e) => {
      let length = textarea.value.length;
      if (!length) {
        nextLink === null || nextLink === void 0
          ? void 0
          : nextLink.classList.add("button--disabled");
        charCounter.innerHTML = "0/160";
      } else {
        nextLink === null || nextLink === void 0
          ? void 0
          : nextLink.classList.remove("button--disabled");
      }
      length++;
      if (length > 160) {
        textarea.value = textarea.value.slice(0, 160);
        return;
      }
      charCounter.innerHTML = `${length - 1}/160`;
    });
textarea === null || textarea === void 0
  ? void 0
  : textarea.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
      }
    });
function finishForm() {
  const data = { value: textarea.value };
  saveData(data, "fourthStep");
}
function checkTextarea() {
  if (textarea.value.length)
    return nextLink === null || nextLink === void 0
      ? void 0
      : nextLink.classList.remove("button--disabled");
  return nextLink === null || nextLink === void 0
    ? void 0
    : nextLink.classList.add("button--disabled");
}
function recoverTextarea() {
  const dataRecovered = recoverData("fourthStep");
  if (!dataRecovered) return;
  textarea.value = dataRecovered.value;
  charCounter.innerHTML = `${dataRecovered.value.length}/160`;
}
