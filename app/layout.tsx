import { ReactNode } from 'react';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Ngwe Sin Sandar',
  description: 'This is Cyber Portfolio with NextJs, TypeScript and Tailwind',
  openGraph: {
    type: 'website',
    url: 'https://ngwesinsandarnext.vercel.app',
    title: 'Ngwe Sin Sandar',
    description: 'This is Cyber Portfolio with NextJs, TypeScript and Tailwind',
    images: [
      {
        url: 'https://ngwesinsandar.com/og-image.png',
        width: 1200,
        height: 630
      }
    ]
  }
};

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
