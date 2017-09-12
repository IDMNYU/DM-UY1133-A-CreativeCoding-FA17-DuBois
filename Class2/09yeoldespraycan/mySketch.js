// THESE ARE GLOBAL VARIABLES:
var x = 0; // where is the x
var y = 0; // where is the y

var HOWMANYDOWEWANT = 50; // I'M PUTTING THIS IN CAPITALS BECAUSE I WANT TO DRAW ATTENTION TO IT

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
    fill(random(255), 40);
    ellipse(mouseX+x, mouseY+y, 5, 5);
    
  }
  
}

function keyTyped()
{
  background(255);
}



