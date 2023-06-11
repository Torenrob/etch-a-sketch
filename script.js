const defaultColor = "rgb(116, 1, 19)";

let sketchBoard = document.getElementById("etchSketch");
dimensionSlider = document.getElementById("gridDims");
colorWheel = document.getElementById("colorPicker");
colorRadio = document.getElementsByName("color");
shakeBtn = document.getElementById("shakeBtn");
colorDisplay = document.getElementById("penColor");
dimensionDisplay = document.getElementById("boardDims");
boardNodes = [];

let penColor = 'black';
let currentDimension;
let sketchOn = "On";

dimensionSlider.addEventListener("change", (e) => {
	currentDimension = e.target.value;
	makeSketchNodes(currentDimension)
	
	boardNodes = Array.from(document.getElementsByClassName("etchNode"));
});

sketchBoard.addEventListener("mouseover", (e) => e.target.style.backgroundColor = `${penColor}`)

sketchBoard.addEventListener("click", turnSketchOn());

colorWheel.addEventListener("change", (e) => {
	penColor = e.target.value
});

function makeSketchNodes(dimensions) {
	sketchBoard.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
	sketchBoard.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
	dimensionDisplay.textContent = `${dimensions} X ${dimensions}`

	let nNodes = Math.pow(dimensions, 2);
	for (i = 0; i < nNodes; i++) {
		let etchNode = document.createElement("div");
		etchNode.classList.add("etchNode");
		sketchBoard.appendChild(etchNode);
	}
}

function turnSketchOn(){
	sketchOn = "On" ? "Off" : "On";
}

function drawSketch(){
	boardNodes.forEach((etch) => { 
		etch.addEventListener("mouseover", (e) => {
			if(sketchOn) {
			e.style.backgroundColor = `${penColor}`;
	}})
	});
}