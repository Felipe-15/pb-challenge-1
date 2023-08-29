import { recoverData, saveData } from "./manageData";
import { deletePageDataOnSkip } from "./clearDataOnSkip";

const textarea = document.getElementById(
  "custom-textarea"
) as HTMLTextAreaElement;

const charCounter = document.getElementById("char-counter") as HTMLSpanElement;

const nextLink = document.getElementById("next-link");

initializePage();

function finishForm() {
  const data = { value: textarea.value };

  saveData(data, "fourthStep");
}

function checkTextarea() {
  if (textarea.value.length)
    return nextLink?.classList.remove("button--disabled");

  return nextLink?.classList.add("button--disabled");
}

function recoverTextarea() {
  const dataRecovered = recoverData("fourthStep");

  if (!dataRecovered) return;

  textarea.value = dataRecovered.value;
  charCounter.innerHTML = `${dataRecovered.value.length}/130`;
}

function initializePage() {
  nextLink?.addEventListener("click", finishForm);

  recoverTextarea();
  checkTextarea();
  deletePageDataOnSkip("fourthStep");

  textarea?.addEventListener("keyup", () => {
    charCounter.innerHTML = `${textarea.value.length}/130`;
    if (!textarea.value.length)
      return nextLink?.classList.add("button--disabled");

    return nextLink?.classList.remove("button--disabled");
  });
}
