/////////////////////////////////////////////////////////////////////
var $ = require("jquery");
var fastClick = require("fastClick");
var tools = require("./libs/tools");
var moment = require("moment");

/////////////////////////////////////////////////////////////////////
$(function() {
    fastClick(document.body);
    console.log("ok");
});

console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));