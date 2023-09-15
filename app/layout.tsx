import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from './components/Navbar'

const font = Poppins({ subsets: ['latin'],weight:['300'] })

export const metadata: Metadata = {
  title: 'Muhammad Irfan Fajru Ramadhan',
  description: 'Muhammad Irfan Fajru Ramadhan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={font.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
