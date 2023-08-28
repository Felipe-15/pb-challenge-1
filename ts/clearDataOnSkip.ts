import { Pages, clearData } from "./manageData";

const skipButton = document.getElementById("skip-button") as HTMLButtonElement;

export function deletePageDataOnSkip(page: Pages) {
  skipButton?.addEventListener("click", () => clearData(page));
}
