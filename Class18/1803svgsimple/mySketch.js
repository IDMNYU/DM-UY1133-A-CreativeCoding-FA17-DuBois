

function setup() {
    createCanvas(400, 400, SVG); // Create SVG Canvas
    strokeWeight(2);
    stroke(0);

}

function draw() {

    for(var i = 0;i<240;i++)
    {
           ellipse(random(width), random(height), random(5), random(5));
    }

    if (frameCount > 10) {
        noLoop();
        save();
    }
}
