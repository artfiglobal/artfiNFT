import nodemailer from "nodemailer";
import ejs from "ejs";
import { htmlToText } from "html-to-text";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();
var temp_dir = path.join(process.cwd(), "templates/");

const Sib = require("sib-api-v3-sdk");

const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SENDINBLUE_EMAIL_API_KEY;

if (!fs.existsSync(temp_dir)) fs.mkdirSync(temp_dir);
// const smtp = nodemailer.createTransport({
//   host: settings?.smtp?.host,
//   port: settings?.smtp?.port,
//   secure: process.env.NODE_ENV !== "development",
//   auth: {
//     user: settings?.smtp?.username,
//     pass: settings?.smtp?.password,
//   },
// });
console.log({ port: process.env.SMTP_PORT });
var smtp = nodemailer.createTransport({
  port: "587", //25, 587 for unencrypted/TLS connections, 465 for SSL connections
  secure: false,
  host: process.env.SMTP_HOST,
  auth: {
    user: process.env.SENDGRID_EMAIL_AUTH_USERNAME, //Given By SendGrid
    pass: process.env.SENDGRID_EMAIL_AUTH_PASSWORD,
  },
});

export const sendMailUsingSendGrid = async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  console.log(templateName);
  // const templatePath = "/templates/template.html";
  const templatePath = path.join(
    process.cwd(),
    "templates/" + templateName + ".html"
  );
  // const templatePath = "app/src/utils/templates/" + templateName + ".html";

  const options = {
    ...restOfOptions,
  };
  console.log(templatePath);
  const source = fs.readFileSync(templatePath, "utf-8").toString();
  console.log("THis is string", source);
  if (templateName) {
    const html = await ejs.renderFile(templatePath, templateVars);
    const text = htmlToText(source);
    // const htmlWithStylesInlined = juice(html);
    options.html = html;
    options.text = text;
  }

  console.log("Sending mail....");
  const res = await smtp.sendMail(options);
  console.log(res);
  return res;
};

export const sendMail = async ({
  template: templateName,
  to,
  templateVars,
  ...restOfOptions
}) => {
  try {
    const tranEmailApi = new Sib.TransactionalEmailsApi();
    const sender = {
      email: "whitelist@artfi.world",
      name: "Artfi",
    };
    const templatePath = path.join(
      process.cwd(),
      "templates/" + templateName + ".html"
    );
    const source = fs.readFileSync(templatePath, "utf-8").toString();

    const receivers = [
      {
        email: to,
      },
    ];
    console.log("-------------------------------------------------");
    const res = await tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject: "Thank you for joining the Whitelist for Artfi NFT offerings!",
      textContent: `
      Cules Coding will teach you how to become {{params.role}} a developer.
      `,
      htmlContent: source,
      params: {
        role: "Frontend",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
