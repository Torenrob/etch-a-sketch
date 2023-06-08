let etchContainer = document.getElementById("etchContainer");
color = document.getElementById("colorPick");

function gridMaker(columns) {
	let etchSketch = document.getElementById("etchSketch");
	let templateColumns = "1fr";

	for (i = 0; i < columns - 1; i++) {
		templateColumns += " 1fr";
	}

	etchSketch.style.gridTemplateColumns = templateColumns;
}

function makeEtchGrid(rows, columns) {
	let nNodes = +(rows * columns);
	for (i = 0; i < nNodes; ++i) {
		let etchNode = document.createElement("div");
		etchSketch.append(etchNode);
		etchNode.className = "etchNode";
	}

	gridMaker(columns);
}
