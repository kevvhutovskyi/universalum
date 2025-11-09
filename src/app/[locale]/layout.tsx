import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { AddressAndContactsBlock, SiteHeader } from "@/components/organisms";
import { FooterBlock } from "@/components/organisms/Footer";
import { routing } from "@/i18n/routing";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export async function generateMetadata({
  params,
}: {
  params: { locale: "en" | "ua" | "pl" };
}): Promise<Metadata> {

  
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: "en" | "ua" | "pl" }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as "en" | "ua" | "pl")) {
    console.log("not found", locale);
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="uk">
      <body className={`${ubuntu.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          {children}
          <AddressAndContactsBlock />
          <FooterBlock />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
