'use strict';

// Proxy
// Reflect
// encapsulation

let target = { x: 24, y: "doei" };
let proxy = new Proxy(target, {
  // handlers
  get(target, prop) {
    console.log("get op", prop);
    return target[prop];
  },
  set(target, prop, value) {
    console.log("set op", prop, value);
    target[prop] = value;
    return value;
  },


});

console.log(proxy.x);
proxy.x = 108;
console.log(proxy.x);
console.log(proxy.y);

// use cases:
// - validators
// - iets met privateheid
// - flux/redux datamutaties registreren
// - unittesten mocken
// - reactivity bij Vue
// - MobX

// Angular (algoritme elk event) / Vue (Proxy) / React (virtual DOM) / Svelte 4 (assignment detection -> products = products)
// change detection
// => wanneer jij data verandert, 

// Object.defineProperties()
// Object.defineProperty()
// Object.keys()


// Object.defineProperty(obj, '', { })
// Reflect.defineProperty(obj, '', { })

// manieren om encapsulation te doen:

// 1. closures
//    - namespace pattern 👻🤢❌
// 2. private met #
// 3. Proxy
// 4. getter/setter
// 5. convention
// 6. configuration

let obj = {
    _age: 14,
    __age: 56,
};
console.log(obj);
obj.y = 'hoi';
// Object.preventExtensions(obj);
// obj.z = 'wow';

// Object.seal(obj);
// Object.defineProperty(obj, 'y', {
//     writable: false
// })


Object.freeze(obj);
// obj.y = 'whatever';
// obj.y = 'whatever';
obj.sdkjhf=  1423;

console.log(obj);

// class Bla {}
// let bla = new Bla();
// Object.freeze(bla);
