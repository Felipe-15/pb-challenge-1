import { recoverData, saveData } from "./manageData";
import { deletePageDataOnSkip } from "./clearDataOnSkip";

const textarea = document.getElementById(
  "custom-textarea"
) as HTMLTextAreaElement;

const charCounter = document.getElementById("char-counter") as HTMLSpanElement;

const nextLink = document.getElementById("next-link");

nextLink?.addEventListener("click", finishForm);

recoverTextarea();
checkTextarea();
deletePageDataOnSkip("fourthStep");

if (!textarea.value.length) {
  nextLink?.classList.add("button--disabled");
} else {
  nextLink?.classList.remove("button--disabled");
}

textarea?.addEventListener("keyup", (e) => {
  let length = textarea.value.length;
  if (!length) {
    nextLink?.classList.add("button--disabled");
    charCounter.innerHTML = "0/130";
  } else {
    nextLink?.classList.remove("button--disabled");
  }

  length++;

  if (length > 130) {
    textarea.value = textarea.value.slice(0, 130);
    return;
  }

  charCounter.innerHTML = `${length - 1}/130`;
});

textarea?.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
  }
});

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
