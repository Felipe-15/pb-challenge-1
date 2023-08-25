import { saveData, recoverData } from "./manageData";
import { getSelectData, setSelectedIndex } from "./checkSelectData";
import { deletePageDataOnSkip } from "./clearDataOnSkip";
const inputs = Array.from(document.getElementsByName("resources"));
const nextLink = document.getElementById("next-link");
nextLink === null || nextLink === void 0 ? void 0 : nextLink.addEventListener("click", finishForm);
getRecoveredData();
hasSomeChecked();
deletePageDataOnSkip("thirdStep");
inputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (inputs.some((input) => input.checked)) {
            nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
        }
        else {
            nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.add("button--disabled");
        }
    });
});
function hasSomeChecked() {
    if (inputs.some((input) => input.checked)) {
        return nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
    }
    return nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.add("button--disabled");
}
function getMarkedCheckbox() {
    const checkeds = [];
    for (let input of inputs) {
        if (input.checked) {
            checkeds.push({ id: input.id, value: input.value });
        }
    }
    return checkeds.length ? checkeds : null;
}
function finishForm() {
    const checkboxes = getMarkedCheckbox();
    if (!checkboxes)
        return;
    const selectedIndex = getSelectData();
    const data = { checkboxes, select: selectedIndex };
    saveData(data, "thirdStep");
}
function getRecoveredData() {
    const dataRecovered = recoverData("thirdStep");
    if (!dataRecovered)
        return;
    const { checkboxes: data, select } = dataRecovered;
    const ids = data.map((input) => input.id);
    inputs.forEach((input) => {
        for (let id of ids) {
            if (input.id === id) {
                input.checked = true;
            }
        }
    });
    setSelectedIndex(select);
}
