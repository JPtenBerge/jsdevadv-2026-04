

// set: unieke waarden
let setje = new Set();
setje.add(4);
setje.add(4);
setje.add('4'); // ===
setje.add(8);
setje.add(4);

console.log(setje);
console.log(setje.size);
console.log([...setje.keys()]);
console.log([...setje.values()]);

// setje.clear();
// console.log(new Set([...setje].filter(x => x)));

let lijstje = [4,87,13];

// lijstje.length = Number.NaN;
// lijstje.length = 4294967295;

// Array.prototype.giefHugeArreeManneke = function() {
//     this.length = 4294967295;
// };


// Array.prototype.clear = function() {
//     this.length = 0;
// };
// lijstje.clear();

// lijstje.splice(0, lijstje.length);

// lijstje.pop();
// lijstje.pop();
// lijstje.pop();

console.log(lijstje);

// map: key-value
let mappie = new Map();
mappie.set('name', 'Eva');
mappie.set('tijd', '16:00');
mappie.set(setje, 'huh');
mappie.set({}, 'huh');
let dinges = [1,2,3];
mappie.set(dinges, 'huh');
dinges.pop();
console.log(mappie.get(dinges))
mappie.set(function() { }, 'huh');

console.log(mappie);
console.log([...mappie.keys()]);
console.log([...mappie.values()]);

let obj = {
    name: 'Eva',
    tijd: '16:00'
};

// obj vs map?
// - map heeft meer functies
// - Map kun je prototype functies toevoegen
// - Map ondersteunt complexe keys
// - Map meer performant

// WeakSet
// WeakMap