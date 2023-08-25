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
        charCounter.innerHTML = "0/130";
        return;
      } else {
        nextLink === null || nextLink === void 0
          ? void 0
          : nextLink.classList.remove("button--disabled");
      }
      if (length + 1 > 130) {
        const currentValue = textarea.value.slice(0, 130);
        textarea.value = currentValue;
        charCounter.innerHTML = `${currentValue.length}/130`;
        return;
      }
      charCounter.innerHTML = `${length}/130`;
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
  charCounter.innerHTML = `${dataRecovered.value.length}/130`;
}
