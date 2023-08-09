import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'
import PageWrapper from './components/PageWrapper'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ngwe Sin Sandar',
  description: 'This is Cyber Portfolio with NextJs, TypeScript and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
