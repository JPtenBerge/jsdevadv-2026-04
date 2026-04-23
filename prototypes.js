'use strict';


// overerving

function LivingBeing() {
    this.name = 'default';

    this.speak = function() {
        console.log('whhooaaaa', this.name);
    };
}

function Human(name) {
    this.name = name;

    // this.speak = function() {
    //     console.log('Hoi! Ik ben', this.name);
    // };
}
Human.prototype = new LivingBeing();
// Human.prototype = new Insect();


let jp = new Human('JP');
console.log(jp);

jp.speak();


class Hoi {}
class Bla extends Hoi {

}
console.log(new Bla());


// Object.setPrototypeOf(new Bla(), {})
// Object.getPrototypeOf()