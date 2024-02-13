import './globals.css'
import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page '
}

function MainLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Leeds RAG Fashion Show Anonymous Confessions</title>
        <meta name='description' content='LRAG Anonymous Confessions' />
      </head>

      <body className={GeistSans.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <main className='min-h-screen'>
              <AtomicState>
                <FetchConfig baseUrl='/api'>
                  <Navbar />
                  <div className='max-w-7xl mx-auto p-4'>{children}</div>
                </FetchConfig>
              </AtomicState>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default MainLayout
