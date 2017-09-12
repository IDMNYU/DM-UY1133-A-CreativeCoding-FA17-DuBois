// THESE ARE GLOBAL VARIABLES:
var x = 0; // where is the x
var y = 0; // where is the y
var r = 0; // what is the red
var g = 0; // what is the green
var b = 0; // what is the blue

// 'if' is a true/false test... if it's true, it'll do the stuff in the braces, otherwise not

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
}

// painter's algorithm
function draw() {
  
  fill(r, g, b); // what's the background color???
  
  rectMode(CORNER);
  rect(x, y, 40, 40); // square - this is the only actual drawing command
  
  // move to the right and up the red
  x = x + 50;
  r = r + 20;
  
  // if we go off the right edge of the screen then do a carriage return like an old typewriter...
  if(x>width) {
   x = 0; // reset the x
   r = 0; // reset the red
   y = y + 50; // up the y (line feed on a typewriter)
   g = g + 20; // up the green
  }
  
  // if we go off the bottom edge of the screen then reset to the upper left and up the blue...
  if(y>height)
  {
    x = 0;
    y = 0;
    r = 0;
    g = 0;
    b = b + 20;
    if(b>255) b = 0; // if the blue maxes out then reset the blue to 0
  }
  
}










