const ageInput = document.getElementById("age") as HTMLInputElement;

ageInput?.addEventListener("keyup", (e) => {
  if (ageInput.value.length + 1 > 2) {
    ageInput.value = ageInput.value.slice(0, 2);
    return;
  }

  // In this case it's still necessary to check if a number was type, because even the input being of type 'number', letters like 'e' and math symbols are still accepted, and since it's the age that are asked the only char type wanted it's numbers.

  if (isNaN(Number(e.key)) && e.key !== "Backspace") {
    ageInput.value = ageInput.value.slice(ageInput.value.length);
  }
});
