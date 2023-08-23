const radioInputs = Array.from(
  document.getElementsByName("financialMarket")
) as HTMLInputElement[];

const nextLink = document.getElementById("next-link");

nextLink?.addEventListener("click", finishForm);

radioInputs.forEach((input) => {
  input.addEventListener("change", () => {
    nextLink?.classList.remove("button--disabled");
  });
});

let isMarked = false;

for (let index = 0; index < radioInputs.length; index++) {
  if ((radioInputs[index] as HTMLInputElement).checked) {
    isMarked = true;
    break;
  }
}

if (isMarked) {
  nextLink?.classList.remove("button--disabled");
} else {
  nextLink?.classList.add("button--disabled");
}

export {};
