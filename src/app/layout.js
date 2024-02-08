import { Inter } from 'next/font/google'
import BootstrapClient from '@/components/common/BootstrapClient'
import ScrollTop from '@/components/common/ScrollTop'
import Hotjar from '@hotjar/browser'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Git Startup',
  description: 'technical support for your business idea',
} 

// to initialize hotjar services
const siteId = 3858905
const hotjarVersion = 6

Hotjar.init(siteId, hotjarVersion)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <div className="main-page-wrapper">
          {children}
          <ScrollTop />
          <BootstrapClient />
        </div>
      </body>
    </html>
  )
}