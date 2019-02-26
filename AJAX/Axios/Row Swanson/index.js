var xhrBtn = document.querySelector('#xhr'),
	fetchBtn = document.querySelector('#fetch'),
	jQueryBtn = document.querySelector('#jquery'),
	axiosBtn = document.querySelector('#axios'),
	p = document.querySelector('#quote');

var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

xhrBtn.addEventListener('click', function() {
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function() {
		if (XHR.readyState == 4) {
			if (XHR.status == 200) {
				changeQuote(JSON.parse(XHR.responseText));
			} else {
				console.log('problem');
			}
		}
	};

	XHR.open('GET', url);
	XHR.send();
});

fetchBtn.addEventListener('click', function() {
	fetch(url).then(handleErrors).then(parseJSON).then(changeQuote).catch(printErr);
});

jQueryBtn.addEventListener('click', function() {
	$.getJSON(url).done(changeQuote).fail(printErr);
});

axiosBtn.addEventListener('click', function() {
	axios
		.get(url)
		.then(function(res) {
			console.log(res);
			changeQuote(res.data);
		})
		.catch(handleErrors);
});

function changeQuote(data) {
	p.innerHTML = data[0];
}

function handleErrors(res) {
	if (!res.ok) {
		// there is an error
		throw Error(res.status);
	}
	return res;
}

function parseJSON(res) {
	return res.json(res);
}

function printErr(err) {
	console.log(err);
}
