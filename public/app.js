"use strict";
var inputs = document.querySelectorAll('input');
console.log(inputs);
var add = function (a, b, c) {
    if (c === void 0) { c = 'jason'; }
    console.log(a + b);
    console.log(c);
};
var subtract = function (initial, newNumber, thirdNumber) {
    thirdNumber ? console.log(initial - newNumber - thirdNumber) : console.log(initial - newNumber);
};
add(1, 5);
add(1, 5, 'jack');
subtract(5, 2, 10);
