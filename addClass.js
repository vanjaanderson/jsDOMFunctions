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