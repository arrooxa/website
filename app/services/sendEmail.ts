"use server";

import EmailTemplate from "@app/components/EmailTemplate";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(email: string, message: string, subject: string) {
  const { data, error } = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "cambui01_@hotmail.com",
    subject: "Hello world",
    react: React.createElement(EmailTemplate, { email, message, subject }),
  });
}

export default sendEmail;
