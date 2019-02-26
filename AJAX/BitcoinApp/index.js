var priceLabel = document.querySelector('#price'),
	btn = document.querySelector('#btn');

function updatePrice() {
	var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
	var XHR = new XMLHttpRequest();

	XHR.onreadystatechange = function() {
		console.log('Ready state is...' + XHR.readyState);
		if (XHR.readyState == 4 && XHR.status == 200) {
			var price = JSON.parse(XHR.responseText).bpi.USD.rate;
			priceLabel.innerHTML = price;
		}
	};

	XHR.open('GET', url);
	XHR.send();
}

btn.addEventListener('click', updatePrice);

updatePrice();
