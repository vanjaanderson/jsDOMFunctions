function getNextElement(node) {
	if(node.nodeType == 1) { // Node types: 1 is element node, 2 is attribute node and 3 is text node
		return node;
	}
	if(node.nextSibling) {
		return getNextElement(node.nextSibling);
	}
	return null;
}