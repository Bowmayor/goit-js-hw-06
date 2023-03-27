const counterValue = document.getElementById("value");
let value = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.dataset.action === "decrement") {
      value--;
    } else if (event.target.dataset.action === "increment") {
      value++;
    }

    counterValue.textContent = value;
  });
});
