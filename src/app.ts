// Select an element from the DOM.

// const anchor = document.querySelector('a')!;  ! TypeScript compiler that a value is not null or undefined
// if(anchor) {
//   console.log(anchor.href);
// }

// console.log(anchor.href);  without if above of ! this return an error 

// Class
class Invoice {
    constructor(
        public client: number,
        public detaiils: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes: ${this.amount} for ${this.detaiils}`
    }
}

// Make our new Arry to receive only elmeent of type Invoice classs above 
let invoices : Invoice[] = [];

// From
const form = document.querySelector('.new-item-form') as HTMLInputElement; // TypeScript compiler or type checker that a particular value

// Input
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})