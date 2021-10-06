import { AppProps } from 'next/app'

import '../styles/global.scss'
import 'animate.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
