import Footer from './components/Footer';
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

import { Satisfy } from 'next/font/google';

const shadow = Satisfy({
  weight: '400',
  subsets: ['latin'],
});

const inter = Inter({ 
  subsets: ['latin'],
 })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${shadow.className}`}>
      <Navbar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
