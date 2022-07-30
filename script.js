//playerSpeed= player speed
var playerSpeed = 15;

function elements(input) {
    return Number(input.replace("px", ""));
}

var r = document.getElementById('right');
var l = document.getElementById('left');
var b = document.getElementById('ball');

var rscore = document.getElementById('scoreleft');
var lscore = document.getElementById('scoreright');
var ongoal = document.getElementById('goal');

var w = window.innerWidth;
var h = window.innerHeight;

var map = []; // Or you could call it key
onkeydown = onkeyup = function (e) {
    map[e.keyCode] = e.type == 'keydown';

}



function keydown() {
    //if key was up arrow
    if (map[40]) {
        if (elements(r.style.top) + playerSpeed > h - 150)
            r.style.top = h - 150 + "px";
        else
            r.style.top = elements(r.style.top) + playerSpeed + "px";
    }



    //if key was down arrow
    else if (map[38]) {
        if (elements(r.style.top) - playerSpeed < 0)
            r.style.top = 0 + "px";
        else
            r.style.top = elements(r.style.top) - playerSpeed + "px";
    }


    //if key was s
    if (map[83]) {
        if (elements(l.style.top) + playerSpeed > h - 150)
            l.style.top = h - 150 + "px";
        else
            l.style.top = elements(l.style.top) + playerSpeed + "px";
    }

    //if key was w
    else if (map[87]) {
        if (elements(l.style.top) - playerSpeed < 0)
            l.style.top = 0 + "px";
        else
            l.style.top = elements(l.style.top) - playerSpeed + "px";
    }

    //40 down, 38 up
    //w 87,s 83
}


var speedx = 3,
    speedy = 1;
var balltime = 1;
b.style.left = w / 2 + "px";

function ball() {
    b.style.left = elements(b.style.left) + speedx + "px";
    b.style.top = elements(b.style.top) + speedy + "px";
}




function moveball() {
    ball();

    //remove overflow y
    if (h < elements(b.style.top) + 20 || elements(b.style.top) < 0) {
        speedy *= -1;
    }

    //overflow-x right
    if (elements(b.style.left) >= w - 50) {
        if (elements(r.style.top) <= elements(b.style.top) + 20 && elements(r.style.top) + 200 >= elements(b.style.top)) {
            speedx *= -1;
        } else if (elements(b.style.left) >= w - 20)
            goal('left');
    }




    //remove overflow x in left ir get the goal in left
    if (elements(b.style.left) <= 30) {
        if (elements(l.style.top) <= elements(b.style.top) + 20 && elements(l.style.top) + 200 >= elements(b.style.top)) {
            speedx *= -1;
        } else if (elements(b.style.left) <= 0)
            goal('right');
    }



    setTimeout(function () {
        moveball()
    }, balltime);
}




setInterval(function () {
    keydown();
}, 10);
moveball();

function goal(pos) {

    ongoal.style.color = "white";

    setTimeout(function () {
        ongoal.style.color = "black"
    }, 1000);

    if (pos == "left")
        rscore.innerHTML = Number(rscore.innerHTML) + 1;
    else
        lscore.innerHTML = Number(lscore.innerHTML) + 1;


    speedx *= -1;
    b.style.left = w / 2 + "px";


}
