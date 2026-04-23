Date.prototype.toPrettyString = function () {
  return `${this.getDate()}-${this.getMonth() + 1}-${this.getFullYear()}`;
};

let nu = new Date();
let toen = new Date("2024-06-21");

// moment.js (3+ jaar in maintenance) / day.js / date-fns / luxon

console.log(nu.getDate());
console.log(nu.getMonth() + 1);
console.log(nu.getFullYear());

console.log(new Date("2024-03-04"));
console.log(new Date("2024/03/04"));

console.log(nu.toPrettyString());
console.log(dateUtils.toPrettyString(nu));



// TypeScript: typings.d.ts
/*
global namespace {
    interface Array {
        toPrettyString(): string;
    }
}
*/

// bestaand datatype uitbreiden.