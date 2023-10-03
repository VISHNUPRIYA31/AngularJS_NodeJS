"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'louvenia.erdman28@ethereal.email',
      pass: 'fgUUJBcrkXx3PmKP3S'
  },
    tls: {
        rejectUnauthorized: false, // Bypass certificate verification
      },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'louvenia.erdman28@ethereal.email', // sender address
    to: "louvenia.erdman28@ethereal.email", // list of receivers
    subject: "Test Mail", // Subject line
    text: "This is a test Mail", // plain text body
    html: "<b>How r u ????</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  
}

main().catch(console.error);
