import EmailTemplate from "@app/components/EmailTemplate";
import { EmailTemplateDTO } from "@app/types/email";
import React from "react";
import { Resend } from "resend";

const resend = new Resend("re_R2d2tu7S_LbRCHxRukbsJQxGH21cQA7C7");

async function sendEmail({ email, message, subject }: EmailTemplateDTO) {
  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "cambui01_@hotmail.com",
    subject: subject,
    react: React.createElement(EmailTemplate, { email, message, subject }),
  });
}

export default sendEmail;
