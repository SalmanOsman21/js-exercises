function changeImage() {
  const image = document.querySelector("#image");
  const URL = prompt("Enter The url Of new image");
  const borderRadius = prompt("Enter the border radius");
  const borderColor = prompt("Enter the border color");
  const width = prompt("Enter the width of an image");
  const height = prompt("Enter the height of an image");

  image.setAttribute("src", URL);
  image.style.border = `2px solid ${borderColor}px`;
  image.style.borderRadius = `${borderRadius}px`;
  image.style.width = `${width}px`;
  image.style.height = `${height}px`;
  image.style.padding = "10px";
  image.style.backgroundColor = "gray";
}
