var p1 = new Promise(function(resolve, reject) {
	resolve([ 1, 2, 3, 4 ]);
});

p1.then(function(arr) {
	console.log('Promise p1 resolved with data:', arr);
});

var p1 = new Promise(function(resolve, reject) {
	reject('ERROR');
});

p1
	.then(function(data) {
		console.log('Promise p1 resolved with data:', data);
	})
	.catch(function(data) {
		console.log('Promise p1 was rejected with data:', data);
	});

var p1 = new Promise(function(resolve, reject) {
	var num = Math.random();
	if (num < 0.5) {
		resolve(num);
	} else {
		reject(num);
	}
});

p1
	.then(function(result) {
		console.log('Success:', result);
	})
	.catch(function(error) {
		console.log('Error:', error);
	});
