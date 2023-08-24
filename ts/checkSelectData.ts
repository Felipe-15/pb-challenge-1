const customSelect = document
  .getElementsByClassName("custom-select")
  .item(0) as HTMLSelectElement;

export function getSelectData() {
  console.log(customSelect.selectedIndex);

  return customSelect.selectedIndex;
}

export function setSelectedIndex(selectedIndex: number) {
  customSelect.selectedIndex = selectedIndex;
}
