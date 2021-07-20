const container = document.getElementById("container");
const circlearray = [];
let rows = 15;
let cols = 15;

for (let i = 0; i < rows; i++) {
  circlearray[i] = [];
  for (let j = 0; j < cols; j++) {
    var circle = document.createElement("div");
    circle.classList.add("circle");
    container.appendChild(circle);
    circlearray[i].push(circle);
  }
}
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    circlearray[i][j].addEventListener("click", () => {
      growcircles(i, j);
    });
  }
}

function growcircles(i, j) {
  if (circlearray[i] && circlearray[i][j]) {
    if (!circlearray[i][j].classList.contains("grow")) {
      circlearray[i][j].classList.add("grow");
      setTimeout(() => {
        growcircles(i + 1, j);
        growcircles(i - 1, j);
        growcircles(i, j + 1);
        growcircles(i, j - 1);
      }, 100);
      setTimeout(() => {
        circlearray[i][j].classList.remove('grow');

          
      }, 300);
    }
  }
}

