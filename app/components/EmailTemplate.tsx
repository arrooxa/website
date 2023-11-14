import { EmailTemplateDTO } from "@app/types/email";
import {
  Html,
  Body,
  Head,
  Preview,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const EmailTemplate: React.FC<Readonly<EmailTemplateDTO>> = ({
  email,
  subject,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your website!</Preview>
    <Tailwind>
      <Body>
        <Container>
          <Section>
            <Heading>You received the following message from: {email}</Heading>
            <Text>{subject}</Text>
            <Hr />
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
