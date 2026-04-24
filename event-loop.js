import { readFile } from "fs";

// JavaScript is single-threaded

console.log("lezen bestand");

readFile("boek.txt", "utf8", (err, content) => {
  console.log("content:", content);
});
setTimeout(() => { console.log('timeout klaar'); }, 0);


for (let i = 0; i < 100000; i++) {
    console.log('i:', i);
}

console.log("klaar met lezen bestand");
