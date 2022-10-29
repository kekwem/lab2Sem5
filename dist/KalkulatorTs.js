"use strict";
function Calculate() {
    var a = new Utilities.Calculator();
    var input = document.getElementsByTagName('input')[0];
    input.value = a.CalculateProcess(input.value).toString();
}
function Clear() {
    var input = document.getElementsByTagName('input')[0];
    input.value = "";
}
function Click(str) {
    var input = document.getElementsByTagName('input')[0];
    input.value += str;
}
