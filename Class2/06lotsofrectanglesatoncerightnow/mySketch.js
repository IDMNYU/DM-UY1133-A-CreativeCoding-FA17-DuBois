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

// for loops are a three-part statement:
// what are we starting with
// then a ';'
// what are we waiting for to get out of there
// then a ';'
// what are we doing every time
function draw() {
  background(255);
  strokeWeight(mouseX/20);
  b = mouseY;
  
  for(x = 0;x<width;x=x+50)
  {
    for(y = 0;y<height;y=y+50)
    {
      r = x; // the red is the x
      g = y; // the green is the y
      fill(r, g, 0);
      stroke(0, 0, b);
      rectMode(CORNER);
      rect(x, y, 40, 40);
    }
  } 
}