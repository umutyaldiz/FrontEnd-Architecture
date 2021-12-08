const fs = require('fs');
const [, , name] = process.argv;

const rootPath = "./src/js/pages/";
const directoryName = `${rootPath}${name}`;
const fileName = `${directoryName}/index.js`;

// let someData = [{ name: 'umut', age: 27 }];
// let jsonData = JSON.stringify(someData);

let IndexJS = `
import Page from "../page";

class ${name} extends Page {
    constructor(options) {
        super(options);
    }
    Init() {
        super.Load();
    }
}

const js = new ${name}();
js.Init();
`;
console.log(directoryName);
console.log(fileName);

fs.mkdir(directoryName, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');

    fs.writeFile(fileName, IndexJS, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

});