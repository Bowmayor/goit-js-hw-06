const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const valueLength = validationInput.value.length;
  const validLength = +validationInput.dataset.length;

  if (valueLength === validLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
