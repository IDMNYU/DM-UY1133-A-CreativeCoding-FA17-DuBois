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
    x = random(width);
    y = random(height);
    fill(random(255), 40);
    rect(x, y, 10, 10);
    
  }
  
}







