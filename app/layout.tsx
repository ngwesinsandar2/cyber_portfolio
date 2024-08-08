import {ReactNode} from 'react';
import './globals.css';

export const metadata = {
  title: "Ngwe Sin Sandar",
  description: "This is Cyber Portfolio with NextJs, TypeScript and Tailwind",
};

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  return children;
}