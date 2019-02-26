var nameLabel = document.querySelector('#fullname'),
	usernameLabel = document.querySelector('#username'),
	emailLabel = document.querySelector('#email'),
	cityLabel = document.querySelector('#city'),
	image = document.querySelector('#avatar'),
	btn = document.querySelector('#btn'),
	footer = document.querySelector('#footer');

var url = 'https://randomuser.me/api/';

footer.addEventListener('click', function() {
	fetch(url).then(handleErrors).then(parseJSON).then(updateProfile).catch(printError);
});

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

function updateProfile(data) {
	console.log(data);
	data = data.results[0];
	console.log(data);
	nameLabel.innerHTML = toTitleCase(`${data.name.first} ${data.name.last}`);
	usernameLabel.innerHTML = data.login.username;
	emailLabel.innerHTML = data.email;
	cityLabel.innerHTML = toTitleCase(data.location.city);
	image.src = data.picture.large;
}

function printError(err) {
	console.log('There is a problem!');
	console.log(err);
}

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
