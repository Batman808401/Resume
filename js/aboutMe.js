var bodyPos = document.body.getBoundingClientRect();

function scroll() {
	console.log((Math.floor(document.body.getBoundingClientRect().top)*-1) / ((document.documentElement.offsetHeight /2) + 1));

	container.style.backgroundPositionY = Math.floor(document.body.getBoundingClientRect().top / 10) + "px"

	if ((Math.floor(document.body.getBoundingClientRect().top)*-1) / ((document.documentElement.offsetHeight /2) + 1) > 0.9) {
		document.getElementById('container2').style.opacity = '1';
		document.getElementById('container2').style.userSelect = 'pointer';
	} else {
		document.getElementById('container2').style.opacity = '0';
		document.getElementById('container2').style.userSelect = 'none';
	}
} 

function hide() {
	if (document.getElementById('aboutMeContent').style.opacity != '0') {
		document.getElementById('aboutMeContent').style.opacity = '0';
	} else {
		document.getElementById('aboutMeContent').style.opacity = '1';
	}
}
