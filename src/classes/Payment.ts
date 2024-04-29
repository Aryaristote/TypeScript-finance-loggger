import { HasFormatters } from "../interfaces/hasFormatter"

// Class
export class Payment implements HasFormatters {s
    constructor(
        public recipient: string,
        public detaiils: string,
        public amount: number,
    ){}

    format() {
        return `${this.recipient} is owed: ${this.amount} for ${this.detaiils}`
    }
}