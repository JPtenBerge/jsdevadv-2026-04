// iterators
let jp = {
  name: "JP",
  favorieteDranken: ["Sprite Zero", "Thee winter glow", "Koffie"],
  favorieteChips: ["Lay's naturel", "Nibb-it rings", "Wokkels Paprika"],
  [Symbol.iterator]() {
    // iterator pattern
    let alles = [...this.favorieteDranken, ...this.favorieteChips];
    let index = 0;
    return {
      next() {
        return {
          value: alles[index++],
          done: index > alles.length,
        };
      },
    };
  },
};

for (let item of jp) {
  console.log("item:", item);
}

// generators: iterator pattern maar dan fancy/makkelijk/meer controle over tussenstappen

function* gen() {
    console.log('eerste');
    yield 4; // /temporary partial return
    console.log('tweede');
    yield 8;
    console.log('derde');
    yield 15;
    console.log('vierde');
    yield 16;
    console.log('vijfde');
    yield 23;
    console.log('zesde');
    yield 42;
}

let source = gen();
console.log(source.next().value);
console.log(source.next().value);
console.log(source.next().value);

let obj = {
    *[Symbol.iterator]() {

    }  
};

function traverseNode(node) {
    yield* node.left;
    yield node.value;
    yield* node.right;
}



// for (let item of gen()) {
//     console.log('gen item:', item);
// }


// HTTP server

// for await (let connection of server.connections) {

// }