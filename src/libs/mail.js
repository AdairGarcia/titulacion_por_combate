import nodemailer from "nodemailer";

const mail = {
    user: "delgado.moreno78859@gmail.com",
    pass: "xeka zvgh mmlx pgep"
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: mail.user,
        pass: mail.pass
    }
});

export const sendEmail = async (email, subject, html) => {
    try {
        await transporter.sendMail({
            from: `Titulacion por combate <${ mail.user }>`,
            to: email,
            subject,
            text: "Hola amigos, es la hora de titularnos!!",
            html
        });
        return true;
    } catch (error) {
        console.error('Hubo un error al enviar el email', error);
        return false;
    }
}

export const getTemplate = (name, token) => {
    return `
    <head>
        <link rel="stylesheet" href="./style.css">
    </head>
    <div id="email_content">
        <h1>Hola ${name}</h1>
        <p>Para verificar tu cuenta, haz click en el siguiente enlace:</p>
        <a href="http://localhost:5173/api/confirm/${token}"
        target="_blank">Verificar cuenta</a>
    </div>
    `
}