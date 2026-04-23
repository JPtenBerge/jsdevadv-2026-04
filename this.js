'use strict';

// referentie naar een object
// jezelf? de caller?
// waar wijst this naar? naar de eigenaar van de functie.
// - in een globale functie: naar globale object
//   - uitzondering: met use strict aan => undefined

// takeaways:
// - this kan nogal wispelturig zijn
// - () => {} is this een stuk voorspelbaarder / consistener

function Customer() { // constructor function (voordat we classes hadden)
    console.log('this in customer:', this);

    this.buy = () => {
        console.log('kopen kopen kopen met this', this)

        // nested();


        // function nested() {
        //     console.log('nested:', this);
        // }
    };
}
let tijs = new Customer();
tijs.buy();

let func = tijs.buy;
func();

func.call({ x: 24 }, 4, 8, 15); // werkt niet met () => {}
func.apply({ x: 48 }, [4,8,15]); // werkt niet met () => {}

let gebindeFunc = func.bind({ x: 348754 }); // werkt niet met () => {}
gebindeFunc();



// 5 manieren om een variabele aan te maken
// let
// const
// var <== 🧨 TypeScript / ESLint
// (leeg) <== 🧨 TypeScript
// globalThis.dinges = '...'

// function ohnee() {
//     globalThis.dinges = 'hoi 2';
//     console.log(dinges);
// }
// ohnee();
// console.log(dinges);
// console.log(globalThis.dinges);


// TypeScript

// export class HomeComponent {
//     http = inject(HttpClient);
//     products;

//     ngOnInit() {
//         // let self = this; // ankeren
//         this.http.get('api/products').subscribe(products => {
//             this.products = products;
//         });
//     }
// }