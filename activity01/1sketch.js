function setup() {
  createCanvas(800, 400);
  background(220);

  // Draw ground
  fill(100);
  rect(0, 300, width, 100);

  // Car position
  let carX = 350;
  let carY = 250;

  // Draw car body
  fill(255, 75, 5);
  rect(carX, carY, 100, 40);       // base
  rect(carX + 20, carY - 30, 60, 30); // top

  // Draw wheels
  fill(0);
  ellipse(carX + 20, carY + 40, 20, 20); // front wheel
  ellipse(carX + 80, carY + 40, 20, 20); // rear wheel
}

