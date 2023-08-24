const customSelect = document
    .getElementsByClassName("custom-select")
    .item(0);
export function getSelectData() {
    console.log(customSelect.selectedIndex);
    return customSelect.selectedIndex;
}
export function setSelectedIndex(selectedIndex) {
    customSelect.selectedIndex = selectedIndex;
}
