import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Skooli - Transforming Education Logistics Across Africa',
    template: '%s | Skooli'
  },
  description: 'Ethically. Efficiently. Faithfully. Skooli revolutionizes education logistics across Africa, connecting schools with essential supplies while driving sustainable impact.',
  keywords: ['education', 'logistics', 'africa', 'uganda', 'school supplies', 'AI', 'technology', 'impact'],
  authors: [{ name: 'Skooli Team' }],
  creator: 'Skooli',
  publisher: 'Skooli',
  metadataBase: new URL('https://skooli.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skooli.com',
    title: 'Skooli - Transforming Education Logistics Across Africa',
    description: 'Ethically. Efficiently. Faithfully. Skooli revolutionizes education logistics across Africa, connecting schools with essential supplies while driving sustainable impact.',
    siteName: 'Skooli',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Skooli - Transforming Education Logistics Across Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skooli - Transforming Education Logistics Across Africa',
    description: 'Ethically. Efficiently. Faithfully. Skooli revolutionizes education logistics across Africa.',
    images: ['/images/twitter-image.jpg'],
    creator: '@skooli',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0F4C81" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}