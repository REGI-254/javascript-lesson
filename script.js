function updateName() {
  const name = prompt("enter a new name");
  button.textContent = `Player 1: ${name}`;
}

const button = document.querySelector("button");
button.addEventListener("click", updateName);