var btn = document.querySelector('#btn');
var img = document.querySelector('#photo');

btn.addEventListener('click', function() {
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function() {
		console.log('Ready state is...' + XHR.readyState);
		if (XHR.readyState == 4 && XHR.status == 200) {
			var url = JSON.parse(XHR.responseText).message;
			img.src = url;
		}
	};

	var url = 'https://dog.ceo/api/breeds/image/random';
	XHR.open('GET', url);
	XHR.send();
});
