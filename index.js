var Jimp = require('jimp');

// var ascii = " `^\",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$";
var ascii = " .:-=+*#%@";
ascii = ascii.split('').reverse().join('');

Jimp.read(process.argv[2], function(err, image) {

  if (err) console.error(err);

  // Resize image to fit within 300x300 pixels
  image.resize(150, Jimp.AUTO);

  let width = image.bitmap.width;
  let height = image.bitmap.height;

  // cycle through each pixel in image, one row at a time
  for (var y = 0; y < height; y += 2) {
    let row = '';
    for (var x = 0; x < width; x++) {

      let pixel = Jimp.intToRGBA(image.getPixelColor(x, y));

      // calculate lightness of each pixel
      // let lightness = calculateLightness(pixel.r, pixel.g, pixel.b);
      let measure = calculateLuminance(pixel.r, pixel.g, pixel.b);
      // add each pixel in the form of an ASCII character to the current row
      row += findAscii(measure, ascii);
    }

    // once app has cycled through all pixels in one row, print the row to the console and move on to the next
    console.log(row);
  }

});

// Function for calculating the brightness of a color based on R, G, B values.
const calculateBrightness = (r, g, b) => {
  return ((r + g + b)/3)/255;
}

// Function for  calculating the luminance of a pixel based on RGB values.
const calculateLuminance = (r, g, b) => {
  return (0.299*r + 0.587*g + 0.114*b)/255;
}

// Function for returning ASCII character based on lightness of a pixel. Takes a string of characters sorted from darkest to lightest.
const findAscii = (measure, ascii) => {
  if (measure === 1) {
    return ascii[ascii.length-1];
  }
  return ascii[Math.floor(measure * ascii.length)];
}