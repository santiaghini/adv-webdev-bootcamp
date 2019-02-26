var url = 'https://opentdb.com/api.php?amount=1',
	jsonPlaceholderURL = 'https://jsonplacegolder.typicode.com/comments';

axios
	.get(url)
	.then(function(res) {
		console.log(res);
	})
	.catch(function(err) {
		console.log(err);
	});

axios
	.get(jsonPlaceholderURL, {
		params: {
			postID: 1
		}
	})
	.then(addComments)
	.catch(handleErrors);

function handleErrors(err) {
	if (err.response) {
		console.log(err.response.status);
	} else if (err.request) {
		console.log(err.request);
	} else {
		console.log(err.message);
	}
}
