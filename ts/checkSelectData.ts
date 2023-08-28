const customSelect = document.getElementById(
  "custom-select"
) as HTMLSelectElement;

export function getSelectData() {
  console.log(customSelect.selectedIndex);

  return customSelect.selectedIndex;
}

export function setSelectedIndex(selectedIndex: number) {
  customSelect.selectedIndex = selectedIndex;
}
