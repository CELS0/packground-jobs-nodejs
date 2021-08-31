
import nodemailer from 'nodemailer';
import { config } from '../../config/main'

class Mail {
    async teste(name: string, email: string) {
        const transport = nodemailer.createTransport(config)
        await transport.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuario',
            html: `Ola ${name}, bem-vindo ao sistema de fila`
        })
    }
}
export const mail = new Mail();
    

