import PageWrapper from "./components/PageWrapper";
import "./globals.css";
// import { appWithTranslation } from 'next-i18next';
// import nextI18nextConfig from '../next-i18next.config';

export const metadata = {
  title: "Ngwe Sin Sandar",
  description: "This is Cyber Portfolio with NextJs, TypeScript and Tailwind",
};

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}

// @ts-ignore
export default RootLayout;