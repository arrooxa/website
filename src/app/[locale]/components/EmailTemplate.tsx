import { EmailTemplateDTO } from "@app/types/email";
import * as React from "react";

export const EmailTemplate: React.FC<Readonly<EmailTemplateDTO>> = ({
  email,
  subject,
  message,
}) => (
  <div>
    <h1>Mensagem de: {email}!</h1>
    <p>Assunto: {subject} </p>
    <p>Messagem: {message} </p>
  </div>
);

export default EmailTemplate;
