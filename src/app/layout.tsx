import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout'
import { ScrollLock } from '@/components/layout/ScrollLock'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ramandhanu.cloud'),
  title: 'DevOps Engineer & Cloud Architect | ramandhanu.cloud',
  description: '15+ years infrastructure experience. 8+ years DevOps & Cloud engineering. Specializing in Kubernetes, Terraform, CI/CD, and cloud architecture.',
  keywords: ['DevOps', 'Cloud Architect', 'Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Infrastructure'],
  authors: [{ name: 'ramandhanu' }],
  openGraph: {
    title: 'DevOps Engineer & Cloud Architect',
    description: 'Building robust infrastructure and automating everything.',
    url: 'https://ramandhanu.cloud',
    siteName: 'ramandhanu.cloud',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollLock />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
