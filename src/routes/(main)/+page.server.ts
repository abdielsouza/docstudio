import type { Actions } from "@sveltejs/kit";
import mailer from "$lib/mailer";
import { MailOperationException } from "$lib/exceptions";
import type { MailAPIResponseData, MailAPISenderRequestData } from "$lib/types";

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data: MailAPISenderRequestData = {
            senderName: formData.get("name")! as string,
            senderMail: formData.get("email")! as string,
            senderText: formData.get("message")! as string
        };

        try {
            mailer.sendMail({
                from: process.env.MAIL_USER!,
                to: process.env.MAIL_USER!,
                subject: `Docstudio: Requisição de ${data.senderName}!`,
                text: `remetente: ${data.senderMail}\n\n${data.senderText}`,
                component: data.senderMail,
            }, (error, _info) => {
                throw new MailOperationException(`${error?.message}`, 500);
            });
        }
        catch (error) {
            if (error instanceof MailOperationException) {
                return {error: {name: error.name, message: error.message}};
            }
            
            return {
                error: {name: "UnknownError", message: "something failed when sending e-mail"},
                content: null,
            } satisfies MailAPIResponseData;
        }

        return {
            error: null,
            content: "email was sent successfully!",
        } satisfies MailAPIResponseData;
    },
} satisfies Actions;