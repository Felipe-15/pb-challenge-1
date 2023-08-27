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

function onChangeTextarea() {
  let length = textarea.value.length;
  if (!length) {
    nextLink?.classList.add("button--disabled");
    charCounter.innerHTML = "0/130";

    return;
  } else {
    nextLink?.classList.remove("button--disabled");
  }

  if (length + 1 > 130) {
    const currentValue = textarea.value.slice(0, 130);
    textarea.value = currentValue;
    charCounter.innerHTML = `${currentValue.length}/130`;

    return;
  }

  charCounter.innerHTML = `${length}/130`;
}

function initializePage() {
  nextLink?.addEventListener("click", finishForm);

  recoverTextarea();
  checkTextarea();
  deletePageDataOnSkip("fourthStep");

  textarea?.addEventListener("keyup", onChangeTextarea);
}
