function displayCitations() {
	// Object detection
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) {return false;}
	// Get all the blockquotes
	var quotes = document.getElementsByTagName("blockquote");
	// Loop through all the blockquote elements in the document
	for(var i=0; i<quotes.length; i++) {
		// If there is no cite attribute, continue the loop
		if(!quotes[i].getAttribute("cite")) {continue;}
		// Get the value of the cite attribute from the blockquote
		var cite_url = quotes[i].getAttribute("cite");
		// Get all the element nodes in the blockquote
		var quoteChildren = quotes[i].getElementsByTagName("*");
		// If there are no element nodes, continue the loop
		if(quoteChildren.length<1) {continue;}
		// Get the last element node in the blockquote
		var elem = quoteChildren[quoteChildren.length-1];
		// Create the markup
		var cite_link = document.createElement("a"),
			cite_link_text = document.createTextNode("source");
		cite_link.appendChild(cite_link_text);
		cite_link.setAttribute("href", cite_url);
		var superscript = document.createElement("sup");
		superscript.appendChild(cite_link);
		// Add the markup to the last element node in the blockquote
		elem.appendChild(superscript);
	}		
}

window.onload = function() {
	displayCitations();
}