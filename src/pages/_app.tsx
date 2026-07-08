import type { AppProps } from 'next/app'
import { StripeProvider } from '@/context/StripeContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StripeProvider>
      <Component {...pageProps} />
    </StripeProvider>
  )
}
