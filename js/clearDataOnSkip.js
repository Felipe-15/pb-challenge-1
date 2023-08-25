import { clearData } from "./manageData.js";
const skipButton = document.getElementsByClassName("button--big").item(0);
export function deletePageDataOnSkip(page) {
  skipButton === null || skipButton === void 0
    ? void 0
    : skipButton.addEventListener("click", () => clearData(page));
}
