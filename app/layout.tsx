import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NavBar from './components/Navbar'

const font = Poppins({ subsets: ['latin'],weight:['300'] })

export const metadata: Metadata = {
  title: 'Muhammad Irfan Fajru Ramadhan',
  description: "Build server-side logic and database architecture that powers web and mobile applications, ensuring they function smoothly and securely.Experienced with programming languages like PHP, JavaScript, Python, Golang, and Java. Collaborate closely with front-end developers to create cohesive and efficient software solutions.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
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
