const list = document.querySelector("#list");

function addItem() {
  const newItem = document.createElement("li");
  newItem.textContent = "Item 3";
  list.appendChild(newItem);
}

function removeItem() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  } else {
    alert("End the items of Lists");
  }
}
