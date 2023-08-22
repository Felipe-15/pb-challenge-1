"use strict";
const textarea = document.getElementById("custom-textarea");
const charCounter = document.getElementById("char-counter");
const nextLink = document.getElementById("next-link");
if (!textarea.value.length) {
    nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.add("button--disabled");
}
else {
    nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
}
textarea === null || textarea === void 0 ? void 0 : textarea.addEventListener("keyup", (e) => {
    let length = textarea.value.length;
    if (!length) {
        nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.add("button--disabled");
        charCounter.innerHTML = "0/160";
    }
    else {
        nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
    }
    length++;
    if (length > 160) {
        textarea.value = textarea.value.slice(0, 160);
        return;
    }
    console.log(charCounter);
    charCounter.innerHTML = `${length - 1}/160`;
});
textarea === null || textarea === void 0 ? void 0 : textarea.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
    }
});
