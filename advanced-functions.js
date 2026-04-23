// const fs = require('fs');





"use strict";

function bla() {
  console.log("bla");
}
bla();

function bla(p1, p2) {
  console.log("bla met params", p1, p2);
}
bla(4, 8);
globalThis.bla(14, 28);

// "het globale object""
// browser: window
// Node / Deno / Bun: global

// globalThis

// closures
// dat state alleen bestaan in de scope van de function

// functie syntax
// function counter() {
//     let tellertje = 0; // private

//     return function() {
//         tellertje++;
//         console.log('hallo vanaf inner function', tellertje);
//     };
// }
// let myFirstCounter = counter();
// myFirstCounter();
// myFirstCounter();
// myFirstCounter();
// let mySecondCounter = counter();
// mySecondCounter();
// mySecondCounter();
// mySecondCounter();

// console.log(myFirstCounter);

// object syntax

const counter = () => {
  let tellertje = 0; // private

  return {
    increment() {
        
      tellertje++;
      console.log("hallo vanaf inner function", tellertje);
    },
    decrement() {
      tellertje--;
      console.log("hallo vanaf inner function", tellertje);
    },
  };
};
let myFirstCounter = counter();
myFirstCounter.increment();
myFirstCounter.decrement();
myFirstCounter.decrement();
myFirstCounter.increment();
myFirstCounter.increment();
myFirstCounter.increment();

// let

// var self = this;
// let self = this;
// let _this = this;
// let vm = this;

// Immediately Invoked Function Expression


function bla() {} // function declaration
const func = function() { }; // function expression



!function() {
    console.log('werkt dit 3?');
}();
(function() {
    console.log('werkt dit 3?');
})();
(function() {
    console.log('werkt dit 3?');
}());
(() => {
    console.log('werkt dit 3?');
})();

let value = (4,8,15,16,23,42); // comma operator evalueert left, return right 
console.log(value);
