var t = 50;
var a = 0;

var NUMWHEELS = 8;
var DIAMETER = 20;
var NUMREPEATS = 100;

function setup() {
    createCanvas(400, 400, SVG); // Create SVG Canvas
    noLoop(); // turn off looping

    //clear();

    translate(width/2, height/2); // redefining the origin (where is 0, 0)

    for(var j = 0;j<NUMREPEATS;j++)
    {
        var x = t*cos(a);
        var y = t*sin(a);

        for(var i =0;i<NUMWHEELS;i++)
        {
            rotate(TWO_PI/NUMWHEELS);
            ellipse(x+DIAMETER*2, y+DIAMETER*2, DIAMETER, DIAMETER);
        }

        a+=0.3;      
    }
    

    save('foo.svg');

}

function draw() {
}