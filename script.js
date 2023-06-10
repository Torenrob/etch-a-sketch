const defaultDimension = 16;
const defaultColor = "rgb(116, 1, 19)";

let sketchBoard = document.getElementById("etchSketch");
dimensionSlider = document.getElementById("gridDims");
colorWheel = document.getElementById("colorPicker");
colorRadio = document.getElementsByName("color");
shakeBtn = document.getElementById("shakeBtn");
colorDisplay = document.getElementById("penColor");
dimensionDisplay = document.getElementById("boardDims");
let currentDimension;

dimensionSlider.addEventListener("change", (e) => {
	currentDimension = e.target.value;
});

function makeSketchNodes(dimensions) {
	sketchBoard.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
	sketchBoard.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;

	let nNodes = Math.pow(dimensions, 2);
	for (i = 0; i < nNodes; i++) {
		let etchNode = document.createElement("div");
		etchNode.classList.add("etchNode");
		sketchBoard.appendChild("etchNode");
	}
}
