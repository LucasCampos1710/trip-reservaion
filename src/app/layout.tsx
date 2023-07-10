import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { NextAuthProvider } from './providers/auth';

const poppins = Poppins({ subsets: ['latin'], weight: [
  '400',
  '500',
  '600',
  '700',
  '800',
  '900'
] })

export const metadata: Metadata = {
  title: 'Trips Reservation',
  description: 'Sistema de Reserva de Viagens',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
