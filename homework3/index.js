'use strict';

//1
const firstName = prompt('Enter your name');
const age = prompt('Enter your age');
const gender = prompt('Enter your gender');
alert(`${firstName}, ${age}, ${gender}`);


//2
const number1 = 1;
const number2 = 2;
const number3 = 3;
const number4 = 4;
const number5 = 5;
console.log(`${number1} ${number2} ${number3} ${number4} ${number5}`);

//2 other way, but it only works if the number is a string
let myNumber = '12345';
let splitNum = myNumber.split('').join(' ');
console.log(splitNum);

//Я думаю, что можно еще сделать цикл, но я честно признаюсь без
// помощи гугла сама не сделаю, а списывать не буду принципиально