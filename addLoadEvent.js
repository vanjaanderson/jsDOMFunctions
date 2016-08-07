// Function to queue functions to execute on page load 
// http://simon.incutio.com
// Queue functions with addLoadEvent(yourFunction1); addLoadEvent(yourFunction2); etc.
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload !== 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}