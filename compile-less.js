var lessCompile = require('./lessCompile');
var fs = require('fs');
var path = require('path');


lessCompile("./src/example.less", "./dist/less-example.css", {}, function (e) {
    if (e) {
        //console output of error already done in the lesscompile function
        console.log(e);
    } else {
        console.log("done.");

    }
});