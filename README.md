# Console ASCII Art

Print an ASCII-fied version of any image in the console. 

This app was built with **NodeJS**. It uses [Jimp](https://www.npmjs.com/package/jimp) to grab image data, then calculates the brightness, luminance, or lightness of each pixel and logs it to your console as an ASCII character.

#### How to Use This App

```
git clone https://github.com/crankysparrow/console-ASCII-art
cd console-ASCII-art
npm install
```

Once everything, is cloned and installed, make sure you're in the project directory and type `npm run ascii` followed by the path to your image file and, optionally, the function you want to use to measure each pixel.

```
npm run ascii path/to/your/image.jpg [ function ]
```

The function argument can be `luminance`, `brightness`, `lightness`, or left blank.

This works best with images featuring a subject against a white or very light background.

#### Example

```
npm run ascii ../images/bun.jpg luminance
```

<img src="public-images/bun.jpg" width="300" style="display: inline"/>  

<img src="public-images/asciibun.png" width="300" style="display: inline" />
