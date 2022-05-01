import NextNprogress from 'nextjs-progressbar'
import type {AppProps} from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps } : AppProps) {
  return(
    <>
      <NextNprogress 
        color="#ff5252"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp