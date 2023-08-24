import { Pages, clearData } from "./manageData";

const skipButton = document
  .getElementsByClassName("button--big")
  .item(0) as HTMLButtonElement;

export function deletePageDataOnSkip(page: Pages) {
  skipButton?.addEventListener("click", () => clearData(page));
}
