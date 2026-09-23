import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Has Nain — Full Stack & AI Developer',
  description: 'Portfolio of Has Nain — Full Stack Developer, AI Developer and GIAIC student.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
