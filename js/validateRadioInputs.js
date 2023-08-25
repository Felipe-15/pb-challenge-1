import { saveData, recoverData } from "./manageData";
import { deletePageDataOnSkip } from "./clearDataOnSkip";
import { getSelectData, setSelectedIndex } from "./checkSelectData";
const radioInputs = Array.from(document.getElementsByName("financialMarket"));
const nextLink = document.getElementById("next-link");
nextLink === null || nextLink === void 0 ? void 0 : nextLink.addEventListener("click", finishForm);
radioInputs.forEach((input) => {
    input.addEventListener("change", () => {
        nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
    });
});
getRecoveredData();
getCheckedInput();
deletePageDataOnSkip("secondStep");
function finishForm() {
    const inputRadio = getCheckedInput();
    const selectedIndex = getSelectData();
    saveData({
        inputRadio: { value: inputRadio.value, id: inputRadio.id },
        select: selectedIndex,
    }, "secondStep");
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
        return nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.add("button--disabled");
    nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
    return checked;
}
function getRecoveredData() {
    const data = recoverData("secondStep");
    if (!data)
        return;
    const { inputRadio: recoveredInput, select } = data;
    setSelectedIndex(select);
    const inputToCheck = radioInputs.filter((radio) => radio.id === recoveredInput.id)[0];
    if (!inputToCheck)
        return;
    inputToCheck.checked = true;
    nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
}
