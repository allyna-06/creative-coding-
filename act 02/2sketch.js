let x = 0;
let step = 0;
let clouds = [];

function setup() {
  createCanvas(800, 400);
  frameRate(30);

  // Initialize cloud positions
  for (let i = 0; i < 5; i++) {
    clouds.push({ x: random(width), y: random(50, 150), speed: random(0.5, 1.5) });
  }
}

function draw() {
  background(135, 206, 235); // Sky blue

  // Draw and animate clouds
  for (let cloud of clouds) {
    drawCloud(cloud.x, cloud.y);
    cloud.x -= cloud.speed;
    if (cloud.x < -60) {
      cloud.x = width + 60;
      cloud.y = random(50, 150);
      cloud.speed = random(0.5, 1.5);
    }
  }

  // Ground
  fill(34, 139, 34);
  rect(0, 300, width, 100);

  // Sun
  fill(255, 223, 0);
  ellipse(700, 80, 80, 80);

  // Walking motion simulation
  let legAngle = sin(radians(step)) * 15;
  let armAngle = sin(radians(step)) * 15;

  push();
  translate(x, 250); // Move character position

  // Head
  fill(255, 224, 189);
  ellipse(0, -60, 40, 40);

  // Body
  fill(10, 75, 265);
  rect(-15, -40, 30, 50);

  // Arms
  stroke(0);
  strokeWeight(4);
  line(-15, -35, -30 + armAngle, -10); // Left arm
  line(15, -35, 30 - armAngle, -10);   // Right arm

  // Legs
  line(-10, 10, -10 + legAngle, 40);   // Left leg
  line(10, 10, 10 - legAngle, 40);     // Right leg

  pop();

  // Move the character
  x += 2;
  if (x > width + 20) {
    x = -20;
  }

  step += 10;
}

// Cloud drawing function
function drawCloud(x, y) {
  noStroke();
  fill(255);
  ellipse(x, y, 50, 40);
  ellipse(x + 20, y - 10, 50, 40);
  ellipse(x + 40, y, 50, 40);
}

