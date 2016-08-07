function displayAbbreviations() {
	//  Get the existing elements in DOM
	var body = document.getElementsByTagName("body")[0],
		abbreviations = document.getElementsByTagName("abbr"),
		script_tag = document.getElementsByTagName("script")[0];
	// Create new heading
	var heading = document.createElement("h2"),
		heading_text = document.createTextNode("Abbreviations");
	heading.appendChild(heading_text);
	// Break if there is no abbreviations
	if(abbreviations.length < 1) {
		return false;
	}
	// Create definition list elements
	var deflist = document.createElement("dl");
	// Create an array to store the abbreviations
	var defs = []; // var defs = new Array();
	// Loop the node list of abbreviations
	for(var i=0; i<abbreviations.length; i++) {
		// if(abbreviations.childNodes.length < 1) {continue;} // Check for IE < 7
		var value = abbreviations[i].getAttribute("title"); // abbr-tags' title attribute
		var key = abbreviations[i].lastChild.nodeValue; // abbr-tags' last childs value
		// Store as key/value-pair in array
		defs[key] = value;
	}
	// Loop through keys in defs array
	for(key in defs) {
		// Create a definition title and text node
		var deflist_title = document.createElement("dt"),
			deflist_title_text = document.createTextNode(key);
		// Append text node to definition title
		deflist_title.appendChild(deflist_title_text);
		// Create a definition description and text node
		var deflist_desc = document.createElement("dd"),
			deflist_desc_text = document.createTextNode(defs[key]);
		// Append text node to definition description
		deflist_desc.appendChild(deflist_desc_text);
		// Append title and description to the list element – IMPORTANT, otherwise the text nodes are not stored!
		deflist.appendChild(deflist_title);
		deflist.appendChild(deflist_desc);
	}
	// if(deflist.childNodes.length < 1) {return false;} // Check for IE < 7

	// Append elements to body
	body.appendChild(heading);
	body.appendChild(deflist);
	// Move elements in the right order (before first script_tag)
	body.insertBefore(heading, script_tag);
	body.insertBefore(deflist, script_tag);
}

window.onload = function() {
	displayAbbreviations();
}