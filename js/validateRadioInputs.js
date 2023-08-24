import { saveData, recoverData } from "./manageData.js";
import { deletePageDataOnSkip } from "./clearDataOnSkip.js";
const radioInputs = Array.from(document.getElementsByName("financialMarket"));
const nextLink = document.getElementById("next-link");
nextLink === null || nextLink === void 0
  ? void 0
  : nextLink.addEventListener("click", finishForm);
radioInputs.forEach((input) => {
  input.addEventListener("change", () => {
    nextLink === null || nextLink === void 0
      ? void 0
      : nextLink.classList.remove("button--disabled");
  });
});
checkInputRecovered();
getCheckedInput();
deletePageDataOnSkip("secondStep");
function finishForm() {
  const data = getCheckedInput();
  saveData(data, "secondStep");
}
function getCheckedInput() {
  let checked;
  for (let radioInput of radioInputs) {
    if (radioInput.checked) {
      checked = { id: radioInput.id, value: radioInput.value };
      break;
    }
  }
  if (!checked)
    return nextLink === null || nextLink === void 0
      ? void 0
      : nextLink.classList.add("button--disabled");
  nextLink === null || nextLink === void 0
    ? void 0
    : nextLink.classList.remove("button--disabled");
  return checked;
}
function checkInputRecovered() {
  const data = recoverData("secondStep");
  if (!data) return;
  const inputToCheck = radioInputs.filter((radio) => radio.id === data.id)[0];
  if (!inputToCheck) return;
  inputToCheck.checked = true;
  nextLink === null || nextLink === void 0
    ? void 0
    : nextLink.classList.remove("button--disabled");
}
