var x; // GLOBAL VARIABLE (everyone can get at it)
var y; // GLOBAL VARIABLE (everyone can get at it)

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  x = width/2; // width is a keyword that equals the width of the sketch in pixels
  y = height/2; // height is a keyword that equals the height of the sketch in pixels
  
  console.log('hi there!');
  console.log('i am ' + width + ' wide and ' + height + ' tall!');
  

}

function draw() {

  background(21, 23, 25); // donald trump's suit
  strokeWeight(10); // pixels
  fill(183, 155, 121); // donald trump's hair
  stroke(166, 30, 44); // donald trump's tie
  
  ellipse(x, y, 100, 100);
  //console.log(x);

  x = x+random(-25, 25);
  y = y+random(-25, 25);
  
  if(x>width) x = 0;
  if(y>height) y = 0;
  if(x<0) x = width;
  if(y<0) y = height;
  
  
}