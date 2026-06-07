import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PerfectTravelShot — Never Miss The Perfect Travel Photo Again',
  description:
    'PerfectTravelShot helps travelers discover amazing photo opportunities around them and generate stunning travel photos using AI.',
  keywords: [
    'travel photography',
    'AI travel photos',
    'photo opportunities',
    'travel memories',
    'AI photographer',
  ],
  openGraph: {
    title: 'PerfectTravelShot — Never Miss The Perfect Travel Photo Again',
    description:
      'Discover amazing photo opportunities and generate beautiful travel memories using AI.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#28211a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
