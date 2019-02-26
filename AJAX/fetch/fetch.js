var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// Get requests
fetch(url)
	.then(function(res) {
		console.log(res);
		return res.json();
	})
	.then(function(json) {
		console.log(json);
	});

// Other requests
fetch(url, {
	method: 'POST',
	body: 'This is the body of the request'
})
	.then(function(res) {
		console.log(res);
		return res.json();
	})
	.then(function(json) {
		console.log(json);
	});
