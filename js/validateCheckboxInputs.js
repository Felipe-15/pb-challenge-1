const inputs = Array.from(document.getElementsByName("resources"));
const nextLink = document.getElementById("next-link");
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
let isMarked = false;
for (let index = 0; index < inputs.length; index++) {
    if (inputs[index].checked) {
        isMarked = true;
        break;
    }
}
if (isMarked) {
    nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
}
else {
    nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.add("button--disabled");
}
export {};
