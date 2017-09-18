var dSunToEarth = 100;
var dEarthToMoon = 30;
var angleEarth = 0;
var angleMoon = 0;
var speedEarth = 0.01;
var speedMoon = -0.03;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

}

function draw() {
  background(100);
  
  // drawing stack:
  
  translate(width/2, height/2);
  ellipse(0, 0, 100, 100); // THE SUN
  
  var xoffset = dSunToEarth * cos(angleEarth);
  var yoffset = dSunToEarth * sin(angleEarth);  
  translate(xoffset, yoffset);
  ellipse(0, 0, 20, 20); // THE EARTH  
  angleEarth = angleEarth + speedEarth;

  var xoffset = dEarthToMoon * cos(angleMoon);
  var yoffset = dEarthToMoon * sin(angleMoon);  
  translate(xoffset, yoffset);
  ellipse(0, 0, 10, 10); // THE MOON  
  angleMoon = angleMoon + speedMoon;


}