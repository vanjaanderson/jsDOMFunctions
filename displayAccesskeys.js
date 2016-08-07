function displayAccesskeys() {
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) {return false;}
	// Get all the links in the document
	var links = document.getElementsByTagName("a");
	// Create an array to store the access keys
	var accesskeys = [];
	// Loop through the links
	for(var i=0; i<links.length; i++) {
		var current_link = links[i];
		// If there is no link, continue the loop
		if(!current_link.getAttribute("accesskey")) {continue;}
		// Get the value of the accesskey
		var key = current_link.getAttribute("accesskey");
		// Get the value of the link text
		var link_text = current_link.lastChild.nodeValue;
		// Add to the array
		accesskeys[key] = link_text;
	}
	// Create the list
	var list = document.createElement("ul");
	// Loop through the accesskeys
	for(key in accesskeys) {
		var text = accesskeys[key];
		// Create the string to put in the list item
		var str = key + ": " + text;
		// Create the list item
		var item = document.createElement("li"),
			item_text = document.createTextNode(str);
		item.appendChild(item_text);
		// Add the list item to the list
		list.appendChild(item);
	}
	// Create a headline
	var header = document.createElement("h3"),
		header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	// Add the headline to the body
	document.body.appendChild(header);
	// Add the list to the body
	document.body.appendChild(list);
}

window.onload = function() {
	displayAccesskeys();
}