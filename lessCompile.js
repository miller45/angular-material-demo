/** copyied but adapted from original lessc contents (node_modules/less/bin/lessc) */
/**
 * used by buildCDNContents.js exclusivly
 *  compile single less file with preconfigured options (support for ~)
 */
var fs = require('fs');
var path = require('path');
var less = require('less');
var NpmImportPlugin = require("less-plugin-npm-import");
var CleanCssPlugin = require('less-plugin-clean-css');
var mkdirp = require('mkdirp');
var errno = null;

//only hook once into logging (would be double registering if done in lessCompile (function)
less.logger.addListener({
    info: function (msg) {
        console.log(msg);
    },
    warn: function (msg) {
        console.warn(msg);
    },
    error: function (msg) {
        console.error(msg);
    }
});

function lessCompile(inputFile, outputFile, argOptions, callBack) {
    var cleanCssOptions = {
        level: 0,
        format: 'keep-breaks'
    };// Object.assign({}, {level: 0, format:'beautify'}, argOptions.cleanCssOptions || {});
    var lessOptions = {
        depends: false,
        compress: false,
        max_line_len: -1,
        lint: false,
        paths: [],
        color: true,
        strictImports: false,
        insecure: false,
        rootpath: '',
        relativeUrls: false,
        ieCompat: true,
        strictMath: false,
        strictUnits: false,
        globalVars: null,
        modifyVars: null,
        urlArgs: '',
        plugins: [
            new NpmImportPlugin({prefix: '~'})
        ]
    };

    var options = Object.assign({}, lessOptions, argOptions);

    var input = inputFile;
    var output = outputFile;


    var ensureDirectory = function (filepath) {
        var dir = path.dirname(filepath),
            cmd,
            existsSync = fs.existsSync || path.existsSync;
        if (!existsSync(dir)) {
            cmd = mkdirp && mkdirp.sync || fs.mkdirSync;
            cmd(dir);
        }
    };

    var writeOutput = function (output, result, onSuccess) {
        if (options.depends) {
            onSuccess();
        } else if (output) {
            ensureDirectory(output);
            fs.writeFile(output, result.css, {encoding: 'utf8'}, function (err) {
                if (err) {
                    var description = "Error: ";
                    if (errno && errno.errno[err.errno]) {
                        description += errno.errno[err.errno].description;
                    } else {
                        description += err.code + " " + err.message;
                    }
                    console.error('lessCompile: failed to create file ' + output);
                    console.error(description);
                    //process.exitCode = 1;
                } else {
                    less.logger.info('lessCompile: wrote ' + output);
                    onSuccess();
                }
            });
        } else if (!options.depends) {
            //process.stdout.write(result.css);
            onSuccess();
        }
    };
    var logDependencies = function (options, result) {
        if (options.depends) {
            var depends = "";
            for (var i = 0; i < result.imports.length; i++) {
                depends += result.imports[i] + " ";
            }
            console.log(depends);
        }
    };
    var parseLessFile = function (e, data) {
        if (e) {
            console.error("lesscompile: " + e.message);
            callback(e);
        }

        data = data.replace(/^\uFEFF/, '');

        options.paths = [path.dirname(input)].concat(options.paths);
        options.filename = input;


        less.render(data, options)
            .then(function (result) {

                    writeOutput(output, result, function () {
                        logDependencies(options, result);
                        callBack(null);
                    });

                },
                function (err) {
                    less.writeError(err, options);
                    callBack(e);
                });
    };

    fs.readFile(input, 'utf8', parseLessFile);
}


//called with inputFile path and outputfilepath
module.exports = lessCompile;