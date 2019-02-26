var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
	console.log('Ready state is...' + XHR.readyState);
	if (XHR.readyState == 4) {
		if (XHR.status == 200) {
			console.log(XHR.responseText);
		} else {
			console.log('problem');
		}
	}
};

XHR.open('GET', 'https://api.github.com/zen');
XHR.send();
