import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Winnie's Personal Website",
  description: 'Created with Hack4Impact',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        
        <main>
        {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  )
}
