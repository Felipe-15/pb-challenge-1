"use strict";
const ageInput = document.getElementById("age");
ageInput === null || ageInput === void 0 ? void 0 : ageInput.addEventListener("keyup", (e) => {
    if (ageInput.value.length + 1 > 2) {
        ageInput.value = ageInput.value.slice(0, 2);
        return;
    }
    if (isNaN(Number(e.key))) {
        ageInput.value = ageInput.value.slice(ageInput.value.length);
    }
});
