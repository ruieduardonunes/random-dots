var plays = 0;
var words = true;

function getWord() {
	var array = [];
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var text = xmlhttp.responseText;
			// Now convert it into array using regex
			array = text.split(/\n|\r\s|\s|[, ]+/g);
			var word = array[Math.floor(Math.random() * array.length)];

			document.getElementById('word').textContent = word;
			plays = plays + 1;

			var interjections = [
				'uh! this is a nice one',
				'ahh... Inspiring!',
				'Ooh-la-la',
				'Whoa',
				'Oh dear!',
				'Awww',
				'bingo!',
				'gosh',
				'Touché',
				'one more!',
				'nailed it!',
				'thats awkward',
				'tasty!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!',
				'one more!'
			];

			var newInterjection = Math.random() >= 0.5;
			var rand =
				interjections[Math.floor(Math.random() * interjections.length)];

			if (plays == 0) {
				// do nothing
			} else if (plays == 1) {
				document.getElementById('play').textContent = 'click for a new word';
			} else if (newInterjection) {
				document.getElementById('play').textContent = rand;
			} else {
				document.getElementById('play').textContent = 'one more!';
			}
		}
	};
	xmlhttp.open('GET', 'data/words.txt', true);
	xmlhttp.send();
}

function playToggle() {
	var wordWrapper = document.getElementById('word-wrapper');
	var imageWrapper = document.getElementById('image-wrapper');

	var toggleButton = document.getElementById('toggleButton');
	var playButton = document.getElementById('play');

	if (words) {
		wordWrapper.style.display = 'none';
		imageWrapper.style.display = 'flex';
		toggleButton.textContent = 'play with words';
		playButton.innerHTML = 'click for a new image';
		playButton.onclick = reloadImage;
		reloadImage();
		plays = 0;
		words = false;
	} else {
		wordWrapper.style.display = 'flex';
		imageWrapper.style.display = 'none';
		toggleButton.textContent = 'play with images';
		playButton.innerHTML = 'click for a new word';
		playButton.onclick = getWord;
		plays = 0;
		words = true;
	}
}

window.onload = getWord();

function reloadImage() {
	var image = document.getElementById('hero-image');
	var playButton = document.getElementById('play');

	image.src = 'https://source.unsplash.com/1600x900?sig=' + Math.random();

	function loaded() {
		image.style.opacity = 1;
	}
	isIt();

	function isIt() {
		if (image.complete) {
			loaded();
		} else {
			image.style.opacity = 0.48;
			image.onload = isIt;
		}
	}
}

function scrollLearn() {
	document.querySelector('#learn-wrapper').scrollIntoView({
		behavior: 'smooth'
	});
}
