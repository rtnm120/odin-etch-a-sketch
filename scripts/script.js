function setCanvas() {
  const body = document.querySelector("body");
  const bodyStyle = getComputedStyle(body);
  const bodyWidth = parseInt(bodyStyle["width"].slice(0, -2)) - 42;

  const content = document.querySelector("#content");
  const contentStyle = getComputedStyle(content);
  const contentHeight = parseInt(contentStyle["height"].slice(0, -2));

  const grid = document.querySelector("#etch-a-sketch");

  if (contentHeight > bodyWidth) {
    grid.style["height"] = "85vw";
    grid.style["width"] = "85vw";
  } else {
    grid.style["height"] = "85vh";
    grid.style["width"] = "85vh";
  }
}

function generateGrid(gridSize) {
  const grid = document.querySelector("#etch-a-sketch");
  for (i = 0; i < gridSize * gridSize; i++) {
    pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style["height"] = `${(1 / gridSize) * 100}%`;
    pixel.style["width"] = `${(1 / gridSize) * 100}%`;
    grid.appendChild(pixel);
    pixel.addEventListener("mouseenter", (activatedPixel) => {
      updatePixel(activatedPixel.target);
    });
  }
}

function updatePixel(pixel) {
  const pixelStyle = getComputedStyle(pixel);
  let pixelBrightness;

  if (pixelStyle["filter"] != "none") {
    pixelBrightness = parseFloat(
      pixelStyle["filter"].split("(")[1].slice(0, -1),
    );
    pixel.style["filter"] = `brightness(${pixelBrightness - 0.11})`;
  } else {
    pixel.style["background-color"] = getRandomColor();
    pixel.style["filter"] = "brightness(1)";
  }
}

function getRandomColor() {
  const colors = [
    "#f5e0dc",
    "#f2cdcd",
    "#f5c2e7",
    "#cba6f7",
    "#f38ba8",
    "#eba0ac",
    "#fab387",
    "#f9e2af",
    "#a6e3a1",
    "#94e2d5",
    "#89dceb",
    "#74c7ec",
    "#89b4fa",
    "#b4befe",
  ];

  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

const body = document.querySelector("body");

body.addEventListener("resize", setCanvas);

setCanvas();
generateGrid(16);
