import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import './globals.css'


export const metadata: Metadata = {
  title: 'BABYTUBE - VIIH TUBE',
  description: 'PROMOÇÃO PRÉ BLACK FRIDAY', 
  icons:"/baby.webp",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            {children}
            <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
  )
}