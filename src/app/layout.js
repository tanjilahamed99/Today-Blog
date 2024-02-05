import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/components/Hooks/AuthProvider'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todays Blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html className='container mx-auto' lang="en">
        <head>
          
          <Script
            id="adsbygoogle-init"
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9673111961225622"
          />


          
          {/* <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            strategy="afterInteractive"
          /> */}

        </head>
        <body className={inter.className}>
          {children}
        </body>
      </html >
    </AuthProvider >
  )
}



