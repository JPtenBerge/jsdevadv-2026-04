// Promises
// - belofte UITEINDELELIJK
// async programming
// C#'s Task, Java's Future

// snackbar
// promises zijn EAGER

let prom = new Promise((resolve, reject) => {
  console.log("timeout starten");
  setTimeout(() => {
    console.log("timeout klaar");
    // reject("fuck off");
    resolve(42);
    console.log('hoiii');
  }, 2000);
});

setTimeout(() => {
  console.log("lange timeout klaar");
  prom
    .then(result => result * 10)
    .then((result) => console.log("Promise result:", result))
    .catch((err) => console.error("OH nee", err));
}, 4000);

// (async () => {
try {
  let result = await prom;
  console.log("awaited result:", result);
} catch (err) {
  console.log("err:", err);
}

// fetch('api/products').then(x => x.json()).then(products => {

// });

// })();

// console.log('eerste then');
// console.log('tweede then');
// prom.then((result) => console.log("Promise result 2:", result));

// JP:
// timeout starten
// eerste then
// tweede then
// timeout klaar
// result
// result 2

// Eva:
// eerste then
// timeout starten
// tweede then
// timeout starten
// result
// result 2

// Patrick:
// eerste then
// timeout starten
// result
// tweede then
// result 2

// Dennis:
// timeout starten
// eerste then
// tweede then
// timeout klaar
// result
// crash

// eager
let prom1 = new Promise(res => setTimeout(() => res('eerste'), 800));
let prom2 = new Promise(res => setTimeout(() => res('tweede'), 1500));
let prom3 = new Promise((res, rej) => setTimeout(() => rej('derde'), 1200));

// await prom1; // 800ms
// await prom2; // 700ms
// await prom3; // klaar tegen de tijd dat je hier aankomt

let results = await Promise.allSettled([prom1,prom2,prom3]);
console.log(results);

// ecosysteem:
// - Observables van RxJS - stream van data
// - signals - stream van data, lijkt wdt op RxJS, maar dan simpeler
