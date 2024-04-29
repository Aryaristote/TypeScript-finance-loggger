import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatters;
// let docTwo: HasFormatters;
// docOne = new Invoice('Kalume', 'Fullstack dev', 1200);
// docTwo = new Payment('Ernest', 'Fullstack dev', 1200);
// Interface
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(x: string): void;
//     spend(x: number): number;
// }
// // Using interface as a Type 
// const me:IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string){
//         return console.log(text)
//     },
//     spend(amount: number) {
//         console.log('I spent ', amount);
//         return amount;
//     },
// };
// console.log(me);
// me.speak('hello, world');
// const greetPerson = (person) => {
//     console.log('hello ', person.name);
// };
// greetPerson(me);
// Make our new Arry to receive only elmeent of type Invoice classs above 
// let invoices : Invoice[] = [];
// From
const form = document.querySelector('.new-item-form'); // TypeScript compiler or type checker that a particular value
// Input
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
