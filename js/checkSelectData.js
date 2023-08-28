const customSelect = document.getElementById("custom-select");
export function getSelectData() {
    console.log(customSelect.selectedIndex);
    return customSelect.selectedIndex;
}
export function setSelectedIndex(selectedIndex) {
    customSelect.selectedIndex = selectedIndex;
}
