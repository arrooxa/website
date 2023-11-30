import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "pt"];

export const metadata: Metadata = {
  title: "arroxa!",
  description: "arroxa's Website",
  icons: {
    icon: "/images/favicon-32.png",
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();

  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
