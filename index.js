window.addEventListener('load', function () {
    var load_screen = document.getElementById('loadingParent');
    document.body.removeChild(load_screen);
});

var content = document.getElementById('content');
var front = document.getElementById('front');
var back = document.getElementById('back');

var regWidth = content.offsetWidth - 20;
var regHeight = content.offsetHeight - 20;

function flip(elem) {
    if (content.style.transform == 'rotateY(180deg)') {
        content.style.transform = 'rotateY(0deg)';
        window.setTimeout(showFront, 0250);
    } else {
        content.style.transform = 'rotateY(180deg)';
        window.setTimeout(showBack, 0250);
        window.setTimeout(function () { document.getElementById(elem).style.display = 'block' }, 0250);
    }
}

/*function p90() {
    flip();
    window.setTimeout(function () { document.getElementById('P90').style.display = 'block' }, 0250);
}*/

function showBack() {
    back.style.display = "flex";
    back.style.width = regWidth.toString() + "px";
    back.style.height = regHeight.toString() + "px";

    front.style.display = 'none';
}

function showFront() {
    front.style.display = "block";

    back.style.display = "none";
    for (i = 0; i < document.getElementsByClassName('backContent').length; i++) {
        document.getElementsByClassName('backContent')[i].style.display = 'none'
    }
}
