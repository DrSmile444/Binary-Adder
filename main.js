'use strict'; let p = console.log;

function runScript(button) {
  if (button.keyCode == 13) {
      alert()
  }
}

let start = 122;
let start2 = 124;

p( mkBinary(start, 16)
);

function mkBinary (number, bit) {
  let zero = '';
  number = number.toString(2);

  if(number.length < bit) {
    for (let i = 0, n = bit-number.length; i < n; i++) {
      zero += '0';
    }
  }

  return zero + number.split('').reverse().slice(0, bit).reverse().join("");
}

function adder(num1, num2) {

}