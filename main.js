'use strict'; let p = console.log;

function runScript(button) {
  if (button.keyCode == 13) {
      alert()
  }
}

let bits = 16;
let start = -8888;
let start2 = 29999;

p( main(start, start2, bits) );

function main(num1, num2, bits) {
  let numMain1 = mkBinary(num1, bits),
  numMain2 = mkBinary(num2, bits);

  p(numMain1)
  p(numMain2)

  processing(numMain1, numMain2);
}

function mkBinary (number, bit) {
  let zero = '', sign = number < 0 ? 1 : 0;
  number = Math.abs(number).toString(2);

  if(number.length < bit) {
    for (let i = 0, n = bit-number.length-1; i < n; i++) {
      zero += '0';
    }
  }

  return sign + zero + number.split('').reverse().slice(0, bit).reverse().join("");
}

function processing(num1, num2) {
  let intervalRemainder = mkBinary(0, bits),
  intervalSum = intervalRemainder;

  p(intervalRemainder)
  p(intervalSum)
}

p( adder('0111', '0111') )

function adder(num1, num2) {
  let result = [], interval = 0;
  num1 = num1.split('').reverse(),
  num2 = num2.split('').reverse();

  for (let i = 0, n = num1.length; i < n; i++) {
    let calc = +num1[i] + +num2[i] + interval;
    result.push(calc % 2);
    interval = calc > 1 ? 1 : 0;
  }

  return result.reverse().join('');
}