function getHTTPObject() {
	if(typeof XMLHttpRequest == "undefined") {
		XMLHttpRequest = function() {
			try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
				catch (e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
				catch (e) {}
			try { return new ActiveXObject("Msxml2.XMLHTTP"); }
				catch (e) {}
			return false;
		}
	}
	return new XMLHttpRequest();
}

function getNewContent() {
	var request = getHTTPObject();
	if(request) {
		request.open( "GET", "response.txt", true );
		request.onreadystatechange = function() {
			if(request.readyState == 4) {
				// Log the response received
				console.log("Response received");
				// Create a paragraph to receive the response text
				var para = document.createElement("h1");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	} else {
		alert("Sorry, your browser doesn't support XMLHttpRequest");
	}
	/* Log when function is done, usually logs before response receives; 
	because script does not wait for the send to complete. */
	console.log("Function done");
}

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

addLoadEvent(getNewContent);