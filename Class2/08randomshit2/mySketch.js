// THESE ARE GLOBAL VARIABLES:
var x = 0; // where is the x
var y = 0; // where is the y

var HOWMANYDOWEWANT = 5000; // I'M PUTTING THIS IN CAPITALS BECAUSE I WANT TO DRAW ATTENTION TO IT

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
}

function draw() {
  background(255);
  
  for(var i = 0;i<HOWMANYDOWEWANT;i++)
  {
    var x1 = random(width);
    var x2 = random(width);
    var x3 = random(width);
    //x = min(x1, x2, x3); // piled onto the left
    //x = max(x1, x2, x3); // piled onto the right
    x = (x1 + x2 + x3) / 3; // gaussian (in the middle - dungeons & dragons)
    y = random(height);
    fill(random(255), 40);
    rect(x, y, 10, 10);
    
  }
  
}