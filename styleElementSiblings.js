function styleElementSiblings(tag, theClass) {
	if(!document.getElementsByTagName) { return false; }
	var elems = document.getElementsByTagName(tag);
	var elem;
	for (var i=0; i<elems.length; i++) {
		elem = getNextElement(elems[i].nextSibling);
		addClass(elem, theClass);
	}
}

window.onload = function() {
	styleElementSiblings();
}