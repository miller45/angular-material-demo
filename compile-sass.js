var fs = require('fs');
var sass = require('node-sass');
var path = require('path');
var mkdirp = require('mkdirp');
var tildeImporter = require('node-sass-tilde-importer');
var material_scss = "./src/styles.scss";
var material_css = "./dist/styles.css";
var example_scss = "./src/example.scss";
var example_css = "./dist/scss-example.css";


var material_fixes_scss = "./src/material-fixes.scss";
var material_fixes_css = "./dist/material-fixes.css";

if(!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}


function writeTextToFile(file, text) {
    fs.writeFile(file, text, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved under: " + file);
    });
}

//material
sass.render({
        file: material_scss,
        outputStyle: 'expanded',
        importer: tildeImporter
    }, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            //console.log(result);
            writeTextToFile(material_css, result.css);
        }
    }
);

//example
sass.render({
        file: example_scss,
        outputStyle: 'expanded'
    }, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            //console.log(result);
            writeTextToFile(example_css, result.css);
        }
    }
);


//material fixes
sass.render({
        file: material_fixes_scss,
        outputStyle: 'expanded'
    }, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            //console.log(result);
            writeTextToFile(material_fixes_css, result.css);
        }
    }
);
