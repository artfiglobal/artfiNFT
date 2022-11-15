import ejs from "ejs";
import sgMail from "@sendgrid/mail";
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

const authPasswd = process.env.SENDGRID_EMAIL_AUTH_PASSWORD || "";
sgMail.setApiKey(authPasswd);

export const sendMailUsingSendGrid = async ({
  template: templateName,
  templateVars,
  ...restOfOptions
}) => {
  const templatePath = path.join(
    process.cwd(),
    "templates/" + templateName + ".html"
  );
  
  const options = {
    ...restOfOptions,
  };
  const source = fs.readFileSync(templatePath, "utf-8").toString();
  
  const html = await ejs.renderFile(templatePath, templateVars);
  const text = htmlToText(source);

  const msg = {
    to: options.to,
    from: options.from,
    subject: options.subject,
    text: text,
    html: html
  };

  return await sgMail.send(msg);
};

export const sendMail = async ({
  template: templateName,
  to,
  from,
  subject,
  templateVars,
  ...restOfOptions
}) => {
  try {
    const tranEmailApi = new Sib.TransactionalEmailsApi();
    const sender = {
      email: from,
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
      subject,
      htmlContent: source,
      params: templateVars,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
