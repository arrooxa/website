import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
import EmailTemplate from "@app/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cambui01_@hotmail.com",
      subject: "Hello world",
      react: React.createElement(EmailTemplate, { email, message, subject }),
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
