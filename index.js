var Jimp = require('jimp');

// var ascii = "`^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
// ascii = ascii.split('').reverse().join('');

var ascii = ' .,:;i1tfLCG08';
ascii = ascii.split('').reverse().join('');

Jimp.read('cat.jpg', function(err, image) {

  if (err) console.error(err);

  // Resize image to fit within 300x300 pixels
  image.resize(150, Jimp.AUTO);

  let width = image.bitmap.width;
  let height = image.bitmap.height;

  // cycle through each pixel in image, one row at a time
  for (var y = 0; y < height; y++) {
    let row = '';
    for (var x = 0; x < width; x++) {

      let pixel = Jimp.intToRGBA(image.getPixelColor(x, y));

      // calculate lightness of each pixel
      let lightness = calculateLightness(pixel.r, pixel.g, pixel.b);
      // add each pixel in the form of an ASCII character to the current row
      row += findAscii(lightness, ascii);
    }

    // once app has cycled through all pixels in one row, print the row to the console and move on to the next
    console.log(row);
  }

});

// Function for calculating the lightness of a color based on R, G, B values.
const calculateLightness = (r, g, b) => {
  r = r/255;
  g = g/255;
  b = b/255;
  return 1/2*(Math.max(r, g, b) + Math.min(r, g, b));
}

// Function for returning ASCII character based on lightness of a pixel. Takes a string of characters sorted from darkest to lightest.
const findAscii = (lightness, ascii) => {
  return ascii[Math.floor(lightness * ascii.length)];
}