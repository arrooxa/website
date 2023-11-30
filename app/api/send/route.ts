import EmailTemplate from "@app/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplateDTO } from "@app/types/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, subject, message }: EmailTemplateDTO = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "cambui01_@hotmail.com",
      subject,
      react: EmailTemplate({
        email,
        subject,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
