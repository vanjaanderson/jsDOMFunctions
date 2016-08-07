function moveElement(elementID, finalX, finalY, interval) {
	if(!document.getElementById) { return false; }
	if(!document.getElementById(elementID)) { return false; }
	var elem = document.getElementById(elementID);
	// Check if there is a movement
	if(elem.movement) {
		// Resets the property movement
		clearTimeout(elem.movement);
	}
	// Check if left and top position values are set, otherwise set default to 0,0
	if(!elem.style.left) {
		elem.style.left = "0px";
	}
	if(!elem.style.top) {
		elem.style.top = "0px";
	}
	// 1) Get the element's current position
	var xpos = parseInt(elem.style.left), // 50px
		ypos = parseInt(elem.style.top); // 100px
	// 2) If the element has reached its final destination, leave the function
	if(xpos === finalX && ypos === finalY) {
		return true;
	}
	// 3) Otherwise, move the element closer to its destination
	if(xpos < finalX) {
		dist = Math.ceil((finalX - xpos)/10);
		xpos += dist;
	}
	if(xpos > finalX) {
		dist = Math.ceil((xpos - finalX)/10);
		xpos -= dist;
	}
	if(ypos < finalY) {
		dist = Math.ceil((finalY - ypos)/10);
		ypos += dist;
	}
	if(ypos > finalY) {
		dist = Math.ceil((ypos - finalY)/10);
		ypos -= dist;
	}
	// Apply position values to style property
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// 4) Repeat from step 1 after a pause (10 milliseconds)
	var repeat = "moveElement('"+elementID+"', "+finalX+", "+finalY+", "+interval+")";
	// Element that is hovered over is assigned a property named "movement"
	elem.movement = setTimeout(repeat, interval);
}