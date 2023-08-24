import { saveData, recoverData } from "./manageData";
import { deletePageDataOnSkip } from "./clearDataOnSkip";

const inputs = Array.from(
  document.getElementsByName("resources")
) as HTMLInputElement[];

const nextLink = document.getElementById("next-link");

nextLink?.addEventListener("click", finishForm);

getRecoveredCheckboxes();
hasSomeChecked();
deletePageDataOnSkip("thirdStep");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (inputs.some((input) => input.checked)) {
      nextLink?.classList.remove("button--disabled");
    } else {
      nextLink?.classList.add("button--disabled");
    }
  });
});

function hasSomeChecked() {
  if (inputs.some((input) => input.checked)) {
    return nextLink?.classList.remove("button--disabled");
  }

  return nextLink?.classList.add("button--disabled");
}

function getMarkedCheckbox(): { id: string; value: string }[] | null {
  const checkeds = [];
  for (let input of inputs) {
    if (input.checked) {
      checkeds.push({ id: input.id, value: input.value });
    }
  }

  return checkeds.length ? checkeds : null;
}

function finishForm() {
  const data = getMarkedCheckbox();

  if (!data) return;

  saveData(data, "thirdStep");
}

function getRecoveredCheckboxes() {
  const data = recoverData("thirdStep");

  if (!data) return;

  const ids = data.map((input) => input.id);

  inputs.forEach((input) => {
    for (let id of ids) {
      if (input.id === id) {
        input.checked = true;
      }
    }
  });
}

export {};
