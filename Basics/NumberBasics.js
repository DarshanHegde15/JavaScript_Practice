"use strict"
const num=new Number(100.0)
// console.log(num.toFixed(2));

const number=Math.random()*10+1;
// console.log(Math.ceil(number));


//Organized way of printing random numbers in a range
const min=10;
const max=20;

console.log(Math.floor((Math.random()*(max-min)+1))+min);