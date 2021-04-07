const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const { resolve } = require("path");

const fs = require("fs");

class EmaiLService {
  static async execute({ to, subject, variables }) {
    const client = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      secure: false,
      auth: {
        user: process.env.MAILER_AUTH_USER,
        pass: process.env.MAILER_AUTH_PASS,
      },
    });

    const template = fs
      .readFileSync(resolve(__dirname, "..", "view", "emailtemplate.hbs"))
      .toString("utf8");
    const mailTemplateParse = handlebars.compile(template);
    const html = mailTemplateParse(variables);

    try {
      await client.sendMail({
        to,
        subject,
        html,
        from: "noreplay@ifpb.edu.br",
      });
    } catch (err) {
      console.log("erro abaixo");
      console.log(err);
    }
  }
}

module.exports = EmaiLService;
