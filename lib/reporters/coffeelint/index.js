"use strict";

var coffeelint = require("coffeelint");
var config = require("../../../coffeelint.json");

exports.process = function (coffeeSource, options/*, reportInfo */) {
    return {
        messages: coffeelint.lint(coffeeSource, config).map(function(error){
            return {
                severity : 'error',
                line     : error.lineNumber,
                column   : 1,
                message  : error.message,
                source   : error.context
            }
        })
    }

};
