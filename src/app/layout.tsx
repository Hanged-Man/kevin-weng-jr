import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Londrina_Sketch } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const londrina = Londrina_Sketch({
  weight: '400',
  subsets: ['latin'],
  style: ['normal'],
  variable: '--font-londrina'
})


export const metadata: Metadata = {
  title: 'Kevin Weng Jr',
  description: 'Kevin Weng Jr\'s personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={londrina.className}>{children}</body>
    </html>
  )
}
