function setup() {
    createCanvas(400, 400, SVG); // Create SVG Canvas
    fill(255, 0, 0);
    noStroke();
}

function draw() {
    clear();
    var a = min(frameCount, 1200);
    var b = min(frameCount, 400);
    ellipse(0, 0, a, b);
    if (frameCount > 1200) {
        noLoop();
    }
}