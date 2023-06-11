const defaultColor = "rgb(116, 1, 19)";

let sketchBoard = document.getElementById("etchSketch");
dimensionSlider = document.getElementById("gridDims");
colorWheel = document.getElementById("colorPicker");
colorRadio = document.getElementsByName("color");
shakeBtn = document.getElementById("shakeBtn");
colorDisplay = document.getElementById("penColor");
dimensionDisplay = document.getElementById("boardDims");
etchBoard = document.getElementById('etchBoard');
boardNodes = [];

let penColor = '#faf7f8';
let currentDimension;
let sketchOn = "Off";

window.addEventListener("load", makeSketchNodes(16))

dimensionSlider.addEventListener("change", (e) => {
	currentDimension = e.target.value;
	makeSketchNodes(currentDimension)
	
	boardNodes = Array.from(document.getElementsByClassName("etchNode"));

	clearBoard();
});

sketchBoard.addEventListener("mouseover", (e) => {
	if (sketchOn == "On"){
		e.target.style.backgroundColor = `${penColor}`;
	} else {
		return;
	}
})

sketchBoard.addEventListener("click", turnSketchOn);

colorWheel.addEventListener("change", (e) => {
	penColor = e.target.value
});

shakeBtn.addEventListener("click", (e) => {
	etchBoard.style.animationName = "shakeBoard"
	etchBoard.addEventListener("animationend", (e) => {
		etchBoard.style.animationName = null;
		clearBoard();
	})
})

function makeSketchNodes(dimensions) {
	sketchBoard.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
	sketchBoard.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
	dimensionDisplay.textContent = `${dimensions} x ${dimensions}`

	let nNodes = Math.pow(dimensions, 2);
	for (i = 0; i < nNodes; i++) {
		let etchNode = document.createElement("div");
		etchNode.classList.add("etchNode");
		sketchBoard.appendChild(etchNode);
	}
}

function turnSketchOn(){
	if (sketchOn == "Off"){ 
		sketchOn = "On";
	} else {
		sketchOn = "Off";
	}
}

function clearBoard(){
	boardNodes.forEach(etch => etch.style.backgroundColor = "rgb(0, 0, 0)");
}
