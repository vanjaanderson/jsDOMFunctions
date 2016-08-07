function stripeTables() {
	if(!document.getElementsByTagName) { return false; }	
	var tables = document.getElementsByTagName("table");
	for (var i=0; i<tables.length; i++) {
		var odd = false; // Counting starts on even rows
		var rows = tables[i].getElementsByTagName("tr");
		for(var j=0; j<rows.length; j++) {
			if(odd===true) {
				addClass(rows[j], "odd");
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}
function addClass(element, value) {
	if(!element.className) {
		element.className = value;
	} else {
		newClassName = element.className; // newClassName is a global variable
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

window.onload = function() {
	stripeTables();
}