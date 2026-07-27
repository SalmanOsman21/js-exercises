const header = document.querySelector("#header");

console.log(header);

const paragraph = document.querySelector(".text");
console.log(paragraph);

function changeContent() {
  header.textContent = "Welcome to my Web";
}

function ChangeElement() {
  paragraph.innerHTML = `Changed the paragraph <strong>am Used the inner html </strong>`;
}
