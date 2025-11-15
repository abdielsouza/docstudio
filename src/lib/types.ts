export type MailAPIResponseData = {
    error: { name: string; message: string; } | null;
    content: any;
};

export type MailAPISenderRequestData = {
    senderName: string;
    senderMail: string;
    senderText: string;
};