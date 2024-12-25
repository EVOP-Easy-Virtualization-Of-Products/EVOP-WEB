import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar/Navbar'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-plus-jakarta text-white min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

