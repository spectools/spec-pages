"use strict";

var toc = require("spec-toc-obj");

var _forEach = Array.prototype.forEach;

module.exports = function(window) {
    var node = toc(window); 
    if (!node) {
        throw new Error("Cannot find a Table of Content for this document.");
    }
    var output = [""];
    // Find all a elements which are children of the ToC and which aren't local
    // anchors or link to definitions.
    _forEach.call(node.querySelectorAll('a:not([href$="#"]):not([data-link-type])'), function(node) {
        // Get the path of the URL.
        var href = node.getAttribute("href");
        if (typeof href === "string") href = href.split("#")[0];
        if (href && output.indexOf(href) < 0) {
            output.push(href);
        } 
    });
    return output;
};