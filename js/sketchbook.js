var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var PI = 3.14;

var update = setInterval(function(){ draw()  }, 1000/fps);

function rectangle(x, y, w, h) {

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.stroke();
}

function circle(x, y, r, sAngle, eAngle) {

    ctx.beginPath();
    ctx.arc(x, y, r, sAngle * PI, eAngle * PI);
    ctx.closePath();
    ctx.stroke();
}

function triangle(x, y) {

    ctx.beginPath();
    ctx.moveTo(x, x);
    ctx.lineTo(x, y);
    ctx.lineTo(y, y);
    ctx.closePath();
    ctx.stroke();
}

function line(x, y, z) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(z, y);
    ctx.closePath();
    ctx.stroke();
}

function ellipse(x, y, radiusX, radiusY, rotation, sAngle, eAngle) {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation * (PI / 180), sAngle * PI, eAngle * PI);
    ctx.closePath();
    ctx.stroke();
}

function pie(x, y, a, b, c) {

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, a, b, c * PI);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
}

function pixel(x, y, color) {

    ctx.fillRect(x, y, 1, 1);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.strokeStyle = 'black';
}

function text(str, x, y) {
    ctx.font = "30px Arial";
    ctx.fillText(str, x, y);
}


function fill(str) {
    ctx.fillStyle = str;
}

c.addEventListener("click", onClick);

function onClick(e)
{
    var mouseX, mouseY;

    if(e.offsetX) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
    }
    else if(e.layerX) {
        mouseX = e.layerX;
        mouseY = e.layerY;
    }

    ctx.fillText(mouseX,10,10);
    alert("mouse Pressed at X:"+mouseX+ " Y:"+mouseY);
}

window.countFPS = (function () {
  var lastLoop = (new Date()).getMilliseconds();
  var count = 1;
  var fps = 0;

  return function () {
    var currentLoop = (new Date()).getMilliseconds();
    if (lastLoop > currentLoop) {
      fps = count;
      count = 1;
    } else {
      count += 1;
    }
    lastLoop = currentLoop;
    return fps;
  };
}());


function showfps() {
    requestAnimationFrame(function () {
      document.getElementById('fps').innerHTML = countFPS();
      showfps();
    });
}






