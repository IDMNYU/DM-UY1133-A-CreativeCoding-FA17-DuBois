// THESE ARE GLOBAL VARIABLES:
var x = 0; // where is the x
var y = 0; // where is the y

var thepicture; // this is a variable to handle an image

var HOWMANYDOWEWANT = 50; // I'M PUTTING THIS IN CAPITALS BECAUSE I WANT TO DRAW ATTENTION TO IT

// this runs BEFORE the setup AND it's synchronous / blocking
function preload() {
  thepicture = loadImage('mitt.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
  
}

function draw() {
//  background(255);
  
  for(var i = 0;i<HOWMANYDOWEWANT;i++)
  {
    var x1 = random(-35, 35);
    var x2 = random(-35, 35);
    var x3 = random(-35, 35);
    x = (x1 + x2 + x3) / 3; // gaussian (in the middle - dungeons & dragons)
    var y1 = random(-35, 35);
    var y2 = random(-35, 35);
    var y3 = random(-35, 35);
    y = (y1 + y2 + y3) / 3; // gaussian (in the middle - dungeons & dragons)

    image(thepicture, mouseX+x, mouseY+y, 15, 15); // drawing
    
  }
  
}

function keyTyped()
{
  background(255);
}