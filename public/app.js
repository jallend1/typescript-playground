"use strict";
var functionSignature;
functionSignature = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(functionSignature(5, 100, 'add'));
console.log(functionSignature(1000, 1));
var adder = function (a, b, c) {
    if (c === void 0) { c = 'jason'; }
    console.log(a + b);
    console.log(c);
};
adder(1, 5);
adder(1, 5, 'jack');
var subtracter = function (initial, newNumber, thirdNumber) {
    thirdNumber ? console.log(initial - newNumber - thirdNumber) : console.log(initial - newNumber);
};
subtracter(5, 2, 10);
var sayHello = function (greeting) {
    console.log(greeting);
};
sayHello('hi');
