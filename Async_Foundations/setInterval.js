function countDown(seconds) {
	var intervalID = setInterval(function() {
		if (seconds == 0) {
			console.log("Time's up!\nRing Ring Ring!");
			clearInterval(intervalID);
		} else {
			console.log('Timer: ' + seconds);
		}
		seconds--;
	}, 1000);
}

countDown(5);
