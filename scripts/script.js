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

const body = document.querySelector("body");

body.addEventListener("resize", setCanvas);

setCanvas();
generateGrid(16);
