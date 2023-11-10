import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
// import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: "Vitor <vitor.league@gmail.com>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      react: (
        <>
          <p>Email enviado!</p>
        </>
      ),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
