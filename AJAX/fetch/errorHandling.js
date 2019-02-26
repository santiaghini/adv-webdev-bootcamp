var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// Get requests
fetch(url)
	.then(handleErrors)
	.then(function(res) {
		console.log('COOL');
		console.log(res);
	})
	.catch(function(err) {
		console.log('There is a problem!');
		console.log(err);
	});

function handleErrors(res) {
	if (!res.ok) {
		// there is an error
		throw Error(res.status);
	}
	return res;
}
