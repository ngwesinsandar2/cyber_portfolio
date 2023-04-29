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
      <body className={inter.className}>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
