// primitief datatype (string, number, bigint, boolean)
// bedoeld om iets uniek te adresseren

// let sym = Symbol('eerste'); // genereer GUID  Globally Unique IDentifier
// // abcd7e8df-28383484cabebd-edbe838ebd98-debde804
// let sym2 = Symbol('tweede');

let sym = Symbol.for("eerste"); // browser registry   get or create
let sym2 = Symbol.for("eerste");

console.log("sym == sym2", sym == sym2);
console.log("sym === sym2", sym === sym2);

let suffix = "name";
let human = {
  ["first" + suffix]: "Tijs", // computed property name
  ["last" + suffix]: "Van Kampen",
};
console.log(human);

let obj = {
  x: 24,
  y: "hoi",
  [sym]: "nog een value",
  [sym2]: "tweede symbol",
};
console.log(obj);
console.log(obj[sym]);

console.log(JSON.stringify(obj));

let tijs = {
  name: "TIIIIIIJJJJJJSSSSS!!!!!",
  age: 25,
  [Symbol.toPrimitive](hint) {
    console.log("hint:", hint);
    return "YES TIJS";
  },
  toString() {
    console.log("toSTring");
    return "[tijs Tijs]";
  },
};

console.log(`hoi mijn naam is ${tijs}`);
console.log(`hoi mijn naam is ${+tijs}`);
