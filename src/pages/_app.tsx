import '../fonts.css'

import {AppProps} from 'next/app'
import { GlobalStyle } from 'utils/global';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
