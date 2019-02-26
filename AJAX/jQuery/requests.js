var url = 'https://baconipsum.com/api/?type=meat-and-filler';

// Normal
$.ajax({
	method: 'GET',
	url: url,
	dataType: 'json'
})
	.done(printData)
	.fail(printErr);

// Shortcuts
$.get(url).done(printData).fail(printErr);

$.getJSON(url).done(printData).fail(printErr);

$.post(url, {
	data: 'this is some data',
	payload: 100
})
	.done(printData)
	.fail(printErr);

// Helper funcs
function printData(data) {
	console.log(data);
}

function printErr(err) {
	console.log(err);
}
