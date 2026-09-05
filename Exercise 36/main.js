const color = document.querySelector("#color");
const selectedColor = document.querySelector("#selectedColor");
const clear = document.querySelector("#clear");
const history = document.querySelector("#history");

color.addEventListener("input", function () {
  const colorSelected = color.value;

  selectedColor.style.backgroundColor = colorSelected;

  colorHistory(colorSelected);
});

function colorHistory(colors) {
  const li = document.createElement("li");

  li.textContent = colors;
  li.style.color = colors;

  history.appendChild(li);
}

clear.addEventListener("click", function () {
  history.innerHTML = "";
});
