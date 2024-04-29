// Class
export class Payment {
    constructor(recipient, detaiils, amount) {
        this.recipient = recipient;
        this.detaiils = detaiils;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed: ${this.amount} for ${this.detaiils}`;
    }
}
