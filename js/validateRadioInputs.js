const radioInputs = document.getElementsByName("financialMarket");
const nextLink = document.getElementById("next-link");
radioInputs.forEach((input) => {
    input.addEventListener("change", () => {
        nextLink === null || nextLink === void 0 ? void 0 : nextLink.classList.remove("button--disabled");
    });
});
let isMarked = false;
for (let index = 0; index < radioInputs.length; index++) {
    if (radioInputs[index].checked) {
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
