const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendNewAccountEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chintanbawa1@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Thank ${name}, I hope you will enjoy our services`,
    });
}

const sendDeleteAccountEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'chintanbawa1@gmail.com',
        subject: 'We are sorry that you are leaving',
        text: `Goodbye ${name}, I hope to see you soon`,
    });
}

module.exports = {
    sendNewAccountEmail,
    sendDeleteAccountEmail
}
