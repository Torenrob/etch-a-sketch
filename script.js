let etchContainer = document.getElementById("etchContainer");
color = document.getElementById("colorPick");

function makeEtchGrid(rows, columns) {
	let nNodes = +(rows * columns);
	for (i = 0; i < nNodes; ++i) {
		let etchNode = document.createElement("div");
		etchContainer.append(etchNode);
		etchNode.className = "etchNode";
	}
}

color.addEventListener("click");
