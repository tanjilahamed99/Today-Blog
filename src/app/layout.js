import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/Hooks/AuthProvider'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todays Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html className='container mx-auto' lang="en">
          <body className={inter.className}>
            {children}
          </body>
      </html >
    </AuthProvider>
  )
}
