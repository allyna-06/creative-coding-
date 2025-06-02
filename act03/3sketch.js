let angleOffset = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(15, 15, 30);
  let centerX = width / 2;
  let centerY = height / 2 + sin(frameCount * 2) * 5; // Bobbing animation

  // Tentacles
  for (let i = -1; i <= 1; i++) {
    let x = centerX + i * 30;
    for (let j = 0; j < 10; j++) {
      let y = centerY + 70 + j * 6 + sin(frameCount * 5 + j * 10 + i * 20) * 4;
      fill(80, 200, 150);
      ellipse(x, y, 10, 10);
    }
  }

  // Body
  fill(80, 200, 150);
  ellipse(centerX, centerY, 100, 120); // Torso

  // Head
  fill(100, 240, 180);
  ellipse(centerX, centerY - 80, 80, 80); // Head

  // Eyes (3)
  for (let i = -1; i <= 1; i++) {
    drawEye(centerX + i * 20, centerY - 85);
  }

  // Mouth
  fill(0);
  arc(centerX, centerY - 50, 30, 20, 0, 180);
}

function drawEye(x, y) {
  // Eye white
  fill(255);
  ellipse(x, y, 18, 18);

  // Pupil follows mouse
  let dx = constrain(mouseX - x, -4, 4);
  let dy = constrain(mouseY - y, -4, 4);
  fill(0);
  ellipse(x + dx, y + dy, 7, 7);
}

