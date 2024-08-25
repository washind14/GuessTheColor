document.addEventListener("DOMContentLoaded", function() {
  const redBlock = document.getElementById("redBlock");
  const greenBlock = document.getElementById("greenBlock");
  const blueBlock = document.getElementById("blueBlock");
  const rgbText = document.getElementById("rgbText");
  const colorOptionsContainer = document.getElementById("colorOptions");
  const messageDisplay = document.getElementById("message");
  const resetButton = document.getElementById("resetButton");

  let correctColor;
  const numColors = 6;

  function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return {r, g, b, rgbString: `rgb(${r}, ${g}, ${b})`};
  }

  function displayColors() {
      colorOptionsContainer.innerHTML = '';
      const correctColorObj = getRandomColor();
      correctColor = correctColorObj.rgbString;

      redBlock.style.backgroundColor = "#FF0000";
      greenBlock.style.backgroundColor = "#00FF00";
      blueBlock.style.backgroundColor = "#0000FF";
      rgbText.textContent = correctColor;

      const correctPosition = Math.floor(Math.random() * numColors);

      for (let i = 0; i < numColors; i++) {
          const colorBox = document.createElement("div");
          colorBox.classList.add("color-box");
          colorBox.style.backgroundColor = i === correctPosition ? correctColor : getRandomColor().rgbString;
          colorBox.addEventListener("click", function() {
              if (this.style.backgroundColor === correctColor) {
                  messageDisplay.textContent = "Correct!";
                  resetButton.textContent = "Play Again?";
                  changeAllColors(correctColor);
              } else {
                  this.style.backgroundColor = "#000000";
                  messageDisplay.textContent = "Try Again!";
              }
          });
          colorOptionsContainer.appendChild(colorBox);
      }
  }

  function changeAllColors(color) {
      const colorBoxes = document.querySelectorAll(".color-box");
      colorBoxes.forEach(box => box.style.backgroundColor = color);
  }

  resetButton.addEventListener("click", function() {
      displayColors();
      messageDisplay.textContent = "";
      this.textContent = "New Colors";
  });

  displayColors();
});