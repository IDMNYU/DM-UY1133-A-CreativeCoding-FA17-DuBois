var c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

}

function draw() {
  rect(mouseX, mouseY, 20, 20);
	for(var i = 0;i<20;i++)
    {
       ellipse(mouseX-random(-5, 5), mouseY+random(-5,5), 10, 10);
 
    }
}

function keyTyped() {
 	//saveCanvas(); // save the whole thing as a picture 
 	saveCanvas('thingie'+c+'.png'); // save the whole thing as a picture 
    c++;
}