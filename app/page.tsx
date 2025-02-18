import { redirect } from 'next/navigation';

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
        url: './opengraph-image.png',
        width: 1200,
        height: 630
      }
    ]
  }
};

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  redirect('/en');
}
