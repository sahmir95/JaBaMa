import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'جاباما: اجاره ویلا، سوئیت و اقامتگاه | شمال و سراسر ایران',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      {children}

      </body>
    </html>
  )
}
