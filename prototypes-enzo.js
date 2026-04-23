let getallen = [3, 9, 81, 15, 23, 91, 2];
let tekstjes = ["bla", "dinges", "oei", "hatseflats", "oooohhh yeah"];
let objecten = [];

Array.prototype.orderBy = (function () {
  let sorters = {
    number: (data) => data.sort((a, b) => a - b),
    string: (data) => data.sort((a, b) => a.length - b.length),
    object: (data) => {},
  };

  return function () {
    let type = typeof this[0];
    return sorters[type](this);
  };
})(); // IIFE
console.log(getallen.orderBy());
console.log(tekstjes.orderBy());
