// Class
export class Invoice {
    constructor(client, detaiils, amount) {
        this.client = client;
        this.detaiils = detaiils;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes: ${this.amount} for ${this.detaiils}`;
    }
}
