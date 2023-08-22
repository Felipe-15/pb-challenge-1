const textarea = document.getElementById(
  "custom-textarea"
) as HTMLTextAreaElement;

const charCounter = document.getElementById("char-counter") as HTMLSpanElement;

const nextLink = document.getElementById("next-link");

if (!textarea.value.length) {
  nextLink?.classList.add("button--disabled");
} else {
  nextLink?.classList.remove("button--disabled");
}

textarea?.addEventListener("keyup", (e) => {
  let length = textarea.value.length;
  if (!length) {
    nextLink?.classList.add("button--disabled");
    charCounter.innerHTML = "0/160";
  } else {
    nextLink?.classList.remove("button--disabled");
  }

  length++;

  if (length > 160) {
    textarea.value = textarea.value.slice(0, 160);
    return;
  }
  console.log(charCounter);
  charCounter.innerHTML = `${length - 1}/160`;
});

textarea?.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
  }
});
