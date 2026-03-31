import type { Metadata } from 'next'
import Link from 'next/link'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.scss'

const outfit = localFont({
  src: '../public/fonts/Outfit/Outfit-VariableFont_wght.ttf',
  variable: '--font-sans',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Bryon Urbanec — UI/UX Designer & Developer',
  description: 'Portfolio of Bryon Urbanec, UI/UX Designer and Front-end Developer in Northern Colorado.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Link
          href="#content"
          className="skip-link"
        >
          Skip to Content
        </Link>
        <div className="main-canvas">
          <Header />
          <main id="content" tabIndex={-1}>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  )
}
