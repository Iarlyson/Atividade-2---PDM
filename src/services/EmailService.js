const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

const fs = require("fs");

class EmaiLService {
  client;

  constructor() {
    this.client = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: process.env.MAILER_PORT,
      auth: {
        user: process.env.MAILER_AUTH_USER,
        pass: process.env.MAILER_AUTH_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  static async execute({ to, subject, variables, path }) {
    const template = fs.readFileSync(path);
    const mailTemplateParse = handlebars.compile(template);
    const html = mailTemplateParse(variables);

    const message = await this.client.sendMail({
      to,
      subject,
      html,
      from: "NPS <noreplay@ifpb.edu.br>",
    });
  }
}

module.exports = EmaiLService;
