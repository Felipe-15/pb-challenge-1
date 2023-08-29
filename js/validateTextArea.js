import { recoverData, saveData } from "./manageData.js";
import { deletePageDataOnSkip } from "./clearDataOnSkip.js";
const textarea = document.getElementById("custom-textarea");
const charCounter = document.getElementById("char-counter");
const nextLink = document.getElementById("next-link");
initializePage();
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
function initializePage() {
  nextLink === null || nextLink === void 0
    ? void 0
    : nextLink.addEventListener("click", finishForm);
  recoverTextarea();
  checkTextarea();
  deletePageDataOnSkip("fourthStep");
  textarea === null || textarea === void 0
    ? void 0
    : textarea.addEventListener("keyup", () => {
        charCounter.innerHTML = `${textarea.value.length}/130`;
        if (!textarea.value.length)
          return nextLink === null || nextLink === void 0
            ? void 0
            : nextLink.classList.add("button--disabled");
        return nextLink === null || nextLink === void 0
          ? void 0
          : nextLink.classList.remove("button--disabled");
      });
}
