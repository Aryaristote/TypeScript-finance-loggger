import { HasFormatters } from "../interfaces/hasFormatter"

// Class
export class Invoice implements HasFormatters {s
    constructor(
        public client: string,
        public detaiils: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes: ${this.amount} for ${this.detaiils}`
    }
}