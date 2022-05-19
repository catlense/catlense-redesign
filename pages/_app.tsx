import NextNprogress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {

  const defaultState = {
    openBackcall: false
  }

  const reducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
      case 'backcallForm':
        return { ...state, openBackcall: action.payload }

      default:
        return state
    }
  }

  const store = createStore(reducer)

  return (
    <>
      <NextNprogress
        color="#ff5252"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp