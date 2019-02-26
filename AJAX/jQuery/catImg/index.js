$(document).ready(randomCat);

var image = $('img'),
	btn = $('#btn');

btn.click(function() {
	alert('Clicked');
});

var url = 'http://aws.random.cat/meow';

$('button').click(randomCat);

function printErr(err) {
	console.log(err);
}

function randomCat() {
	$.getJSON(url)
		.done(function(data) {
			console.log(data.file);
			$('img').attr({
				src: data.file
			});
		})
		.fail(printErr);
}
