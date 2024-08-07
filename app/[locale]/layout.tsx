import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import PageWrapper from "../components/PageWrapper";

export const metadata = {
  title: "Ngwe Sin Sandar",
  description: "This is Cyber Portfolio with NextJs, TypeScript and Tailwind",
};

async function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
      <NextIntlClientProvider messages={messages}>
        <PageWrapper>{children}</PageWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;