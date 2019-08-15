var rectX = 200;
var rectY = 200;
var rectWidth = 150;
var rectHeight = 120;

var ellipseX = 0;
var ellipseY = 0;
var ellipseSize = 25;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	ellipseX = mouseX;
	ellipseY = mouseY;

	background(255, 255, 255);
	noFill();
	stroke(0, 0, 0);
	rect(rectX, -10, rectWidth, 420);
	rect(-10, rectY, 420, rectHeight);
	stroke(255, 0, 0);

	if (
		ellipseX + ellipseSize / 2 > rectX &&
		ellipseX - ellipseSize / 2 < rectX + rectWidth &&
		ellipseY + ellipseSize / 2 > rectY &&
		ellipseY - ellipseSize / 2 < rectY + rectHeight
	) {
		fill(255, 0, 0);
	}
	rect(rectX, rectY, rectWidth, rectHeight);

	noFill();
	stroke(0, 255, 0);
	ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);
}
