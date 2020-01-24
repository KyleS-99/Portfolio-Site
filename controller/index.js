const nodemailer = require('nodemailer');

const { user, pass, to } = require('../config');

module.exports = {
    sendEmail: (req, res) => {
        const { email, name, message } = req.body;

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user,
                pass
            }
        });
        
        let mailOptions = {
            from: user,
            to,
            subject: 'Email from website',
            text: `${message}\n\n${name}\n${email}`
        };

        transporter.sendMail(mailOptions)
            .then(() => {
                res.status(200).json({ success: true });
            })
            .catch(() => {
                res.status(400).json({ error: `Unable to send email. To do so directly, email me at ${to}` });
            });
    }
}