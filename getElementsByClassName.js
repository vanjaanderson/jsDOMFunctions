// Function for getting elements by class name 
// See also: https://robertnyman.com/2008/05/27/the-ultimate-getelementsbyclassname-anno-2008/
function getElementsByClassName(node, classname) {
	// If browser recognizes method
	if (node.getElementsByClassName) {
		return node.getElementsByClassName(classname);
	} else {
		var results = new Array();
		// Get all tags and loop through them to find an element with the class name
		var elements = node.getElementsByTagName("*");
		for (var i=0; 1<elements.length; i++) {
			if (elements[i].classname.indexOf(classname) != -1) {
				results[results.length] = elements[i];
			}
		}
		return results;
	}
}