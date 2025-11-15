export class MailOperationException extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.name = "MailOperationException";
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}