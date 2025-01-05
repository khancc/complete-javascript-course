"use strict";

function logger() {
  console.log(`My name is khancdapoet`);
}
logger(); //calling/running/invoking function

function fruitProcessor(apples, oranges) {
  const juice = `juice w/ ${apples} apples and ${oranges} oranges;`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleWithOrangeJuice = fruitProcessor(2, 100);
console.log(appleWithOrangeJuice);

const num = String("22");
