//https://www.npmjs.com/package/svgtofont

const svgtofont = require('svgtofont');
const path = require('path');

svgtofont({
  src: path.resolve(process.cwd(), 'src/images/icons'), // svg path
  dist: path.resolve(process.cwd(), 'src/css/vendors/fonts/icons'), // output path
  styleTemplates: path.resolve(process.cwd(), "src/css/vendors/fonts/templates/styles"),
  fontName: "f-icon", // font name
  css: true, // Create CSS files.
  svgicons2svgfont: {
    fontHeight: 40,
    normalize: true
  },
  emptyDist: true,
}).then(() => {
  console.log("done!!!!");
});