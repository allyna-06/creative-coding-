let img;
let levels = 4; // Number of posterize levels per channel (2–255)

function preload() {
  // Load any image
  img = loadImage('pj.5s.jpg');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    // For each channel: R, G, B
    for (let j = 0; j < 3; j++) {
      pixels[i + j] = posterizeChannel(pixels[i + j], levels);
    }
  }
  updatePixels();
}

function posterizeChannel(value, levels) {
  return int(value / 255 * (levels - 1)) * int(255 / (levels - 1));
}
