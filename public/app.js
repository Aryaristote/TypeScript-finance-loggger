"use strict";
// Select an element from the DOM.
// const anchor = document.querySelector('a')!;  ! TypeScript compiler that a value is not null or undefined
// if(anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);  without if above of ! this return an error 
// Class
class Invoice {
    constructor(client, detaiils, amount) {
        this.client = client;
        this.detaiils = detaiils;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes: ${this.amount} for ${this.detaiils}`;
    }
}
// Make our new Arry to receive only elmeent of type Invoice classs above 
let invoices = [];
// From
const form = document.querySelector('.new-item-form'); // TypeScript compiler or type checker that a particular value
// Input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
